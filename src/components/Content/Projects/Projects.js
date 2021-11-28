import { Project } from './Project'
import EasyTask from '../../../assets/projects images/Easy Tasks/easy tasks.png'
import TimeKidsHome from '../../../assets/projects images/Time Kids/Home Page.png'
const projects = [
  {
    name: 'Easy Tasks',
    image: EasyTask,
    description:'Es una aplicación de tareas hecha con React js y Node js',
    repo: 'https://github.com/Luisparr14/tasks',
    uri: 'https://easy-tasks-20217.firebaseapp.com/'
  },
  {
    name: 'Time Kids',
    image: TimeKidsHome,
    description:'App interactiva para que los niños aprendan y jueguen',
    repo: 'https://github.com/Luisparr14/Time-Kids',
    uri: ''
  },
]

export const Projects = () => (
  <div className="projects-container">
    <h2 id="projects" className="sub-title">Proyectos de escritorio</h2>
    <div className="projects-list-desktop">
      {
        projects.map((proj, i) => {
          return <Project
            key={i}
            title={proj.name}
            description={proj.description}
            image={proj.image}
            uri={proj.uri}
            repo={proj.repo}
          />
        })
      }
    </div>
    <h2 id="projects" className="sub-title">Proyectos para moviles</h2>
    <div className="projects-list-movile">
      {
        projects.map((proj, i) => {
          return <Project
            key={i}
            title={proj.name}
            description={proj.description}
            image={proj.image}
            uri={proj.uri}
            repo={proj.repo}
          />
        })
      }
    </div>
  </div>
)