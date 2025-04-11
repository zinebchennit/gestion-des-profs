import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modules from "./pages/Modules";

function App() {
  return (
    <Router basename="/gestion-des-profs">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/modules" element={<Modules />} />
      </Routes>
    </Router>
  );
}

export default App;
