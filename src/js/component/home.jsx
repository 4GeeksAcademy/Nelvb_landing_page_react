// src/js/component/home.jsx
import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

// Crear el componente principal Home
const Home = () => {
  const navLinks = [
    { url: "#", label: "Home", active: true },
    { url: "#", label: "About", active: false },
    { url: "#", label: "Services", active: false },
    { url: "#", label: "Contact", active: false },
  ];

  return (
    <div>
      <Navbar brand="Start Bootstrap" links={navLinks} />
      <div className="container mt-5">
        <Jumbotron 
          title="A Warm Welcome!" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          buttonUrl="#" 
          buttonLabel="Call to action!" 
        />
        <div className="row">
          <div className="col-md-4">
            <Card 
              imageUrl="http://placehold.it/500x325"
              title="Card title 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              buttonUrl="#"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-4">
            <Card 
              imageUrl="http://placehold.it/500x325"
              title="Card title 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              buttonUrl="#"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-4">
            <Card 
              imageUrl="http://placehold.it/500x325"
              title="Card title 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              buttonUrl="#"
              buttonLabel="Find Out More!" 
            />
          </div>
        </div>
      </div>
      <Footer text="Copyright &copy; Your Website 2019" />
    </div>
  );
};

export default Home;
