import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function AddSalaryForm({ employees = [], onAdded, token }) {
  const [form, setForm] = useState({
    employeeId: "",
    basicPay: "",
    allowances: "",
    deductions: "",
  });

  const [netPay, setNetPay] = useState(0);
  const [loading, setLoading] = useState(false);

  // auto-calc net pay whenever numbers change
  useEffect(() => {
    const basic = Number(form.basicPay) || 0;
    const allow = Number(form.allowances) || 0;
    const ded = Number(form.deductions) || 0;
    setNetPay(basic + allow - ded);
  }, [form.basicPay, form.allowances, form.deductions]);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.employeeId || !form.basicPay) {
      return alert("Please choose an employee and enter basic pay.");
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${BASE_URL}/api/salaries`,
        {
          employeeId: form.employeeId,
          basicPay: Number(form.basicPay),
          allowances: Number(form.allowances) || 0,
          deductions: Number(form.deductions) || 0,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // The backend returns the created salary (populated if implemented)
      const created = res.data.salary || res.data; // adjust to your backend response
      onAdded(created);

      // clear form
      setForm({
        employeeId: "",
        basicPay: "",
        allowances: "",
        deductions: "",
      });
      setLoading(false);
      alert("Salary record added successfully");
    } catch (err) {
      setLoading(false);
      console.error("Error creating salary:", err);
      alert(err.response?.data?.message || "Failed to create salary");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="text-lg font-medium">Add Salary</h3>

      <label className="block text-sm">Employee</label>
      <select
        name="employeeId"
        value={form.employeeId}
        onChange={handleChange}
        className="w-full p-2 rounded bg-zinc-700 text-white"
        required
      >
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp._id} value={emp._id}>
            {emp.name} — {emp.department ? emp.department : ""}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label className="block text-sm">Basic Pay</label>
          <input
            name="basicPay"
            type="number"
            value={form.basicPay}
            onChange={handleChange}
            className="w-full p-2 rounded bg-zinc-700 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Allowances</label>
          <input
            name="allowances"
            type="number"
            value={form.allowances}
            onChange={handleChange}
            className="w-full p-2 rounded bg-zinc-700 text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm">Deductions</label>
        <input
          name="deductions"
          type="number"
          value={form.deductions}
          onChange={handleChange}
          className="w-full p-2 rounded bg-zinc-700 text-white"
        />
      </div>

      <div>
        <label className="block text-sm">Net Pay (Auto)</label>
        <input
          value={netPay}
          disabled
          className="w-full p-2 rounded bg-zinc-800 text-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 px-4 py-2 rounded bg-white text-black font-medium"
      >
        {loading ? "Saving..." : "Add Salary"}
      </button>
    </form>
  );
}
