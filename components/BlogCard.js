import Image from "next/image";
import { motion } from "framer-motion";
import moment from "moment";

const BlogCard = ({ id, image, createdAt, title }) => {
  return (
    <div className="bg-gray-900 p-4 w-full md:w-[95%] rounded-md shadow-md">
      <Image
        unoptimized
        width={600}
        height={600}
        src={image}
        alt={image}
        className="h-auto md:h-64 object-cover"
      />
      <p className="text-gray-400 text-sm uppercase mt-2">
        {moment(createdAt).format("LL")}
      </p>
      <p className="text3 tracking-wide font-normal mt-3 mb-5">
        {title.length > 45 ? title.slice(0, 45) + "..." : title}
      </p>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href={`https://daringpage.vercel.app/post/${id}`}
          target="_blank"
          className="border-secondary border hover:border-transparent rounded-full px-5 w-48 text-center py-2 cursor-pointer hover:bgGradient transition font-semibold hover:text-gray-200"
        >
          Read at My Blog
        </a>
      </motion.button>
    </div>
  );
};

export default BlogCard;
