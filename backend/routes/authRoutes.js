import express from "express";
import {registration,login} from "../controllers/authController.js";

const router = express.Router();

//Register route

router.post("/register",registration);

//Login route

router.post("/login",login);

export default router;


