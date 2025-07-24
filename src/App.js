// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar'; // Make sure the file is really named 'Navbar.jsx'
import Contact from './pages/Contact';
import Housedecors from './pages/Housedecors';
import ResearchCerts from './pages/ResearchCerts';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/housedecors" element={<Housedecors />} />
        <Route path="/researchcerts" element={<ResearchCerts />} />
      </Routes>
    </Router>
  );
}

export default App;
