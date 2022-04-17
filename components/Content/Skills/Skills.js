import { Skill } from './Skill';
import React from 'react';

const skills = [
  {
    id: 1,
    title: 'css3',
    logo: '/logos/Skills/css3.png',
  },
  {
    id: 2,
    title: 'html5',
    logo: '/logos/Skills/html.png',
  },
  {
    id: 3,
    title: 'Git',
    logo: '/logos/Skills/git.png',
  },
  {
    id: 4,
    title: 'JavaScript',
    logo: '/logos/Skills/JavaScript.png',
  },
  {
    id: 5,
    title: 'React js',
    logo: '/logos/Skills/React.png',
  },
  {
    id: 6,
    title: 'Node js',
    logo: '/logos/Skills/Node.png',
  },
  {
    id: 7,
    title: 'MySQL',
    logo: '/logos/Skills/MySQL.png',
  },
  {
    id: 8,
    title: 'Java',
    logo: '/logos/Skills/Java.png',
  }
]

export const Skills = () => (
  <React.Fragment>
    <section id="skills" className="skills-container section">
      <h2 className="sub-title">Habilidades</h2>
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
    </section>
  </React.Fragment>
)