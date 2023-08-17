import axios from "axios";
import path from "path";

const __dirname=path.resolve();


export const renderhome=async(req,res)=>{
    try {
        return res.sendFile(__dirname + '/public/html/home.html');
        
    } catch (error) {
        return res.send(500) .json({status:500,message :error});

    }
}



export const get_movies=async(req,res)=>{
    try {
        const Api_key ='c45a857c193f6302f2b5061c3b85e743';
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US
        `);
        const result=response.data;

        return res.status(200).json(result);

    } catch (error) {
        return res.status(400).json({status:400,message:"internal server error"})
    }
}