"use client";

import { motion } from "framer-motion";
import { Fade, Zoom } from "react-awesome-reveal";

const Experience = () => {
  const experiences = [
    {
      id: "chatbot-sense",
      logo: "🤖",
      company: "Chatbot Sense",
      role: "AI Automation Developer",
      type: "Self-employed",
      date: "Mar 2025 - Present · 9 mos",
      location: "Kushtia, Khulna, Bangladesh · On-site",
      bullets: [
        "Developed and implemented AI-driven chatbot solutions to enhance customer engagement and satisfaction.",
        "Collaborated with cross-functional teams to streamline auto-generated replies, ensuring 24/7 customer support.",
        "Conducted user testing and feedback sessions to continuously improve chatbot performance and user experience.",
      ],
      skills: [
        "Chatbots",
        "Chatbot Development",
        "AI Automation",
        "NLP",
        "Testing",
      ],
      color: "from-indigo-600/10 to-indigo-500/10",
      borderColor: "border-indigo-500/30",
    },
    {
      id: "fiverr",
      logo: "💼",
      company: "Fiverr",
      role: "Web Developer",
      type: "Freelance",
      date: "Aug 2021 - Present · 4 yrs 4 mos",
      location: "Remote",
      bullets: [
        "Developed scalable and secure websites, ensuring high availability and usability for diverse clients.",
        "Achieved Top Rated Freelancer status by completing over 150 orders with 50+ unique clients, all receiving 5-star reviews.",
        "Advanced through multiple levels of project complexity, delivering exceptional results in large-scale website design.",
      ],
      skills: [
        "Web Development",
        "WordPress",
        "Performance",
        "Security",
        "Scalability",
      ],
      color: "from-green-600/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
    },
    {
      id: "gorilla-solutions",
      logo: "🦍",
      company: "Gorilla Solutions",
      role: "Frontend Developer",
      type: "Freelance",
      date: "Apr 2024 - Dec 2024 · 9 mos",
      location: "United States · Remote",
      bullets: [
        "Collaborated with a dynamic team to enhance the main website for Gorilla Solutions.",
        "Developed clean and responsive UI sections, ensuring a seamless user experience.",
        "Focused on aligning website design with brand goals to improve usability.",
      ],
      skills: ["UI", "Web Design", "Frontend", "React", "Accessibility"],
      color: "from-blue-600/10 to-purple-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      id: "estategather",
      logo: "🏡",
      company: "EstateGather",
      role: "Web Developer",
      type: "Contract",
      date: "Jan 2024 - Jun 2024 · 6 mos",
      location: "United States · Remote",
      bullets: [
        "Developed and optimized various real estate investment calculators, enhancing user experience and functionality.",
        "Tested financial models for accuracy, supporting investors in property analysis and decision-making.",
        "Collaborated on user-friendly interfaces for complex investment tools, empowering thousands of real estate investors.",
      ],
      skills: ["Web Applications", "WordPress", "JS", "UX", "Financial Tools"],
      color: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/30",
    },
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
                <div className="text-2xl font-bold textGradient mb-2">
                  AUG 2021
                </div>
                <div className="text-gray-400 text-sm">Started Journey</div>
                <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="text-2xl font-bold textGradient mt-4 mb-2">
                  CURRENT
                </div>
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
          <div className="w-full lg:w-9/12 font-medium relative mx-auto lg:mx-0">
            {/* Company Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center lg:text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <div className="text2 flex gap-3 text-gray-200 items-center">
                    <span className="text-green-500 font-bold">Fiverr</span>
                    <span className="text-gray-500">-</span>
                    <span>Web, Mobile & AI Agent Application Developer</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="lg:hidden">AUG 2021 - CURRENT</span>
                    <span className="hidden lg:inline">
                      Building digital solutions that drive success
                    </span>
                  </p>
                </div>
              </div>

              {/* Top Rated Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8 mx-auto lg:mx-0">
                <span className="text-2xl">👑</span>
                <span className="text-green-400 font-bold">
                  Top Rated Freelancer
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`relative bg-gradient-to-br ${exp.color} backdrop-blur-sm border ${exp.borderColor} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                >
                  {/* background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-4 items-start">
                    <div className="md:col-span-1 flex items-start">
                      <div className="w-14 h-14 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-700/30 text-3xl">
                        {exp.logo}
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                        <div>
                          <h3 className="text-xl font-bold textGradient">
                            {exp.role}
                          </h3>
                          <div className="text-sm text-gray-300">
                            {exp.company} ·{" "}
                            <span className="italic">{exp.type}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-gray-400">
                            {exp.date}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((s, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-800/30 px-3 py-1 rounded-full border border-gray-700/30 text-gray-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* progress for visual weight (optional) */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${Math.min(100, 50 + index * 15)}%`,
                            }}
                            transition={{
                              duration: 0.9,
                              delay: 0.2 + index * 0.1,
                            }}
                            className="h-full bg-gradient-to-r from-secondary via-primary to-tertiary rounded-full"
                          />
                        </div>
                        <span className="text-xs text-gray-400 font-medium">
                          {`${Math.min(100, 50 + index * 15)}%`}
                        </span>
                      </div>
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
                  {
                    icon: "🎯",
                    title: "Scalability",
                    desc: "Building solutions that grow with your business",
                  },
                  {
                    icon: "⚡",
                    title: "Performance",
                    desc: "Lightning-fast applications that users love",
                  },
                  {
                    icon: "🔒",
                    title: "Security",
                    desc: "Protecting your data with industry best practices",
                  },
                  {
                    icon: "📱",
                    title: "Usability",
                    desc: "Intuitive interfaces that anyone can use",
                  },
                  {
                    icon: "🛠️",
                    title: "Maintainability",
                    desc: "Clean code that's easy to update and extend",
                  },
                  {
                    icon: "🚀",
                    title: "Reliability",
                    desc: "Dependable solutions you can count on",
                  },
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
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Experience;
