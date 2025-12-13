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

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/salary" element={<SalariesPage />} />
          <Route path="/leave/me" element={<MyLeavesPage />} />
          <Route path="/leave/manage" element={<AdminLeavePage />} />
          <Route path="/leave/request" element={<RequestLeavePage />} />
          <Route path="/settings" element={<System />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
