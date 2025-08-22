import React, { useState } from "react";
import { api } from "../api";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    empid: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await api.register(form);
      if (res.ok) {
        setStatus("✅ Registered successfully");
        setForm({ name: "", empid: "", email: "", mobile: "", password: "" });
      } else {
        setStatus("❌ Failed: " + res.error);
      }
    } catch (err) {
      setStatus("❌ Network error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="empid" placeholder="Employee ID" value={form.empid} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" autoComplete="new-password" value={form.password} onChange={handleChange} required />
      <button type="submit">Register</button>
      <p>{status}</p>
    </form>
  );
}
