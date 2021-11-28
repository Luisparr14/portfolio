import profile from '../../../assets/images/Profile picture.jpg'
export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 id="aboutme" className="sub-title">Sobre mi</h2>
      <div className="content-about">
        <img alt="profile" src={profile} />
        <p className="presentation">Mi nombre es Luis Angel, soy una persona seria cuando se trata de trabajo y a la vez puedo ser
          alguien que tiene buenas relaciones con las personas que le rodean, me gusta mucho la tecnología y
          la programación, tambien me gusta mucho el deporte de vez en cuando juego futbol.
          No te arrepentiras si trabajas conmigo.
        </p>
      </div>
    </div>
  )
}