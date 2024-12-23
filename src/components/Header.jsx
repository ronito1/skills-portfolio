import React from "react";
import "./Header.css";

// Default avatar image
import defaultAvatar from "./dp2.png"; // Adjust the path based on your project structure

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="app-logo">Ronit's <span className="highlight">Portfolio</span></h1>
      </div>
      <div className="header-right">
        <span className="header-icon">❓</span>
        <span className="header-icon">💬</span>
        <span className="header-icon">⚙️</span>
        <span className="header-icon">🔔</span>
        <div className="profile-avatar">
          {/* Add default avatar here */}
          <img src={defaultAvatar} alt="Profile Avatar" />
          <span>Ronit Pathak</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
