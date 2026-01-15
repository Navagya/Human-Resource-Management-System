import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import DepartmentPage from "./pages/DepartmentPage";
import SalariesPage from "./pages/SalariesPages";
import MyLeavesPage from "./pages/leaves/MyLeavesPage";
import AdminLeavePage from "./pages/leaves/AdminLeavePage";
import RequestLeavePage from "./pages/leaves/RequestLeavePage";
import System from "./pages/Settings/System";
import LeaveLayout from "./pages/leaves/Layout";
import LeaveHome from "./pages/leaves/Home";
import Login from "./pages/Login";
import Profile from "./pages/employee/Profile";
import Attendance from "./pages/employee/Attendance";
import Payslips from "./pages/employee/Payslips";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {
  return (
    <div className="flex-1">
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/payslips" element={<Payslips />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/salary" element={<SalariesPage />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="leave" element={<LeaveLayout />}>
          <Route index element={<LeaveHome />} />
          <Route path="apply" element={<RequestLeavePage />} />
          <Route path="my-leaves" element={<MyLeavesPage />} />
          <Route path="approve" element={<AdminLeavePage />} />
        </Route> 
      </Routes>
      </div>
  );
}

export default App;
