import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Employee from "../models/Employee.js";


export const registration = async (req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        const existingUser =await User.findOne({email});

        //if existing user
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newuser = new User({
            name,
            email,
            password:hashedPassword,
            role
        });
        
        await newuser.save();

        const employee=new Employee({
            name,
            email
        });

        await employee.save();

        res.status(201).json({message:"User registered successfully"});

    }catch(error){
         res.status(500).json({message:error.message});
    }
};

export const login =async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user =await User.findOne({email});

        if(!user) return res.status(400).json({message:"Invalid credentials"});

        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid password"});

        //fetch employee record
        const employee =await Employee.findOne({email});
        if(!employee) return res.status(400).json({message:"Employee profile missing"});

        const token = jwt.sign(
            {id:employee._id,
               role:user.role 
            },
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );

        res.status(200).json({
            message:"Login successful",
            token,
            user:{
                id:employee._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        });
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}