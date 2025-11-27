import Salary from '../models/Salary.js';
import Employee from '../models/Employee.js';

//create salary record for an employee

export const createSalaryRecord = async (req,res)=>{
    try{
        const {employeeId , basicPay, allowances,deductions}=req.body;
        const employee = await Employee.findById(employeeId);
        if(!employee){
            return res.status(404).json({message:"Employee not found"});
        }
       
        //newSalary entry
        const newSalary = new Salary({
            employee:employeeId,
            basicPay,
            allowances,
            deductions,
        });

        await newSalary.save();

        res.status(201).json({message:"Salary record created successfully", salary:newSalary});
    }

    catch(error){
        res.status(500).json({message:error.message});
    }
};

//get all salary records

export const getAllSalaries = async (req,res)=>{
        try{
            const salaries = (await Salary.find().populate("employee","name email department")).sort({payDate:-1});
            res.status(200).json(salaries);
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
};