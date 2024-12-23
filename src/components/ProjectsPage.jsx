import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({ status: "", date: "" });
  const [form, setForm] = useState({
    name: "",
    description: "",
    techUsed: "",
    status: "Incomplete",
    completionDate: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.error("Error fetching projects:", error);
      else {
        setProjects(data);
        setFilteredProjects(data);
      }
    };
    fetchProjects();
  }, []);

  // Filter Projects
  useEffect(() => {
    let filtered = projects;
    if (filters.status) {
      filtered = filtered.filter(
        (project) => project.status === filters.status
      );
    }
    if (filters.date) {
      filtered = filtered.filter((project) => {
        const year = new Date(project.completionDate).getFullYear();
        if (filters.date === "2021-2023") return year >= 2021 && year <= 2023;
        if (filters.date === "2023-2024") return year >= 2023 && year <= 2024;
        return true;
      });
    }
    setFilteredProjects(filtered);
  }, [filters, projects]);

  // Add or Edit Project
  const saveProject = async () => {
    if (isEditing) {
      const { error } = await supabase
        .from("projects")
        .update(form)
        .eq("id", editingId);
      if (error) console.error("Error updating project:", error);
      else {
        setProjects((prev) =>
          prev.map((project) =>
            project.id === editingId ? { ...project, ...form } : project
          )
        );
        resetForm();
      }
    } else {
      const { data, error } = await supabase
        .from("projects")
        .insert([form])
        .select();
      if (error) console.error("Error adding project:", error);
      else {
        setProjects((prev) => [...prev, ...data]);
        resetForm();
      }
    }
  };

  const deleteProject = async (id) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) console.error("Error deleting project:", error);
    else setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      techUsed: "",
      status: "Incomplete",
      completionDate: "",
    });
    setIsModalOpen(false);
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="projects-page">
      <div className="header">
        <div className="filters">
          <div className="custom-select-container">
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="custom-dropdown"
            >
              <option value="">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <div className="custom-select-container">
            <select
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="custom-dropdown"
            >
              <option value="">All Dates</option>
              <option value="2021-2023">2021-2023</option>
              <option value="2023-2024">2023-2024</option>
            </select>
          </div>
        </div>
        <button
          className="add-project-button"
          onClick={() => setIsModalOpen(true)}
        >
          + Add New Project
        </button>
      </div>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Tech Used</th>
            <th>Status</th>
            <th>Completion Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.techUsed}</td>
              <td>
                <span
                  className={`status-indicator ${
                    project.status === "Completed" ? "completed" : "incomplete"
                  }`}
                ></span>
              </td>
              <td>{project.completionDate}</td>
              <td className="actions">
                <button
                  className="edit-btn"
                  onClick={() => {
                    setForm({ ...project });
                    setIsEditing(true);
                    setEditingId(project.id);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteProject(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isEditing ? "Edit Project" : "Add New Project"}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveProject();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="techUsed"
                placeholder="Tech Used"
                value={form.techUsed}
                onChange={handleInputChange}
                required
              />
              <select
                name="status"
                value={form.status}
                onChange={handleInputChange}
                required
              >
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
              </select>
              <input
                type="date"
                name="completionDate"
                value={form.completionDate}
                onChange={handleInputChange}
                required
              />
              <div className="modal-actions">
                <button type="submit">{isEditing ? "Update" : "Save"}</button>
                <button type="button" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
