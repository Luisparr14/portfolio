import { Project } from './Project'
import EasyTask from '../assets/projects images/easy tasks.png'
const projects = [
  {
    name: 'Easy Tasks',
    image: EasyTask,
    repo: 'https://github.com/Luisparr14/tasks',
    uri: 'https://easy-tasks-20217.firebaseapp.com/'
  }
]

export const Projects = () => (
  <div className="projects-container">
    <h2 id="projects" className="sub-title">Projects</h2>
    <div className="projects-list">
      {
        projects.map((proj, i) => {
          return <Project
            key={i}
            title={proj.name}
            image={proj.image}
            uri={proj.repo}
          />
        })
      }
    </div>
  </div>
)