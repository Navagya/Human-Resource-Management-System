import React from "react";

function Topbar(){
    return (
        <div className="w-full h-16 bg-zinc-900 text-white flex justify-between items-center px-6 shadow-md">
            <h2 className="text-lg font-semibold">Admin Dashboard</h2>
            <div className="flex items-center gap-4">
                <p className="text-sm">Welcome, Admin! </p>
                <button className="px-3 py-1 bg-red-500 rounded-md hover:bg-red-600 text-sm">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Topbar;