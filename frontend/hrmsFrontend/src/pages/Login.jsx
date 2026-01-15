import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(){
    const [email, setEmail] =useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{

        e.preventDefault();

        try{

            const res = await axios.post("http://localhost:5000/api/auth/login",{
                email,
                password,
            });

            localStorage.setItem("token",res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            
            console.log("Login Successful");
            
            const user = res.data.user;

            if (user?.role === "admin") {
                   navigate("/admin");
            } else {
                  navigate("/employee");
            }

        }catch(err){
            alert("Invalid credentials!");
            console.log(err);
        }
    };

    return (
        <div className ="h-screen flex justify-center items-center bg-zinc-900 text-white">
            <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg shadow-md w-80">
                <h2 className = "text-2xl font-bold mb-4 text-center">Login</h2>
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
                <button type="submit" className="w-full p-2 bg-green-600 rounded hover:bg-green-500">
                    Login
                </button>

                <p className = "text-sm mt-4 text-center">
                    Dont't have an account?{" "}
                    <span
                    onClick={()=>navigate("/register")}
                    className="text-green-400 cursor-pointer"
                    >
                        Register
                    </span>
                </p>
            </form>
        </div>

    );

}

export default Login;