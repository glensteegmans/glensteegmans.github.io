// src/components/reflection/XFactorCard.js
import React from 'react';
import '../../styles/components/XFactorCard.css';

// Icons for each X-factor
const getFactorIcon = (title) => {
  if (title.includes("passie")) return "🔥";
  if (title.includes("Ondernemerschap")) return "💡";
  if (title.includes("Internationaal")) return "🌍";
  if (title.includes("Multidisciplinariteit")) return "🔄";
  if (title.includes("Duurzaamheid")) return "🌱";
  return "✨";
};

const XFactorCard = ({ factor, index }) => {
  const icon = getFactorIcon(factor.title);
  
  return (
    <div className="xfactor-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="xfactor-icon">{icon}</div>
      <h3>{factor.title}</h3>
      <p>{factor.description}</p>
    </div>
  );
};

export default XFactorCard;