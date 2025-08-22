import React, { useState } from "react";
import { api } from "../api";

export default function AdminLogin() {
  const [form, setForm] = useState({ empid: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    try {
      const res = await api.adminLogin(form);
      if (res.ok) {
        setStatus(`✅ Admin login successful, Last login updated`);
      } else {
        setStatus("❌ Failed: " + res.error);
      }
    } catch (err) {
      setStatus("❌ Network error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input name="empid" placeholder="Employee ID" value={form.empid} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" autoComplete="current-password" value={form.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      <p>{status}</p>
    </form>
  );
}
