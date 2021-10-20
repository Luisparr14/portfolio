import './App.css';
import './styles/NavBar.css'
import './styles/AboutMe.css'
import './styles/Skills.css'
import './styles/Projects.css'
import { NavBar } from './components/NavBar';
import React from 'react';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div id="content-page">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </React.Fragment>
  );
}

export default App;
