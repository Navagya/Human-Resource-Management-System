import { useState } from "react";
import {
  FaBuilding,
  FaPalette,
  FaBell,
  FaShieldAlt,
  FaSave,
} from "react-icons/fa";

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: "ABC Technologies",
    companyEmail: "hr@abctech.com",
    workingHours: "09:00 AM - 06:00 PM",
    leavePerYear: 20,
    theme: "Light",
    emailNotification: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log(settings);
    // axios.post(`${BASE_URL}/api/settings`, settings)
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-gray-500 mt-1 mb-8">
          Manage your HRMS preferences.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Company */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-3 mb-5">

              <FaBuilding className="text-blue-600 text-2xl" />

              <h2 className="text-xl font-semibold">
                Company
              </h2>

            </div>

            <div className="space-y-4">

              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                name="companyEmail"
                value={settings.companyEmail}
                onChange={handleChange}
                placeholder="Company Email"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                name="workingHours"
                value={settings.workingHours}
                onChange={handleChange}
                placeholder="Working Hours"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="number"
                name="leavePerYear"
                value={settings.leavePerYear}
                onChange={handleChange}
                placeholder="Leaves Per Year"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

          {/* Appearance */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-3 mb-5">

              <FaPalette className="text-purple-600 text-2xl" />

              <h2 className="text-xl font-semibold">
                Appearance
              </h2>

            </div>

            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option>Light</option>
              <option>Dark</option>
            </select>

          </div>

          {/* Notifications */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-3 mb-5">

              <FaBell className="text-yellow-500 text-2xl" />

              <h2 className="text-xl font-semibold">
                Notifications
              </h2>

            </div>

            <label className="flex justify-between items-center">

              <span>Email Notifications</span>

              <input
                type="checkbox"
                name="emailNotification"
                checked={settings.emailNotification}
                onChange={handleChange}
                className="w-5 h-5"
              />

            </label>

          </div>

          {/* Security */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-3 mb-5">

              <FaShieldAlt className="text-green-600 text-2xl" />

              <h2 className="text-xl font-semibold">
                Security
              </h2>

            </div>

            <button className="w-full border border-green-500 text-green-600 rounded-lg py-3 hover:bg-green-50 transition">
              Change Password
            </button>

          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            <FaSave />
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;