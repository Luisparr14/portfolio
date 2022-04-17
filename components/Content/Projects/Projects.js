import { ProjectRender } from './ProjectsRender'


export const Projects = ({desktop=[], mobile=[]}) => (
  <div className="projects-container section">
    <ProjectRender projectsData={desktop} nameClass="desktop" sectionName="Proyectos para escritorio" />
    <ProjectRender projectsData={mobile} nameClass="mobile" sectionName="Proyectos para moviles" />
  </div>
)