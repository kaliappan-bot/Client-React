import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    email: "",
    department: "",
    mobile: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/functions/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "register", ...formData }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="register-section">
      <button className="home-btn" onClick={() => navigate("/")}>
        <FaHome size={20} />
      </button>

      <h1>Employee Registration</h1>
      <form className="register-form" onSubmit={handleRegister}>
        {["name","empId","email","department","mobile","password"].map((field) => (
          <label key={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </label>
        ))}
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ textAlign: "center", marginTop: 10 }}>{message}</p>}
    </div>
  );
}
