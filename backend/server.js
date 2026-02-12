import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import dashboardRoutes from "./routes/dashboardRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";
import salaryRoutes from "./routes/salaryRoutes.js";
import settingsRoute from "./routes/settingsRoute.js";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());


app.use("/api/auth",authRoutes);
app.use("/api/dashboard",dashboardRoutes);
app.use("/api/employees",employeeRoutes);
app.use("/api/departments",departmentRoutes);
app.use("/api/leaves",leaveRoutes);
app.use("/api/salaries",salaryRoutes);
app.use("/api/settings",settingsRoute)

//basic route 

app.get("/api/test",(req,res)=>{
    res.send("Backend is working properly");
});

//mongodb connection

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDB connected successfully");
    }catch(error){
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
