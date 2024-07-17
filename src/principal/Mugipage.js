import React from "react";
import { Link } from "react-router-dom";
import "./Mugipage.css";
import Apiworld from "./IMGprojet/Apiworldphoto.png";
import Beverly from "./IMGprojet/Beverlyphoto.png";
import BookieImg from "./IMGprojet/Bookiphoto.png";
import Instagram from "./IMGprojet/Instaphoto.png";
import Print from "./IMGprojet/Printphoto.png";
import Formulaire from "./IMGprojet/Formulairephoto.png";
import logo from "./IMGprojet/logo.png"



const Mugipage = () => {
  const projets = [
    { id: 1, title: "Beverly Paris", img: Beverly, video: "Beverly.mov" },
    { id: 2, title: "Bookie", img: BookieImg, video: "Booki.mov" },
    { id: 3, title: "Instagram", img: Instagram, video: "Instagram.mov" },
    { id: 4, title: "Print", img: Print, video: "Print.mov" },
    { id: 5, title: "Api", img: Apiworld, video: "Apiworld.mov" },
    { id: 6, title: "Formulaire", img: Formulaire, video: "Formulaire.mov" }
  ];




  return (
<div>
  <img className="logo" src={logo} alt="logo principal"/>
  <div className="sst">Voici mes projets réalisés, illustrant ma créativité et mes compétences techniques :  </div>
    <div className="mugi-container">
      {projets.map((projet) => (
        <div key={projet.id} className="mugi-item">
          <Link to={`/projet/${projet.id}`}>
            <img src={projet.img} alt={projet.title} />
          </Link>
          <h3>{projet.title}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Mugipage;
