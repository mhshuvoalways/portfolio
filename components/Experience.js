import { Fade, Zoom } from "react-reveal";
import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <Element className="my-container" name="experience">
      <SectionTitle title={"Working Experiences"} />
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
              <p className="text-green-500">Fiverr</p>
              <p>-</p>
              <p>Web & Mobile Application Developer</p>
            </div>
            <p className="mt-2 sm:hidden block text-gray-400">
              AUG 2021 - CURRENT
            </p>
            <div className="mt-10">
              <p className="text-lg">
                <strong>🏆 Achievement Unlocked:</strong> Top Rated Freelancer
                👑
              </p>
              <br />
              <p>
                <strong>Level One:</strong> 🥇 Completed 11 orders with a 100%
                success rate with 7 unique clients, laying the groundwork with
                small-scale website design projects.
              </p>
              <br />
              <p>
                <strong>Level Two:</strong> 🚀 Advanced to completing 20+ orders
                with an impressive success score with 15 unique clients in
                large-scale website design and development, delivering
                exceptional results that thrilled clients.
              </p>
              <br />
              <p>
                <strong>Top Rated:</strong> ⭐ Reached the peak with over 100+
                orders completed with 30+ unique clients, each earning a 5-star
                review. I specialize in developing websites that prioritize
                scalability, availability, usability, maintainability,
                reliability, and security, solidifying my reputation as a
                top-rated freelancer.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Element>
  );
};

export default Experience;
