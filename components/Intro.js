import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import MyImage from "../public/mhshuvoalways.jpg";

function Intro() {
  const [index, setIndex] = useState(0);

  return (
    <Element
      className="my-container lg:h-screen flex items-center justify-center lg:justify-between lg:flex-row flex-col-reverse flex-wrap pt-36 lg:pt-14 gap-10"
      name="home"
    >
      <Fade bottom>
        <div className="space-y-5 md:space-y-10 lg:w-6/12">
          <p className="text-gray-600 uppercase hidden lg:block">
            Welcome to my world
          </p>
          <div className="flex gap-2 sm:gap-5 items-center text1">
            <p className="text1 font-semibold textGradient">Hi, I’m MH Shuvo</p>
            <p className="animate-wave">👋</p>
          </div>
          <p className="text2 text-gray-200">Web & Mobile Application Developer</p>
          <p className="text-xl">
            🚀As an expert in JavaScript, Reactjs, React Native, Nextjs, and
            Nodejs, I specialize in building Web & Mobile Applications that not
            only look great but also deliver exceptional scalability,
            availability, usability, maintainability, reliability, and security.
            <br />
            <br />
            🎯
            {`Let's work together to elevate your applications to new heights.
            Reach out to me via DM, and let's discuss how we can collaborate to
            achieve your goals. Your application transformation is just one
            click away!`}
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://docs.google.com/document/d/1_twoMTghS8p_C-yD73SUsPFA6Kxl62u68FyD6CXHx3Q/edit?usp=sharing"
              target="_blank"
              className="bgGradient border-primary px-6 py-2 rounded-full font-light text-gray-800"
            >
              Resume
            </a>
          </motion.button>
        </div>
      </Fade>
      <div className="w-8/12 lg:w-4/12">
        <p className="text-gray-600 uppercase lg:hidden block text-center mb-5">
          Welcome to my world
        </p>
        <Image
          src={MyImage}
          alt={MyImage}
          className="animate-mypicture rounded-full"
        />
      </div>
    </Element>
  );
}

export default Intro;
