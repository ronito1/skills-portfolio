import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="intro-section">
        <h1 className="title">Welcome to My Portfolio</h1>
        <p className="description">
          Hi, I’m Ronit, a passionate Full-Stack Developer with expertise in AI, IoT, and cloud technologies. 
          This portfolio showcases my journey, skills, and projects. Dive in to learn more about my work and passions!
        </p>
      </div>
      <div className="explore-section">
        <p className="explore-text">
          Use the sidebar to navigate through my Experience, Education, Projects, and Skills.
        </p>
        <div className="animated-icons">
          <div className="icon-item">
            <span>Experience</span>
          </div>
          <div className="icon-item">
            <span>Education</span>
          </div>
          <div className="icon-item">
            <span>Projects</span>
          </div>
          <div className="icon-item">
            <span>Skills</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
