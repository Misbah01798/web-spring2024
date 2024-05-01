import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <div className="text">
        <span>{heading}</span>
        <span>{detail}</span>
      </div>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
