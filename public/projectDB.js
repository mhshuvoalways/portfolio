import MyFates from "./images/projects/business-webiste-template.png";
import Calendar from "./images/projects/calendar.png";
import Costnip from "./images/projects/costnip.png";
import CourseTemplateReact from "./images/projects/course-template-react.png";
import DaringPage from "./images/projects/daringpage.png";
import EShop from "./images/projects/eshop.png";
import Extention from "./images/projects/extension.png";
import HealthCareTemplate from "./images/projects/health-care-template.png";
import HorseRidingTrainingWebsite from "./images/projects/horse-riding-training-website.png";
import MathPlus from "./images/projects/mathplus.png";
import PasswordVault from "./images/projects/passwordvault.png";
import PennayCalc from "./images/projects/pennycalc.png";
import Polling from "./images/projects/polling.jpg";
import GoogleLocationSuggest from "./images/projects/react-google-place-suggest.png";
import Shopmate from "./images/projects/shopmate.png";
import Solutiongorilla from "./images/projects/solutiongorilla.png";
import SuperbInfo from "./images/projects/superb-info.png";
import TicTacToe from "./images/projects/tic-tac-toe.png";
import TodoList from "./images/projects/todolist.jpg";
import Traveling from "./images/projects/traveling.png";
import WeatherWithDom from "./images/projects/weather-with-dom.png";

const Projects = [
  {
    id: "PennayCalc",
    type: "fullstack",
    image: PennayCalc,
    title: "PennyCalc | Money Management App",
    description:
      "This app is designed to help users track and manage their finances efficiently. The app provides various features to monitor income, expenses, savings, and budget, along with detailed breakdowns and visual charts for better financial planning.",
    technologies: [
      "Nextjs",
      "React",
      "TypeScript",
      "Redux toolkit",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "Multer",
      "Cloudinary",
      "SMTP server",
      "Vercel",
    ],
    height: "150",
    githubLink: "https://github.com/mhshuvoalways/money-management-app",
    webLink: "https://pennycalc.vercel.app/",
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
    webLink: "https://mypasswordvault.vercel.app",
  },
  {
    id: "MathPlus",
    type: "frontend",
    image: MathPlus,
    title: "Math Plus",
    description:
      "➕Math+ is a free tool designed to help K-5 children improve their math skills through fun and interactive drills. This app focuses on basic algebra operations such as addition, subtraction, multiplication, and division. It’s perfect for enhancing your child's math abilities and identifying areas where they might need extra help.➕",
    technologies: ["React", "BEM", "Figma", "Vercel"],
    height: "130",
    githubLink: "https://github.com/mhshuvoalways/math-plus-app",
    webLink: "https://mathplusapp.vercel.app",
  },
  {
    id: "Extention",
    type: "extention",
    image: Extention,
    title: "Auto Easy Refresh Chrome Extension",
    description:
      "The Easy Auto Refresh Chrome Extension is a powerful tool that allows you to automatically refresh web pages at specified intervals. This documentation provides an overview of the extension's features, installation instructions, and usage examples.",
    technologies: ["Chrome", "Extension", "Reactjs"],
    height: "50",
    githubLink:
      "https://github.com/mhshuvoalways/auto-refresh-chrome-extension",
    webLink:
      "https://chromewebstore.google.com/detail/easy-auto-refresh/kefkjkdjjekifjbfnlmgmgkdolhblceb",
  },
  {
    id: "EShop",
    type: "fullstack",
    image: EShop,
    title: "e-Shop Multi Vendor",
    description:
      "E-Shop is a functionally oriented multi vendor ecommerce application where users can get almost all the necessary facilities. There are 2 types of payment methods available such as PayPal and Razorpay.",
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
    id: "ReactBookingCalender",
    type: "npm",
    image: Calendar,
    title:
      "A React component for booking and scheduling available time slots with ease.",
    description:
      "A React component for booking and scheduling available time slots with ease. react-booking-calendly lets you display a calendar with available for booking, providing a clean and customizable interface.",
    technologies: ["Reactjs", "NPM"],
    height: "100",
    githubLink: "https://github.com/mhshuvoalways/react-booking-calendly",
    webLink: "https://www.npmjs.com/package/react-booking-calendly",
  },
  {
    id: "GoogleLocationSuggest",
    type: "npm",
    image: GoogleLocationSuggest,
    title:
      "A React component providing Google locations Autocomplete functionality.",
    description:
      "This component allows users to search for locations by name or address, select suggestions, and view detailed location information such as latitude and longitude.",
    technologies: ["Reactjs", "NPM"],
    height: "100",
    githubLink:
      "https://github.com/mhshuvoalways/react-google-location-suggest",
    webLink: "https://www.npmjs.com/package/react-google-location-suggest",
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
    title: "Travel Booking Web Application",
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
    height: "380",
    githubLink: "https://github.com/mhshuvoalways/travel-booking-app",
    webLink: "https://travelbookingclient.vercel.app",
  },
  {
    id: "Solutiongorilla",
    type: "frontend",
    image: Solutiongorilla,
    title: "Solution Gorilla",
    description:
      "🦍 Solutions Gorilla's goal is to provide information about the platform that enables customers to deploy their applications and projects quickly and easily. It offers a four-week program to launch a platform including self-service capabilities, infrastructure setup, and security tooling. Their platform is based on cloud-native and open-source technologies.",
    technologies: ["Reactjs", "Tailwind", "Vercel"],
    height: "420",
    githubLink: "https://github.com/mhshuvoalways/solutions-gorilla-website",
    webLink: "https://solutionsgorilla.com",
  },
  {
    id: "MyFates",
    type: "fullstack",
    image: MyFates,
    title: "MyFates",
    description:
      "This website helps you discover your future 🔮. Get personal insights on life, love ❤️, and career 💼. Using ancient wisdom 🧠, it guides you to make better choices and unlock your full potential 🚀",
    technologies: ["Nextjs", "Nodejs", "Tailwind", "AWS", "CICD", "Nginx"],
    height: "1450",
    githubLink: "https://github.com/mhshuvoalways/myfates-web-app",
    webLink: "https://myfates.vercel.app",
  },
  {
    id: "HorseRidingTrainingWebsite",
    type: "frontend",
    image: HorseRidingTrainingWebsite,
    title: "Horse Riding Training Website",
    description:
      "💻This is a beautiful horse riding training web landing page🔥",
    technologies: ["Nextjs", "Tailwind", "Vercel"],
    height: "2120",
    githubLink:
      "https://github.com/mhshuvoalways/horse-riding-training-website",
    webLink: "https://horse-riding-training-website.vercel.app",
  },
  {
    id: "CourseTemplateReact",
    type: "frontend",
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
    type: "frontend",
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
    type: "frontend",
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
    githubLink: "https://github.com/mhshuvoalways/saving-personal-data",
    webLink: "https://superb-info.netlify.app",
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
    type: "frontend",
    image: TicTacToe,
    title: "Tic Tac Toe Game",
    description: "React tic tac toe game🏆",
    technologies: ["React", "Netlify"],
    height: "",
    githubLink: "https://github.com/mhshuvoalways/tic-tac-toe-game",
    webLink: "https://tic-tac-toe-mhs.netlify.app",
  },
];

export default Projects;
