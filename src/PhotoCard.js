// PhotoCard.js
import React from "react";
import "./Card.css"; // Reuse Card styling or add new styles here

function PhotoCard({ imageSrc, sentence }) {
  return (
    <div className="card photo-card">
      <img src={imageSrc} alt="Profile" className="photo-card-image" />
      <p>{sentence}</p>
    </div>
  );
}

export default PhotoCard;
