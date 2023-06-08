import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Question from './pages/Question';

import './styles/App.css';
//Under Everything Else
function App() {

  
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />      
        <Route path="/about" element={<About />} />
        <Route path="/mystery" element={<Question />} />
      </Routes>
    </Router>
  );
}
export default App;
