import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faBriefcase,
  faGraduationCap,
  faProjectDiagram,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/about", icon: faUser, label: "About Me" },
    { path: "/experience", icon: faBriefcase, label: "Experience" },
    { path: "/education", icon: faGraduationCap, label: "Education" },
    { path: "/projects", icon: faProjectDiagram, label: "Projects" },
    { path: "/skills", icon: faTools, label: "Skills" },
    { path: "/links", icon: faTools, label: "Links" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Ronit's Portfolio</h2>
      </div>
      {menuItems.map((item) => (
        <div
          key={item.label}
          className={`sidebar-item ${
            location.pathname === item.path ? "active" : ""
          }`}
          onClick={() => navigate(item.path)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && navigate(item.path)}
        >
          <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
