// src/components/Skills.js
import React from 'react';
import SkillsChart from './SkillsChart';

const Skills = ({ skills }) => (
  <div className="skills-section">
    <h2 className='custom-h1 fw-bold  my-2 mx-5'>Skills</h2>
    {/* Render the horizontal bar chart */}
    <SkillsChart skillsData={skills} />
  </div>
);

export default Skills;
