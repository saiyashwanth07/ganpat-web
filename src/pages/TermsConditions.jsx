import React from 'react';
import './Legal.css';

const TermsConditions = () => {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        <h1 className="legal-title">Terms & Conditions</h1>
        <div className="legal-content glass-panel">
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2>2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Ganpat University (GUNI) and/or its licensors own all the intellectual property rights and materials contained in this Website.
            </p>
            <p>
              You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
          </section>

          <section>
            <h2>3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any Website material in any other media;</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>Publicly performing and/or showing any Website material;</li>
              <li>Using this Website in any way that is or may be damaging to this Website;</li>
              <li>Using this Website in any way that impacts user access to this Website;</li>
            </ul>
          </section>

          <section>
            <h2>4. Disclaimer</h2>
            <p>
              This Website is provided "as is," with all faults, and GUNI express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall GUNI, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. GUNI, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
