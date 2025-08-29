import React from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import arrow from "../assets/arrow.png";

const projects = [
  {
    id: 1,
    image: project1,
    github: "https://github.com/Sodiqjon09",
    demo: "https://github.com/Sodiqjon09",
  },
  {
    id: 2,
    image: project2,
    github: "https://github.com/Sodiqjon09",
    demo: "https://github.com/Sodiqjon09",
  },
  {
    id: 3,
    image: project3,
    github: "https://github.com/Sodiqjon09",
    demo: "https://github.com/Sodiqjon09",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <div key={project.id} className="details-container color-container">
              <div className="article-container">
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project {project.id}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
