import { ProjectRender } from './ProjectsRender'
import EasyTask from '../../../assets/projects images/Easy Tasks/easy tasks.png'
import TimeKidsHome from '../../../assets/projects images/Time Kids/Home Page.png'
import Restauranked from '../../../assets/projects images/Restauranked/Home Page.webp'
import Compromisos from '../../../assets/projects images/Compromisos/Home Page.webp'

const projectsDesktop = [
  {
    name: 'Easy Tasks',
    image: EasyTask,
    description: 'Es una aplicación de tareas hecha con React js y Node js',
    repo: 'https://github.com/Luisparr14/tasks',
    uri: 'https://easy-tasks-20217.firebaseapp.com/'
  },
  {
    name: 'Programa de compromisos',
    image: Compromisos,
    description: 'Aplicacion que ayuda con el manejo de tareas o compromisos en una clase o trabajo',
    repo: '',
    uri: 'https://reuniones-app.herokuapp.com/'
  },
]

const projectsMobile = [
  {
    name: 'Time Kids',
    image: TimeKidsHome,
    description: 'App interactiva para que los niños aprendan y jueguen',
    repo: 'https://github.com/Luisparr14/Time-Kids',
    uri: ''
  },
  {
    name: 'Restauranked',
    image: Restauranked,
    description: 'Rankea los restaurantes de tu zona',
    repo: 'https://github.com/Luisparr14/Restauranked',
    uri: ''
  },
]

export const Projects = () => (
  <div className="projects-container">
    <ProjectRender projectsData={projectsDesktop} nameClass="desktop" sectionName="Proyectos para escritorio" />
    <ProjectRender projectsData={projectsMobile} nameClass="mobile" sectionName="Proyectos para moviles" />
  </div>
)