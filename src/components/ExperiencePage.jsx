import React, { useState } from "react";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleDetails1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleDetails2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <div className="experience-page">
      <div className="experience-card">
        <h2 className="experience-title">Experience</h2>
        
        <div className="experience-details">
          <h3>Full Stack Web Developer Intern</h3>
          <p className="company">WebStack Academy | July 2024 – September 2024</p>
          <ul className="experience-highlights">
            <li>Increased platform performance by 20% through modular application design using the MERN stack.</li>
            <li>Streamlined payment processes by integrating Stripe API for secure transactions.</li>
            <li>Achieved a 15% reduction in project timelines with Agile-driven workflows and efficient collaboration tools.</li>
          </ul>
        </div>
        <button className="view-more-button" onClick={toggleDetails1}>
          {isExpanded1 ? "View Less" : "View More"}
        </button>
        {isExpanded1 && (
          <div className="expanded-details">
            <p>
              This experience was instrumental in developing skills in modular design, backend optimization, and collaboration within an Agile team. Key learnings directly contributed to my project on "Secure Payment Processing" and "Agile Workflow Implementation."
            </p>
          </div>
        )}
      </div>

      <div className="experience-card">
        <div className="experience-details">
          <h3>Junior Web Developer</h3>
          <p className="company">Regortz Digital Marketing | Feb 2025 – May 2025</p>
          <ul className="experience-highlights">
            <li>Developing, maintaining, and optimizing responsive websites and web templates for enhanced performance and usability.</li>
            <li>Modifying and customizing website layouts, components, and functionalities to meet project requirements.</li>
          </ul>
        </div>
        <button className="view-more-button" onClick={toggleDetails2}>
          {isExpanded2 ? "View Less" : "View More"}
        </button>
        {isExpanded2 && (
          <div className="expanded-details">
            <p>
              Gained experience in frontend and backend development, improving website speed and user experience. Worked closely with clients to deliver customized solutions while adhering to SEO best practices.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;
