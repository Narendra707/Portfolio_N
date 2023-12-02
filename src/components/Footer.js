// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer style={{ height:'200px'}}className="footer mt-4 py-5 my-19 bg-dark bg-gradient">
    <div className="container text-center">
      <span className="text-dark">
        <a href="https://www.linkedin.com/in/narendra-kumar-patel/" className="social-icon ">
          <i className=" fab fa-linkedin  fa-2x"></i>
        </a>
        <a href="https://github.com/Narendra707/" className="social-icon">
          <i className="fab fa-github  fa-2x"></i>
          
        </a>
        <a href="https://twitter.com/Na_re_ndra" className="social-icon">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="mailto:narendra.k91630@gmail.com" className="social-icon">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
       <br />
       <p className='text-white fw-bold'> © 2023 Narendra Kumar Patel</p>
      </span>
    </div>
  </footer>
);

export default Footer;
