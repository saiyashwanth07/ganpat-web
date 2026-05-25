import React from 'react';
import './Legal.css';

const CampusLife = () => {
  return (
    <div className="legal-container fade-in">
      <div className="legal-content glass-panel">
        <h1 className="legal-title text-gradient">Campus Life</h1>
        
        <div className="legal-sections">
          <section>
            <h2>A Vibrant Ecosystem</h2>
            <p>
              Spanning 272 lush acres in Kherva, Gujarat, our campus is a self-sustained mini-city designed to enrich your student life. From state-of-the-art sports complexes to serene green spaces, GUNI provides an environment where you can thrive both academically and personally.
            </p>
          </section>

          <section>
            <h2>Amenities & Facilities</h2>
            <ul>
              <li><strong>Accommodation:</strong> Safe, modern, and comfortable hostel facilities with dedicated staff.</li>
              <li><strong>Dining:</strong> Multiple cafeterias offering hygienic and diverse culinary options.</li>
              <li><strong>Sports:</strong> Expansive playgrounds, indoor sports arenas, and an open-air theater.</li>
              <li><strong>Convenience:</strong> On-campus bank, ATM, post office, and essential shopping centers.</li>
            </ul>
          </section>

          <section>
            <h2>Clubs & Societies</h2>
            <p>
              Beyond the classroom, GUNI boasts a multitude of student-run clubs covering robotics, coding, arts, music, and debate. Join the VolunTeacher Movement or the NSS to give back to the community and develop essential leadership skills.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
