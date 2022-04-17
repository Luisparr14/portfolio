import { ProjectRender } from './ProjectsRender'
const projectsDesktop = [
  {
    name: 'Easy Tasks',
    image: '/projects images/Easy Tasks/easy tasks.webp',
    description: 'Es una aplicación de tareas hecha con React js y Node js',
    repo: 'https://github.com/Luisparr14/tasks',
    uri: 'https://easy-tasks-20217.web.app'
  },
  {
    name: 'Programa de compromisos',
    image: '/projects images/Compromisos/Home Page.webp',
    description: 'Aplicacion que ayuda con el manejo de tareas o compromisos en una clase o trabajo',
    repo: '',
    uri: 'https://reuniones-app.herokuapp.com/'
  },
]

const projectsMobile = [
  {
    name: 'Time Kids',
    image: '/projects images/Time Kids/Home Page.webp',
    description: 'App interactiva para que los niños aprendan y jueguen',
    repo: 'https://github.com/Luisparr14/Time-Kids',
    uri: ''
  },
  {
    name: 'Restauranked',
    image: '/projects images/Restauranked/Home Page.webp',
    description: 'Rankea los restaurantes de tu zona',
    repo: 'https://github.com/Luisparr14/Restauranked',
    uri: ''
  },
  {
    name: 'Check In Work',
    image: '/projects images/Check In Work/ListadoRegistros.jfif',
    description: 'Administra la hora de llegada de tus empleados',
    repo: 'hhttps://github.com/Luisparr14/check-in-work-app',
    uri: ''
  },
]

export const Projects = () => (
  <div className="projects-container section">
    <ProjectRender projectsData={projectsDesktop} nameClass="desktop" sectionName="Proyectos para escritorio" />
    <ProjectRender projectsData={projectsMobile} nameClass="mobile" sectionName="Proyectos para moviles" />
  </div>
)