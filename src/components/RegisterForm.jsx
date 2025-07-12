import React from 'react';
import './RegisterForm.css';
const RegisterForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registeration submitted!');
    };
    return (
        <section className="register-section" id="register">
            <h1>Employee Registration</h1>
            <form onSubmit={handleSubmit} className="register-form">
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
                <input type="text" name="email" required />
                </label>
                <label>
                    Department
                    <input type="text" name="department" required />
                    </label>
                    <label>
                        Mobile Number
                    <input type="text" name="mobile" required />
                    </label>
                    <label>
                        Password
                    <input type="text" name="password" required />
                    </label>
                    <button type="submit">Submit Registration</button>
            </form>
        </section>
    );
};
export default RegisterForm;