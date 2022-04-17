import { AboutMe } from '../components/Content/AboutMe/AboutMe'
import { NavBar } from '../components/Content/Header/Navbar'
import { Skills } from '../components/Content/Skills/Skills'
import { Projects } from '../components/Content/Projects/Projects'
import { Footer } from '../components/Content/Footer/Footer'
export default function Home({ socialmedias, projects, skills }) {
  return (
    <>
      <NavBar />
      <div id="content-page">
        <AboutMe />
        <Skills
          skills={skills}
        />
        <Projects
          desktop={projects.desktop}
          mobile={projects.mobile}
        />
        <Footer
          data={socialmedias}
        />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const socialmedias = require('../public/data/socialmedia.json')
  const projects = require('../public/data/projects.json')
  const skills = require('../public/data/skills.json')
  return {
    props: {
      socialmedias,
      projects,
      skills
    }
  }
}
