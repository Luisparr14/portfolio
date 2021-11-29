import profile from '../../../assets/images/Profile picture.webp'
export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 id="aboutme" className="sub-title">Sobre mi</h2>
      <div className="content-about">
        <img alt="profile" src={profile} />
        <div className="presentation">
          <p>Tengo una alta capacidad de trabajo en equipo. Soy estudiante de Ingeniería de sistemas
            en la Universidad de Córdoba actualmente en octavo semestre.
          </p>
          <p >Me gustan los videojuegos, el deporte, las peliculas y por supuesto la progamación.</p>
        </div>
      </div>
    </div>
  )
}