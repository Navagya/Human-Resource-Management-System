import Leave from '../models/Leave.js';

export const applyLeave = async(req,res)=>{
    try{
        const {leaveType,fromDate,toDate,reason}=req.body;
        const newLeave=new Leave({
            employeeId:req.user.id,
            leaveType,
            fromDate,
            toDate,
            reason
        });

        await newLeave.save();

        res.status(201).json({message:"Leave applied successfully",newLeave});

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

//Get all leave requests(Admin)
export const viewAllLeaves = async (req, res) => {
  try {
    let leaves;

    if (req.user.role === "admin") {
      leaves = await Leave.find()
        .populate("employeeId", "name email");
    } else {
      leaves = await Leave.find({ employeeId: req.user.id })
        .populate("employeeId", "name email");
    }

    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//Get employee's leave
export const getMyLeaves= async(req,res)=>{
    console.log("/api/leave/me route is callled")
    try{
        const leaves=await Leave.find({employeeId:req.user.id});
        res.json(leaves);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
export const updateLeaveStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    // 🔐 Block self-approval
    if (leave.employeeId.toString() === req.user.id) {
      return res.status(403).json({
        message: "You cannot approve or reject your own leave request"
      });
    }

    leave.status = status;
    await leave.save();

    res.status(200).json({
      message: `Leave request ${status} successfully`,
      leave
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

