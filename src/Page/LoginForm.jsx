import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('employee');
  const [message, setMessage] = useState('');

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbxkAEnxnaEguebEEZ6BIlgAm67eAQWvTn62CLkiLzGYVyALDwufunuqXir41v0W--4B/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    formData.append('role', activeTab); // Optional: indicate role
    formData.append('timestamp', new Date().toLocaleString());

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();
      setMessage(result);
      form.reset();
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('❌ Submission failed.');
    }
  };

  return (
    <section className="login-container">
      <h1>Login Portal</h1>

      {/* Toggle Buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'employee' ? 'active' : ''}
          onClick={() => setActiveTab('employee')}
          type="button"
        >
          Employee Login
        </button>
        <button
          className={activeTab === 'admin' ? 'active' : ''}
          onClick={() => setActiveTab('admin')}
          type="button"
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

      {message && <p className="response-message">{message}</p>}

      <p className="forgot-password">
        <a href="/reset-password">Forgot Password?</a>
      </p>
    </section>
  );
};

export default LoginForm;
