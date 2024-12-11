import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  return (
    <Router>
      <header className="header">
        <nav>
          <ul className="nav-buttons">
            <li>
              <Link to="/" className="button-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="button-link">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
      </Routes>
    </Router>
  );
}

export default App;
