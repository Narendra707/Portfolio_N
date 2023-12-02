// src/components/Projects.js
import React from 'react';

const Projects = ({ projects }) => (
  <div className="projects-section">
    <h2 className='custom-h1 fw-bold  my-2 mx-5'>Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className="education-item ">
      <br></br>
      <div className="description-box bg-dark text-white p-3  align-items-center">

       <p className="lead text-justify fw-bold">{project.title}</p>

      <p >{project.description}</p>
      <p className='fw-bold'>Technologies : {project.technologies.join(', ')}</p>
      </div>
      </div>
    ))}
  </div>
);

export default Projects;
