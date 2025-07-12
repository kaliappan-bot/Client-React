import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('employee');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${activeTab}`);
    // Add actual login logic here
  };

  return (
    <section className="login-container">
      <h1>Login Portal</h1>

      {/* Toggle Buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'employee' ? 'active' : ''}
          onClick={() => setActiveTab('employee')}
        >
          Employee Login
        </button>
        <button
          className={activeTab === 'admin' ? 'active' : ''}
          onClick={() => setActiveTab('admin')}
        >
          Admin Login
        </button>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          {activeTab === 'employee' ? 'Employee ID' : 'Admin ID'}
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>

      <p className="forgot-password">
        <a href="/reset-password">Forgot Password?</a>
      </p>
    </section>
  );
};

export default LoginForm;
