import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaBuilding,
  FaMoneyBill,
  FaCalendarAlt,
  FaCog,
  FaChevronDown,
  FaChevronRight,
  FaIdBadge,
  FaClock,
  FaFileInvoice,
} from "react-icons/fa";

function Sidebar() {
  const [leaveOpen, setLeaveOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="px-6 py-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-500">HRMS</h1>
        <p className="text-sm text-gray-400 mt-1">
          Human Resource Management
        </p>
      </div>

      {/* Menu */}

      <div className="flex-1 px-4 py-6 overflow-y-auto">

        <ul className="space-y-2">

          {role === "employee" && (
            <>
              <NavLink to="/profile" className={menuClass}>
                <FaIdBadge />
                My Profile
              </NavLink>

              <NavLink to="/attendance" className={menuClass}>
                <FaClock />
                Attendance
              </NavLink>

              <NavLink to="/payslips" className={menuClass}>
                <FaFileInvoice />
                Payslips
              </NavLink>
            </>
          )}

          {role === "admin" && (
            <>
              <NavLink to="/employees" className={menuClass}>
                <FaUser />
                Employees
              </NavLink>

              <NavLink to="/department" className={menuClass}>
                <FaBuilding />
                Departments
              </NavLink>

              <NavLink to="/salary" className={menuClass}>
                <FaMoneyBill />
                Salaries
              </NavLink>
            </>
          )}

          {/* Leave */}

          <li>

            <div
              onClick={() => setLeaveOpen(!leaveOpen)}
              className="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer text-gray-300 hover:bg-slate-800 hover:text-white transition"
            >
              <div className="flex items-center gap-3">
                <FaCalendarAlt />
                Leaves
              </div>

              {leaveOpen ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </div>

            {leaveOpen && (
              <ul className="mt-2 ml-6 space-y-2">

                {role === "employee" && (
                  <>
                    <NavLink
                      to="/leave/apply"
                      className="block text-gray-400 hover:text-blue-400"
                    >
                      Apply Leave
                    </NavLink>

                    <NavLink
                      to="/leave/my-leaves"
                      className="block text-gray-400 hover:text-blue-400"
                    >
                      My Leaves
                    </NavLink>
                  </>
                )}

                {role === "admin" && (
                  <>
                    <NavLink
                      to="/leave"
                      className="block text-gray-400 hover:text-blue-400"
                    >
                      Leave Overview
                    </NavLink>

                    <NavLink
                      to="/leave/approve"
                      className="block text-gray-400 hover:text-blue-400"
                    >
                      Approve Leaves
                    </NavLink>
                  </>
                )}

              </ul>
            )}

          </li>

          <NavLink to="/settings" className={menuClass}>
            <FaCog />
            Settings
          </NavLink>

        </ul>
      </div>

      {/* Footer */}

      <div className="p-5 border-t border-slate-800">

        <div className="bg-slate-800 rounded-xl p-3">

          <p className="text-sm text-white font-medium">
            {user?.name}
          </p>

          <p className="text-xs text-gray-400 capitalize">
            {role}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;