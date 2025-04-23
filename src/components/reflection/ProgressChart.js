// src/components/reflection/ProgressChart.js
import React, { useEffect, useRef } from 'react';
import '../../styles/components/ProgressChart.css';

const ProgressChart = ({ xFactorData }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current || !xFactorData) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions based on the container size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    // Draw radar background
    drawRadarBackground(ctx, centerX, centerY, radius);
    
    // Draw data for start levels - changed to darker gray
    drawDataShape(ctx, centerX, centerY, radius, xFactorData, 'startLevel', 'rgba(100, 100, 100, 0.9)', 'rgba(100, 100, 100, 0.3)');
    
    // Draw data for end levels - changed to vibrant blue
    drawDataShape(ctx, centerX, centerY, radius, xFactorData, 'endLevel', 'rgba(25, 118, 210, 1)', 'rgba(66, 133, 244, 0.5)');
    
    // Draw labels
    drawLabels(ctx, centerX, centerY, radius, xFactorData);
    
    // Draw legend
    drawLegend(ctx, canvas.width, canvas.height);
    
  }, [xFactorData]);
  
  return (
    <div className="progress-chart">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

// Helper functions for drawing the chart
function drawRadarBackground(ctx, centerX, centerY, radius) {
  const levelCount = 5; // 5 levels from 1 to 5
  
  // Draw level circles - improved visibility
  for (let i = 1; i <= levelCount; i++) {
    const currentRadius = (radius / levelCount) * i;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, currentRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)'; // Made grid lines more visible
    ctx.stroke();
    
    // Add level number with better contrast
    if (i < levelCount) {
      ctx.fillStyle = 'rgba(80, 80, 80, 0.8)'; // Darker text for better visibility
      ctx.font = '12px Arial';
      ctx.fillText(i.toString(), centerX + 5, centerY - currentRadius + 15);
    }
  }
  
  // Draw axis lines (5 axes for 5 factors) - improved visibility
  const angleStep = (2 * Math.PI) / 5;
  
  for (let i = 0; i < 5; i++) {
    const angle = i * angleStep - Math.PI / 2; // Start from top (subtract PI/2)
    
    const endX = centerX + radius * Math.cos(angle);
    const endY = centerY + radius * Math.sin(angle);
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'rgba(150, 150, 150, 0.5)'; // Made axis lines more visible
    ctx.stroke();
  }
}

function drawDataShape(ctx, centerX, centerY, radius, data, levelKey, borderColor, fillColor) {
  const factorKeys = Object.keys(data);
  const angleStep = (2 * Math.PI) / factorKeys.length;
  
  ctx.beginPath();
  
  factorKeys.forEach((factor, index) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const value = data[factor][levelKey];
    const scaledRadius = (radius / 5) * value; // Scale to max 5
    
    const x = centerX + scaledRadius * Math.cos(angle);
    const y = centerY + scaledRadius * Math.sin(angle);
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  
  // Close the path
  ctx.closePath();
  
  // Fill with semi-transparent color
  ctx.fillStyle = fillColor;
  ctx.fill();
  
  // Stroke the outline
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Add dots at each data point
  factorKeys.forEach((factor, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const value = data[factor][levelKey];
    const scaledRadius = (radius / 5) * value;
    
    const x = centerX + scaledRadius * Math.cos(angle);
    const y = centerY + scaledRadius * Math.sin(angle);
    
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = borderColor;
    ctx.fill();
  });
}

function drawLabels(ctx, centerX, centerY, radius, data) {
  const factorKeys = Object.keys(data);
  const angleStep = (2 * Math.PI) / factorKeys.length;
  
  factorKeys.forEach((factor, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const labelRadius = radius + 25;
    
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);
    
    ctx.fillStyle = '#333333'; // Darker text for better visibility on white background
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Adjust text position based on angle
    let adjustedX = x;
    let adjustedY = y;
    
    if (angle === -Math.PI / 2) { // Top
      adjustedY -= 10;
    } else if (angle === Math.PI / 2) { // Bottom
      adjustedY += 10;
    } else if (angle === 0) { // Right
      adjustedX += 10;
    } else if (angle === Math.PI) { // Left
      adjustedX -= 10;
    }
    
    ctx.fillText(data[factor].title, adjustedX, adjustedY);
  });
}

function drawLegend(ctx, width, height) {
  const legendX = width - 150;
  const legendY = height - 50;
  
  // Start legend - updated color to match the chart
  ctx.fillStyle = 'rgba(100, 100, 100, 0.9)';
  ctx.fillRect(legendX, legendY, 15, 15);
  ctx.fillStyle = '#333333'; // Darker text for better visibility
  ctx.font = '12px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Start van traject', legendX + 25, legendY + 10);
  
  // End legend - updated color to match the chart
  ctx.fillStyle = 'rgba(25, 118, 210, 1)';
  ctx.fillRect(legendX, legendY + 25, 15, 15);
  ctx.fillStyle = '#333333'; // Darker text for better visibility
  ctx.fillText('Huidige niveau', legendX + 25, legendY + 35);
}

export default ProgressChart;