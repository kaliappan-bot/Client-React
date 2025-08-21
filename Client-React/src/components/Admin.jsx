import React from 'react';
import './Admin.css';

export default function Admin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Admin login submitted!');
   
  };

  return (
    <section className="admin-login-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <label>
          Admin ID:
          <input type="text" name="adminId" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
