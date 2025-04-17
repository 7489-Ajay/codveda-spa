import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Codveda</h2> {/* Company logo */}
      </div>
      <p className="footer-text">© 2025 Codveda Technologies. All rights reserved.</p>
      <div className="footer-links">
        <p><a href="/">Terms & Conditions</a> | <a href="/">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;

