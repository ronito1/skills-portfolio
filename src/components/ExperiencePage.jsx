import React, { useState } from "react";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="experience-page">
      <div className="experience-card">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-details">
          <h3>Full Stack Web Developer Intern</h3>
          <p className="company">
            WebStack Academy | July 2024 – September 2024
          </p>
          <ul className="experience-highlights">
            <li>
              Increased platform performance by 20% through modular application
              design using the MERN stack.
            </li>
            <li>
              Streamlined payment processes by integrating Stripe API for secure
              transactions.
            </li>
            <li>
              Achieved a 15% reduction in project timelines with Agile-driven
              workflows and efficient collaboration tools.
            </li>
          </ul>
        </div>
        <button className="view-more-button" onClick={toggleDetails}>
          {isExpanded ? "View Less" : "View More"}
        </button>
        {isExpanded && (
          <div className="expanded-details">
            <p>
              This experience was instrumental in developing skills in modular
              design, backend optimization, and collaboration within an Agile
              team. Key learnings directly contributed to my project on "Secure
              Payment Processing" and "Agile Workflow Implementation."
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;
