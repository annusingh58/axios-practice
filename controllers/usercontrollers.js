 import path from "path";
 import USER from "../model/user.js";
 import bcrypt from "bcrypt";


 const __dirname=path.resolve();

 export const renderegister= async(req,res)=>{
    try {
        return res.sendFile(__dirname +"/public/html/register.html");

    } catch (error) {
       return res.send(500) .json({status:500,message :error});
    }
 }


 export const register=async(req,res)=>{
    try {
        const{username,email,password,number} =req.body;
        const response =await USER.findOne({username}).exec();
         if(response)return res.status(400).json ({status:400,message:"user already registerd"});
        
         const hasPass = await bcrypt.hash(password,10);
         const newuser=new USER({
            username,
            email,
            password :hasPass,
            number
         });
         await newuser.save();
         return res.status(201).json({status:201,message:"user registered successfully"});

    } catch (error) {
        return res.status(500).json({status:500,message:error});
        
    }
 }


 export const renderlogin=async(req,res)=>{
    try {
        return res.sendFile(__dirname +"/public/html/login.html");

    } catch (error) {
       return res.send(500) .json({status:500,message:error});

    }}


   export const login = async(req,res)=>{
        try {
            const {username}=req.body;
            req.session.username=username;
            return res.status(200).json({status:200,message:"login sucessfully"});
            
        } catch (error) {
            return res.send(500) .json({status:500,message:error});

            
        }
    }
 