import Image from "next/image";
import { motion } from "framer-motion";
import Bar from "../public/icons/bar.svg";
import Cross from "../public/icons/cross.svg";
import { useState } from "react";

const Header = ({ gotoHandler }) => {
  const [showHeader, setShowHeader] = useState(false);

  const headerHandler = () => {
    setShowHeader(!showHeader);
  };

  return (
    <>
      <header className="my-container py-5 shadow-md fixed left-0 right-0 common-style z-20">
        <nav className="flex justify-between gap-5 flex-wrap items-center">
          <p className="text-2xl cursor-pointer">MH Shuvo</p>
          {showHeader ? (
            <Image
              src={Cross}
              alt=""
              className="w-5 cursor-pointer block lg:hidden"
              onClick={headerHandler}
            />
          ) : (
            <Image
              src={Bar}
              alt=""
              className="w-8 cursor-pointer block lg:hidden"
              onClick={headerHandler}
            />
          )}

          <ul className="lg:flex items-center gap-5 md:gap-10 flex-wrap hidden">
            <li className="cursor-pointer" onClick={() => gotoHandler("home")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => gotoHandler("about")}>
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => gotoHandler("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer"
              onClick={() => gotoHandler("projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer"
              onClick={() => gotoHandler("experience")}
            >
              Experience
            </li>
            <li className="cursor-pointer" onClick={() => gotoHandler("blogs")}>
              Blogs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => gotoHandler("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <motion.div
        animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 72 : -100 }}
        className={`fixed top-0 border-gray-600 border-b border-t shadow-md left-0 right-0 bg-gray-700 z-10 block lg:hidden`}
      >
        <ul>
          <li
            className="cursor-pointer hover:bg-gray-800 py-2"
            onClick={() => {
              gotoHandler("home");
              headerHandler();
            }}
          >
            <p className="w-10/12 mx-auto">Home</p>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 py-2"
            onClick={() => {
              gotoHandler("about");
              headerHandler();
            }}
          >
            <p className="w-10/12 mx-auto">About</p>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 py-2"
            onClick={() => {
              gotoHandler("skills");
              headerHandler();
            }}
          >
            <p className="w-10/12 mx-auto">Skills</p>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 py-2"
            onClick={() => {
              gotoHandler("projects");
              headerHandler();
            }}
          >
            <p className="w-10/12 mx-auto">Projects</p>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 py-2"
            onClick={() => {
              gotoHandler("experience");
              headerHandler();
            }}
          >
            <p className="w-10/12 mx-auto">Experience</p>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 py-2"
            onClick={() => {
              gotoHandler("blogs");
              headerHandler();
            }}
          >
            <p className="w-10/12 mx-auto">Blogs</p>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 py-2"
            onClick={() => {
              gotoHandler("contact");
              headerHandler();
            }}
          >
            <p className="w-10/12 mx-auto">Contact</p>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;
