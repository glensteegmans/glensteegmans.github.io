// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Activities from './pages/Activities';
import Profile from './pages/Profile';
import Reflection from './pages/Reflection';
import NotFound from './pages/NotFound';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Styles
import './styles/App.css';

function App() {
  // Force dark mode on page load
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  return (
    <Router>
      <div className="app dark-mode">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activiteiten" element={<Activities />} />
            <Route path="/profiel" element={<Profile />} />
            <Route path="/reflectie" element={<Reflection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;