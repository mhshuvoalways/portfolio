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
      <head>{/* You can add other meta or link tags here */}</head>
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
        {/* <Script id="chatbot-widget" strategy="afterInteractive">
          {`
            window.chatbotUserId = 'f4500a06-5eff-411d-8786-853d9b0093d7';
            (function() {
              const script = document.createElement('script');
              script.src = 'http://localhost:8080/chatbot-widget.js';
              script.async = true;
              document.head.appendChild(script);
            })();
          `}
        </Script> */}
      </body>
    </html>
  );
}
