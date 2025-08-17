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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "register",
          ...formData,
        }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.status === "success") {
        console.log("Registered:", formData.name);
      }
    } catch (err) {
      console.error("Error:", err);
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
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Employee ID
          <input
            type="text"
            name="empId"
            placeholder="Emp ID"
            value={formData.empId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Department
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mobile
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>

      {message && (
        <p style={{ textAlign: "center", marginTop: "10px" }}>{message}</p>
      )}
    </div>
  );
};

export default RegisterForm;
