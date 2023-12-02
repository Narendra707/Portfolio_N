// src/components/Contact.js
import React from 'react';

const Contact = ({ contact }) => (
  <div style={{height:'450px'}} className="contact-section bg-white">
    <h2 className='custom-h1 fw-bold  my-2 mx-5'>Contact</h2>
    <b><p style={{height:'60px' , color:'dark-blue' , fontSize:'20px'}}>Email:{contact.email}</p></b>
    <b><p style={{height:'60px' , color:'dark-blue' , fontSize:'20px'}}>LinkedIn:{contact.linkedin}</p></b>
    <b><p style={{height:'60px' , color:'dark-blue' , fontSize:'20px'}}>GitHub: {contact.github}</p></b>
    <b><p style={{height:'60px' , color:'dark-blue' , fontSize:'20px'}}>Twitter: {contact.x}</p></b>
    {/* Add other contact information */}
  </div>
);

export default Contact;
