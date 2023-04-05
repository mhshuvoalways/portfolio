import { useRef } from "react";
import { Fade, Zoom } from "react-reveal";

const Experience = ({ goTo }) => {
  const experienceRef = useRef();

  if (goTo) {
    experienceRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="my-container" ref={experienceRef}>
      <p className="section-title">Working Experiences</p>
      <div className="flex justify-start sm:justify-center gap-10 flex-wrap sm:flex-nowrap item">
        <Fade left>
          <p className="w-5/12 text-right hidden sm:block mt-1">
            AUG 2021 - CURRENT
          </p>
        </Fade>
        <Zoom>
          <p className="border-2 w-1 rounded-full border-gray-500 hidden sm:block"></p>
        </Zoom>
        <Fade right>
          <div className="w-full sm:w-6/12">
            <div className="text2 flex items-center gap-5">
              <a
                href="https://www.fiverr.com/mhshuvoit"
                target="_blank"
                className="underline text-green-500"
              >
                Fiverr
              </a>
              <p>-</p>
              <p>Full Stack Web Developer</p>
            </div>
            <p className="mt-2 sm:hidden block text-gray-400">
              AUG 2021 - CURRENT
            </p>
            <ul className="mt-10 space-y-4">
              <li>◉ Eye-catching frontend development</li>
              <li>◉ Responsive design</li>
              <li>◉ Cross browsers support</li>
              <li>◉ API development</li>
              <li>◉ Fix bugs and enhance existing websites</li>
              <li>◉ Optimized</li>
              <li>◉ Scalable</li>
              <li>◉ Deployment</li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Experience;
