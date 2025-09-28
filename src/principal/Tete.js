import React from "react";
import logo from "./img/dd.png";
import "./principal.css";

const Tete = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <div className="titre">Djibril Dramé</div>
      <div className="titre1">Développeur Web Front-End</div>
    </div>
  );
};

export default Tete;
