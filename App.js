import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TAF from './components/TAF';
import Users from './components/Users';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ATask from './components/ATask';
import DisplayTask from './components/DisplayTask';
function App() {
 const users = [
    { id: 1, name: 'Hari', phno: '123456789', TaskTime: '10:00 AM', Task: 'Meeting'},
    { id: 2, name: 'Jyothi', phno: '987654321',TaskTime: '2:30 PM', Task: 'Family Visit'},
    { id: 3, name: 'Srija', phno: '987654321',TaskTime: '9:30 PM', Task: 'Family reunion', studentID: 'ID004', type: 'visitor' },
    { id: 4, name: 'Siva Kumar', phno: '987654321',TaskTime:'9:00 PM',Task: 'Medical leave', studentID: 'ID007', type: 'parent' },
    { id: 5, name: 'Siva ', phno: '983564321', TaskTime: '9:50 PM', Task: 'garden party', studentID: 'ID008', type: 'visitor' },
    // Add more visitors as needed
 ];



 const navigate = useNavigate();
 const location = useLocation();

 const [visitorFilter, setVisitorFilter] = useState('all');

 const handleAddTaskClick = () => {
    navigate('/addtask'); // Navigate to the add task form
 };

 return (
    <div className="App" >
      <Header />
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
        
         {/* Main content area */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/users" element={<Users users={users} filter={visitorFilter} setFilter={setVisitorFilter} />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ATask" element={<ATask />} />
          <Route path="/sort" element={<div><TAF/></div>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
 {/* Keep this if you still need the Appointment component */}
          <Route path="/DisplayTask" element={<DisplayTask />} />
          <Route path="/Status" element={<div><TAF /></div>} />
        </Routes>

        {/* Render the "Add Task" link only for the "Add Task" route */}
        {location.pathname === '/addtask' && (
          <Link to="/addtask" onClick={handleAddTaskClick}>
          </Link>
        )}
      </div>
      <Footer />
    </div>
 );
}

export default App;