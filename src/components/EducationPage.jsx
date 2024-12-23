import React, { useState } from "react";
import "./EducationPage.css";

const EducationPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewMore = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="education-page">
      <div className="education-header">
        <h1>Education</h1>
        <p>Explore my academic journey and achievements.</p>
      </div>
      <div className="education-card">
        <h2>B.Tech, Computer Science and Engineering</h2>
        <h3>Presidency University | 2021 – 2025</h3>
        <p>
          Relevant Coursework: Artificial Intelligence, Machine Learning, IoT
          Systems, Cloud Computing
        </p>
      </div>
      <button className="education-button" onClick={handleViewMore}>
        {showDetails ? "View Less" : "View More"}
      </button>
      {showDetails && (
        <div className="details-section">
          <div className="details-content">
            <h3>Projects Inspired by My Education:</h3>
            <ul>
              <li>
                <strong>Plant Disease Detection App:</strong> Leveraged skills
                in Artificial Intelligence and Machine Learning to build a
                comprehensive app for crop health monitoring.
              </li>
              <li>
                <strong>Food Delivery Platform:</strong> Applied IoT Systems and
                Cloud Computing knowledge to create an efficient, scalable
                platform.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationPage;
