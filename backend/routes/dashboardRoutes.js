import express from "express";
import adminMiddleware  from "../middleware/adminMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router=express.Router();

router.get("/admin",authMiddleware,adminMiddleware,(req,res)=>{
    res.status(200).json({message:`Welcome Admin ${req.user.id}`});
});

export default router;