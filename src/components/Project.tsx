import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <section className="project">
      <h2 className="project-title">My Project Title</h2>
      <p className="project-description">
        A brief description of the project, highlighting its features and technologies used.
      </p>
      <div className="project-technologies">
        <span>Technologies: React, TypeScript, etc.</span>
      </div>
    </section>
  );
};

export default Project;