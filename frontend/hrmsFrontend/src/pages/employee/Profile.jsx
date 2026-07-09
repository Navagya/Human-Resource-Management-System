import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaMoneyBillWave,
  FaUserTag,
  FaCalendarAlt,
} from "react-icons/fa";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="bg-slate-900 rounded-2xl shadow-lg p-8">

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-700 pb-8">

          <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-5xl font-bold">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1">

            <h2 className="text-3xl font-bold">
              {user.name}
            </h2>

            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-600 text-sm">
              {user.role}
            </span>

            <p className="text-gray-400 mt-4 flex items-center gap-2">
              <FaEnvelope />
              {user.email}
            </p>

            <p className="text-gray-400 mt-2 flex items-center gap-2">
              <FaCalendarAlt />
              Joined HRMS
            </p>

          </div>
        </div>

        {/* Information Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-5">
              Personal Information
            </h3>

            <div className="space-y-4">

              <p className="flex justify-between">
                <span className="text-gray-400">Name</span>
                <span>{user.name}</span>
              </p>

              <p className="flex justify-between">
                <span className="text-gray-400">Email</span>
                <span>{user.email}</span>
              </p>

              <p className="flex justify-between">
                <span className="text-gray-400">Role</span>
                <span>{user.role}</span>
              </p>

            </div>

          </div>

          <div className="bg-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-5">
              Job Details
            </h3>

            <div className="space-y-4">

              <p className="flex justify-between">
                <span className="flex items-center gap-2 text-gray-400">
                  <FaMoneyBillWave />
                  Salary
                </span>

                <span>
                  ₹ {user.salary || "Not Assigned"}
                </span>
              </p>

              <p className="flex justify-between">
                <span className="flex items-center gap-2 text-gray-400">
                  <FaUserTag />
                  Department
                </span>

                <span>
                  {user.department || "Not Assigned"}
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* About */}

        <div className="bg-slate-800 rounded-xl p-6 mt-8">

          <h3 className="text-xl font-semibold mb-3">
            About
          </h3>

          <p className="text-gray-400">
            Welcome to the Human Resource Management System.
            Manage your profile, attendance, leaves and salary
            information from one place.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Profile;