import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EmployeeLogin from './components/EmployeeLogin';
import RegisterForm from './components/RegisterForm';
import AdminLogin from './components/AdminLogin';
import Welcome from './components/Welcome';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employeelogin" element={<EmployeeLogin />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/welcome" element={<Welcome />} />
      
    </Routes>
    
  );
}

export default App;
