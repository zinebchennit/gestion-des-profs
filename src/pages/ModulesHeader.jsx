import React from "react";
import "./ModulesHeader.css";
// Removed invalid CSS code. Ensure it is moved to the CSS file.

const ModulesHeader = () => {
  // Stats for modules
  const totalModules = 60;
  const s1Modules = 35;
  const s2Modules = 25;

  return (
    <div className="modules-page">
      {/* Navigation bar */}
      <header className="nav-header">
        <div className="logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
        <nav className="main-nav">
          <a href="#dashboard">Dashboard</a>
          <a href="#admins">Admins</a>
          <a href="#teachers">Teachers</a>
          <a href="#modules" className="active">
            Modules
          </a>
          <a href="#organigramme">Organigramme</a>
          <a href="#workload">Workload</a>
        </nav>
      </header>

      {/* Modules container */}
      <div className="modules-container">
        {/* Title and statistics */}
        <div className="modules-header">
          <div className="title-section">
            <h1>Modules</h1>
          </div>
          <div className="stats-section">
            <div className="stats-title">
              <span className="stats-icon">📊</span> Statistics
            </div>
            <div className="stats-values">
              <div className="stat-item">
                <div className="stat-label">N° Total Module</div>
                <div className="stat-value">{totalModules}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">N° S1 Module</div>
                <div className="stat-value">{s1Modules}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">N° S2 Module</div>
                <div className="stat-value">{s2Modules}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and actions */}
        <div className="modules-actions">
          <div className="tabs">
            <button className="tab active">All modules</button>
          </div>
          <div className="add-button-container">
            <button className="add-module-btn">+ Add new module</button>
          </div>
        </div>

        {/* Filters section */}
        <div className="filters-row">
          <div className="name-filter">
            <label>Name :</label>
            <input type="text" placeholder="Module name" />
          </div>
          <div className="other-filters">
            <label>Filters :</label>
            <input type="text" placeholder="Semester" />
            <input type="text" placeholder="Specialties" />
            <input type="text" placeholder="Class Level" />
          </div>
        </div>

        {/* Selection counter */}
        <div className="selection-info">
          <span className="selected-count">0 selected</span>
          <button className="trash-button" disabled>
            <span className="trash-icon">🗑️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModulesHeader;
