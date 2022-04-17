import Script from 'next/script';
import '../styles/CommonStyle.css';
import '../styles/globals.css'
import '../styles/NavBar.css';
import '../styles/AboutMe.css';
import '../styles/Skills.css';
import '../styles/Projects.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
      <Script defer src='/js/main.js'/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
