// src/components/layout/PageHeader.js
import React from 'react';
import '../../styles/components/PageHeader.css';

const PageHeader = ({ title, subtitle }) => {
  return (
    <header className="page-header">
      <div className="container">
        <div className="header-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;