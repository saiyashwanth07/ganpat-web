import React from 'react';
import './Legal.css';

const Admission = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">Admissions</h1>
        
        <div className="legal-sections">
          <section>
            <h2>Join the GUNI Family</h2>
            <p>
              Embark on a transformative educational journey. Admission to Ganpat University is highly competitive and merit-based, seeking students who show immense potential, dedication, and a drive for excellence.
            </p>
          </section>

          <section>
            <h2>Application Process</h2>
            <p>
              Our admissions process is entirely digital. Prospective students must fill out the online application, upload the necessary documentation, and depending on the program, clear the entrance examinations or personal interviews.
            </p>
          </section>

          <section>
            <h2>Scholarships and Financial Aid</h2>
            <p>
              We firmly believe that financial constraints should never be a barrier to quality education. GUNI offers extensive merit-based and need-based scholarships to deserving candidates every academic year.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admission;
