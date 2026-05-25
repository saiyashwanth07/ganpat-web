import React from 'react';
import './Legal.css'; // Reusing legal CSS for standard text pages for now

const About = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">About Ganpat University</h1>
        
        <div className="legal-sections">
          <section>
            <h2>Our Legacy and Vision</h2>
            <p>
              Located in the heart of Gujarat across a sprawling 272-acre green campus, Ganpat University was established with a singular mission: to provide world-class education that empowers the next generation of global leaders. 
              We are a premier institution recognized for our strong emphasis on industry-driven learning and holistic development.
            </p>
          </section>

          <section>
            <h2>Academic Excellence</h2>
            <p>
              With multiple constituent colleges, we offer a wide array of specialized programs spanning Engineering, Management, Pharmacy, Architecture, and advanced Computer Sciences. Our curriculum is constantly updated to reflect the latest technological advancements and industry requirements.
            </p>
          </section>

          <section>
            <h2>Industry Partnerships</h2>
            <p>
              Our unique collaborations with global giants like Maruti Suzuki, IBM, and Bosch set us apart. We believe that true learning happens when academic rigor meets practical industry exposure, ensuring our students are not just graduates, but highly sought-after professionals.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
