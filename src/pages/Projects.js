import React from 'react';
import ProjectBox from '../components/ProjectBox';
import '../styles/projects.css';

function Projects() {
  return (
    <div className="project-page">
      <div className="project-image"></div>

      <div className="container-about">
      <ProjectBox text="auto iclicker" />
      <ProjectBox text="ransomware demo" />
      <ProjectBox text="simple game" />
      <ProjectBox text="more..." />
      </div>
    </div>
  );
}

export default Projects;
