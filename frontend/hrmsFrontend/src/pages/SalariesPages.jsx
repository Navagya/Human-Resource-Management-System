import React, { useState, useEffect } from "react";
import axios from "axios";
import AddSalaryForm from "../components/AddSalaryForm";
import SalaryList from "../components/SalaryList";
import Layout from "../components/Layout";

function SalariesPage() {
  const [salaries, setSalaries] = useState([]);
  const [employees, setEmployees] = useState([]);

  // Fetch salaries and employees on mount
  useEffect(() => {
    fetchSalaries();
    fetchEmployees();
  }, []);

  const token = localStorage.getItem("token"); // adjust if you store token elsewhere

  // GET /api/salaries (admin-only on backend)
  const fetchSalaries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/salaries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSalaries(res.data);
    } catch (err) {
      console.error("Error fetching salaries:", err);
      // optionally show a UI toast / error state
    }
  };

  // GET /api/employees (to populate employee dropdown)
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  // Add a newly created salary to state (called by form component)
  const handleAddSalary = (newSalary) => {
    // Prepend so newest appears at top
    setSalaries((prev) => [newSalary, ...prev]);
  };

  // Optionally implement delete
  const handleDeleteSalary = (id) => {
    setSalaries((prev) => prev.filter((s) => s._id !== id));
  };

  return (
     <Layout>
       <h2 className="text-2xl font-semibold mb-4">Salary Management</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Form */}
        <div className="bg-zinc-800 p-4 rounded-lg shadow-sm">
          <AddSalaryForm
            employees={employees}
            onAdded={handleAddSalary}
            token={token}
          />
        </div>

        {/* Right: Salary table */}
        <div className="bg-zinc-800 p-4 rounded-lg shadow-sm">
          <SalaryList
            salaries={salaries}
            onDelete={handleDeleteSalary}
            refreshSalaries={fetchSalaries}
            token={token}
          />
        </div>
      </div>
     </Layout>
  );
}

export default SalariesPage;
