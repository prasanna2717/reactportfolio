
import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/Navebar';
import About from './componenets/About';
import Projects from './componenets/Project';
import Contact from './componenets/Contact';
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import Resume from './componenets/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}


export default App;
