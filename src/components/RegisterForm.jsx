import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    email: "",
    department: "",
    mobile: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyRqNQXufEeSF-JGNprSVq6Yk27qKtWK6XfC4wdG5trso3KhltH084C2KVyIgJCjT5oAA/exec", 
      {
        method: "POST",
        body: new URLSearchParams({
          ...formData,
          action: "register"
        }),
      }
    );
    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="empId" placeholder="Employee ID" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="department" placeholder="Department" onChange={handleChange} required />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default RegisterForm;
