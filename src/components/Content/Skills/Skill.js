export const Skill = ({logo,title}) => (
  <div className="skill">
    <img alt={title} src={logo}/>
    <label>{title}</label>
  </div>
)
