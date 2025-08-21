import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';

function LoginForm() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);   

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyRqNQXufEeSF-JGNprSVq6Yk27qKtWK6XfC4wdG5trso3KhltH084C2KVyIgJCjT5oAA/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            empId,
            password,
            action: "login"
          }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        navigate("/welcome", { state: { name: result.name } });
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    }

    setLoading(false);  
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          autoComplete="username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        
        
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {message && <p className="error-text">{message}</p>}
    </div>
  );
}

export default LoginForm;
