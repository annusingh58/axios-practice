import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import session from "express-session";
import dotenv from "dotenv";

const app =express();
dotenv.config();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(session({
    secret:'axioSecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxage:4*60*60*1000
    }
}));
app.use("/axios",router);

mongoose.connect(process.env.MONGO)
.then(()=>console.log("db connected"))
.catch((err)=>console.log("error",err));

app.listen(process.env.PORT,()=>console.log(`working on port${process.env.PORT}`));


