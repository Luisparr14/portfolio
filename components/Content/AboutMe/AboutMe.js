import Image from "next/image"

export const AboutMe = () => {
  return (
    <section className="about-me section">
      <h2 id="aboutme" className="sub-title">Sobre mi</h2>
      <div className="content-about">
        {/* <img className='profile' loading='lazy' alt="profile" src='/images/Profile picture.webp'/> */}
        <div className="profile">
        <Image
          src={`/images/Profile picture.webp`}
          alt="profile"
          className="profile-picture"
          layout="fill"
          objectFit="contain"
        />
        </div>
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
