import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

const BASE_URL = import.meta.env.VITE_API_URL;

const System = () => {
  const [settings, setSettings] = useState({
    companyName: "",
    adminEmail: "",
    theme: "light",
  });

  // Load Settings from Backend
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/settings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setSettings({
        companyName: res.data.companyName || "",
        adminEmail: res.data.adminEmail || "",
        theme: res.data.theme || "light",
        }))
      .catch((err) => console.log("Error loading settings:", err));
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios
      .post(`${BASE_URL}/api/settings`, settings, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => alert("Settings Saved!"))
      .catch((err) => console.log("Error saving settings:", err));
  };

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      <div className="bg-zinc-800 p-6 rounded-lg shadow-md max-w-xl">
        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-1">
            Company Name
          </label>

          <input
            type="text"
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            className="w-full bg-zinc-700 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter company name"
          />
        </div>

        {/* Admin Email */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-1">
            Admin Email
          </label>

          <input
            type="email"
            name="adminEmail"
            value={settings.adminEmail}
            onChange={handleChange}
            className="w-full bg-zinc-700 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="admin@example.com"
          />
        </div>

        {/* Theme */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-1">Theme</label>

          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full bg-zinc-700 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Settings
        </button>
      </div>
    </Layout>
  );
};

export default System;
