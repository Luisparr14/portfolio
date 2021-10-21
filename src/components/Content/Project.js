export const Project = ({image, title, uri, description}) =>(
  <div className="project">
    <h4 className="project-title">{title}</h4>
    <img alt={title} src={image} className="image-project"/>
  </div>
)