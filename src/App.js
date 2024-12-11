import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css";
import Card from "./components/Card";
import PortfolioItem from "./components/PortfolioItem";
import portfolioItems from "./data/portfolioData";
import aboutData from "./data/aboutData";

const AboutSection = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about-content">
        <div className="about-columns">
          {aboutData.map((data, index) => (
            <Card key={index} title={data.title} items={data.items} />
          ))}
        </div>
        <iframe
          src="/documents/resume.pdf"
          title="Amber Hasan's Resume"
          className="resume-iframe"
        ></iframe>
      </div>
    </div>
  </section>
);

const PortfolioSection = () => (
  <section id="portfolio" className="portfolio">
    <div className="container">
      <div className="work-gallery">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </section>
);

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
