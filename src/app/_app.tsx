// pages/_app.js
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Script */}
      <!-- Google tag (gtag.js) -->
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1K06YCZ69S"
        strategy="afterInteractive"
      />
      <Script  id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1K06YCZ69S');`}
      </Script>

      {/* Render the current page */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
