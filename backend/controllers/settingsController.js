import Settings from '../models/Settings.js';

//GET: fetch settings

export const getSettings = async (req,res)=>{
    try{

        let settings = await Settings.findOne();

        if(!settings){
            settings=new Settings();
            await settings.save();
        }

        res.json(settings);
    }catch(error){
        console.log("Error fetching settings:",error);
        res.status(500).json({error:"Internal Server Error"});
    }
};

//POST: Update settings
export const saveSettings = async(req,res)=>{
    try{
        let settings = await Settings.findOne();

        if(!settings){
            settings=new Settings(req.body);
        }else{
            settings.companyName = req.body.companyName||settings.companyName;
            settings.adminEmail = req.body.adminEmail || settings.adminEmail;
            settings.theme = req.body.theme || settings.theme;
        }

        await settings.save();
        res.json({message:"Settings updated successfully", settings});
    }catch(error){
        console.log("Error saving settings:",error);
        res.status(500).json({error:"Unable to save settings"});
    }
};