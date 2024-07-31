// src/js/component/jumbotron.jsx
import React from "react";

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.description}</p>
      <a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">{props.buttonLabel}</a>
    </div>
  );
};

export default Jumbotron;
