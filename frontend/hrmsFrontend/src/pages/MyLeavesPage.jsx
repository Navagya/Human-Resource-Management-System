import React, {useState,useEffect} from "react";
import axios from "axios";

//rfce

function MyLeavesPage() {

    const [leaves,setLeaves] = useState([]);
    const token=localStorage.getItem("token");

    useEffect(()=>{
        fetchLeaves();
    },[]);

    const fetchLeaves=async()=>{
        try{
            const res= await axios.get("http://localhost:5000/api/leaves/me",{
                headers:{Authorization:`Bearer ${token}`},
            });
            setLeaves(res.data);
        }catch(err){
            console.error(err);
            alert("failed to load your Leaves");
        }
    };

  return (
    <div className = "p-6 text-black">
        
        <h2 className="text-2xl font-semibold mb-4">My Leaves</h2>
        {
            leaves.length===0 ? (
            <p>No leaves requested yet.</p>
        ):(
            <div className="space-y-3">
                {leaves.map((l)=>(
                    <div key={l._id} className="bg-pink-800 p-3 rounded">
                        <p><b>Reason:</b>{l.reason}</p>
                        <p><b>From:</b> {new Date(l.fromDate).toLocaleDateString()}</p>
                        <p><b>To:</b>{new Date(l.toDate).toLocaleDateString()}</p>
                        <p><b>Status:</b> <span className= {l.status==="Pending" ? "text-yellow-300":l.status==="Approved"?"text-green-400":"text-red-400"}>{l.status}</span></p>
                    </div>
                ))}
            </div>
        )
        }
    </div>
  );
}

export default MyLeavesPage;