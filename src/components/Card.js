import React from "react";
import "../styles/Card.css"; // Optional for specific card styling

function Card({ title, items }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {typeof item === "string" && item.endsWith(".png") ? (
              <img src={item} alt="Card item" className="card-image" />
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
