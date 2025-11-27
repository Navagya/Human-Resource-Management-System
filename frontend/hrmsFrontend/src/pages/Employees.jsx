import React , {useEffect,useState} from "react";
import axios from "axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import Sidebar from "../components/Sidebar";

function Employees(){
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    //fetch all employees from backend
   const fetchEmployees = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/employees");
        setEmployees(res.data);
    } catch (err) {
        console.error("Error fetching employees:", err);
    }
};

    useEffect(()=>{
        fetchEmployees();
    },[]); //fetches only once when component mounts;

    return (
        <div className ="flex bg-zinc-900 h-screen text-white">
            <Sidebar />

            <div className="flex-1 p-8 space-y-8">
                <h2 className="text-3xl font-bold mb-4">Employee Management</h2>

                <EmployeeForm
                fetchEmployees={fetchEmployees}
                editingEmployee={editingEmployee}
                setEditingEmployee={setEditingEmployee}
                />

                <div className="bg-zinc-800 p-4 rounded-lg shadow">
                    <EmployeeTable
                    employees={employees}
                    fetchEmployees={fetchEmployees}
                    setEditingEmployee={setEditingEmployee}
                />
                </div>          
            </div>

        </div>

    );

}

export default Employees;