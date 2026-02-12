import React , {useEffect,useState} from "react";
import axios from "axios";
import Layout from "../components/Layout";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

const BASE_URL = import.meta.env.VITE_API_URL;

function Employees(){
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    //fetch all employees from backend
   const fetchEmployees = async () => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}/api/employees`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setEmployees(res.data);
    } catch (err) {
        console.error("Error fetching employees:", err);
    }
};

    useEffect(()=>{
        fetchEmployees();
    },[]); //fetches only once when component mounts;

    return (
       <Layout>
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
       </Layout>
    );

}

export default Employees;