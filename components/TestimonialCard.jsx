import { motion } from "framer-motion";
import Image from "next/image";
import ExternalLinkIcon from "../public/icons/external-link.svg";

const BlogCard = ({ img }) => {
  return (
    <div className="bg-gray-900 p-4 w-full md:w-[95%] rounded-md shadow-md relative">
      <Image
        src={`/testimonials/${img}.png`}
        alt={img}
        className="h-auto sm:h-48 rounded-md"
        width={500}
        height={300}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-4"
      >
        <a href="https://fiverr.com/mhshuvoit" target="_blank">
          <Image src={ExternalLinkIcon} alt="Icon" />
        </a>
      </motion.button>
    </div>
  );
};

export default BlogCard;
