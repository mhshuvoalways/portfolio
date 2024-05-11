import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Bar from "../public/icons/bar.svg";
import Cross from "../public/icons/cross.svg";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true);

  const headerHandler = (value) => {
    setShowHeader(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setPrevScrollY(currentScrollY);
      if (currentScrollY > prevScrollY) {
        setScrollDirection(false);
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`py-5 shadow-md fixed left-0 right-0 common-style z-10 transition-transform duration-500 ease-in-out $ ${
        scrollDirection ? "transform-none" : "-translate-y-full"
      }`}
    >
      <header className="my-container">
        <nav className="flex justify-between gap-5 flex-wrap items-center">
          <Link
            to="home"
            className="cursor-pointer text-2xl textGradient font-bold"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => {
              headerHandler(false);
            }}
          >
            MH Shuvo
          </Link>
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
            <li>
              <Link
                to="home"
                activeClass="border-b-2 border-secondary font-semibold text-secondary pb-1"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                activeClass="border-b-2 border-secondary font-semibold text-secondary pb-1"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                activeClass="border-b-2 border-secondary font-semibold text-secondary pb-1"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                activeClass="border-b-2 border-secondary font-semibold text-secondary pb-1"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                activeClass="border-b-2 border-secondary font-semibold text-secondary pb-1"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="blogs"
                activeClass="border-b-2 border-secondary font-semibold text-secondary pb-1"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                activeClass="border-b-2 border-secondary font-semibold text-secondary pb-1"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <motion.div
        animate={{
          opacity: showHeader ? 1 : 0,
          x: showHeader ? 0 : -300,
        }}
        className={`fixed top-16 border-gray-600 border-b border-t shadow-md left-0 right-0 bg-gray-700 z-20 block lg:hidden mt-2 opacity-0`}
      >
        <ul>
          <li>
            <Link
              to="home"
              activeClass="text-secondary font-semibold"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p className="py-2 w-10/12 mx-auto">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              activeClass="text-secondary font-semibold"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p className="py-2 w-10/12 mx-auto">Projects</p>
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              activeClass="text-secondary font-semibold"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p className="py-2 w-10/12 mx-auto">Testimonials</p>
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              activeClass="text-secondary font-semibold"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p className="py-2 w-10/12 mx-auto">Experience</p>
            </Link>
          </li>
          <li>
            <Link
              to="blogs"
              activeClass="text-secondary font-semibold"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p className="py-2 w-10/12 mx-auto">Blogs</p>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="text-secondary font-semibold"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p className="py-2 w-10/12 mx-auto">Contact</p>
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;
