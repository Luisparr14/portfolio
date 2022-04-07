import Script from 'next/script';
import '../styles/globals.css'
import '../styles/NavBar.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=' crossOrigin='anonymous'/>
      <Script src='/js/main.js'/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
