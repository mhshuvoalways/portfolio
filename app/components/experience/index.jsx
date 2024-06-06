"use client";

import { Fade, Zoom } from "react-awesome-reveal";

const Experience = () => {
  return (
    <div className="flex justify-start lg:justify-center gap-10 flex-wrap lg:flex-nowrap">
      <Fade direction="left">
        <p className="text-right hidden lg:block mt-1 text-nowrap text-gray-400">
          AUG 2021 - CURRENT
        </p>
      </Fade>
      <Zoom>
        <p className="border-2 w-1 h-full rounded-full border-primary hidden lg:block"></p>
      </Zoom>
      <Fade direction="right">
        <div className="w-full lg:w-7/12 font-medium">
          <div className="text2 flex gap-5 text-gray-200">
            <p className="text-green-500">Fiverr</p>
            <p>-</p>
            <p>Web & Mobile Application Developer</p>
          </div>
          <p className="mt-2 lg:hidden block text-gray-400">
            AUG 2021 - CURRENT
          </p>
          <div className="mt-10 text-gray-400 text3">
            <p>
              <strong>🏆 Achievement Unlocked:</strong> Top Rated Freelancer 👑
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
              large-scale website design and development, delivering exceptional
              results that thrilled clients.
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
  );
};

export default Experience;
