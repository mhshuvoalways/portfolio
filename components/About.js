import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import Bounce from "react-reveal/Bounce";
import MyImage from "../public/mhshuvo.png";

const About = () => {
  return (
    <Element className="my-container" name="about">
      <p className="section-title">About Me</p>
      <div className="flex justify-center lg:justify-between items-center gap-10 flex-wrap lg:flex-nowrap">
        <div className="w-6/12 lg:w-3/12 animate-mypicture">
          <Bounce bottom>
            <Image src={MyImage} alt={MyImage} />
          </Bounce>
        </div>
        <div className="w-full lg:w-9/12">
          <p className="text2">Hi There ✌</p>
          <p className="mt-10 text-justify leading-8">
            I’m a professional and passionate Frond-End Developer focused on
            efficiency and constant learning. Courteous and enthusiastic, I am
            interested in Full Stack Web, Mobile applications and everything in
            its orbit. I fascinated by web and mobile programming, developing
            and building. I am gaining knowledge and ideas working in this area.
            I am keen to gain more experience in the field. My goal is to build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
            <br />
            <br />
            Therefore, I’m looking for a company willing to offer me a placement
            among its developers. In return, I would offer my full commitment,
            and be a pleasant and friendly addition to a team. I am, therefore
            currently looking for a job as Front-End or Full-Stack developer. I
            always want to learn more, do more, and be more. I’m also a firm
            believer that we should never settle. I’m hard working, super
            curious, committed, passionate, self taught, enthusiast, and also a
            fast learner!
            <br />
            <br />
            When I’m not in front of a computer screen, I’m probably watching
            movies, reading books, or crossing off another item on my bucket
            list.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
