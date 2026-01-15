import React , {useEffect,useState} from "react";
import axios from "axios";

function EmployeeForm({fetchEmployees, editingEmployee, setEditingEmployee}){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        department:"",
        salary:""
    });

    //prefill form when editingEmployee changes
    useEffect(()=>{
        if(editingEmployee){
            setFormData(editingEmployee);
        }
    },[editingEmployee]);

    const handleChange  = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const token = localStorage.getItem("token");
            if(editingEmployee){
                //update exisiting employee
                await axios.put(
                    `http://localhost:5000/api/employees/${editingEmployee._id}`,
                    formData,
                    {
                        headers:{
                            Authorization:`Bearer ${token}`,
                        },
                    }
                );
                setEditingEmployee(null);

            }else{
                //create new employee
                await axios.post(
                    "http://localhost:5000/api/employees",
                    formData,
                    {
                        headers:{
                            Authorization:`Bearer ${token}`,
                        },
                    }
                );
            }
            setFormData({name: "", email: "", department: "", salary: ""});
            fetchEmployees();

        }catch(err){
            console.error("Error saving employee",err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-zinc-800 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                
                <input 
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 rounded bg-zinc-700"
                value={formData.name}
                onChange={handleChange} 
                />

                <input 
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded bg-zinc-700"
                value={formData.email}
                onChange={handleChange} 
                />

                <input 
                type="text"
                name="department"
                placeholder="Department"
                className="p-2 rounded bg-zinc-700"
                value={formData.department}
                onChange={handleChange} 
                />

                <input 
                type="number"
                name="salary"
                placeholder="Salary"
                className="p-2 rounded bg-zinc-700"
                value={formData.salary}
                onChange={handleChange} 
                />
            </div>

            <button
                type="submit"
                className="mt-4 bg-green-600 px-4 py-2 rounded hover:bg-green-500"
                >
                {editingEmployee?"Update Employee":"Add Employee"}
            </button>  
        </form>
    );
}

export default EmployeeForm;