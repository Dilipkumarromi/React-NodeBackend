const res = require('express/lib/response')
const db=require('../Config/dbConnection')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const MyDB=db.StudentRegistration

exports.getAllData=async(req,res)=>{
    
    const data=await MyDB.findAll()
    .then(result=>{
        res.send({
            status:200,
            message:'Fetch all Records Successfully',
            result:result
        })
        
    })
    .catch(e=>{
        res.send({
            status:404,
            message:`Not Found: ${e.message}`
        })
    })
}
exports.postRegi=async(req,res,next)=>{    
    const post=await{
        name:req.body.fname+" "+ req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile,      
        gender:req.body.gender,  
        city:req.body.city,  
        isActive:0 
    }
    console.log('postRegi',post);
    const data = await MyDB.create(post)
    .then(result=>{
        res.send({
            status:200,
            message:'Save Successfully',
            result:result
        })
       
    })
    .catch(e=>{
        res.send({
            status:404,
            message:`Note Saved: ${e.message}`
        })
    })
}
exports.studentUpdate = async(req,res)=>{
    const {id} =req.query
    
    const update={
        name:fname+" "+lastname,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile,      
        gender:req.body.gender,  
        city:req.body.city, 
        isActive:1 
    }
    const data=await MyDB.update(update,{where:{
        SubjectID:id
    }})
    .then(result=>{
        res.send({
            status:200,
            message:'Update Successfully',
            result:result
        })
    })
    .catch(e=>{
        res.send({
            status:404,
            message:`Note Saved: ${e.message}`
            
        })
    })
}
exports.selectDelete=async(req,res)=>{
    const {id} =req.query
    console.log(`Select Delete: ${id}`)
   const data=await MyDB.destroy({where:{
    SubjectID:id
   }})
   .then(result=>{
    res.send({
        status:200,
        message:'Delete Successfully',
        result:result
    })
   })
   .catch(err=>{
    res.send({
        status:200,
        message:`Delete Error ${err.message}`
    })
   })
}

exports.getfindByid=async(req,res)=>{
    const {id} =req.query
    console.log(`Select findByid: ${id}`)
   const data=await MyDB.findOne({where:{
    SubjectID:id
   }})
   .then(result=>{
    res.send({
        status:200,
        message:'Records fetch successfully',
        result:result
    })
   })
   .catch(err=>{
    res.send({
        status:200,
        message:`Not Found! ${err.message}`
    })
   })
}
exports.UserLogin=async(req,res)=>{
    const {email,password} =req.body

    const data = await MyDB.findOne({where: {email:email, password:password}})
    if(data){
        const jsonToken = jwt.sign({ id: data.id, email: data.name }, process.env.SECRET_KEY)
        res.send({
            status:true,
            message:'Login Successfully',
            result:data,
            token:jsonToken
        })
    }
    else{
        res.send({
            status:false,
            message:'Login failed invalid email or password'
            
        })
    }
}