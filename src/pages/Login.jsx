import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Lock, LogIn, CheckCircle, UserPlus, Mail, User } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  
  // Login State
  const [mobile, setMobile] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  // Signup State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Load cached details on component mount
  useEffect(() => {
    const cachedMobile = localStorage.getItem('guni_login_mobile');
    if (cachedMobile) {
      setMobile(cachedMobile);
      setRememberMe(true);
    }
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Cache management
    if (rememberMe) {
      localStorage.setItem('guni_login_mobile', mobile);
    } else {
      localStorage.removeItem('guni_login_mobile');
    }
    
    setSubmitMessage('Login successful! Redirecting...');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      alert("Please agree to the Terms & Conditions to proceed.");
      return;
    }

    setSubmitMessage('Account created successfully! Please sign in.');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsLoginView(true);
    }, 3000);
  };

  return (
    <div className="login-page">
      <div className="login-container glass-panel">
        
        {isLoginView ? (
          // --- LOGIN VIEW ---
          <>
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Login to your Ganpat University account</p>
            </div>

            {isSubmitted && (
              <div className="success-message">
                <CheckCircle size={20} />
                <span>{submitMessage}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="login-form">
              <div className="input-group">
                <label htmlFor="mobile">Mobile Number</label>
                <div className="input-wrapper">
                  <Phone className="input-icon" size={20} />
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="login-password">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input
                    type="password"
                    id="login-password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="btn btn-primary login-submit-btn">
                <LogIn size={20} style={{ marginRight: '8px' }} />
                Login
              </button>

              <div className="toggle-view">
                <span>Don't have an account? </span>
                <button type="button" className="toggle-btn" onClick={() => setIsLoginView(false)}>
                  Create Account
                </button>
              </div>
            </form>
          </>
        ) : (
          // --- SIGNUP VIEW ---
          <>
            <div className="login-header">
              <h2>Create Account</h2>
              <p>Register to get started with your application</p>
            </div>

            {isSubmitted && (
              <div className="success-message">
                <CheckCircle size={20} />
                <span>{submitMessage}</span>
              </div>
            )}

            <form onSubmit={handleSignupSubmit} className="login-form">
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={20} />
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={20} />
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="signupPhone">Phone Number</label>
                <div className="input-wrapper">
                  <Phone className="input-icon" size={20} />
                  <input
                    type="tel"
                    id="signupPhone"
                    placeholder="+91 00000 00000"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="signup-password">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input
                    type="password"
                    id="signup-password"
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="terms-checkbox-group">
                <label className="terms-label">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to the <Link to="/terms-and-conditions" className="legal-link">Terms & Conditions</Link> and <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>, and authorize Ganpat University and its partners to contact me via Email, SMS, WhatsApp, RCS, or Voice Call, even if my number is on DNC/NDNC. I consent to be contacted regarding services offered by GUNI.
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary login-submit-btn">
                <UserPlus size={20} style={{ marginRight: '8px' }} />
                Create Account
              </button>

              <div className="toggle-view">
                <span>Already have an account? </span>
                <button type="button" className="toggle-btn" onClick={() => setIsLoginView(true)}>
                  Sign In
                </button>
              </div>
            </form>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Login;
