// About.js
import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Profile Picture */}
          <img
            src="/images/user.png"
            alt="Amber Hasan"
            className="profile-pic"
          />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate software developer with a strong interest in{" "}
              <b>DevOps, Web Development,</b> and <b>Cloud Technologies.</b> I
              thrive on solving complex problems and building innovative
              solutions.
            </p>
            <div className="about-columns">
              <div className="about-column"></div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
