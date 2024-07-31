// src/js/component/card.jsx
import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string
};

export default Card;
