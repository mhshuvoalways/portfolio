"use client";

import MainComponent from "@/app/components/common/main";
import ProjectCard from "@/app/components/projects/Card";
import Tab from "@/app/components/projects/Tab";
import projectDB from "@/public/projectDB";
import { motion } from "framer-motion";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import FlipMove from "react-flip-move";

const Projects = () => {
  const [current, setCurrent] = useState("all");

  const currentHandler = (value) => {
    setCurrent(value);
  };

  const filteredProjects = projectDB.filter((project) =>
    current === "all" ? true : current === project.type,
  );

  return (
    <MainComponent>
      <div className="mt-10 lg:mt-20">
        {/* Header Section */}
        <Fade>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                💼 My Portfolio
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold textGradient mb-4">
                Projects That Make a Difference
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Explore my collection of web applications, mobile apps, and
                innovative solutions that have helped businesses grow and
                succeed.
              </p>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center gap-8 flex-wrap mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">
                  {projectDB.length}+
                </div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">
                  {projectDB.filter((p) => p.type === "fullstack").length}
                </div>
                <div className="text-sm text-gray-400">Full Stack Apps</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">
                  {projectDB.filter((p) => p.type === "frontend").length}
                </div>
                <div className="text-sm text-gray-400">Frontend Projects</div>
              </div>
            </motion.div>
          </div>
        </Fade>

        {/* Enhanced Tab Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <Tab
              current={current}
              currentHandler={currentHandler}
              projectDB={projectDB}
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <FlipMove className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                image={project.image}
                type={project.type}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                height={project.height}
                githubLink={project.githubLink}
                webLink={project.webLink}
                index={index}
              />
            </motion.div>
          ))}
        </FlipMove>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Bottom CTA Section */}
        <Fade>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold textGradient mb-4">
              Ready to Start Your Own Project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {`Inspired by what you see? I'll collaborate to bring your vision to life
              with the same level of quality and attention to detail.`}
            </p>
            <a
              href="https://calendly.com/mhshuvoalways/support-for-building-website"
              target="_blank"
              className="relative z-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
              >
                {`Let's Build Something Amazing`}

                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </motion.button>
            </a>
          </motion.div>
        </Fade>
      </div>
    </MainComponent>
  );
};

export default Projects;
