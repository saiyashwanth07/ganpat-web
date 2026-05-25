import React from 'react';
import { Monitor, Cpu, Code, Database, Zap, BookOpen } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import './Home.css';

const Home = () => {
  const courses = [
    {
      title: "U.V. Patel College of Engineering",
      description: "Premier engineering institute offering cutting-edge B.Tech and M.Tech programs.",
      icon: <Monitor size={24} />
    },
    {
      title: "V.M. Patel Institute of Management",
      description: "Develop into world-class management leaders to address dynamic business scenarios.",
      icon: <BookOpen size={24} />
    },
    {
      title: "Institute of Computer Technology",
      description: "Specialized in advanced computer applications, AI, and IT infrastructure.",
      icon: <Cpu size={24} />
    },
    {
      title: "Institute of Pharmacy",
      description: "State-of-the-art pharmaceutical education and research facilities.",
      icon: <Database size={24} />
    },
    {
      title: "Institute of Architecture",
      description: "Innovative design, planning, and architectural studies.",
      icon: <Zap size={24} />
    },
    {
      title: "Japan-India Institute of Manufacturing",
      description: "In collaboration with Maruti Suzuki, focusing on world-class manufacturing skills.",
      icon: <Code size={24} />
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Empowering Minds, <br />
              <span className="text-gradient">Transforming the Future</span>
            </h1>
            <p className="hero-subtitle">
              Welcome to Ganpat University (GUNI). 
              A place where intellectual capital in Engineering meets innovative development.
            </p>
            <div className="hero-actions">
              <a href="#courses" className="btn btn-primary">Explore Courses</a>
              <a href="#about" className="btn btn-outline" style={{ background: 'white' }}>Learn More</a>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="about-grid">
            <div className="about-content">
              <p>
                Ganpat University was established to play a pivotal role in the development of the intellectual capital in Engineering, Management, and Science fields.
              </p>
              <p>
                Situated in a 272-acre campus, Ganpat University is recognized globally for its excellence in providing professional and higher education.
              </p>
              
              <div className="vision-mission-cards">
                <div className="vm-card glass-panel">
                  <h3>Our Vision</h3>
                  <p>Inculcate a sound knowledge of Engineering and Management in students along with social responsibility and ethical practices.</p>
                </div>
                <div className="vm-card glass-panel">
                  <h3>Our Mission</h3>
                  <p>Create committed and self-motivated Engineers and Managers, equipped to offer innovative solutions for the benefit of society.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutes Section */}
      <section id="courses" className="section">
        <div className="container">
          <h2 className="section-title">Constituent Institutes</h2>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section id="placements" className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Campus Placements</h2>
          <div className="placements-content">
            <p className="placements-stats">Trusted by Over <strong>6000+</strong> Students</p>
            <p className="placements-desc">
              Our dedicated placement cell ensures that our students are well-prepared for the industry. 
              We have strong ties with top recruiters in IT and core sectors.
            </p>
            <a href="#" className="btn btn-primary">View Placement Gallery</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
