import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; 
import "./RegisterForm.css";

const RegisterForm = () => {
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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "register", ...formData }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.status === "success") {
        navigate("/login");
      }
    } catch (err) {
      console.error("Register error:", err);
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
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              required
              autoComplete={field==="password"?"new-password":"off"}
            />
          </label>
        ))}
        <button type="submit">Register</button>
      </form>

      {message && <p className="message-text">{message}</p>}
    </div>
  );
};

export default RegisterForm;
