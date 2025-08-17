import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-connect">
          <h3>Connect with Us</h3>
          <p>Follow us on:</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
          </div>
        </div>

        
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQs</a>
        </div>

        
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} iBots Satellite Office. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
