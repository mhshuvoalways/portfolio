import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Bar from "../public/icons/bar.svg";
import Cross from "../public/icons/cross.svg";

const Header = ({ gotoHandler, scrollView }) => {
  const [showHeader, setShowHeader] = useState(false);

  const headerHandler = (value) => {
    setShowHeader(value);
  };

  return (
    <div className="py-5 shadow-md fixed left-0 right-0 common-style z-20">
      <header className="my-container">
        <nav className="flex justify-between gap-5 flex-wrap items-center">
          <p
            className="text-2xl cursor-pointer"
            onClick={() => {
              gotoHandler("home");
              headerHandler(false);
            }}
          >
            MH Shuvo
          </p>
          {showHeader ? (
            <Image
              src={Cross}
              alt=""
              className="w-5 cursor-pointer block lg:hidden"
              onClick={() => headerHandler(false)}
            />
          ) : (
            <Image
              src={Bar}
              alt=""
              className="w-8 cursor-pointer block lg:hidden"
              onClick={() => headerHandler(true)}
            />
          )}
          <ul className="lg:flex items-center gap-5 md:gap-10 flex-wrap hidden">
            <li
              className={`cursor-pointer ${
                scrollView === "home" &&
                "border-b-2 border-secondary font-semibold text-secondary"
              }`}
              onClick={() => gotoHandler("home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer ${
                scrollView === "about" &&
                "border-b-2 border-secondary font-semibold text-secondary"
              }`}
              onClick={() => gotoHandler("about")}
            >
              About
            </li>
            <li
              className={`cursor-pointer ${
                scrollView === "skills" &&
                "border-b-2 border-secondary font-semibold text-secondary"
              }`}
              onClick={() => gotoHandler("skills")}
            >
              Skills
            </li>
            <li
              className={`cursor-pointer ${
                scrollView === "projects" &&
                "border-b-2 border-secondary font-semibold text-secondary"
              }`}
              onClick={() => gotoHandler("projects")}
            >
              Projects
            </li>
            <li
              className={`cursor-pointer ${
                scrollView === "experience" &&
                "border-b-2 border-secondary font-semibold text-secondary"
              }`}
              onClick={() => gotoHandler("experience")}
            >
              Experience
            </li>
            <li
              className={`cursor-pointer ${
                scrollView === "blogs" &&
                "border-b-2 border-secondary font-semibold text-secondary"
              }`}
              onClick={() => gotoHandler("blogs")}
            >
              Blogs
            </li>
            <li
              className={`cursor-pointer ${
                scrollView === "contact" &&
                "border-b-2 border-secondary font-semibold text-secondary"
              }`}
              onClick={() => gotoHandler("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <motion.div
        animate={{
          opacity: showHeader ? 1 : 0,
          x: showHeader ? 0 : -500,
        }}
        className={`fixed top-16 border-gray-600 border-b border-t shadow-md left-0 right-0 bg-gray-700 z-10 block lg:hidden mt-2`}
      >
        <ul>
          <li
            className={`cursor-pointer py-2 ${
              scrollView === "home" &&
              "text-secondary hover:bg-secondary font-semibold"
            }`}
            onClick={() => {
              gotoHandler("home");
              headerHandler(false);
            }}
          >
            <p className="w-10/12 mx-auto">Home</p>
          </li>
          <li
            className={`cursor-pointer py-2 ${
              scrollView === "about" &&
              "text-secondary hover:bg-secondary font-semibold"
            }`}
            onClick={() => {
              gotoHandler("about");
              headerHandler(false);
            }}
          >
            <p className="w-10/12 mx-auto">About</p>
          </li>
          <li
            className={`cursor-pointer py-2 ${
              scrollView === "skills" &&
              "text-secondary hover:bg-secondary font-semibold"
            }`}
            onClick={() => {
              gotoHandler("skills");
              headerHandler(false);
            }}
          >
            <p className="w-10/12 mx-auto">Skills</p>
          </li>
          <li
            className={`cursor-pointer py-2 ${
              scrollView === "projects" &&
              "text-secondary hover:bg-secondary font-semibold"
            }`}
            onClick={() => {
              gotoHandler("projects");
              headerHandler(false);
            }}
          >
            <p className="w-10/12 mx-auto">Projects</p>
          </li>
          <li
            className={`cursor-pointer py-2 ${
              scrollView === "experience" &&
              "text-secondary hover:bg-secondary font-semibold"
            }`}
            onClick={() => {
              gotoHandler("experience");
              headerHandler(false);
            }}
          >
            <p className="w-10/12 mx-auto">Experience</p>
          </li>
          <li
            className={`cursor-pointer py-2 ${
              scrollView === "blogs" &&
              "text-secondary hover:bg-secondary font-semibold"
            }`}
            onClick={() => {
              gotoHandler("blogs");
              headerHandler(false);
            }}
          >
            <p className="w-10/12 mx-auto">Blogs</p>
          </li>
          <li
            className={`cursor-pointer py-2 ${
              scrollView === "contact" &&
              "text-secondary hover:bg-secondary font-semibold"
            }`}
            onClick={() => {
              gotoHandler("contact");
              headerHandler(false);
            }}
          >
            <p className="w-10/12 mx-auto">Contact</p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;
