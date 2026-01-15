//employee requests leave

import React , {useState} from "react";
import axios from "axios";

function RequestLeavePage(){
    const [reason, setReason] = useState("");
    const [leaveType, setLeaveType] = useState("");
    const[fromDate, setFromDate] = useState("");
    const [toDate,setToDate]=useState("");
    const [loading,setLoading]=useState(false);

    const submitLeave = async(e)=>{
        e.preventDefault();
        if(!leaveType||!reason||!fromDate||!toDate) return alert("please fill all fields");

        try{
            setLoading(true);
            const token = localStorage.getItem("token");
            const res = await axios.post(
                "http://localhost:5000/api/leaves/apply",
                { leaveType, reason, fromDate, toDate},
                {
                  headers:{Authorization:`Bearer ${token}`}
                }
            );
            alert("Leave requested!");
            //reset the fields
            setLeaveType("");
            setReason("");
            setFromDate("");
            setToDate("");
        }catch(err){
            console.error(err);
            alert(err.response?.data?.message||"Failed to request leave");
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="p-6 text-black">
            <h2 className="text-2xl font-semibold mb-4">Request Leave</h2>
            <form onSubmit={submitLeave} className="max-w-md space-y-3">

                <select
                   value={leaveType}
                   onChange={(e) => setLeaveType(e.target.value)}
                   className="w-full p-2 rounded text-black"
                   required
                >
                 <option value="">Select Leave Type</option>
                 <option value="Sick">Sick Leave</option>
                 <option value="Casual">Casual Leave</option>
                 <option value="Paid">Paid Leave</option>
                </select>

                <textarea
                placeholder="Reason"
                value={reason}
                onChange={(e)=>setReason(e.target.value)}
                className="w-full p-2 rounded text-black"
                rows={3}
                required                
                />
                <div className="flex gap-3">
                    <input 
                    type="date"
                    value={fromDate}
                    onChange={(e)=>setFromDate(e.target.value)}
                    className="p-2 rounded text-black"
                    required
                    />
                    <input 
                    type="date"
                    value={toDate} 
                    onChange={(e)=>setToDate(e.target.value)}
                    className="p-2 rounded text-black"
                    required
                    />
                </div>
                <button 
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded"
                disabled={loading}
                >
                    {loading ? "Submitting...":"Submit Leave"}
                </button>
            </form>
        </div>
    );
}

export default RequestLeavePage;