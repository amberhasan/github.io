import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css"; // Correct relative path for App.css
import Card from "./components/Card"; // Correct relative path for Card.js
import PortfolioItem from "./components/PortfolioItem"; // Correct relative path for PortfolioItem.js
import portfolioItems from "./data/portfolioData"; // Correct relative path for portfolioData.js
import aboutData from "./data/aboutData"; // Import the about data

function App() {
  return (
    <Router>
      <div>
        {/* Header Section */}
        <header className="header">
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Projects</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          {/* About Page */}
          <Route
            path="/"
            element={
              <section id="about" className="about">
                <div className="container">
                  <div className="about-content">
                    <div>
                      <div className="about-columns">
                        {aboutData.map((data, index) => (
                          <Card
                            key={index}
                            title={data.title}
                            items={data.items}
                          />
                        ))}
                      </div>

                      {/* Resume Section */}
                      <div className="resume-section">
                        <iframe
                          src="/documents/resume.pdf"
                          title="Amber Hasan's Resume"
                          style={{
                            width: "100%",
                            height: "500px",
                            border: "none",
                            marginTop: "20px",
                          }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            }
          />

          {/* Portfolio Page */}
          <Route
            path="/portfolio"
            element={
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
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
