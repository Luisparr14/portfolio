import { Project } from './Project'
export const ProjectRender = ({ projectsData, sectionName, nameClass }) => (
  <>
    <h2 className="sub-title">{sectionName}</h2>
    <div className={`projects-list-${nameClass}`}>
      {
        projectsData.map((proj) => {
          return <Project
            key={proj.name}
            title={proj.name}
            description={proj.description}
            image={proj.image}
            uri={proj.uri}
            repo={proj.repo}
            typeProject={nameClass}
          />
        })
      }
    </div>
  </>
);
