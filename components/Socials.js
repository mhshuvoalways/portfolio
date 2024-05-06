import { motion } from "framer-motion";
import Image from "next/image";
import Fiverr from "../public/icons/fiverr.svg";
import GithubIcon from "../public/icons/github.svg";
import HackerRank from "../public/icons/hackerrank.svg";
import LinkedIN from "../public/icons/linkedin.svg";

const Socials = () => {
  return (
    <div className="fixed bottom-0 right-2 flex flex-col gap-5 justify-end items-center z-40">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="https://www.linkedin.com/in/mhshuvoalways"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <Image src={LinkedIN} alt="" />
        </a>
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="https://github.com/mhshuvoalways"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <Image src={GithubIcon} alt="" />
        </a>
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="https://www.fiverr.com/mhshuvoit"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <Image src={Fiverr} alt="" />
        </a>
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="https://www.hackerrank.com/mhshuvoalways"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <Image src={HackerRank} alt="" />
        </a>
      </motion.button>
      <p className="border-2 w-1 h-32 rounded-full border-gray-500 opacity-30"></p>
    </div>
  );
};

export default Socials;
