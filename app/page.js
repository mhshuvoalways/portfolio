"use client";

import Main from "@/app/components/common/main";
import MyImage from "@/public/images/mhshuvo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const social = [
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/mhshuvoalways",
  },
  {
    name: "Github",
    icon: "fa-brands fa-github",
    url: "https://www.github.com/mhshuvoalways",
  },
  {
    name: "Email",
    icon: "fa-solid fa-envelope",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=mhshuvoalways@gmail.com",
  },
  {
    name: "Fiverr",
    icon: "fi",
    url: "https://www.fiverr.com/mhshuvoit",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    url: "https://www.facebook.com/mhshuvoalways",
  },
];

const skills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "React Native",
  "TypeScript",
  "MongoDB",
  "AWS",
  "GraphQL",
  "Express.js",
];

const stats = [
  { number: "180+", label: "Projects Completed" },
  { number: "76+", label: "Happy Clients" },
  { number: "4.9⭐", label: "Average Rating" },
  { number: "4+", label: "Years Experience" },
];

const page = () => {
  return (
    <Main>
      {/* Hero Section */}
      <div className="mt-10 lg:mt-20 flex items-center justify-between gap-10 flex-col-reverse lg:flex-row min-h-[70vh]">
        {/* Content Section */}
        <div className="space-y-8 w-11/12 lg:w-7/12 relative">
          {/* Animated background elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

          {/* Greeting */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                👋 Hello there!
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="relative z-10">
            <h1 className="textGradient text1 font-bold leading-tight">
              {`I'm MH Shuvo`}
            </h1>
            <div className="mt-4">
              <h2 className="text-white text2 font-semibold leading-relaxed">
                <span className="inline-block">Software Developer</span>
                <span className="text-primary mx-2">|</span>
                <span className="inline-block">
                  Web & Mobile Application Developer
                </span>
              </h2>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 relative z-10">
            {social.map((el, index) => (
              <Link
                href={el.url}
                target="blank"
                key={el.name}
                title={el.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                  {el.name === "Fiverr" ? (
                    <span className="text-white font-black text-sm">fi</span>
                  ) : (
                    <i
                      className={`${el.icon} text-gray-400 group-hover:text-primary transition-colors duration-300`}
                    ></i>
                  )}

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {el.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Description */}
          <div className="relative z-10 space-y-6">
            <p className="text-gray-300 text3 font-medium leading-relaxed">
              I’m a passionate{" "}
              <span className="textGradient">web and mobile app developer</span>{" "}
              focused on building fast, beautiful websites and apps using{" "}
              <span className="textGradient">
                ReactJS, NextJS, React Native, NodeJS, Puppeteer, MongoDB and
                Supabase
              </span>
              . I create smooth, user-friendly experiences that work perfectly
              on all devices, from desktops to smartphones.
            </p>
            <p className="text-gray-300 text3 font-medium leading-relaxed">
              I’m also an{" "}
              <span className="textGradient">
                AI automation expert, ready to help you add smart, time-saving
                features
              </span>{" "}
              that make your projects smarter and more efficient.
            </p>
            <p className="textGradient text3 font-medium leading-relaxed">
              Want to take your business to the next level? Send me a message,
              and let’s build something amazing together.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="relative z-10">
            <p className="text-gray-400 text-sm mb-3 font-medium">
              Technologies I work with:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-full text-gray-300 text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              href="https://calendly.com/mhshuvoalways/support-for-building-website"
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
              >
                <span className="relative z-10"> 📅 Book a Call</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </motion.button>
            </Link>
            <Link href="/projects" className="group">
              <button className="px-6 py-3 bg-transparent border-2 border-primary/50 text-primary rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 font-semibold group-hover:scale-105">
                <span className="flex items-center gap-2">
                  🚀 View My Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-5/12 lg:w-80 flex justify-center">
          {/* Animated rings around image */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border border-secondary/30 animate-pulse"></div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 -right-8 w-4 h-4 bg-tertiary/20 rounded-full animate-bounce delay-1000"></div>

          <Image
            src={MyImage}
            alt="MH Shuvo - Software Developer"
            className="rounded-full relative z-10 border-4 border-primary animate-mypicture shadow-2xl"
            priority
          />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 blur-xl -z-10"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 lg:mt-32">
        <div className="text-center mb-12">
          <h3 className="text2 font-bold textGradient mb-4">
            Achievements & Impact
          </h3>
          <p className="text-gray-400">Numbers that speak for themselves</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold textGradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="mt-20 lg:mt-32">
        <div className="text-center mb-12">
          <h3 className="text2 font-bold textGradient mb-4">Explore More</h3>
          <p className="text-gray-400">Discover what I can do for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "My Services",
              desc: "Web & Mobile Development",
              link: "/services",
              icon: "🛠️",
            },
            {
              title: "Portfolio",
              desc: "180+ Completed Projects",
              link: "/projects",
              icon: "💼",
            },
            {
              title: "Client Reviews",
              desc: "5-Star Testimonials",
              link: "/reviews",
              icon: "⭐",
            },
          ].map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className="group block p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
              <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default page;
