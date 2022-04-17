import Script from 'next/script'
import { ProjectRender } from './ProjectsRender'
export const Projects = ({ desktop = [], mobile = [] }) => {  
  return (
    <div className="projects-container section">
      <div id='projects'></div>
      <ProjectRender projectsData={desktop} nameClass="desktop" sectionName="Proyectos para escritorio" />
      <ProjectRender projectsData={mobile} nameClass="mobile" sectionName="Proyectos para moviles" />
    </div>
  )
}