import React from "react";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
