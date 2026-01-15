import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const role = user?.role; // admin | employee

  return (
    <div className="w-48 h-screen bg-zinc-800 text-white flex flex-col p-5">
      <h2 className="text-2xl font-semibold mb-8 text-center mt-4">HRMS</h2>

      <ul className="space-y-5">

        {/* ===== EMPLOYEE MODULES ===== */}
        {role === "employee" && (
          <>
            <Link to="/profile">
              <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                <FaIdBadge /> My Profile
              </li>
            </Link>

            <Link to="/attendance">
              <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                <FaClock /> Attendance
              </li>
            </Link>

            <Link to="/payslips">
              <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                <FaFileInvoice /> Payslips
              </li>
            </Link>
          </>
        )}

        {/* ===== ADMIN MODULES ===== */}
        {role === "admin" && (
          <>
            <Link to="/employees">
              <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                <FaUser /> Employees
              </li>
            </Link>

            <Link to="/department">
              <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                <FaBuilding /> Departments
              </li>
            </Link>

            <Link to="/salary">
              <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
                <FaMoneyBill /> Salaries
              </li>
            </Link>
          </>
        )}

        {/* ===== LEAVES ===== */}
        <li>
          <div
            className="flex items-center justify-between cursor-pointer hover:text-green-400"
            onClick={() => setLeaveOpen(!leaveOpen)}
          >
            <div className="flex items-center gap-3">
              <FaCalendarAlt /> Leaves
            </div>
            {leaveOpen ? <FaChevronDown /> : <FaChevronRight />}
          </div>

          {leaveOpen && (
            <ul className="ml-7 mt-3 space-y-3 text-sm">
              {role === "employee" && (
                <>
                  <Link to="/leave/apply">
                    <li className="hover:text-green-400 cursor-pointer">
                      Apply Leave
                    </li>
                  </Link>

                  <Link to="/leave/my-leaves">
                    <li className="hover:text-green-400 cursor-pointer">
                      My Leaves
                    </li>
                  </Link>
                </>
              )}

              {role === "admin" && (
                <>
                  <Link to="/leave">
                    <li className="hover:text-green-400 cursor-pointer">
                      Leave Overview
                    </li>
                  </Link>

                  <Link to="/leave/approve">
                    <li className="hover:text-green-400 cursor-pointer">
                      Approve Leaves
                    </li>
                  </Link>
                </>
              )}
            </ul>
          )}
        </li>

        {/* ===== SETTINGS ===== */}
        <Link to="/settings">
          <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <FaCog /> Settings
          </li>
        </Link>

      </ul>

    </div>
  );
}

export default Sidebar;
