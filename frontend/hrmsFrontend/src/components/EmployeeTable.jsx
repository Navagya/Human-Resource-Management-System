import React from "react";
import axios from "axios";

function EmployeeTable({employees, fetchEmployees, setEditingEmployee}){
    const handleDelete = async(id)=>{

        try{
            const token = localStorage.getItem("token");
            await axios.delete(
                `http://localhost:5000/api/employees/${id}`,
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                }
            );
            fetchEmployees();

        }catch(err){
            console.log("Error deleting employee",err);
        }
    };

    return (
        <table className="w-full bg-zinc-800 rounded-lg text-left">
            <thead>
                <tr className="border-b border-zinc-700">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Department</th>
                    <th className="p-3">Salary</th>
                    <th className="p-3">Actions</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((emp)=>(
                    <tr key={emp._id} className="border-b border-zinc-700">
                     <td className="p-3">{emp.name}</td>
                     <td className="p-3">{emp.email}</td>
                     <td className="p-3">{emp.department}</td>
                     <td className="p-3">{emp.salary}</td>
                     <td className="p-3 space-x-2">
                        <button
                        onClick={()=>setEditingEmployee(emp)}
                        className="bg-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-500"
                        >
                            Edit
                        </button>
                        <button
                        onClick={()=>handleDelete(emp._id)}
                        className="bg-red-600 px-3 py-1 rounded text-xs hover:bg-red-500"
                        >
                            Delete
                        </button>
                    </td>
                    </tr>

                ))}
                
            </tbody>
        </table>
    );
}

export default EmployeeTable