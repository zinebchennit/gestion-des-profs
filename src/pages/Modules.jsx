import React, { useState } from "react";
import "./Modules.css";
import ModulesHeader from "./ModulesHeader"; // Importez le composant

const Modules = () => {
  const [selectedModules, setSelectedModules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for modules
  const modules = [
    {
      id: 1,
      name: "ALGO1 : Initiation à l'algorithmique",
      year: "L1",
      semester: "S1 / S2",
      specialty: "I / ING / MI / M",
      teachingType: "Cours / TD / TP",
    },
    {
      id: 2,
      name: "BSD : Biométrie et Sécurisation de Données",
      year: "M2",
      semester: "S1",
      specialty: "BIOINFO",
      teachingType: "Cours / TP",
    },
    {
      id: 3,
      name: "SYST : Systèmes d'exploitation",
      year: "M1",
      semester: "S1",
      specialty: "SII",
      teachingType: "Cours / TD / TP",
    },
    {
      id: 4,
      name: "Prog.Web: Programmation Web",
      year: "L3",
      semester: "S2",
      specialty: "ACAD",
      teachingType: "Cours / TP",
    },
    {
      id: 5,
      name: "GL : Génie Logiciel",
      year: "L3",
      semester: "S1",
      specialty: "ACAD",
      teachingType: "Cours / TD",
    },
    {
      id: 6,
      name: "LOGIQUE : Logique Mathématique",
      year: "L2",
      semester: "S1",
      specialty: "ACAD / ISIL",
      teachingType: "Cours / TD",
    },
    {
      id: 7,
      name: "ARCHITECTURE DES ORDINATEURS 2",
      year: "L1",
      semester: "S2",
      specialty: "ING",
      teachingType: "Cours / TD / TP",
    },
    {
      id: 8,
      name: "SOLV: Solver Complexe",
      year: "M2",
      semester: "S1",
      specialty: "BIGDATA",
      teachingType: "Cours / TP",
    },
  ];

  const handleCheckboxChange = (id) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter((moduleId) => moduleId !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="section-info">
          <span>Section: Desktop - 16</span>
        </div>
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">Ready for Set</span>
        </div>
      </div>

      {/* Inclure le composant ModulesHeader ici */}
      <ModulesHeader />

      {/* Table des modules et pagination */}
      <div className="modules-table-container">
        <div className="modules-table">
          <table>
            <thead>
              <tr>
                <th className="checkbox-column"></th>
                <th>Modules</th>
                <th>Year of Study</th>
                <th>Semester</th>
                <th>Specialty</th>
                <th>Type of Teaching</th>
                <th>Module Specifications</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module) => (
                <tr key={module.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedModules.includes(module.id)}
                      onChange={() => handleCheckboxChange(module.id)}
                    />
                  </td>
                  <td>{module.name}</td>
                  <td>{module.year}</td>
                  <td>{module.semester}</td>
                  <td>{module.specialty}</td>
                  <td>{module.teachingType}</td>
                  <td>
                    <button className="module-details-btn">
                      Module Details
                    </button>
                  </td>
                  <td className="actions-column">
                    <button className="edit-btn">Edit</button>
                    <button className="remove-btn">remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button
            className={currentPage === 1 ? "active" : ""}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button
            className={currentPage === 2 ? "active" : ""}
            onClick={() => handlePageChange(2)}
          >
            2
          </button>
          <button
            className={currentPage === 3 ? "active" : ""}
            onClick={() => handlePageChange(3)}
          >
            3
          </button>
          <button
            className={currentPage === 4 ? "active" : ""}
            onClick={() => handlePageChange(4)}
          >
            4
          </button>
          <button
            className={currentPage === 5 ? "active" : ""}
            onClick={() => handlePageChange(5)}
          >
            5
          </button>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modules;
