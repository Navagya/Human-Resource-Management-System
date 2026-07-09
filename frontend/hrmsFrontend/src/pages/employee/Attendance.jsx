import React from "react";
import {
  FaCalendarCheck,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

function Attendance() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-3xl font-bold mb-8">
        Attendance
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <FaCalendarCheck className="text-green-400 text-3xl mb-4" />
          <h2 className="text-gray-400">Present Days</h2>
          <p className="text-3xl font-bold mt-2">22</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <FaClock className="text-blue-400 text-3xl mb-4" />
          <h2 className="text-gray-400">Working Hours</h2>
          <p className="text-3xl font-bold mt-2">168 hrs</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <FaCheckCircle className="text-purple-400 text-3xl mb-4" />
          <h2 className="text-gray-400">Attendance</h2>
          <p className="text-3xl font-bold mt-2">95%</p>
        </div>

      </div>

      {/* Today's Attendance */}

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg mb-8">

        <h2 className="text-xl font-semibold mb-4">
          Today's Attendance
        </h2>

        <div className="flex flex-wrap gap-4">

          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition">
            Check In
          </button>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition">
            Check Out
          </button>

        </div>

        <p className="text-gray-400 mt-4">
          Current Status:
          <span className="text-green-400 font-semibold ml-2">
            Present
          </span>
        </p>

      </div>

      {/* Attendance History */}

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

        <h2 className="text-xl font-semibold mb-5">
          Attendance History
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-gray-400">

              <th className="py-3 text-left">Date</th>
              <th className="text-left">Check In</th>
              <th className="text-left">Check Out</th>
              <th className="text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-slate-800 hover:bg-slate-800">
              <td className="py-4">03 Jul 2026</td>
              <td>09:05 AM</td>
              <td>06:10 PM</td>
              <td className="text-green-400">Present</td>
            </tr>

            <tr className="border-b border-slate-800 hover:bg-slate-800">
              <td className="py-4">02 Jul 2026</td>
              <td>09:00 AM</td>
              <td>06:00 PM</td>
              <td className="text-green-400">Present</td>
            </tr>

            <tr className="hover:bg-slate-800">
              <td className="py-4">01 Jul 2026</td>
              <td>-</td>
              <td>-</td>
              <td className="text-red-400">Absent</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Attendance;