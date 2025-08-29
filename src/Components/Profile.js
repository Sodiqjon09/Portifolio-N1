import React from "react";
import ProfilePic from "../assets/profile-pic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Profile = () => {
  return (
    <section id="profile" className="container">
      <div className="section__pic-container">
        <img src={ProfilePic} alt="John Doe profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sodiqjon Sharipov</h1>
        <p className="section__text__p2">full stack developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/resume-example.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icon"
            onClick={() => (window.location.href = "https://linkedin.com/")}
          />
          <img
            src={github}
            alt="Github"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/Sodiqjon09")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
