import React from "react";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";

const About = () => {
  return (
    <section id="about" className="container">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="https://img.freepik.com/premium-vector/me-monogram-logo-design-letter-text-name-symbol-monochrome-logotype-alphabet-character-simple-logo_955145-2634.jpg?w=360" alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>
                2+ years <br /> full stack developer
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education" className="icon" />
              <h3>Education</h3>
              <p>
                h.g. high Degree <br /> A.lg. Algoritim Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hello! I’m Sodiqjon Sharipov, a passionate full-stack web
              developer skilled in HTML, CSS, JavaScript, React.js, Vue.js,
              Node.js, and databases. I enjoy creating modern, user-friendly
              applications, solving problems, and constantly improving my
              skills. My goal is to contribute to impactful projects and grow as
              a developer while sharing knowledge with others.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
};

export default About;
