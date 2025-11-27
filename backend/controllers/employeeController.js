import Employee from '../models/Employee.js';

// CREATE EMPLOYEE
export const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, department, salary } = req.body;

    // check if email exists
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists with this email" });
    }

    // create new employee (no number conversion)
    const newEmployee = new Employee({
      name,
      email,
      phone,
      department,  
      salary
    });

    await newEmployee.save();

    res.status(201).json({
      message: "Employee created successfully",
      newEmployee,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET ALL EMPLOYEES
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE EMPLOYEE
export const updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }   // returns updated doc
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE EMPLOYEE
export const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
