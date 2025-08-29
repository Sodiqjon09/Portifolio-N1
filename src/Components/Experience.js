import React from "react";
import checkmark from "../assets/checkmark.png";
import arrow from "../assets/arrow.png";

const frontendSkills = [
  { skill: "HTML", level: "Experienced" },
  { skill: "CSS", level: "Experienced" },
  { skill: "TailwindCss", level: "Experienced" },
  { skill: "JavaScript", level: "Basic" },
  { skill: "React JSㅤㅤ", level: "Basic" },
  { skill: "Vue JS", level: "Intermediate" },
];

const backendSkills = [
  { skill: "PostgreSQL", level: "Basic" },
  { skill: "Node JS", level: "Intermediate" },
  { skill: "Express JS", level: "Intermediate" },
  { skill: "Git", level: "Intermediate" },
];

const Experience = () => {
  return (
    <section id="experience" className="container">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((item, i) => (
                <article key={i}>
                  <img src={checkmark} alt="check" className="icon" />
                  <div>
                    <h3>{item.skill}</h3>
                    <p>{item.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backendSkills.map((item, i) => (
                <article key={i}>
                  <img src={checkmark} alt="check" className="icon" />
                  <div>
                    <h3>{item.skill}</h3>
                    <p>{item.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
