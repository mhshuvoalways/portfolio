import DaringPage from "./public/projects/daringpage.png";
import EShop from "./public/projects/eshop.jpg";
import EssayContest from "./public/projects/essaycontestapp.jpg";
import PasswordVault from "./public/projects/passwordvault.png";
import MathPlus from "./public/projects/mathplus.png";
import Shopmate from "./public/projects/shopmate.jpg";
import Polling from "./public/projects/polling.jpg";
import TodoList from "./public/projects/todolist.jpg";
import EssayContestPage from "./public/projects/essaycontentlp.png";
import Q2Life from "./public/projects/q2life.png";
import Cude from "./public/projects/cude.png";
import Duhoot from "./public/projects/duhoot.png";
import BingoGame from "./public/projects/bingogame.png";
import Portfolio1 from "./public/projects/portfolio1.png";
import Portfolio2 from "./public/projects/portfolio2.png";
import Alekhya from "./public/projects/alekhya.org.png";

const Projects = [
  {
    id: "EShop",
    type: "fullstack",
    image: EShop,
    title: "e-Shop",
    description:
      "E-Shop is a functionally oriented multi-vendor ecommerce application where users can get almost all the necessary facilities. There are 2 types of payment methods available such as PayPal and Razorpay",
    technologies: [
      "React",
      "Redux",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "SMTP server",
      "Twilio API",
      "Netlify",
      "Cyclic",
    ],
    githubLink: "https://github.com/mlhnshuvo/ecommerce-app",
    webLink: "https://ecommerce-app-mhs.netlify.app",
  },
  {
    id: "DaringPage",
    type: "fullstack",
    image: DaringPage,
    title: "Daring Page",
    description:
      "Daring Page is a blog application where users can read and learn about programming languages, libraries, frameworks and trending technologies",
    technologies: [
      "Nextjs",
      "Next-auth",
      "Tailwind",
      "Expressjs",
      "MongoDB",
      "Vercel",
    ],
    githubLink: "https://github.com/mlhnshuvo/ecommerce-app",
    webLink: "https://ecommerce-app-mhs.netlify.app",
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
    githubLink: "https://github.com/mlhnshuvo/password-manager-app",
    webLink: "https://password-manager-mhs.netlify.app",
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
      "Cyclic",
    ],
    githubLink: "https://github.com/mlhnshuvo/monomousumicontest",
    webLink: "https://www.monomousumicontest.com",
  },
  {
    id: "MathPlus",
    type: "frontend",
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
    githubLink: "https://github.com/mlhnshuvo/monomousumicontest",
    webLink: "https://www.monomousumicontest.com",
  },
  {
    id: "Shopmate",
    type: "frontend",
    image: Shopmate,
    title: "Shop Mate",
    description:
      "Shop Mate is a simple functional-based application where users can add, delete and update buckets and add a list of items under each bucket.",
    technologies: ["React", "BEM", "Easy-peasy", "Netlify"],
    githubLink: "https://github.com/mlhnshuvo/shopmate",
    webLink: "https://shopmate-mhs.netlify.app",
  },
  {
    id: "Polling",
    type: "frontend",
    image: Polling,
    title: "Polling",
    description:
      "Polling is a simple functional-based application where users can add, delete and update poll category and add vote under each category.",
    technologies: ["React", "Netlify"],
    githubLink: "https://github.com/mlhnshuvo/poll-app",
    webLink: "https://polling-mhs.netlify.app",
  },
  {
    id: "TodoList",
    type: "frontend",
    image: TodoList,
    title: "TodoList",
    description:
      "TodoList is a simple application where users can add and filter todo",
    technologies: ["React", "Netlify"],
    githubLink: "https://todolist-mhs.netlify.app",
    webLink: "https://github.com/mlhnshuvo/todo-app",
  },
  {
    id: "Q2Life",
    type: "landingpage",
    image: Q2Life,
    title: "Q2Life",
    description:
      "Q2Life is a good-looking business web page with some DOM operation.",
    technologies: ["Figma", "HTML", "CSS", "DOM", "Netlify"],
    githubLink: "https://github.com/mlhnshuvo/q2life-landing-page",
    webLink: "https://q2life.netlify.app",
  },
  {
    id: "Cude",
    type: "landingpage",
    image: Cude,
    title: "Cude",
    description: "A simple landing page with html, css and totally responsive.",
    technologies: ["HTML", "CSS", "jQuery", "Netlify"],
    githubLink: "https://github.com/mlhnshuvo/cude-landing-page",
    webLink: "https://cude-mhs.netlify.app",
  },
  {
    id: "Duhoot",
    type: "landingpage",
    image: Duhoot,
    title: "Duhoot",
    description: "A simple landing page with html, css and totally responsive.",
    technologies: ["HTML", "CSS", "jQuery", "Netlify"],
    githubLink: "https://github.com/mlhnshuvo/duhoot-landing-page",
    webLink: "https://duhoot.netlify.app",
  },
  {
    id: "Portfolio1",
    type: "landingpage",
    image: Portfolio1,
    title: "Portfolio 1",
    description: "This is my first portfolio with totally responsive",
    technologies: ["HTML", "CSS", "jQuery", "Netlify"],
    githubLink: "https://github.com/mlhnshuvo/duhoot-landing-page",
    webLink: "https://duhoot.netlify.app",
  },
  {
    id: "BingoGame",
    type: "others",
    image: BingoGame,
    title: "Bingo Game",
    description: "This is few pages of Bing game. Play bingo live on the best platform in Brazil",
    technologies: ["React", "Netlify"],
    githubLink: "https://portfolio2-mhs.netlify.app",
    webLink: "https://github.com/mlhnshuvo/portfolio2",
  },
  {
    id: "Portfolio2",
    type: "others",
    image: Portfolio2,
    title: "Portfolio2",
    description: "This is my second portfolio with totally responsive",
    technologies: ["React", "Netlify"],
    githubLink: "https://portfolio2-mhs.netlify.app",
    webLink: "https://github.com/mlhnshuvo/portfolio2",
  },
  {
    id: "EssayContestPage",
    type: "others",
    image: EssayContestPage,
    title: "Essay Contest Winners",
    description:
      "This is a page for essay contest students. Here they can see Awards, Prizes, Magazines etc.",
    technologies: ["React", "Netlify"],
    githubLink: "https://essay-contest-winner-page.netlify.app",
    webLink: "https://essay.monomousumicontest.com",
  },
  {
    id: "Alekhya",
    type: "others",
    image: Alekhya,
    title: "Alekhya",
    description:
      "Alekhya is an Indian Edutech Platform, that brings together technology to the education sector and providing requisite support to students, writers and school administrations. Student can purchase all the essay contest's book on this platform",
    technologies: ["WordPress", "c-Panel"],
    githubLink: "",
    webLink: "https://www.alekhya.org",
  },
];

export default Projects;
