// src/js/component/footer.jsx
import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">{props.text}</span>
      </div>
    </footer>
  );
};

export default Footer;
