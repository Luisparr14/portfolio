import './App.css';
import './styles/NavBar.css'
import './styles/AboutMe.css'
import './styles/Skills.css'
import './styles/Projects.css'
import './styles/Footer.css'
import './styles/CommonStyle.css'
import { NavBar } from './components/Header/NavBar';
import React from 'react';
import { AboutMe } from './components/Content/AboutMe';
import { Skills } from './components/Content/Skills';
import { Projects } from './components/Content/Projects';
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div id="content-page">
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
