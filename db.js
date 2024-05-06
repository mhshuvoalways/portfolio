import DaringPage from "./public/projects/daringpage.png";
import EShop from "./public/projects/eshop.png";
import DrawOnScreenshtos from "./public/projects/drawing-tool.png";
import EssayContest from "./public/projects/essaycontestapp.png";
import Traveling from "./public/projects/traveling.png";
import PasswordVault from "./public/projects/passwordvault.png";
import MathPlus from "./public/projects/mathplus.png";
import TripRouting from "./public/projects/trip-routing.png";
import MyFates from "./public/projects/business-webiste-template.png";
import HorseRidingTrainingWebsite from "./public/projects/horse-riding-training-website.png";
import CourseTemplateReact from "./public/projects/course-template-react.png";
import HealthCareTemplate from "./public/projects/health-care-template.png";
import Costnip from "./public/projects/costnip.png";
import SuperbInfo from "./public/projects/superb-info.png";
import Spaymart from "./public/projects/spaymart.png";
import WeatherWithDom from "./public/projects/weather-with-dom.png";
import Shopmate from "./public/projects/shopmate.png";
import Keflemariam from "./public/projects/keflemariam.png";
import Polling from "./public/projects/polling.jpg";
import TodoList from "./public/projects/todolist.jpg";
import EssayContestPage from "./public/projects/essaycontentlp.png";
import Q2Life from "./public/projects/q2life.jpg";
import Dietis from "./public/projects/dietis.png";
import Cude from "./public/projects/cude.png";
import Portfolio1 from "./public/projects/portfolio1.png";
import BlogUsingThirdPartyApi from "./public/projects/blog-using-third-party-api.png";
import TicTacToe from "./public/projects/tic-tac-toe.png";
import Alekhya from "./public/projects/alekhya.org.jpg";
import Extention from "./public/projects/extension.png";
import Rentify from "./public/projects/rentify.png";

const Projects = [
  {
    id: "EShop",
    type: "fullstack",
    image: EShop,
    title: "e-Shop Multi Vendor",
    description:
      "E-Shop is a functionally oriented multi vendor ecommerce application where users can get almost all the necessary facilities. There are 2 types of payment methods available such as PayPal and Razorpay",
    technologies: [
      "React",
      "Redux",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "Multer",
      "Cloudinary",
      "SMTP server",
      "Twilio API",
      "Vercel",
    ],
    height: "550",
    githubLink: "https://github.com/mhshuvoalways/multi-vendor-ecommerce",
    webLink: "https://eshop-multi-vendor.vercel.app",
  },
  {
    id: "PasswordVault",
    type: "fullstack",
    image: PasswordVault,
    title: "Password Vault",
    description:
      "Password vault is designed to make managing passwords effortless. Users can generate passwords and save passwords of any social media or website.",
    technologies: [
      "React",
      "Vitejs",
      "Framer-motion",
      "Expressjs",
      "MongoDB",
      "Netlify",
      "Cyclic",
    ],
    height: "480",
    githubLink: "https://github.com/mhshuvoalways/password-manager-app",
    webLink: "https://password-manger-mhs.vercel.app",
  },
  {
    id: "Extention",
    type: "extention",
    image: Extention,
    title: "Auto Refresh Chrome Extension",
    description:
      "The Auto Refresh Chrome Extension is a powerful tool that allows you to automatically refresh web pages at specified intervals. This documentation provides an overview of the extension's features, installation instructions, and usage examples.",
    technologies: ["Chrome", "Extension", "Reactjs"],
    height: "50",
    githubLink:
      "https://github.com/mhshuvoalways/auto-refresh-chrome-extension",
    webLink: "",
  },
  {
    id: "MyFates",
    type: "fullstack",
    image: MyFates,
    title: "MyFates",
    description:
      "MyFates is a Japanese-Korean self empowering service that was made to give deeper understanding about oneself. Myfates uses traditional horoscope and psychological methods to give maximum insight about oneself.🙆‍♂️",
    technologies: ["Nextjs", "Nodejs", "Tailwind", "AWS", "CICD", "Nginx"],
    height: "1500",
    githubLink: "https://github.com/mhshuvoalways/myfates-web-app-client",
    webLink: "https://myfates.com",
  },
  {
    id: "DrawOnScreenshtos",
    type: "fullstack",
    image: DrawOnScreenshtos,
    title: "Drawing on Screenshots",
    description:
      "An intuitive web application that allows users to upload two videos, control video playback, sync video playback positions, capture screenshots, draw on the videos and add text or voice notes to these screenshots. Users can then save and share their annotated videos and screenshots.",
    technologies: [
      "Reactjs",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "Multer",
      "Cloudinary",
      "Netlify",
      "Render",
    ],
    height: "",
    githubLink: "https://github.com/mhshuvoalways/drawing-on-screenshot",
    webLink: "https://baseball-direction.netlify.app",
  },
  {
    id: "DaringPage",
    type: "fullstack",
    image: DaringPage,
    title: "Daring Page",
    description:
      "Daring Page is my blog application with nextjs. It is totally SEO friendly.🚀 I just tried to clean and simple the UI so that user can use it easily. 💻",
    technologies: [
      "Nextjs",
      "Next-auth",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "Vercel",
    ],
    height: "190",
    githubLink: "https://github.com/mhshuvoalways/blog-app-nextjs",
    webLink: "https://daringpage.vercel.app",
  },
  {
    id: "Traveling",
    type: "fullstack",
    image: Traveling,
    title: "Travel Booking Web Application ",
    description:
      "This application allows users to browse available travel dates, book them, make payments via PayPal, and leave reviews.🚌 The application is built using Next.js, Node.js, and MongoDB. This document provides an overview of the application's features, installation instructions, and usage guidelines.",
    technologies: [
      "Nextjs",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "Cloudinary",
      "render",
      "Netlify",
    ],
    height: "360",
    githubLink: "https://github.com/mhshuvoalways/traveling-app",
    webLink: "https://traveling-mhs.netlify.app",
  },
  {
    id: "EssayContest",
    type: "fullstack",
    image: EssayContest,
    title: "Essay Contest",
    description:
      "Student can submit their 3 essays every quarter to pay with Razorpay. The teacher gives a mark and when the result publishes, student can download their certificate. Winners are announced as winners by email and they get an award. They can also download the certificate for the award.",
    technologies: [
      "React",
      "Redux",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "SMTP server",
      "Netlify",
      "Render",
    ],
    height: "",
    githubLink: "https://github.com/mhshuvoalways/essay-contest-of-students",
    webLink: "https://www.monomousumicontest.com",
  },
  {
    id: "MathPlus",
    type: "fullstack",
    image: MathPlus,
    title: "Math Plus",
    description:
      "If you try to help your kids do better in Math by supporting them with their homework and finding complementary resources to help them grow Mathematically, this application is for you. This application will help to increase your child's math skills with joy.",
    technologies: [
      "React",
      "BEM",
      "Expressjs",
      "MongoDB",
      "Figma",
      "Netlify",
      "Cyclic",
    ],
    height: "130",
    githubLink: "https://github.com/mhshuvoalways/math-plus-for-kids",
    webLink: "https://math-plus-app.vercel.app",
  },
  {
    id: "Rentify",
    type: "fullstack",
    image: Rentify,
    title: "Rentify",
    description:
      "This is a simple MERN stack web application for renting various items such as cars, motorcycles, bikes, and rooms. Users can select available dates for renting items. If a date is unavailable, it will be marked in red. Users can make payments using Stripe or choose to pay in cash. Additionally, users can log in to view their order history. The application also includes an admin panel for managing categories, products, orders, and users.",
    technologies: [
      "Nextjs",
      "Reactjs",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "Multer",
      "Cloudinary",
      "SMTP server",
      "Render",
      "Netlify",
    ],
    height: "410",
    githubLink: "https://github.com/mhshuvoalways/rent-app",
    webLink: "https://rentify-app.netlify.app",
  },
  {
    id: "TripRouting",
    type: "frontend",
    image: TripRouting,
    title: "Trip routing app with google map API",
    description:
      "This is a simple trip routing application that will help you trip✈",
    technologies: [
      "Nexjs",
      "Firebase-auth",
      "Google-maps-API",
      "Framer-motion",
      "Cyclic",
    ],
    height: "",
    githubLink:
      "https://github.com/mhshuvoalways/trip-routing-app-with-google-map-api",
    webLink: "https://trip-routing-app.vercel.app",
  },
  {
    id: "HorseRidingTrainingWebsite",
    type: "template",
    image: HorseRidingTrainingWebsite,
    title: "Horse Riding Training Website",
    description:
      "💻This is a beautiful horse riding training web landing page🔥",
    technologies: ["Nextjs", "Tailwind", "Vercel"],
    height: "2270",
    githubLink:
      "https://github.com/mhshuvoalways/horse-riding-training-website",
    webLink: "https://horse-riding-training-website.vercel.app",
  },
  {
    id: "CourseTemplateReact",
    type: "template",
    image: CourseTemplateReact,
    title: "Course Template React",
    description:
      "Beautiful and fresh UI react template. I build it for one of my client📚",
    technologies: ["React", "Tailwind", "Netlify"],
    height: "570",
    githubLink: "https://github.com/mhshuvoalways/react-course-template",
    webLink: "https://course-template-react.netlify.app",
  },
  {
    id: "HealthCareTemplate",
    type: "template",
    image: HealthCareTemplate,
    title: "Health Care Template",
    description:
      "💊This is a healthcare template for influencers and companies who want to donate money or something to help poor people who cannot afford treatment💊",
    technologies: ["React", "Netlify"],
    height: "830",
    githubLink: "https://github.com/mhshuvoalways/health-care-template",
    webLink: "https://health-care-template.netlify.app",
  },
  {
    id: "SuperbInfo",
    type: "template",
    image: SuperbInfo,
    title: "Saving personal data",
    description:
      "This is the application for saving personal data with redux persist with a simple but beautiful design from Figma in Reactjs, TypeScript🔥❤",
    technologies: [
      "React",
      "React-redux",
      "TypeScript",
      "Redux-persist",
      "Dropzone",
      "Framer-motion",
      "Vitejs",
      "Netlify",
    ],
    height: "90",
    githubLink: "https://github.com/mhshuvoalways/health-care-template",
    webLink: "https://health-care-template.netlify.app",
  },
  {
    id: "Spaymart",
    type: "template",
    image: Spaymart,
    title: "Spaymart Animal Saving Template",
    description:
      "This design is inspired by SPAYMART with reactjs. SPAYMART is an animal welfare organization established to end the unnecessary killing of animals🐈",
    technologies: ["React", "Tailwind", "Netlify"],
    height: "1510",
    githubLink:
      "https://github.com/mhshuvoalways/animals-saving-react-template",
    webLink: "https://spaymart.netlify.app",
  },
  {
    id: "Costnip",
    type: "contribute",
    image: Costnip,
    title: "Costnip",
    description: `I have actively contributed to this project by 
      1. Fixed critical bugs that were causing data loss
      2. Add a map feature with markers
      3. Optimized the strapi queries for better performance`,
    technologies: ["There are so many tools"],
    height: "880",
    githubLink: "",
    webLink: "https://costnip.com",
  },
  {
    id: "Shopmate",
    type: "frontend",
    image: Shopmate,
    title: "Shop Mate",
    description:
      "Shop Mate is a simple functional-based application where users can add, delete and update buckets and add a list of items under each bucket. This application inspired by google🥼",
    technologies: ["React", "BEM", "Easy-peasy", "Netlify"],
    height: "",
    githubLink: "https://github.com/mhshuvoalways/shopping-list-app",
    webLink: "https://shopmate-mhs.netlify.app",
  },

  {
    id: "Q2Life",
    type: "template",
    image: Q2Life,
    title: "Q2Life",
    description:
      "This is simple but beautiful and clean UI one page business figma to html template with dom manipulation🖥️",
    technologies: ["Figma", "HTML", "CSS", "DOM", "Netlify"],
    height: "600",
    githubLink: "https://github.com/mhshuvoalways/q2life-landing-page",
    webLink: "https://q2life.netlify.app",
  },
  {
    id: "Dietis",
    type: "template",
    image: Dietis,
    title: "Dietis React Template",
    description:
      "This is a design for an organization that was designed by Figma to React component💻",
    technologies: ["Figma", "React", "Recharts", "Netlify"],
    height: "80",
    githubLink: "https://github.com/mhshuvoalways/react-template-dietis",
    webLink: "https://dietis.netlify.app",
  },
  {
    id: "Cude",
    type: "template",
    image: Cude,
    title: "Cude",
    description: "Landing page with html, css, jquery plugins 💻",
    technologies: ["HTML", "CSS", "jQuery", "Netlify"],
    height: "1000",
    githubLink: "https://github.com/mhshuvoalways/cude-landing-page",
    webLink: "https://cude-page.netlify.app",
  },
  {
    id: "Portfolio1",
    type: "template",
    image: Portfolio1,
    title: "Portfolio 1",
    description:
      "This is a beautiful HTML, CSS, Bootstrap, jquery plugin portfolio",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Netlify"],
    height: "820",
    githubLink: "https://github.com/mhshuvoalways/portfolio1",
    webLink: "https://portfolio1-landing-page.netlify.app",
  },

  {
    id: "EssayContestPage",
    type: "template",
    image: EssayContestPage,
    title: "Essay Contest Winners",
    description:
      "This is a page for essay contest students. Here they can see Awards, Prizes, Magazines etc.",
    technologies: ["React", "Netlify", "Render"],
    height: "1910",
    githubLink: "https://github.com/mhshuvoalways/essay-contest-winner-page",
    webLink: "https://essay.monomousumicontest.com",
  },
  {
    id: "Keflemariam",
    type: "template",
    image: Keflemariam,
    title: "Keflemariam's Portfolio",
    description:
      "It was designed from Figma to HTML and then reactjs. Clean and good looking design💻",
    technologies: ["React", "Netlify", "Figma"],
    height: "670",
    githubLink: "https://github.com/mhshuvoalways/client-portfolio",
    webLink: "https://keflemariam.netlify.app",
  },
  {
    id: "WeatherWithDom",
    type: "frontend",
    image: WeatherWithDom,
    title: "Weather With Dom",
    description: "A simple weather app with JS AND DOM manipulation ☁",
    technologies: ["JS", "DOM manipulation", "HTML", "CSS", "Vercel"],
    height: "",
    githubLink: "https://github.com/mhshuvoalways/weather-app-with-dom",
    webLink: "https://weather-with-dom.vercel.app",
  },
  {
    id: "Polling",
    type: "frontend",
    image: Polling,
    title: "Polling",
    description:
      "Polling is a simple functional-based application where users can add, delete and update poll category and add vote under each category.",
    technologies: ["React", "Netlify"],
    height: "",
    githubLink: "https://github.com/mhshuvoalways/react-poll-app",
    webLink: "https://poll-vote.netlify.app",
  },
  {
    id: "TodoList",
    type: "frontend",
    image: TodoList,
    title: "TodoList",
    description:
      "TodoList is a simple application where users can add and filter todo",
    technologies: ["React", "Netlify"],
    height: "",
    githubLink: "https://todolist-mhs.netlify.app",
    webLink: "https://github.com/mhshuvoalways/todo-app",
  },
  {
    id: "TicTacToe",
    type: "template",
    image: TicTacToe,
    title: "Tic Tac Toe Game",
    description: "React tic tac toe game🏆",
    technologies: ["React", "Netlify"],
    height: "",
    githubLink: "https://github.com/mhshuvoalways/tic-tac-toe-game",
    webLink: "https://tic-tac-toe-mhs.netlify.app",
  },
  {
    id: "BlogUsingThirdPartyApi",
    type: "frontend",
    image: BlogUsingThirdPartyApi,
    title: "Blog Using Third Party Api",
    description:
      "This is a simple blog app using a third-party API service with reactjs and bootstrap",
    technologies: ["React", "Bootstrap", "API", "Vercel"],
    height: "480",
    githubLink: "https://github.com/mhshuvoalways/blog-using-third-party-api",
    webLink: "https://blog-using-third-party-api.vercel.app",
  },
  {
    id: "Alekhya",
    type: "wordpress",
    image: Alekhya,
    title: "Alekhya",
    description:
      "Alekhya is an Indian Edutech Platform, that brings together technology to the education sector and providing requisite support to students, writers and school administrations. Student can purchase all the essay contest's book on this platform",
    technologies: ["WordPress", "c-Panel"],
    height: "970",
    githubLink: "",
    webLink: "",
  },
];

export default Projects;
