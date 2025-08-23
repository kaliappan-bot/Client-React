import React, { useState } from "react";

export default function EmployeeLogin() {
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
          action: "login",
          empid,
          password,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        setMessage("✅ Employee login successful");
      } else {
        setMessage(`❌ Failed: ${data.error}`);
      }
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Employee Login</h2>
      <input
        type="text"
        placeholder="Employee ID"
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
