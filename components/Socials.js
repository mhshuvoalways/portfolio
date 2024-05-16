import { motion } from "framer-motion";
import Image from "next/image";
import GithubIcon from "../public/icons/github.svg";
import HackerRank from "../public/icons/hackerrank.svg";
import LinkedIN from "../public/icons/linkedin.svg";

const Socials = () => {
  return (
    <div className="fixed bottom-[40%] right-2 flex flex-col gap-5 justify-end items-center z-40">
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
          href="https://www.hackerrank.com/mhshuvoalways"
          target="_blank"
          className="opacity-90 hover:opacity-100"
        >
          <Image src={HackerRank} alt="" />
        </a>
      </motion.button>
      <p className="border-2 w-1 fixed bottom-0 h-[40%] rounded-full border-gray-500 opacity-30"></p>
    </div>
  );
};

export default Socials;
