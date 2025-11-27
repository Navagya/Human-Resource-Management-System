import Department from "../models/Department.js";

//create a new department
export const createDepartment = async(req,res)=>{
    try {
    const { name, description } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Department name is required" });
    }

    // Check if department already exists
    const existing = await Department.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Department already exists" });
    }

    const newDept = new Department({ name, description });
    await newDept.save();

    res.status(201).json(newDept);
  }catch(error){
        res.status(500).json({message:error.message});
    }
};

//get all departments
export const getAllDepartments =async(req,res)=>{
    try{
        const departments = await Department.find();
        res.status(200).json(departments);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

////delete department (only admin)
export const deleteDepartment = async(req,res)=>{
    try{
        const deleted =await Department.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({message:"Department not found"});
        }
        res.status(200).json({message:"Department deleted successfully"});
            
    }catch(error){
        res.status(500).json({message:error.message});
    }
};


