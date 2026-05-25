import React from 'react';
import './Legal.css';

const Examination = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">Examinations & Results</h1>
        
        <div className="legal-sections">
          <section>
            <h2>Academic Evaluation</h2>
            <p>
              Our examination system is designed to be transparent, fair, and comprehensively evaluate the student's understanding of the subject matter. We follow a Choice Based Credit System (CBCS) that aligns with international grading standards.
            </p>
          </section>

          <section>
            <h2>Announcements</h2>
            <p>
              Please regularly check the Student Portal for the latest exam timetables, seating arrangements, and hall ticket distributions. Results are published digitally and can be accessed securely via your GUNI credentials.
            </p>
          </section>

          <section>
            <h2>Guidelines</h2>
            <p>
              Strict adherence to examination rules is mandatory. We employ digital surveillance and anti-plagiarism tools to maintain the highest levels of academic integrity. Re-evaluation and re-checking processes are available as per university norms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Examination;
