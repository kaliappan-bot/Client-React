import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Admin from './components/Admin';
import Welcome from './components/Welcome';
// import Auth from './components/Auth';
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/welcome" element={<Welcome />} />
      {/* <Route path="/auth" element={<Auth />} /> */}
    </Routes>
    
  );
}

export default App;
