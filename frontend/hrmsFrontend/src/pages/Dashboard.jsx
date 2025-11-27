import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar"

function Dashboard(){
    const token = localStorage.getItem("token");
    
    return (
        <div className="flex h-screen bg-zinc-900"> 
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Topbar />
            

            <div className="flex-1 text-white flex justify-center items-center text-2xl font-semibold">
                Welcome to HRMS Dashboard
            </div>
          </div>
        </div>
    );
}

export default Dashboard;