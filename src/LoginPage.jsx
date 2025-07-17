import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'employee',
  });
  const [message, setMessage] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxkAEnxnaEguebEEZ6BIlgAm67eAQWvTn62CLkiLzGYVyALDwufunuqXir41v0W--4B/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('username', formData.username);
    payload.append('password', formData.password);
    payload.append('role', formData.role);
    payload.append('timestamp', new Date().toLocaleString());

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: payload,
      });

      const result = await response.text();
      setMessage(result);
      setFormData({ username: '', password: '', role: 'employee' });
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('❌ Login failed');
    }
  };

  return (
    <section className="login-container">
      <h1>Login Portal</h1>

      <div className="tab-buttons">
        <button
          className={formData.role === 'employee' ? 'active' : ''}
          onClick={() => setFormData((prev) => ({ ...prev, role: 'employee' }))}
        >
          Employee Login
        </button>
        <button
          className={formData.role === 'admin' ? 'active' : ''}
          onClick={() => setFormData((prev) => ({ ...prev, role: 'admin' }))}
        >
          Admin Login
        </button>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          {formData.role === 'employee' ? 'Employee ID' : 'Admin ID'}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>

      <p id="response-msg" style={{ marginTop: '1rem', color: 'green' }}>{message}</p>

      <p className="forgot-password">
        <a href="/reset-password">Forgot Password?</a>
      </p>
    </section>
  );
};

export default LoginForm;
