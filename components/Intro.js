import Image from "next/image";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import MyImage from "../public/mhshuvo.png";

function Intro() {
  const [index, setIndex] = useState(0);
  const texts = [
    "committed",
    "passionate",
    "fast learner",
    "self taught",
    "enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Element
      className="my-container lg:h-screen flex items-center justify-center lg:justify-between flex-wrap pt-36 pb-10 lg:py-14 gap-10"
      name="home"
    >
      <Fade bottom>
        <div className="space-y-5 md:space-y-10 lg:w-6/12">
          <p className="text-gray-600 uppercase">Welcome to my world</p>
          <div className="flex gap-2 sm:gap-5 items-center text1">
            <h2>Hi, I’m MH Shuvo</h2>
            <p className="animate-wave">👋</p>
          </div>
          <div className="text2 relative text-primary">
            <p>A</p>
            <p id="animated-text" className="italic mb-20">
              {texts.map((text, i) => (
                <span
                  key={i}
                  className={`absolute top-0 left-7 transform transition-transform duration-500 ${
                    i === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  {text}
                </span>
              ))}
            </p>
            <p className="absolute top-5 left-0 sm:top-0 sm:left-36 md:left-44 w-full">
              front end developer
            </p>
          </div>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://drive.google.com/file/d/1kO6sGCsUXSYhVbmSivzIrhU_aispKpcJ/view?usp=share_link"
              target="_blank"
              className="bg-secondary border-primary px-6 py-2 rounded-full font-light"
            >
              Resume
            </a>
          </motion.button>
        </div>
      </Fade>
      <Image
        src={MyImage}
        alt={MyImage}
        className="w-6/12 lg:w-3/12 animate-mypicture"
      />
    </Element>
  );
}

export default Intro;
