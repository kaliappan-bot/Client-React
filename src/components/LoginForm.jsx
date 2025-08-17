import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; 
import "./LoginForm.css";

function LoginForm() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "login",
          empId,
          password,
        }),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (data.status === "success") {
        alert("Login successful ");
       navigate("/welcome", { state: { name: data.name } });
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <button className="home-btn" onClick={() => navigate("/")}>
        <FaHome size={20} />
      </button>

      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Employee ID
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            required
            autoComplete="username" 
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password" 
          />
        </label>

        <button type="submit">Login</button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
