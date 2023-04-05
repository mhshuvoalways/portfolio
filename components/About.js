import React, { useRef } from "react";
import Image from "next/image";
import Bounce from "react-reveal/Bounce";
import MyImage from "../public/mhshuvo.png";

const About = ({ goTo }) => {
  const aboutRef = useRef(null);

  if (goTo) {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="my-container" ref={aboutRef}>
      <p className="section-title">About Me</p>
      <div className="flex justify-center lg:justify-between items-center gap-10 flex-wrap lg:flex-nowrap">
        <div className="w-5/12 lg:w-3/12 animate-mypicture">
          <Bounce bottom>
            <Image src={MyImage} alt={MyImage} />
          </Bounce>
        </div>
        <div className="w-full lg:w-9/12">
          <p className="text2">Hi There ✌</p>
          <p className="mt-10 text-justify leading-8">
            Im a professional and passionate Frond-End Developer focused on
            efficiency and constant learning. Courteous and enthusiastic, I am
            interested in Web Applications and everything in its orbit. I
            fascinated by web programming, developing apps and building
            websites. I am gaining knowledge and ideas working in this area. I
            am keen to gain more experience in the field. My goal is to build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
            <br />
            <br />
            For this reason, I’m looking for a company willing to offer me a
            placement among its developers. In return, I would offer my full
            commitment, and be a pleasant and friendly addition to a team. I am,
            therefore currently looking for a job or an internship as a web
            developer. I always want to learn more, do more, and be more. I’m
            also a firm believer that we should never settle. I’m hard working,
            super curious, passionate, committed, and also a fast learner!
            <br />
            <br />
            For this reason, I’m looking for a company willing to offer me a
            placement among its developers. In return, I would offer my full
            commitment, and be a pleasant and friendly addition to a team. I am,
            therefore currently looking for a job or an internship as a web
            developer. I always want to learn more, do more, and be more. I’m
            also a firm believer that we should never settle. I’m hard working,
            super curious, passionate, committed, and also a fast learner!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
