import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <p>
            <strong> Address:</strong><br />
            <a
              href="https://maps.app.goo.gl/BGrHGtcQwPLtRYfw6"
              target="_blank"
              rel="noopener noreferrer"
            >
              iBots Satellite Office,<br />
              Meikavalputhur, Tamil Nadu, India
            </a>
          </p>
          <p><strong> Phone:</strong> +91 98765 43210</p>
          <p><strong> Email:</strong> contact@ibots.in</p>
          <p><strong> Working Hours:</strong> Mon – Sat, 9:00 AM – 6:00 PM</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" required />
          </label>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Message:
            <textarea rows="4" required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
