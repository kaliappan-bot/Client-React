import React, { useState } from 'react';
import './RegisterForm.css';
const RegisterForm = () => {
    const [formData, setFormData] =
        useState({
            name: "",
            empId: "",
            email: "",
            department: "",
            mobile: "",
            password: ""
        });
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value});
        };
        const handleSubmit = async (e) =>
        {
           e.preventDefault();
           try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxYTgEt0HeuAwIgL86sfH6jbPauYRoNuwjhBq6hdONAhy7zvo6-ealV6nCN7degcv7b/exec", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:
                JSON.stringify(formData),
            });
            const result = await response.text();
            console.log("Server response:", result);
            if (response.ok && result.includes("Success")) {
                alert("Registration submitted successfully!");
            } else {
              alert("Something went wrong while submitting.");
            }
           } catch (error) {
            console.error("Error:", error);
            alert("Error submitting form.");
           }
        };
      return (
        <section className="register-section" id="register">
            <h1>Employee Registration</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label>
                    Name
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                <label>
                    Employee ID
                    <input type="text" name="empId" value={formData.empId} onChange={handleChange} required />
                </label>
                <label>
                    Email
                <input type="text" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Department
                    <input type="text" name="department" value={formData.department} onChange={handleChange} required />
                    </label>
                    <label>
                        Mobile Number
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </label>
                    <label>
                        Password
                    <input type="text" name="password" value={formData.password} onChange={handleChange} required />
                    </label>
                    <button type="submit">Submit Registration</button>
            </form>
        </section>
    );
};
export default RegisterForm;