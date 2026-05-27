import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/guni-logo-wide.png" alt="Ganpat Centre of Excellence Logo" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        <div className="desktop-menu">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/academics" className="nav-link">Academics</Link>
          <Link to="/research" className="nav-link">Research</Link>
          <Link to="/admission" className="nav-link">Admission</Link>
          <Link to="/international" className="nav-link">International</Link>
          <Link to="/examination" className="nav-link">Examination</Link>
          <Link to="/student-corner" className="nav-link">Student Corner</Link>
          <Link to="/campus-life" className="nav-link">Campus Life</Link>
          <Link to="/login" className="btn-primary">Sign In / Register</Link>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/about" className="mobile-link" onClick={closeMenu}>About</Link>
          <Link to="/academics" className="mobile-link" onClick={closeMenu}>Academics</Link>
          <Link to="/research" className="mobile-link" onClick={closeMenu}>Research</Link>
          <Link to="/admission" className="mobile-link" onClick={closeMenu}>Admission</Link>
          <Link to="/international" className="mobile-link" onClick={closeMenu}>International</Link>
          <Link to="/examination" className="mobile-link" onClick={closeMenu}>Examination</Link>
          <Link to="/student-corner" className="mobile-link" onClick={closeMenu}>Student Corner</Link>
          <Link to="/campus-life" className="mobile-link" onClick={closeMenu}>Campus Life</Link>
          <Link to="/login" className="mobile-btn" onClick={closeMenu}>Sign In / Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
