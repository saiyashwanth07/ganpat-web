import React from 'react';
import './Legal.css';

const International = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">International Relations</h1>
        
        <div className="legal-sections">
          <section>
            <h2>A Global Campus</h2>
            <p>
              Ganpat University is home to a vibrant, multicultural community. We welcome students from across the globe to study, collaborate, and grow on our beautiful campus in Gujarat.
            </p>
          </section>

          <section>
            <h2>Student Exchange Programs</h2>
            <p>
              We hold active Memorandums of Understanding (MoUs) with renowned universities in North America, Europe, and Asia. Our students benefit from semester exchange programs, giving them unparalleled international exposure.
            </p>
          </section>

          <section>
            <h2>Support for International Students</h2>
            <p>
              From pre-arrival orientation and visa assistance (FRRO) to dedicated campus accommodation and cultural integration events, our International Desk ensures that foreign students feel right at home.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default International;
