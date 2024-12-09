import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <nav>
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
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
                I'm a passionate software developer with a strong interest in
                <b> DevOps, Web Development,</b> and <b>Cloud Technologies.</b>{" "}
                I thrive on solving complex problems and building innovative
                solutions.
              </p>
              <div className="tabs">
                <button
                  className={activeTab === "skills" ? "active-tab" : ""}
                  onClick={() => handleTabChange("skills")}
                >
                  Skills
                </button>
                <button
                  className={activeTab === "experience" ? "active-tab" : ""}
                  onClick={() => handleTabChange("experience")}
                >
                  Experience
                </button>
                <button
                  className={activeTab === "education" ? "active-tab" : ""}
                  onClick={() => handleTabChange("education")}
                >
                  Education
                </button>
              </div>
              <div className="tab-content">
                {activeTab === "skills" && (
                  <ul>
                    <li>Web Development (React, HTML/CSS)</li>
                    <li>DevOps (Azure, Kubernetes, Terraform)</li>
                    <li>Programming Languages (Java, Python, Bash)</li>
                  </ul>
                )}
                {activeTab === "experience" && (
                  <ul>
                    <li>2022–Present: Worked at Shopify</li>
                    <li>2017–2022: Bank of America</li>
                    <li>2022: Microsoft</li>
                  </ul>
                )}
                {activeTab === "education" && (
                  <ul>
                    <li>B.S. in Computer Science, UTD (2017)</li>
                    <li>M.S. in Software Engineering, UTD (Ongoing)</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>My Work</h2>
          <div className="work-gallery">
            <div className="work-item">
              <img src="/images/snake-game.png" alt="Project 1" />
              <h3>Machine Learning: Snake Game</h3>
              <p>
                Enhancing Snake Game Strategy with Deep Reinforcement Learning
                and Advanced Neural Networks
              </p>
            </div>
            <div className="work-item">
              <img src="/images/reddit-graph.png" alt="Project 2" />
              <h3>Big Data: Kafka Connection to Reddit API</h3>
              <p>
                From Reddit to Insights: A Big Data Pipeline for Entity
                Recognition on Comments from Subreddit “news”
              </p>
            </div>
            <div className="work-item">
              <img src="/images/connected-components.png" alt="Project 3" />
              <h3>Big Data: Graph-Based Social Network Analysis</h3>
              <p>
                Insights from Facebook's Dataset Using PySpark and GraphFrames.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>
            I'd love to hear from you! Reach out via email or connect with me on
            social platforms.
          </p>
          <p>
            <strong>Email:</strong> amber@example.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/amberhasan">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/amberhasan">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume">
        <div className="container">
          <h2>My Resume</h2>
          <iframe
            src="/documents/resume.pdf"
            title="Amber Hasan's Resume"
            width="100%"
            height="600px"
            style={{ border: "none", marginTop: "20px" }}
          ></iframe>
        </div>
      </section>

      <footer>
        <p>© 2024 Amber Hasan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
