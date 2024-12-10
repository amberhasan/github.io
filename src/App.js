import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Card from "./Card"; // Import the Card component
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
                    <img
                      src="/images/user.png"
                      alt="Amber Hasan"
                      className="profile-pic"
                    />
                    <div>
                      <p>
                        I'm a passionate software developer with a strong
                        interest in <b>DevOps, Web Development,</b> and{" "}
                        <b>Cloud Technologies.</b> I thrive on solving complex
                        problems and building innovative solutions.
                      </p>
                      <div className="about-columns">
                        <Card
                          title="Skills"
                          items={[
                            "Web Development (React, HTML/CSS)",
                            "DevOps (Azure, Kubernetes, Terraform)",
                            "Programming Languages (Java, Python, Bash)",
                          ]}
                        />
                        <Card
                          title="Experience"
                          items={[
                            "2022–Present: Worked at Shopify",
                            "2017–2022: Bank of America",
                            "2022: Microsoft",
                          ]}
                        />
                        <Card
                          title="Education"
                          items={[
                            "B.S. in Computer Science, UTD (2017)",
                            "M.S. in Software Engineering, UTD (Ongoing)",
                          ]}
                        />
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
