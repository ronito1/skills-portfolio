import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import AboutMe from "./components/AboutPage";
import Experience from "./components/ExperiencePage";
import Education from "./components/EducationPage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import LinksPage from './components/LinksPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Header className="red-text"/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/links" element={<LinksPage />} />
            
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
