"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Card = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 p-3 w-full max-w-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700" />
      </div>

      <div className="relative z-10">
        {/* Review Badge */}
        <div className="absolute top-2 right-2 z-20">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 flex items-center gap-1">
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="text-primary text-xs font-semibold">Review</span>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={img}
              alt="Client Review"
              className="w-full h-full min-w-72 rounded-xl transition-all duration-500 group-hover:brightness-110"
              width={1000}
              height={1000}
              loading="lazy"
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          </motion.div>
        </div>

        {/* Hover Effect Indicator */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1"
        >
          <span className="text-primary text-xs font-medium">
            Client Testimonial
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
