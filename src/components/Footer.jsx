import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">Ganpat University</h3>
            <p className="footer-desc">
              Empowering students through quality education, research, and innovation to become global leaders.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses Offered</a></li>
              <li><a href="#placements">Placements</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="footer-contact">
              <li>Email: info@ganpatuniversity.ac.in</li>
              <li>Phone: +91 9848924706</li>
              <li>Address: Kherva, Mehsana, Gujarat, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ganpat University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
