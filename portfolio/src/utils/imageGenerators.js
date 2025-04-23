// src/utils/imageGenerators.js
export const generateHackTheFutureImage = () => {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'>
    <defs>
      <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' style='stop-color:%233498db;stop-opacity:1' />
        <stop offset='100%' style='stop-color:%2316a085;stop-opacity:1' />
      </linearGradient>
    </defs>
    <rect width='800' height='400' fill='url(%23grad1)' />
    <g fill='white' opacity='0.1'>
      <path d='M0,120 L800,20 L800,100 L0,200 Z' />
      <path d='M0,220 L800,120 L800,200 L0,300 Z' />
      <path d='M0,320 L800,220 L800,300 L0,400 Z' />
    </g>
    <text x='400' y='150' text-anchor='middle' fill='white' font-family='Arial' font-size='48' font-weight='bold'>
      Hack The Future
    </text>
    <text x='400' y='200' text-anchor='middle' fill='white' font-family='Arial' font-size='24'>
      Cronos Groep Hackathon
    </text>
    <text x='400' y='250' text-anchor='middle' fill='white' font-family='Arial' font-size='20'>
      ASP.NET Core • Teamwork • Problem Solving
    </text>
    <text x='400' y='320' text-anchor='middle' fill='white' font-family='Arial' font-size='20'>
      Antwerpen Beurs • 15-16/11/2022
    </text>
  </svg>`;
};

export const generateEsnBelgiumImage = () => {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'>
    <defs>
      <linearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' style='stop-color:%232e86c1;stop-opacity:1' />
        <stop offset='100%' style='stop-color:%23007bff;stop-opacity:1' />
      </linearGradient>
    </defs>
    <rect width='800' height='400' fill='url(%23grad2)' />
    <g opacity='0.1' fill='white'>
      <circle cx='200' cy='150' r='80' />
      <circle cx='600' cy='250' r='60' />
      <circle cx='400' cy='100' r='40' />
      <circle cx='100' cy='300' r='50' />
      <circle cx='700' cy='150' r='70' />
    </g>
    <text x='400' y='150' text-anchor='middle' fill='white' font-family='Arial' font-size='48' font-weight='bold'>
      ESN Belgium
    </text>
    <text x='400' y='200' text-anchor='middle' fill='white' font-family='Arial' font-size='24'>
      IT Manager
    </text>
    <text x='400' y='250' text-anchor='middle' fill='white' font-family='Arial' font-size='20'>
      Drupal • PHP • MySQL • Mentoring
    </text>
    <text x='400' y='320' text-anchor='middle' fill='white' font-family='Arial' font-size='20'>
      België • 21/02/2024 - Nu
    </text>
  </svg>`;
};

export const generateInsticcStageImage = () => {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'>
    <defs>
      <linearGradient id='grad3' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' style='stop-color:%23e74c3c;stop-opacity:1' />
        <stop offset='100%' style='stop-color:%239b59b6;stop-opacity:1' />
      </linearGradient>
    </defs>
    <rect width='800' height='400' fill='url(%23grad3)' />
    <g opacity='0.1' fill='white'>
      <rect x='100' y='100' width='100' height='100' />
      <rect x='300' y='200' width='100' height='100' />
      <rect x='500' y='100' width='100' height='100' />
      <rect x='200' y='300' width='100' height='100' />
      <rect x='600' y='200' width='100' height='100' />
    </g>
    <text x='400' y='150' text-anchor='middle' fill='white' font-family='Arial' font-size='48' font-weight='bold'>
      INSTICC Stage
    </text>
    <text x='400' y='200' text-anchor='middle' fill='white' font-family='Arial' font-size='24'>
      Buitenlandse Stage in Portugal
    </text>
    <text x='400' y='250' text-anchor='middle' fill='white' font-family='Arial' font-size='20'>
      Machine Learning • NLP • React • Python
    </text>
    <text x='400' y='320' text-anchor='middle' fill='white' font-family='Arial' font-size='20'>
      Setúbal, Portugal • 2024
    </text>
  </svg>`;
};