import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "MH Shuvo | Software Developer | Web, Mobile & AI Agent Application Developer",
  description:
    "As an expert in JavaScript, Reactjs, React Native, Nextjs, and Nodejs, I specialize in building Web, Mobile & AI Agent Applications that not only look great but also deliver exceptional scalability, availability, usability, maintainability, reliability, and security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
        ></link>
      </head>
      <body className={`bg-black ${inter.className}`}>
        {children}
        {/* Google Analytics */}
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

        {/* Chatbot Script */}
        <Script id="chatbot-widget" strategy="afterInteractive">
          {`
            window.chatbotUserId = '89bae0f4-3516-4b49-9316-0e3f59d2698c';
            (function() {
              const script = document.createElement('script');
              script.src = 'https://app.chatbotsense.com/chatbot-widget.js';
              script.async = true;
              document.head.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
