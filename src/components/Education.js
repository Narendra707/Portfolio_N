// src/components/Education.js
import React from 'react';

const Education = ({ education }) => (
  <div className="education-section">
    <h2 className='custom-h1 fw-bold  my-2 mx-5'>Education</h2>
    {education.map((item, index) => (
      <div key={index} className="education-item ">
        <br></br>
        <div className="description-box bg-dark text-white p-3  align-items-center">

         <p className="lead text-justify fw-bold">{item.degree}</p>
           
        <p className='fw-bold'>{item.institution}</p>
        <p className='fw-bold'>{item.cgpa}</p>
        <p className='fw-bold'>{item.year}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
