import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
