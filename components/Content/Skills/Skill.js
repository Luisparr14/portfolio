import Image from "next/image";

export const Skill = ({logo,title}) => (
  <div className="skill">
    <Image src={logo} alt={title} width={60} height={60} />
    <label>{title}</label>
  </div>
)
