import React from 'react';
import './Legal.css';

const Academics = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">Academic Programs</h1>
        
        <div className="legal-sections">
          <section>
            <h2>Empowering Minds, Shaping Futures</h2>
            <p>
              At Ganpat University, our academic framework is designed to foster critical thinking, innovation, and practical skills. We offer a diverse spectrum of undergraduate, postgraduate, and doctoral programs tailored to meet global standards.
            </p>
          </section>

          <section>
            <h2>Our Faculties</h2>
            <ul>
              <li><strong>Engineering & Technology:</strong> Cutting-edge B.Tech and M.Tech programs with specialized labs.</li>
              <li><strong>Management Studies:</strong> Preparing future business leaders through rigorous MBA programs.</li>
              <li><strong>Computer Applications:</strong> Deep dives into Data Science, AI, and IT infrastructure.</li>
              <li><strong>Pharmacy & Health Sciences:</strong> Comprehensive research-backed pharmaceutical studies.</li>
              <li><strong>Design & Architecture:</strong> Fostering creativity and sustainable planning.</li>
            </ul>
          </section>

          <section>
            <h2>A Pedagogy of Excellence</h2>
            <p>
              Our teaching methodology goes beyond traditional classrooms. We incorporate interactive seminars, live projects, and continuous assessments to ensure a dynamic and comprehensive learning experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Academics;
