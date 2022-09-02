const {verify}=require('jsonwebtoken')
require('dotenv').config()
// PassToke:  HeaderName:Authorization Toker:Bearer or Token
module.exports ={
    checkToken:(req,res,next) =>{
       
        let token = req.get('authorization');
        
        if(token){
            token = token.slice(7);
            verify(token, process.env.SECRET_KEY,(err, result) =>{
                if(err){
                    res.json({
                        success:"failed",
                        message:'Invalid Token'
                    });
                }
                else{
                    next();
                }
            })
        }
        else{
            res.json({
                success:"Failed",
                message:'Access denied! unauthorized user' 
            })     
        }
    }
}