import { useState } from "react";
import { Element } from "react-scroll";
import projectsdata from "../db.js";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [current, setCurrent] = useState("all");

  const currentHandler = (value) => {
    setCurrent(value);
  };

  return (
    <Element className="my-container" name="projects">
      <p className="section-title">Projects I have Built</p>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <div
          className={
            current === "all"
              ? "border-b-4 px-5 py-1 border-secondary cursor-pointer flex items-center gap-2"
              : "px-5 py-1 cursor-pointer flex items-center gap-2 hover:font-bold"
          }
          onClick={() => currentHandler("all")}
        >
          <p className="text-secondary text3">All</p>
          <small className="bg-secondary text-white rounded-md text-xs h-5 w-5 flex justify-center items-center">
            {projectsdata.length}
          </small>
        </div>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "fullstack" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("fullstack")}
        >
          Full Stack
        </p>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "frontend" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("frontend")}
        >
          Front End
        </p>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "extention" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("extention")}
        >
          Extention
        </p>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "template" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("template")}
        >
          Template
        </p>
        <p
          className={`text-secondary text3 px-5 py-1 cursor-pointer ${
            current === "wordpress" && "border-b-4 border-secondary"
          }`}
          onClick={() => currentHandler("wordpress")}
        >
          Wordpress
        </p>
      </div>
      <div className="mt-20 flex justify-center gap-5 flex-wrap">
        {projectsdata.map((project) => {
          return current === "all" ? (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              height={project.height}
              githubLink={project.githubLink}
              webLink={project.webLink}
            />
          ) : (
            current === project.type && (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                height={project.height}
                githubLink={project.githubLink}
                webLink={project.webLink}
              />
            )
          );
        })}
      </div>
    </Element>
  );
};

export default Projects;
