// src/components/PortfolioSection.js
import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioItems from "../data/portfolioData";

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

export default PortfolioSection;
