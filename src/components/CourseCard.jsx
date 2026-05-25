import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, icon }) => {
  return (
    <div className="course-card glass-panel">
      <div className="course-icon">
        {icon}
      </div>
      <h3 className="course-title">{title}</h3>
      <p className="course-desc">{description}</p>
      <a href="#" className="course-link">Learn More &rarr;</a>
    </div>
  );
};

export default CourseCard;
