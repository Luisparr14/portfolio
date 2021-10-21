import profile from '../../assets/images/Profile picture.jpg'
export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 id="aboutme" className="sub-title">About me</h2>
      <div className="content-about">
        <img alt="profile" src={profile} />
        <p>Amet minim mollit non deserun t ullamco est sit aliqua dolor do amet sint. Velit officia conseq</p>
      </div>
    </div>
  )
}