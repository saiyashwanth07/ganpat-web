import React from 'react';
import './Legal.css';

const Research = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">Research & Innovation</h1>
        
        <div className="legal-sections">
          <section>
            <h2>Pioneering Discoveries</h2>
            <p>
              Innovation is at the core of Ganpat University. Our Center for Advanced Research Studies (CARS) provides a platform for scholars and faculty to collaborate on groundbreaking interdisciplinary projects that solve real-world problems.
            </p>
          </section>

          <section>
            <h2>Facilities and Funding</h2>
            <p>
              We provide state-of-the-art laboratories, high-performance computing centers, and seed funding for promising student and faculty research initiatives. Our strong network of government and private partnerships ensures our research has tangible impact.
            </p>
          </section>

          <section>
            <h2>Ph.D. Programs</h2>
            <p>
              GUNI offers robust Ph.D. programs guided by distinguished faculty members. We emphasize rigorous methodology, ethical research practices, and global publication standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Research;
