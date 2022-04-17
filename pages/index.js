import Head from 'next/head'
import Image from 'next/image'
import { AboutMe } from '../components/Content/AboutMe/AboutMe'
import { NavBar } from '../components/Content/Header/Navbar'
import { Skills } from '../components/Content/Skills/Skills'
import { Projects } from '../components/Content/Projects/Projects'
export default function Home() {
  return (
    <>
      <NavBar />
      <div id="content-page">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </>
  )
}
