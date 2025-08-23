"use client";

import { motion } from "framer-motion";
import { Fade, Zoom } from "react-awesome-reveal";

const Experience = () => {
  const achievements = [
    {
      level: "Level One",
      icon: "🥇",
      orders: "11",
      clients: "7",
      description: "Completed 11 orders with a 100% success rate with 7 unique clients, laying the groundwork with small-scale website design projects.",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      level: "Level Two", 
      icon: "🚀",
      orders: "20+",
      clients: "15",
      description: "Advanced to completing 20+ orders with an impressive success score with 15 unique clients in large-scale website design and development, delivering exceptional results that thrilled clients.",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      level: "Top Rated",
      icon: "⭐",
      orders: "100+",
      clients: "30+",
      description: "Reached the peak with over 100+ orders completed with 30+ unique clients, each earning a 5-star review. I specialize in developing websites that prioritize scalability, availability, usability, maintainability, reliability, and security.",
      color: "from-primary/20 to-secondary/20",
      borderColor: "border-primary/30"
    }
  ];

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex justify-start lg:justify-center gap-10 flex-wrap lg:flex-nowrap relative z-10">
        {/* Timeline Date */}
        <Fade direction="left">
          <div className="text-right hidden lg:block mt-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-bold textGradient mb-2">AUG 2021</div>
                <div className="text-gray-400 text-sm">Started Journey</div>
                <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="text-2xl font-bold textGradient mt-4 mb-2">CURRENT</div>
                <div className="text-gray-400 text-sm">Top Rated Status</div>
              </div>
            </motion.div>
          </div>
        </Fade>

        {/* Timeline Line */}
        <Zoom>
          <div className="relative hidden lg:block">
            <div className="w-1 h-full bg-gradient-to-b from-secondary via-primary to-tertiary rounded-full relative">
              {/* Animated pulse effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-tertiary rounded-full animate-pulse opacity-50"></div>
              
              {/* Timeline markers */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-gray-900 shadow-lg"></div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-900 shadow-lg"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-tertiary rounded-full border-4 border-gray-900 shadow-lg animate-pulse"></div>
            </div>
          </div>
        </Zoom>

        {/* Main Content */}
        <Fade direction="right">
          <div className="w-full lg:w-7/12 font-medium relative">
            {/* Company Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <div className="text2 flex gap-3 text-gray-200 items-center">
                    <span className="text-green-500 font-bold">Fiverr</span>
                    <span className="text-gray-500">-</span>
                    <span>Web & Mobile Application Developer</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="lg:hidden">AUG 2021 - CURRENT</span>
                    <span className="hidden lg:inline">Building digital solutions that drive success</span>
                  </p>
                </div>
              </div>

              {/* Top Rated Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8">
                <span className="text-2xl">👑</span>
                <span className="text-green-400 font-bold">Top Rated Freelancer</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievement Cards */}
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.level}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative bg-gradient-to-br ${achievement.color} backdrop-blur-sm border ${achievement.borderColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated background particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  </div>

                  <div className="relative z-10">
                    {/* Achievement Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-4xl"
                      >
                        {achievement.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold textGradient mb-2">
                          {achievement.level}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span className="text-gray-300">{achievement.orders} Orders</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-secondary rounded-full"></span>
                            <span className="text-gray-300">{achievement.clients} Clients</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Description */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      <strong className="textGradient">Achievement Unlocked:</strong> {achievement.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: index === 0 ? "33%" : index === 1 ? "66%" : "100%" }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                          className="h-full bg-gradient-to-r from-secondary via-primary to-tertiary rounded-full"
                        />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">
                        {index === 0 ? "33%" : index === 1 ? "66%" : "100%"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills & Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold textGradient mb-6 text-center">
                Core Expertise & Values
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🎯", title: "Scalability", desc: "Building solutions that grow with your business" },
                  { icon: "⚡", title: "Performance", desc: "Lightning-fast applications that users love" },
                  { icon: "🔒", title: "Security", desc: "Protecting your data with industry best practices" },
                  { icon: "📱", title: "Usability", desc: "Intuitive interfaces that anyone can use" },
                  { icon: "🛠️", title: "Maintainability", desc: "Clean code that's easy to update and extend" },
                  { icon: "🚀", title: "Reliability", desc: "Dependable solutions you can count on" }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-600/30 hover:border-primary/50 transition-all duration-300 group/skill"
                  >
                    <div className="text-3xl mb-3 group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-gray-200 mb-2 group-hover/skill:text-primary transition-colors duration-300">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-gray-400 group-hover/skill:text-gray-300 transition-colors duration-300">
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Client Testimonial Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">💬</div>
              <blockquote className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                "Working with MH Shuvo has been an absolute game-changer for our business. 
                His attention to detail and commitment to excellence is unmatched."
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">- Happy Client Review</span>
              </div>
            </motion.div>
          </div>
        </Fade>
      </div>
    </Main>
  );
};

export default Experience;