const MyFates = "/images/projects/business-webiste-template.png";
const Calendar = "/images/projects/calendar.png";
const ChatbotSense = "/images/projects/chatbotsense.png";
const Costnip = "/images/projects/costnip.png";
const CourseTemplateReact = "/images/projects/course-template-react.png";
const Extension = "/images/projects/extension.png";
const HorseRidingTrainingWebsite =
  "/images/projects/horse-riding-training-website.png";
const LinkedInComment = "/images/projects/linkedin-ai-comment.png";
const MathPlus = "/images/projects/mathplus.png";
const PasswordVault = "/images/projects/passwordvault.png";
const PennayCalc = "/images/projects/pennycalc.png";
const GoogleLocationSuggest = "/images/projects/react-google-place-suggest.png";
const Solutiongorilla = "/images/projects/solutiongorilla.png";
const TimsTutor = "/images/projects/timstutor.png";
const Museras = "/images/projects/museras.png";
const TiTratto = "/images/projects/titratto-web-app.png";
const PokemonCollectionTracker =
  "/images/projects/pokemon-collection-mythique.png";

const Projects = [
  {
    id: "ChatbotSense",
    type: "fullstack",
    image: ChatbotSense,
    title: "Chatbot Sense",
    description:
      "ChatBot Sense® is a smart & easy AI chatbot that answers your customers instantly, 24/7. Boost customer satisfaction and save time with auto-generated replies. Boost customer satisfaction with Chatbot Sense®!",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "OpenAI",
      "Vector DB",
      "Vercel",
    ],
    height: "1000",
    githubLink: "",
    webLink: "https://www.chatbotsense.com/",
  },
  {
    id: "PokemonCollectionTracker",
    type: "fullstack",
    image: PokemonCollectionTracker,
    title: "Pokemon Collection Tracker",
    description:
      "Track Your Pokémon TCG Cards & Sealed Products. Scan Pokémon cards and sealed products, track real eBay prices, and follow the value of your collection over time.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "OpenAI",
      "Vercel",
    ],
    height: "400",
    githubLink: "",
    webLink: "https://pokemoncollectiontracker.vercel.app",
  },
  {
    id: "PennayCalc",
    type: "fullstack",
    image: PennayCalc,
    title: "PennyCalc | Money Management App",
    description:
      "This app is designed to help users track and manage their finances efficiently. The app provides various features to monitor income, expenses, savings, and budget, along with detailed breakdowns and visual charts for better financial planning.",
    technologies: ["ReactJS", "TypeScript", "Tailwind", "Supabase", "Vercel"],
    height: "150",
    githubLink: "https://github.com/mhshuvoalways/money-management-app",
    webLink: "https://pennycalc.vercel.app/",
  },
  {
    id: "Museras",
    type: "fullstack",
    image: Museras,
    title: "Museras | An AI-powered investment research app.",
    description:
      "Museras is an AI-powered investment research app. It helps investors go from idea to investment faster. The app collects data, analyzes it, and turns it into clear, actionable insights. Instead of spending hours on research, you get simple investment memos in minutes. Museras is built for all investors—from beginners to pros. It saves time, reduces risk, and helps you make smarter, confident decisions with trusted sources.",
    technologies: ["NextJS", "TypeScript", "Tailwind", "OpenAI", "Vercel"],
    height: "150",
    githubLink: "",
    webLink: "https://www.museras.com",
  },
  {
    id: "PasswordVault",
    type: "fullstack",
    image: PasswordVault,
    title: "Password Vault",
    description:
      "Password vault is designed to make managing passwords effortless. Users can generate passwords and save passwords of any social media or website.",
    technologies: [
      "ReactJS",
      "Framer-motion",
      "Expressjs",
      "MongoDB",
      "Vercel",
    ],
    height: "400",
    githubLink: "https://github.com/mhshuvoalways/password-manager-app",
    webLink: "https://mypasswordvault.vercel.app",
  },
  {
    id: "TiTratto",
    type: "fullstack",
    image: TiTratto,
    title: "TiTratto | A Wellness Web App",
    description:
      "Book massages, physiotherapy, and osteopathy at your home with certified professionals. Secure payments, verified reviews. Wellness comes to you.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "OpenAI",
      "Vercel",
    ],
    height: "120",
    githubLink: "https://github.com/mhshuvoalways/wellness-web-app",
    webLink: "https://titratto.vercel.app/",
  },
  {
    id: "LinkedInComment",
    type: "extension",
    image: LinkedInComment,
    title: "LinkedIn AI Comment",
    description:
      "The LinkedIn AI Comment is a Chrome extension designed to help professionals and businesses engage effectively on LinkedIn. It generates personalized comments to improve interactions on the platform. This tool is primarily aimed at individuals who want to increase their LinkedIn presence while saving time.",
    technologies: [
      "ReactJS",
      "Tailwind",
      "Framer-motion",
      "Stripe",
      "NodeJS",
      "MongoDB",
      "OpenAI",
      "Vercel",
    ],
    height: "500",
    githubLink: "https://github.com/mhshuvoalways/linkedin-ai-comment",
    webLink: "https://linkedinaicomment.com",
  },
  {
    id: "TimsTutor",
    type: "fullstack",
    image: TimsTutor,
    title: "Tutor Marketplace",
    description:
      "The Tutor Marketplace project, designed to facilitate seamless interactions between Admins, Tutors, and Students. The platform aims to simplify learning, teaching, and administrative workflows.",
    technologies: [
      "NextJS",
      "motion-primitives",
      "Zoom API",
      "Stripe",
      "Resend",
      "NodeJS",
      "Expressjs",
      "MongoDB",
      "Vercel",
    ],
    height: "250",
    githubLink: "https://github.com/mhshuvoalways/tutor-marketplace",
    webLink: "https://timstutors.vercel.app",
  },
  {
    id: "MathPlus",
    type: "frontend",
    image: MathPlus,
    title: "Math Plus",
    description:
      "➕Math+ is a free tool designed to help K-5 children improve their math skills through fun and interactive drills. This app focuses on basic algebra operations such as addition, subtraction, multiplication, and division. It’s perfect for enhancing your child's math abilities and identifying areas where they might need extra help.➕",
    technologies: ["ReactJS", "BEM", "Figma", "Vercel"],
    height: "130",
    githubLink: "https://github.com/mhshuvoalways/math-plus-app",
    webLink: "https://mathplusapp.vercel.app",
  },
  {
    id: "Extension",
    type: "extension",
    image: Extension,
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
    height: "",
    githubLink:
      "https://github.com/mhshuvoalways/react-google-location-suggest",
    webLink: "https://www.npmjs.com/package/react-google-location-suggest",
  },
  {
    id: "Solutiongorilla",
    type: "frontend",
    image: Solutiongorilla,
    title: "Solution Gorilla",
    description:
      "🦍 Solutions Gorilla's goal is to provide information about the platform that enables customers to deploy their applications and projects quickly and easily. It offers a four-week program to launch a platform including self-service capabilities, infrastructure setup, and security tooling. Their platform is based on cloud-native and open-source technologies.",
    technologies: ["Reactjs", "Tailwind", "Vercel"],
    height: "480",
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
    technologies: ["NextJS", "NodeJS", "Tailwind", "AWS", "CICD", "Nginx"],
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
    technologies: ["NextJS", "Tailwind", "Vercel"],
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
    technologies: ["ReactJS", "Tailwind", "Netlify"],
    height: "570",
    githubLink: "https://github.com/mhshuvoalways/react-course-template",
    webLink: "https://course-template-react.netlify.app",
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
];

export default Projects;
