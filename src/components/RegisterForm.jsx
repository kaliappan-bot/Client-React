import React, { useRef, useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const formRef = useRef(null);
  const [responseMsg, setResponseMsg] = useState("");

  const scriptURL = "https://script.google.com/macros/s/AKfycbxkAEnxnaEguebEEZ6BIlgAm67eAQWvTn62CLkiLzGYVyALDwufunuqXir41v0W--4B/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    formData.append("timestamp", new Date().toLocaleString());

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      setResponseMsg(result);
      formRef.current.reset();
    } catch (error) {
      console.error("Error!", error.message);
      setResponseMsg("❌ Submission failed.");
    }
  };

  return (
    <section className="register-section" id="register">
      <h1>Employee Registration</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="register-form">
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Employee ID
          <input type="text" name="empId" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Department
          <input type="text" name="department" required />
        </label>
        <label>
          Mobile Number
          <input type="tel" name="mobile" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p id="response-msg" style={{ marginTop: "10px", color: "green" }}>
        {responseMsg}
      </p>
    </section>
  );
};

export default RegisterForm;
