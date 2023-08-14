import mongoose,{Schema} from "mongoose";

const user=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
});

export default mongoose.model("USER",user)
