import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ProjectCard = ({
  image,
  type,
  title,
  description,
  technologies,
  height,
  githubLink,
  webLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="bg-gray-900 p-4 w-full rounded-md shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={image}
          className="rounded-md"
          style={{
            transition: "transform 2s ease",
            transform: isHovered ? `translateY(-${height}px)` : "translateY(0)",
          }}
        />
      </div>
      <p className="text-gray-500 font-semibold mt-2 uppercase text-sm">
        {type}
      </p>
      <p className="text3 tracking-wide font-normal mt-2 text-gray-200">
        {title}
      </p>
      <p className="text-gray-400 font-normal mt-2">{description}</p>
      <div className="flex items-center gap-2 text-gray-400 font-normal mt-5 flex-wrap">
        {technologies.map((tech) => (
          <p
            className="border-primary border text-center py-1 px-2 rounded-md"
            key={tech}
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-10 flex-wrap justify-center mt-8">
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-brands fa-github text-gray-200 text-2xl" />
          </motion.a>
        )}
        {webLink && (
          <motion.a
            href={webLink}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-gray-200 text-2xl" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
