import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MH Shuvo | Software Developer | Web & Mobile Application Developer",
  description:
    "As an expert in JavaScript, Reactjs, React Native, Nextjs, and Nodejs, I specialize in building Web & Mobile Applications that not only look great but also deliver exceptional scalability, availability, usability, maintainability, reliability, and security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* website */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mhshuvoalways.vercel.app`} />
        <meta
          property="og:image"
          content={`https://mhshuvoalways.vercel.app/images/social_image.png`}
        />
        <meta property="og:image:alt" content="MH Shuvo" />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MH Shuvo | Software Developer | Web & Mobile Application Developer"
        />
        <meta
          name="twitter:description"
          content="As an expert in JavaScript, Reactjs, React Native, Nextjs, and Nodejs, I specialize in building Web & Mobile Applications that not only look great but also deliver exceptional scalability, availability, usability, maintainability, reliability, and security."
        />
        <meta
          name="twitter:image"
          content={`https://mhshuvoalways.vercel.app/images/social_image.png`}
        />
        <meta name="twitter:image:alt" content="MH Shuvo" />

        {/* fontawesome */}
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-thin.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-solid.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-regular.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-light.css"
        />
      </head>
      <body className={`bg-black ${inter.className}`}>{children}</body>
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
         gtag('config', '${process.env.MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  );
}
