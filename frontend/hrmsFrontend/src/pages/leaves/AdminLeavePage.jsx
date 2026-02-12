import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Layout from "../../components/Layout";
const BASE_URL = import.meta.env.VITE_API_URL;
function AdminLeavePage() {
  const [leaves, setLeaves] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/leaves/view`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLeaves(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch the Leaves");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `${BASE_URL}/api/leaves/update/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchLeaves(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  return (
    <Layout>
        <h2 className="text-2xl font-semibold mb-4">All Leave Requests</h2>

            {leaves.length === 0 ? (
          <p>No leaves found.</p>
             ) : (
          <div className="space-y-3">
            {leaves.map((l) => (
              <div key={l._id} className="bg-zinc-800 p-4 rounded">
                
                <p><b>Employee:</b> {l.employeeId?.name} ({l.employeeId?.email})</p>
                <p><b>Reason:</b> {l.reason}</p>
                <p><b>From:</b> {new Date(l.fromDate).toLocaleDateString()}</p>
                <p><b>To:</b> {new Date(l.toDate).toLocaleDateString()}</p>

                <p>
                  <b>Status:</b>{" "}
                  <span
                    className={
                      l.status === "Pending"
                        ? "text-yellow-300"
                        : l.status === "Approved"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {l.status}
                  </span>
                </p>

                <div className="mt-3 flex gap-3">
                  {l.status !== "Approved" && (
                    <button
                      className="bg-green-500 px-3 py-1 rounded"
                      onClick={() => updateStatus(l._id, "Approved")}
                    >
                      Approve
                    </button>
                  )}

                  {l.status !== "Rejected" && (
                    <button
                      className="bg-red-500 px-3 py-1 rounded"
                      onClick={() => updateStatus(l._id, "Rejected")}
                    >
                      Reject
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
            )}
    </Layout>
  );
}

export default AdminLeavePage;
