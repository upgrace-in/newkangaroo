import Script from "next/script";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="fontawesome" src="https://kit.fontawesome.com/741c31a8f2.js" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
