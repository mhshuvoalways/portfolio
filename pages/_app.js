import Head from "next/head";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>MH Shuvo</title>
        <meta name="description" content="MH Shuvo Portfolio" key="desc" />
        <meta property="og:title" content="MH Shuvo Portfolio" />
        <meta property="og:description" content="MH Shuvo Portfolio" />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
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
      </Head>
      <div className={`${inter.className} common-style`}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
