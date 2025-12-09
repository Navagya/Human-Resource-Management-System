
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Employees from './pages/Employees';
import DepartmentPage from './pages/DepartmentPage';
import SalariesPage from './pages/SalariesPages';
import MyLeavesPage from './pages/leaves/MyLeavesPage';


function App() {
  return (
    <Router>
      <div className='flex'>
        {/*Sidebar always visible*/}
        <Sidebar/>

        {/* Main Content */}

        <div className="flex-1">
          <Routes>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/departments" element={<DepartmentPage/>}/>
            <Route path="/salary" element={<SalariesPage />}/>
            <Route path="/leaves" element={<MyLeavesPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;