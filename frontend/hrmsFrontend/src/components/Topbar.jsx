import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="w-full h-16 bg-zinc-900 text-white flex justify-between items-center px-6 border-b border-zinc-800">
      {/* LEFT */}
      <h2 className="text-lg font-semibold">
        {role === "admin" ? "Admin Dashboard" : "Employee Dashboard"}
      </h2>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <p className="text-sm text-zinc-300">
          Welcome, <span className="font-medium text-white">{name}</span>
        </p>

        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-500 rounded-md hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;
