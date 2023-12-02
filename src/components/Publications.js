// src/components/Publications.js
import React from 'react';

const Publications = ({ publications }) => (
  <div className="publications-section">
    <h2 className='custom-h1 fw-bold  my-2 mx-5'>Publications</h2>
    <h4 style={{height:'30px'}} className='bg-dark text-white my-2 mx-5'> Author : Narendra Kumar Patel</h4>
    <h5 style={{height:'30px'}} className='bg-white text-success my-2 mx-5'>Profile:-  <a className='text-success ' href="https://auth.geeksforgeeks.org/user/narendra4narendra" style={{textDecoration:'none'}}>https://auth.geeksforgeeks.org/user/narendra4narendra</a></h5>
    {publications.map((publication, index) => (
      <div key={index} className="publication-item">
        <div className="description-box bg-white text-white p-3  align-items-center">
        <p className="lead text-justify fw-bold"><a className='text-success ' href={publication.link} style={{textDecoration:'none'}} target='self'>{publication.article}</a></p>
   
      </div>
      </div>
    ))}
  </div>
);

export default Publications;
