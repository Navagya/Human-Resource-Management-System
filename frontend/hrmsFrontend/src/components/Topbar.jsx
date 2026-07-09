import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaSignOutAlt } from "react-icons/fa";

function Topbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  const name = user?.name || "User";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="h-20 bg-slate-900 border-b border-slate-800 flex justify-between items-center px-8">

      <div>
        <h2 className="text-2xl font-bold text-white">
          {role === "admin"
            ? "Admin Dashboard"
            : "Employee Dashboard"}
        </h2>

        <p className="text-gray-400 text-sm">
          Welcome back dear {name} !
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button className="relative text-gray-300 hover:text-white">

          <FaBell size={20} />

          <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-2 h-2"></span>

        </button>

        <div className="text-right">

          <p className="text-white font-semibold">
            {name}
          </p>

          <p className="text-gray-400 text-sm capitalize">
            {role}
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-white"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Topbar;