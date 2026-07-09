import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

const BASE_URL = import.meta.env.VITE_API_URL;

function MyLeavesPage() {
  const [leaves, setLeaves] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/leaves/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLeaves(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load your leaves.");
    }
  };

  const badgeColor = (status) => {
    if (status === "Approved")
      return "bg-green-500/20 text-green-400";

    if (status === "Rejected")
      return "bg-red-500/20 text-red-400";

    return "bg-yellow-500/20 text-yellow-400";
  };

  return (
    <Layout>

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              My Leaves
            </h1>

            <p className="text-gray-400 mt-1">
              View all your leave requests.
            </p>

          </div>

        </div>

        {leaves.length === 0 ? (

          <div className="bg-slate-900 rounded-xl p-10 text-center shadow-lg">

            <h2 className="text-2xl font-semibold">
              No Leave Requests
            </h2>

            <p className="text-gray-400 mt-3">
              You haven't applied for any leave yet.
            </p>

          </div>

        ) : (

          <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>

                  <th className="text-left p-4">Leave Type</th>

                  <th className="text-left p-4">Reason</th>

                  <th className="text-left p-4">From</th>

                  <th className="text-left p-4">To</th>

                  <th className="text-left p-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {leaves.map((leave) => (

                  <tr
                    key={leave._id}
                    className="border-b border-slate-800 hover:bg-slate-800 transition"
                  >

                    <td className="p-4">
                      {leave.leaveType}
                    </td>

                    <td className="p-4">
                      {leave.reason}
                    </td>

                    <td className="p-4">
                      {new Date(
                        leave.fromDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      {new Date(
                        leave.toDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                          leave.status
                        )}`}
                      >
                        {leave.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </Layout>
  );
}

export default MyLeavesPage;