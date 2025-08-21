import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
                
const API_URL = "https://script.google.com/macros/s/AKfycbzP8CZIp91LfjKK4JeqJl5Axaz717uuassypGuODsPjs5ijsii1IV2y67PaIqA8Q4M1xg/exec";

export default function Auth({ onLogin }) {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ initialize navigate

  // Register
  async function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "register", ...payload }),
    });

    const data = await res.json();

    if (data.status === "success") {
      alert("Registered Successfully!");
      e.target.reset();
    } else {
      setError(data.message);
    }
  }

  // Login
  async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "login", ...payload }),
    });

    const data = await res.json();

    if (data.status === "success") {
      setUser(data.user);
      setError("");
      if (onLogin) onLogin(data.user); // Notify parent component
      navigate("/dashboard"); // ✅ redirect after login
    } else {
      setError(data.message);
    }
  }

  // Logout
  async function handleLogout() {
    if (!user) return;

    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "logout", employeeId: user.employeeId }),
    });

    await res.json();
    setUser(null);
    navigate("/login"); // ✅ redirect after logout
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      {!user ? (
        <>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input name="name" placeholder="Name" required /><br />
            <input name="employeeId" placeholder="Employee ID" required /><br />
            <input name="email" type="email" placeholder="Email" required /><br />
            <input name="department" placeholder="Department" required /><br />
            <input name="mobile" placeholder="Mobile" required /><br />
            <input name="password" type="password" placeholder="Password" required /><br />
            <button type="submit">Register</button>
          </form>

          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input name="employeeId" placeholder="Employee ID" required /><br />
            <input name="password" type="password" placeholder="Password" required /><br />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <div>
          <h2>Welcome {user.name} 👋</h2>
          <p>Employee ID: {user.employeeId}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
