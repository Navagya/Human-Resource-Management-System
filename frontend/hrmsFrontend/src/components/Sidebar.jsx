import React from "react";
import {Link} from "react-router-dom";
import {FaUser, FaBuilding,FaMoneyBill, FaCalendarAlt, FaCog} from "react-icons/fa";

function Sidebar(){
    return (
        <div className = "w-64 h-full bg-zinc-800 text-white flex flex-col p-5">
            <h2 className ="text-2xl font-semibold mb-8 text-center">HRMS</h2>

            <ul className="space-y-4">

              <Link to = "/employees">
                <li className ="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                    <FaUser/>Employees
                </li>
               </Link>

               <Link to = "/department">
                <li className ="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                    <FaBuilding /> Departments
                </li>
                </Link>

                <Link to = "/salary">
                <li className ="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                    <FaMoneyBill/> Salaries 
                </li>
                </Link>
                
                <Link to = "/leave/manage">
                <li className ="flex items-center gap-3 hover:text-green-400 cursor-pointer"> 
                    <FaCalendarAlt /> Leaves
                </li>
                </Link>

                <Link to = "/settings">
                <li className ="flex items-center gap-3 hover:text-green-400 cursor-pointer"> 
                    <FaCog /> Settings
                </li>
                </Link>

            </ul>
        </div>
    );
}

export default Sidebar;