"use client";

import ProjectCard from "@/app/components/projects/Card";
import projectDB from "@/public/projectDB";
import { useState } from "react";
import FlipMove from "react-flip-move";
import MainComponent from "../components/common/main";
import Tab from "../components/projects/Tab";

const Projects = () => {
  const [current, setCurrent] = useState("all");

  const currentHandler = (value) => {
    setCurrent(value);
  };

  return (
    <MainComponent>
      <div div className="mt-10 lg:mt-20">
        <Tab
          current={current}
          currentHandler={currentHandler}
          projectDB={projectDB}
        />
        <FlipMove className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projectDB.map((project) =>
            current === "all" ? (
              <div key={project.id}>
                <ProjectCard
                  image={project.image}
                  type={project.type}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  height={project.height}
                  githubLink={project.githubLink}
                  webLink={project.webLink}
                />
              </div>
            ) : (
              current === project.type && (
                <div key={project.id}>
                  <ProjectCard
                    image={project.image}
                    type={project.type}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    height={project.height}
                    githubLink={project.githubLink}
                    webLink={project.webLink}
                  />
                </div>
              )
            )
          )}
        </FlipMove>
      </div>
    </MainComponent>
  );
};

export default Projects;
