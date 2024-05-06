import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubIcon from "../public/icons/github.svg";
import ExternalLinkIcon from "../public/icons/external-link.svg";

const ProjectCard = ({
  image,
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
          style={{
            transition: "transform 2s ease",
            transform: isHovered ? `translateY(-${height}px)` : "translateY(0)",
          }}
        />
      </div>
      <p className="text3 tracking-wide font-normal mt-2">{title}</p>
      <p className="text-gray-400 font-normal mt-2">{description}</p>
      <div className="flex items-center gap-2 text-gray-400 font-normal mt-5 flex-wrap">
        {technologies.map((tech) => (
          <p
            className="border-secondary border text-center py-1 px-2 rounded-md"
            key={tech}
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-10 flex-wrap justify-center mt-8">
        {githubLink && (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href={githubLink} target="_blank">
              <Image src={GithubIcon} alt={GithubIcon} />
            </a>
          </motion.button>
        )}
        {webLink && (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href={webLink} target="_blank">
              <Image src={ExternalLinkIcon} alt={ExternalLinkIcon} />
            </a>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
