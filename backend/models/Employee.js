import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    // optional fields
    department: { type: String },
    position: { type: String },
    phone: { type: String },
    salary: { type: Number },
    dateOfJoining: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
