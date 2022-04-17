import { Skill } from './Skill';
import React from 'react';

export const Skills = ({ skills = [] }) => (
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