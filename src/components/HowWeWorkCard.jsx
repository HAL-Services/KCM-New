import React from "react";
// Importing Styles
import "../styles/Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card_body">
        <h3 className="card_title">{props.title}</h3>
        <p className="card_desc">{props.body}</p>
      </div>
      <h1 className="card_index">{props.number}</h1>
    </div>
  );
};

export default Card;
