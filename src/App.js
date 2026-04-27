import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/works" element={<Works isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
