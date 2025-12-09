import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
    companyName:{
        type:String,
        default:"",
    },
    adminName:{
        type:String,
        default:"",
    },
    theme:{
        type:String,
        enum:["light","dark"],
        default:"light",
    },
});

export default mongoose.model("Settings",SettingsSchema);