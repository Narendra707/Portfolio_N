// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import portfolioData from './BackendData/portfolioData';

const App = () => {
  const {
    home,
    education,
    skills,
    experience,
    projects,
    certifications,
    publications,
    contact,
  } = portfolioData;

  return (
    <div className='bg-secondary bg-gradient'>
    <Router>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home {...home} />} />
          <Route path="/education" element={<Education education={education} />} />
          <Route path="/skills" element={<Skills skills={skills} />} />
          <Route path="/experience" element={<Experience experience={experience} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/certifications" element={<Certifications certifications={certifications} />} />
          <Route path="/publications" element={<Publications publications={publications} />} />
          <Route path="/contact" element={<Contact contact={contact} />} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
  );
};

export default App;
