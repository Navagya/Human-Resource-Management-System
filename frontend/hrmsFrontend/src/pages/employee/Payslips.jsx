import React from "react";
import { FaMoneyCheckAlt, FaDownload, FaFileInvoiceDollar } from "react-icons/fa";

function Payslips() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-3xl font-bold mb-8">
        Payslips
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <FaMoneyCheckAlt className="text-green-400 text-3xl mb-3" />
          <p className="text-gray-400">Monthly Salary</p>
          <h2 className="text-3xl font-bold mt-2">₹50,000</h2>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <FaFileInvoiceDollar className="text-blue-400 text-3xl mb-3" />
          <p className="text-gray-400">Payslips Generated</p>
          <h2 className="text-3xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <FaDownload className="text-purple-400 text-3xl mb-3" />
          <p className="text-gray-400">Last Payment</p>
          <h2 className="text-3xl font-bold mt-2">30 Jun 2026</h2>
        </div>

      </div>

      {/* Payslip Table */}

      <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden">

        <div className="p-6 border-b border-slate-700">
          <h2 className="text-xl font-semibold">
            Payslip History
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr className="text-gray-300">

              <th className="text-left p-4">Month</th>
              <th className="text-left p-4">Salary</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {[
              ["June 2026", "₹50,000"],
              ["May 2026", "₹50,000"],
              ["April 2026", "₹50,000"],
              ["March 2026", "₹50,000"],
            ].map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800 transition"
              >

                <td className="p-4">{item[0]}</td>

                <td className="p-4">{item[1]}</td>

                <td className="p-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    Paid
                  </span>
                </td>

                <td className="p-4">

                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">

                    <FaDownload />

                    Download

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

export default Payslips;