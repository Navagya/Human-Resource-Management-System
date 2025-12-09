import React from "react";
import axios from "axios";

export default function SalaryList({ salaries = [], onDelete, refreshSalaries, token }) {
  // optional delete function to call backend
  const handleDelete = async (id) => {
    if (!confirm("Delete this salary record?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/salaries/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // update local list
      onDelete(id);
      // or call refreshSalaries();
    } catch (err) {
      console.error("Error deleting salary:", err);
      alert("Failed to delete");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Salary Records</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-zinc-700">
            <tr>
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-right">Basic</th>
              <th className="p-2 text-right">Allowances</th>
              <th className="p-2 text-right">Deductions</th>
              <th className="p-2 text-right">Net Pay</th>
              <th className="p-2 text-center">Date</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {salaries.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center text-zinc-400">
                  No salary records yet.
                </td>
              </tr>
            )}

            {salaries.map((s) => (
              <tr key={s._id} className="border-b border-zinc-700">
                <td className="p-2">{s.employee?.name ?? "—"}</td>
                <td className="p-2 text-right">{s.basicPay ?? 0}</td>
                <td className="p-2 text-right">{s.allowances ?? 0}</td>
                <td className="p-2 text-right">{s.deductions ?? 0}</td>
                <td className="p-2 text-right font-medium">{s.netPay ?? (s.basicPay + (s.allowances || 0) - (s.deductions || 0))}</td>
                <td className="p-2 text-center">
                  {s.payDate ? new Date(s.payDate).toLocaleDateString() : ""}
                </td>
                <td className="p-2 text-center">
                  {/* For now just delete - you can add edit later */}
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="px-2 py-1 text-xs rounded bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
