import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <h1>404</h1>
        <h2>Pagina niet gevonden</h2>
        <p>
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link to="/" className="back-home-btn">
          Terug naar homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;