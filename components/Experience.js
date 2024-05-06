import { Fade, Zoom } from "react-reveal";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element className="my-container" name="experience">
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
            <div className="text2 flex gap-5">
              <a
                href="https://www.fiverr.com/mhshuvoit"
                target="_blank"
                className="underline text-green-500"
              >
                Fiverr
              </a>
              <p>-</p>
              <p>Web & Mobile Application Developer</p>
            </div>
            <p className="mt-2 sm:hidden block text-gray-400">
              AUG 2021 - CURRENT
            </p>
            <div className="mt-10">
              <p className="text-lg">
                <strong>Achievement:</strong> Top Rated Freelancer with 5-Star
                Reviews 👑
              </p>
              <br />
              <p>
                <strong>Level One:</strong> Completed 11 orders with a 100%
                success rate, laying the foundation with small-scale website
                design projects.
              </p>
              <br />
              <p>
                <strong>Level Two:</strong> Advanced to completing 50+ orders
                with an impressive success score, delivering exceptional results
                that delighted clients.
              </p>
              <br />
              <p>
                <strong>Top Rated:</strong> Reached the pinnacle with over 150+
                orders completed, each earning a 5-star review. I specialize in
                developing websites that prioritize scalability, availability,
                usability, maintainability, reliability, and security,
                solidifying my reputation as a top-rated freelancer.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Element>
  );
};

export default Experience;
