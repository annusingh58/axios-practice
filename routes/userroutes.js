import express from "express";
import { login, register, renderegister, renderlogin } from "../controllers/usercontrollers.js";
import { checklogin, checkregister } from "../middleware/auth.js";
import { get_movies, renderhome } from "../controllers/moviecontroller.js";


const router =express.Router();


router.get("/register",renderegister);
router.post("/register",checkregister,register);

router.get("/login",renderlogin);
router.post("/login",checklogin,login);

router.get("/home",renderhome);
router.get("/getmovies",get_movies)




export default router;