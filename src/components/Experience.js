// src/components/Experience.js
import React from 'react';

const Experience = ({ experience }) => (
  <div className="experience-section">
    <h2 className='custom-h1 fw-bold  my-2 mx-5'>Experience</h2>
    {experience.map((item, index) => (
      // <div key={index} className="experience-item">
      //   <p>{item.position}</p>
      //   <p>{item.company}</p>
      //   <p>{item.duration}</p>
      //   <p>{item.description}</p>
      // </div>
      <div key={index} className="education-item ">
        <br></br>
        <div className="description-box bg-dark text-white p-3  align-items-center">

         <p className="lead text-justify fw-bold">{item.position}</p>
           
        <p className='fw-bold'>{item.company}</p>
        <p className='fw-bold'>{item.duration}</p>
        <p className=''>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
