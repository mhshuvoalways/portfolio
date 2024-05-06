import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>MH Shuvo</title>
        <meta
          name="description"
          content="Full stack web developer"
          key="desc"
        />
        <meta property="og:title" content="MH Shuvo Portfolio" />
        <meta property="og:description" content="MH Shuvo Portfolio" />
        <meta property="og:image" content="" />
        <link rel="icon" type="image/x-icon" href="favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />

        {/* google search console */}
        <meta
          name="google-site-verification"
          content="Emsj9m4YMOWhv0OQpmwdXBzzFbYdUp-DpmWpukNsWj0"
        />
      </Head>
      {/* google analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', ${process.env.MEASUREMENT_ID});
        `}
      </Script>
      <div className={`${inter.className} common-style`}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
