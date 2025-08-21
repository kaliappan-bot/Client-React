import React, { useState } from "react";

function LoginForm() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    setMessage(result.message);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoginForm;
