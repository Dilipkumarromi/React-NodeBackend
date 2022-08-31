const db=require('../Config/dbConnection')
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
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile
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
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile
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