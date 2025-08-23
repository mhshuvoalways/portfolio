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
  index,
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 p-6 w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Image Section */}
        <div className="h-48 overflow-hidden rounded-xl mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />
          <Image
            src={image}
            alt={title}
            className="w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
            style={{
              transition: "transform 2s ease",
              transform: isHovered ? `translateY(-${height}px)` : "translateY(0)",
            }}
          />
          
          {/* Project Type Badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
              {type}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow">
          {/* Title */}
          <motion.h3
            animate={{ color: isHovered ? "#22d3ee" : "#e5e7eb" }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors duration-300"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-400 group-hover:text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
            {description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  className="px-2 py-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-lg text-gray-300 text-xs hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 6 && (
                <span className="px-2 py-1 bg-gray-800/50 border border-gray-600/30 rounded-lg text-gray-400 text-xs">
                  +{technologies.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto">
            <div className="flex items-center gap-3 justify-center">
              {githubLink && (
                <motion.a
                  href={githubLink}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group/icon relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:bg-primary/10"
                  title="View Source Code"
                >
                  <i className="fa-brands fa-github text-gray-400 group-hover/icon:text-primary transition-colors duration-300 text-lg"></i>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Source Code
                  </div>
                </motion.a>
              )}
              
              {webLink && (
                <motion.a
                  href={webLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-3 px-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;