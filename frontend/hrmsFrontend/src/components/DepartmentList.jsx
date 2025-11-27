import React from "react";
import {FaTrash} from "react-icons/fa";

function DepartmentList({departments, onDelete}){
    return (
        <div className="bg-zinc-800 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Departments</h3>
            {departments.length===0?(
                <p>No departments added yet.</p>
            ):(
                <ul className="space-y-3">
                    {departments.map((dept)=>(
                        <li
                        key={dept._id}
                        className="flex justify-between items-center bg-zinc-700 p-2 rounded-md"
                        >
                            <span>{dept.name}</span>
                            <button
                            onClick={()=>onDelete(dept._id)}
                            className="text-red-500 hover:text-red-700"
                            >
                                <FaTrash/>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DepartmentList;