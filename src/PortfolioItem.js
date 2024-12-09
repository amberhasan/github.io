// PortfolioItem.js
import React from "react";
import "./PortfolioItem.css";

function PortfolioItem({ image, title, description }) {
  return (
    <div className="work-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PortfolioItem;
