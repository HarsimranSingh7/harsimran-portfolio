// App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Extracurricular from './components/Extracurricular';
import MessageMe from './components/MessageMe'
import './App.css';

function App() {
    return (
      <div className="App">
      <NavBar />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Certifications />
      <Achievements />
      <Extracurricular />
      <Education />
      <MessageMe />
      <Footer />
  </div>
  
    );
}

export default App;