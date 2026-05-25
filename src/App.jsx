import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Academics from './pages/Academics';
import Research from './pages/Research';
import Admission from './pages/Admission';
import International from './pages/International';
import Examination from './pages/Examination';
import StudentCorner from './pages/StudentCorner';
import CampusLife from './pages/CampusLife';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/research" element={<Research />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/international" element={<International />} />
            <Route path="/examination" element={<Examination />} />
            <Route path="/student-corner" element={<StudentCorner />} />
            <Route path="/campus-life" element={<CampusLife />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
