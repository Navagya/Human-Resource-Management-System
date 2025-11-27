import mongoose from "mongoose";

const salarySchema = new mongoose.Schema({
    employee : {
        type: mongoose.Schema.Types.ObjectId ,
        ref:"Employee",
        required:true,
    },
    basicPay:{
        type:Number,
        required:true,
    },
    allowances:{
        type:Number,
        default:0,
    },
    deductions: {
        type: Number,
        default: 0,
    },
    netPay:{
        type:Number,
    },
    payDate:{
        type:Date,
        default:Date.now,
    },
});


//calculate net pay before saving

salarySchema.pre("save",function (next) {
    this.netPay = this.basicPay + this.allowances - this.deductions;
    next();
});

const Salary = mongoose.model("Salary",salarySchema);

export default Salary;
