import React , {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register(){
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role,setRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/api/auth/register",{
                name,
                email,
                password,
                role
            });

            alert("registration successfull!");
            navigate("/login");

        }catch(err){

            alert("registration failed! ");
            console.log(err);

        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-zinc-900 text-white">
            <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Registration</h2>
                
                <input 
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-4 rounded bg-zinc-700 outline-none"
                value={name}
                onChange={(e)=>setName(e.target.value)} 
                />

                <input 
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 rounded bg-zinc-700 outline-none"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 />

                <input 
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 rounded bg-zinc-700 outline-none"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <select className="w-full p-2 mb-4 rounded bg-zinc-700 outline-none"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                >
                    <option value="" disabled > Select Role</option>
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                </select>

                <button type = "submit" className="w-full p-2 bg-blue-600 rounded hover:bg-blue-500">
                    Register
                </button>
                <p className="text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <span
                        onClick={()=>navigate("/login")}
                        className = "text-blue-400 cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register;