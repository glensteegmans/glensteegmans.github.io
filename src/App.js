// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Reflection from './pages/Reflection';
import Gallery from './pages/Gallery';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiel" element={<Profile />} />
            <Route path="/activiteiten" element={<Activities />} />
            <Route path="/activiteit/:id" element={<ActivityDetail />} />
            <Route path="/reflectie" element={<Reflection />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />
            <Route path="/galerij" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;