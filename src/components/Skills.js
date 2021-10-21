import { Skill } from './Skill';
import css3 from '../assets/logos/css3.png';
import html from '../assets/logos/html.png';
import git from '../assets/logos/git.png';
import JavaScript from '../assets/logos/JavaScript.png';
import ReactLogo from '../assets/logos/React.png';
import Node from '../assets/logos/Node.png';
import MySQL from '../assets/logos/MySQL.png';
import Java from '../assets/logos/Java.png';
import React from 'react';

const skills = [
  {
    id: 1,
    title: 'css3',
    logo: css3
  },
  {
    id: 2,
    title: 'html5',
    logo: html
  },
  {
    id: 3,
    title: 'Git',
    logo: git
  },
  {
    id: 4,
    title: 'JavaScript',
    logo: JavaScript
  },
  {
    id: 5,
    title: 'React js',
    logo: ReactLogo
  },
  {
    id: 6,
    title: 'Node js',
    logo: Node
  },
  {
    id: 7,
    title: 'MySQL',
    logo: MySQL
  },
  {
    id: 8,
    title: 'Java',
    logo: Java
  }
]

export const Skills = () => (
  <React.Fragment>
    <div className="skills-container">
      <h2 id="skills" className="sub-title">Skills</h2>
      <div className="skills-list">
        {
          skills.map((skill) => {
            return <Skill
              key={skill.id}
              title={skill.title}
              logo={skill.logo}
            />
          })
        }
      </div>
    </div>
  </React.Fragment>
)