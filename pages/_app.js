import Script from 'next/script';
import '../styles/globals.css'
import '../styles/NavBar.css';
import '../styles/AboutMe.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
      <Script src='/js/main.js'/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
