import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import "./SkillsPage.css";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [filters, setFilters] = useState({ category: "", level: "", search: "" });
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    level: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const categories = ["Programming", "Design", "Cloud Computing"];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  // Fetch Skills
  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from("skills").select("*");
      if (error) console.error("Error fetching skills:", error);
      else {
        setSkills(data);
        setFilteredSkills(data);
      }
    };
    fetchSkills();
  }, []);

  // Handle Filter and Search Changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Apply Filters and Search
  useEffect(() => {
    let filtered = skills;
    if (filters.category) {
      filtered = filtered.filter((skill) => skill.category === filters.category);
    }
    if (filters.level) {
      filtered = filtered.filter((skill) => skill.level === filters.level);
    }
    if (filters.search) {
      filtered = filtered.filter((skill) =>
        skill.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    setFilteredSkills(filtered);
  }, [filters, skills]);

  // Add or Edit Skill
  const saveSkill = async () => {
    if (isEditing) {
      const { error } = await supabase.from("skills").update(form).eq("id", editingId);
      if (error) console.error("Error updating skill:", error);
      else {
        setSkills((prev) =>
          prev.map((skill) => (skill.id === editingId ? { ...skill, ...form } : skill))
        );
        resetForm();
      }
    } else {
      const { data, error } = await supabase.from("skills").insert([form]).select();
      if (error) console.error("Error adding skill:", error);
      else setSkills((prev) => [...prev, ...(Array.isArray(data) ? data : [data])]);
      resetForm();
    }
  };

  // Delete Skill
  const deleteSkill = async (id) => {
    const { error } = await supabase.from("skills").delete().eq("id", id);
    if (error) console.error("Error deleting skill:", error);
    else setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  // Handle Form Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Reset Form
  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      category: "",
      level: "",
    });
    setIsModalOpen(false);
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="skills-page">
      {/* 
      
      Bar */}
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search skills..."
          value={filters.search}
          onChange={handleFilterChange}
          className="search-input"
        />
      </div>

      {/* Filters and Add Button */}
      <div className="header">
        <div className="filters">
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="custom-dropdown"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            name="level"
            value={filters.level}
            onChange={handleFilterChange}
            className="custom-dropdown"
          >
            <option value="">All Levels</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <button className="add-skill-btn" onClick={() => setIsModalOpen(true)}>
          + Add New Skill
        </button>
      </div>

      {/* Skills Table */}
      <table className="skills-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSkills.map((skill) => (
            <tr key={skill.id}>
              <td>{skill.name}</td>
              <td>{skill.description}</td>
              <td>{skill.category}</td>
              <td>{skill.level}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    setForm({
                      name: skill.name,
                      description: skill.description,
                      category: skill.category,
                      level: skill.level,
                    });
                    setIsEditing(true);
                    setEditingId(skill.id);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteSkill(skill.id)}>
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
            <h2>{isEditing ? "Edit Skill" : "Add New Skill"}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveSkill();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Skill Name"
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
              <select
                name="category"
                value={form.category}
                onChange={handleInputChange}
                required
                className="custom-dropdown"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                name="level"
                value={form.level}
                onChange={handleInputChange}
                required
                className="custom-dropdown"
              >
                <option value="">Select Level</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
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

export default SkillsPage;
