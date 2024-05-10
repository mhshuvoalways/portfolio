import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>MH Shuvo | Software Developer</title>
        <meta
          name="description"
          content="I specialize in building Software Developer that not only look great but also deliver exceptional scalability, availability, usability, maintainability, reliability, and security."
        />
        <meta
          name="keywords"
          content="software developer, web design, web development, mobile development, extension development, full stack developer, javaScript, python, reactjs, react Native, nextjs, nodejs, mongoDB"
        />
        <meta name="author" content="MH Shuvo" />
        <meta name="language" content="English" />

        {/* Social Meta Tags */}
        <meta property="og:title" content="MH Shuvo | Software Developer" />
        <meta
          property="og:description"
          content="I specialize in building Software Developer that not only look great but also deliver exceptional scalability, availability, usability, maintainability, reliability, and security."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mhshuvoalways.xyz" />
        <meta
          property="og:image"
          content="https://www.mhshuvoalways.xyz/social_image.png"
        />
        <meta property="og:image:alt" content="MH Shuvo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MH Shuvo | Software Developer" />
        <meta
          name="twitter:description"
          content="I specialize in building Software Developer that not only look great but also deliver exceptional scalability, availability, usability, maintainability, reliability, and security."
        />
        <meta
          name="twitter:image"
          content="https://www.mhshuvoalways.xyz/social_image.png"
        />
        <meta name="twitter:image:alt" content="MH Shuvo" />

        {/* google search console */}
        <meta
          name="google-site-verification"
          content="Emsj9m4YMOWhv0OQpmwdXBzzFbYdUp-DpmWpukNsWj0"
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
