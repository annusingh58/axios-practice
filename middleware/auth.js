import bcrypt from "bcrypt";
import USER from "../model/user.js";

export const checkregister=async(req,res,next)=>{
    try {
        const {username,email,password,number}=req.body;
        if(!username)return res.status(400).json({status:400,message:"username is required"});
        if(!email)return res.status(400).json({status:400,message:"email is required"});
        if(!password)return res.status(400).json({status:400,message:"password is required"});
        if(!number)return res.status(400).json({status:400,message:"number is required"});
        next();

    } catch (error) {
        return res.status(500).json({status:500,message:"error"});
        
    }
}




export const checklogin=async(req,res,next)=>{
    try {
        const {email,password}=req.body;
    if(!email)return res.status(400).json({status:400,message:"email is required"});
    if(!password)return res.status(400).json({status:400,message:"password is required"});

    const response =await USER.findOne({email}).exec();
    if(!response)return res.status(400).json({status:400,messagre:"email is not exit"});

    const ispasstrue = await  bcrypt.compare(password,response.password);

    if(ispasstrue){
        next();
        
    } 
    else{
        return res.status(400).json({status:400,message:"incorrect password "});
    }
}

    catch (error) {
       return res.status(500).json({status:500,message:error})
    }
    

}