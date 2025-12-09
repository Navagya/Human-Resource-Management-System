import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Employees from "./pages/Employees.jsx";
import DepartmentPage from './pages/DepartmentPage.jsx';
import AdminLeavePage from './pages/leaves/AdminLeavePage.jsx';
import MyLeavesPage from './pages/leaves/MyLeavesPage.jsx';
import RequestLeavePage from './pages/leaves/RequestLeavePage.jsx';
import SalariesPage from './pages/SalariesPages.jsx';
import System from './pages/Settings/System.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
        <Route path = "/" element={<App/>}/>
        <Route path = "/login" element ={<Login/>}/>
        <Route path = "/register" element ={<Register/>}/>
        <Route path ="/dashboard" element ={<Dashboard/>}/>
        <Route path = "/employees" element ={<Employees/>}/>
        <Route path = "/department" element ={<DepartmentPage/>}/>
        <Route path = "/leave/request" element={<RequestLeavePage/>}/>
        <Route path = "/leave/me" element={<MyLeavesPage/>}/>
        <Route path = "/leave/manage" element={<AdminLeavePage/>}/>
        <Route path = "/salary" element={<SalariesPage/>}/>
        <Route path = "/settings" element={<System/>}/>
     </Routes>
  </BrowserRouter>
);