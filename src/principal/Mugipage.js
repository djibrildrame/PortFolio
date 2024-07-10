// src/principal/Mugipage.js

import React from "react";
import "./Mugipage.css";
import projet1 from "../img/projet1.png"; // Assurez-vous de remplacer ces chemins avec vos propres images
import projet2 from "../img/projet2.png";
import projet3 from "../img/projet3.png";
import projet4 from "../img/projet4.png";
import projet5 from "../img/projet5.png";
import projet6 from "../img/projet6.png";

const Mugipage = () => {
  const projets = [
    { id: 1, title: "Projet 1", img: projet1 },
    { id: 2, title: "Projet 2", img: projet2 },
    { id: 3, title: "Projet 3", img: projet3 },
    { id: 4, title: "Projet 4", img: projet4 },
    { id: 5, title: "Projet 5", img: projet5 },
    { id: 6, title: "Projet 6", img: projet6 },
  ];

  return (
    <div className="mugi-container">
      {projets.map((projet) => (
        <div key={projet.id} className="mugi-item">
          <img src={projet.img} alt={projet.title} className="mugi-image" />
          <h2 className="mugi-title">{projet.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Mugipage;
