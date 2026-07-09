import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

const BASE_URL = import.meta.env.VITE_API_URL;

function RequestLeavePage() {
  const [reason, setReason] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [loading, setLoading] = useState(false);

  const submitLeave = async (e) => {
    e.preventDefault();

    if (!leaveType || !reason || !fromDate || !toDate) {
      return alert("Please fill all fields.");
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        `${BASE_URL}/api/leaves/apply`,
        {
          leaveType,
          reason,
          fromDate,
          toDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Leave Request Submitted Successfully!");

      setLeaveType("");
      setReason("");
      setFromDate("");
      setToDate("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to request leave.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-white">
          Request Leave
        </h1>

        <p className="text-gray-400 mt-2 mb-8">
          Fill out the form below to submit your leave request.
        </p>

        <form onSubmit={submitLeave} className="space-y-6">

          {/* Leave Type */}

          <div>

            <label className="block mb-2 font-medium">
              Leave Type
            </label>

            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Leave Type</option>
              <option value="Sick">Sick Leave</option>
              <option value="Casual">Casual Leave</option>
              <option value="Paid">Paid Leave</option>
            </select>

          </div>

          {/* Reason */}

          <div>

            <label className="block mb-2 font-medium">
              Reason
            </label>

            <textarea
              rows="5"
              placeholder="Write the reason for your leave..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Dates */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                From Date
              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                To Date
              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          {/* Button */}

          <div className="pt-2">

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              <FaPaperPlane />

              {loading ? "Submitting..." : "Submit Leave Request"}

            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default RequestLeavePage;