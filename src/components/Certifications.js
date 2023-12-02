// src/components/Certifications.js
import React from 'react';

const Certifications = ({ certifications }) => (
  <div className="certifications-section">
    <h2 className='custom-h1 fw-bold  my-2 mx-5'>Certifications</h2>
    {certifications.map((certification, index) => (
      <div key={index} className="education-certification ">
      <br></br>
      <div className="description-box bg-dark text-white p-3  align-items-center">

       <p className="lead text-justify fw-bold">{certification.title}</p>
         
      <p className='fw-bold'>{certification.issuingOrganization}</p>
      
      </div>
    </div>
    ))}
  </div>
);

export default Certifications;
