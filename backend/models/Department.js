import mongoose from 'mongoose';
const departmentSchema =new mongoose.Schema({
    name:{type:String,
        required:true,
        unique:true
    },
    description:{type:String},
    createdAt:{type:Date,
        default:Date.now
    },
});

const Department = mongoose.model('department',departmentSchema);

export default Department;