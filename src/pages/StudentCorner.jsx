import React from 'react';
import './Legal.css';

const StudentCorner = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">Student Corner</h1>
        
        <div className="legal-sections">
          <section>
            <h2>Your Academic Hub</h2>
            <p>
              The Student Corner is your centralized resource for all academic and administrative needs. Access your ERP dashboard, pay tuition and hostel fees securely, and download necessary forms including migration certificates and transcripts.
            </p>
          </section>

          <section>
            <h2>Grievance Redressal</h2>
            <p>
              We are committed to providing a safe, supportive, and harassment-free environment for all students. Our dedicated grievance redressal committee ensures rapid and confidential resolution of any issues faced on campus.
            </p>
          </section>

          <section>
            <h2>Mental Wellness</h2>
            <p>
              Through our initiative "Manas Manthan," we offer professional counseling and mental wellbeing workshops to help students navigate the pressures of academic and personal life. Your mental health is our priority.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
