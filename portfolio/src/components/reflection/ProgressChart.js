// src/components/reflection/ProgressChart.js
import React from 'react';
import '../../styles/components/ProgressChart.css';

const ProgressChart = () => {
  const skills = [
    { name: "Technische vaardigheden", before: 60, after: 85 },
    { name: "Communicatie", before: 50, after: 80 },
    { name: "Probleemoplossend vermogen", before: 65, after: 90 },
    { name: "Internationale samenwerking", before: 40, after: 85 },
    { name: "Zelfstandig werken", before: 55, after: 90 }
  ];

  return (
    <div className="progress-chart">
      <h3>Mijn groei tijdens de opleiding</h3>
      <div className="chart-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-progress">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bars">
              <div className="progress-bar-container">
                <div className="progress-label">Voor</div>
                <div className="progress-bar">
                  <div 
                    className="progress before" 
                    style={{width: `${skill.before}%`}}
                  ></div>
                </div>
                <div className="progress-value">{skill.before}%</div>
              </div>
              <div className="progress-bar-container">
                <div className="progress-label">Na</div>
                <div className="progress-bar">
                  <div 
                    className="progress after" 
                    style={{width: `${skill.after}%`}}
                  ></div>
                </div>
                <div className="progress-value">{skill.after}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="chart-note">
        Deze grafiek toont mijn persoonlijke inschatting van mijn groei tijdens de opleiding.
      </p>
    </div>
  );
};

export default ProgressChart;