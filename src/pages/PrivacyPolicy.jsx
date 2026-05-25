import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        <h1 className="legal-title">Privacy Policy</h1>
        <div className="legal-content glass-panel">
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Ganpat University (GUNI). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2>2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
            </p>
            <p>Email address: info@ganpatuniversity.ac.in</p>
            <p>Telephone number: +91 9848924706</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
