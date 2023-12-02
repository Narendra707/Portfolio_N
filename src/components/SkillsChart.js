// src/components/SkillsChart.js
import React from 'react';

const SkillsChart = ({ skillsData }) => {
  return (
    <div className="skills-chart">
      {skillsData.map((skill, index) => (
        <div key={index} className="bar" style={{ width:`100%`,height:'45px'}}>
          <div className="bar-fill" style={{ width: `${skill.percentage}%` }}>
            {/* <span className="label">{skill.label}</span> */}
            <p style={{ width:`100%`,height:'15px'}}>{skill.name}</p>
            <span className="percentage">{skill.percentage}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsChart;
