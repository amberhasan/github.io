import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import PortfolioItem from "./PortfolioItem";
import portfolioItems from "./portfolioData";

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
                <Link to="/portfolio">Portfolio</Link>
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
                    <img
                      src="/images/user.png"
                      alt="Amber Hasan"
                      className="profile-pic"
                    />
                    <div>
                      <h2>About Me</h2>
                      <p>
                        I'm a passionate software developer with a strong
                        interest in <b>DevOps, Web Development,</b> and{" "}
                        <b>Cloud Technologies.</b> I thrive on solving complex
                        problems and building innovative solutions.
                      </p>
                      <div className="about-columns">
                        <div className="about-column">
                          <h3>Skills</h3>
                          <ul>
                            <li>Web Development (React, HTML/CSS)</li>
                            <li>DevOps (Azure, Kubernetes, Terraform)</li>
                            <li>Programming Languages (Java, Python, Bash)</li>
                          </ul>
                        </div>
                        <div className="about-column">
                          <h3>Experience</h3>
                          <ul>
                            <li>2022–Present: Worked at Shopify</li>
                            <li>2017–2022: Bank of America</li>
                            <li>2022: Microsoft</li>
                          </ul>
                        </div>
                        <div className="about-column">
                          <h3>Education</h3>
                          <ul>
                            <li>B.S. in Computer Science, UTD (2017)</li>
                            <li>M.S. in Software Engineering, UTD (Ongoing)</li>
                          </ul>
                        </div>
                      </div>

                      {/* Resume Section */}
                      <div className="resume-section">
                        <h3>Resume</h3>
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
                  <h2>My Work</h2>
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
