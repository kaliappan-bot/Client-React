import React, { useState } from "react";
import { api } from "../api";

export default function EmployeeLogin() {
  const [form, setForm] = useState({ empid: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    try {
      const res = await api.employeeLogin(form);
      if (res.ok) {
        setStatus(`✅ Employee login successful, Last login updated`);
      } else {
        setStatus("❌ Failed: " + res.error);
      }
    } catch (err) {
      setStatus("❌ Network error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Login</h2>
      <input name="empid" placeholder="Employee ID" value={form.empid} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" autoComplete="current-password" value={form.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      <p>{status}</p>
    </form>
  );
}
