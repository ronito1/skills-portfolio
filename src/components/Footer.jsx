import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Project Dashboard. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
