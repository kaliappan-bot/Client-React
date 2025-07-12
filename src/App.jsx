import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import LoginForm from './Page/LoginForm';
import RegisterForm from './components/RegisterForm';
import Admin from './Page/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
