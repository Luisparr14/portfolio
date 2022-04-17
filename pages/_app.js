import Script from 'next/script';
import '../styles/CommonStyle.css';
import '../styles/globals.css'
import '../styles/NavBar.css';
import '../styles/AboutMe.css';
import '../styles/Skills.css';
import '../styles/Projects.css';
import '../styles/Footer.css'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script defer src='/js/navbar.js'/>
      <Head>
        <title>Luis Angel - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio of Luis Angel, a Front-end developer" />
        <meta name="keywords" content="Front-end, Front-end developer, Front-end developer Luis Angel, Front-end Luis Angel, Front-end Luis Angel Portfolio, JavaScript, CSS, HTML, PHP" />
        <meta name="author" content="Luis Angel" />      
        <base href="/"/>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
