import express from "express";
import { login, register, renderegister, renderlogin } from "../controllers/usercontrollers.js";
import { checklogin, checkregister } from "../middleware/auth.js";


const router =express.Router();


router.get("/register",renderegister);
router.post("/register",checkregister,register);

router.get("/login",renderlogin);
router.post("/login",checklogin,login);





export default router;