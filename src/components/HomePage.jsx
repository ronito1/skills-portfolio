import React from "react";

const HomePage = () => {
  return (
    <div className="content-container">
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Strategic and results-oriented software engineer specializing in
          full-stack development, AI integration, and IoT solutions.
        </p>
      </section>
      <section id="experience" className="section">
        <h2>Experience</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Organization</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Stack Web Developer Intern</td>
              <td>WebStack Academy</td>
              <td>July 2024 – September 2024</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="card">Plant Disease Detection App</div>
        <div className="card">Food Delivery Platform</div>
      </section>
    </div>
  );
};

export default HomePage;
