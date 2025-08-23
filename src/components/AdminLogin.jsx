import React, { useState } from "react";

export default function AdminLogin() {
  const [empid, setEmpid] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://ibots-worker.ibots-kaliappan.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "adminlogin",
          empid,
          password,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        setMessage("✅ Admin login successful");
      } else {
        setMessage(`❌ Failed: ${data.error}`);
      }
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Admin ID"
        value={empid}
        onChange={(e) => setEmpid(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
}
