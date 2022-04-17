import Script from 'next/script';
import '../styles/CommonStyle.css';
import '../styles/globals.css'
import '../styles/NavBar.css';
import '../styles/AboutMe.css';
import '../styles/Skills.css';
import '../styles/Projects.css';
import '../styles/Footer.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"/>
      <Script defer src='/js/NavBar.js'/>
      <Script src='/js/projects.js' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
