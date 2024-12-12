// PortfolioItem.js
import React from "react";
import "../styles/PortfolioItem.css";

function PortfolioItem({ image, title, description, link }) {
  return (
    <div className="work-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default PortfolioItem;
