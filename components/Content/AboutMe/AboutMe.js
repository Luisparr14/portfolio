import Image from "next/image"

export const AboutMe = () => {
  return (
    <section className="about-me section">
      <div id="aboutme"></div>    
      <h2 className="sub-title">Sobre mi</h2>
      <div className="content-about">
          <Image
            src={`/images/Profile picture.webp`}
            alt="profile"
            className="profile"
            width={600}
            height={600}
            objectFit="contain"
          />
        <div className="presentation">
          <p>Tengo una alta capacidad de trabajo en equipo. Soy estudiante de Ingeniería de sistemas
            en la Universidad de Córdoba actualmente en noveno semestre.
          </p>
          <p >Me gustan los videojuegos, el deporte, las peliculas y por supuesto la progamación.</p>
        </div>
      </div>
    </section>
  )
}
