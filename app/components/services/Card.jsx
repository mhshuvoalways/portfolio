import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({ title, icon, description, lists, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 px-6 pt-8 pb-6 w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with animation */}
        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
          className="text-6xl text-center mb-6"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ color: isHovered ? "#22d3ee" : "#e5e7eb" }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold text-center mb-4 tracking-wide"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-400 text-center mb-8 leading-relaxed text-sm">
          {description}
        </p>

        {/* Features section */}
        <div className="mb-8 flex-grow">
          <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            What you get:
          </h4>
          <ul className="space-y-3">
            {lists.map((list, listIndex) => (
              <motion.li
                key={listIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (index * 0.1) + (listIndex * 0.05) }}
                className="flex items-start text-gray-300 text-sm leading-relaxed"
              >
                <motion.div
                  animate={{ 
                    scale: isHovered ? 1.2 : 1,
                    backgroundColor: isHovered ? "#22d3ee" : "#34d399"
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"
                />
                <span className="group-hover:text-gray-200 transition-colors duration-300">
                  {list}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link
            href="https://calendly.com/mhshuvoalways/support-for-building-website"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;