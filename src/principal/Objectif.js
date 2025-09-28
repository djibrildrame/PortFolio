import React from "react";
import { Link } from "react-router-dom";
import "./principal.css";
import idee from "./img/idee.png";
import organisation from "./img/organisation.png";
import objectif from "./img/objectif.png";
import react from "./img/react.png";
import mongo from "./img/mongodb.png";
import html from "./img/html.png";
import js from "./img/Js.png";
import css from "./img/css.png";
import node from "./img/node.png";
import djiby from "./img/djiby.jpg";
import tofbooki from "./img/booki.png";
import download from "./img/download.png";

const cvPath = process.env.PUBLIC_URL + "/CVDjibril.pdf";

const Objectif = () => {
  return (
    <div>
      <div className="cercle">
        <img className="bleu" src={idee} alt="Idee" />
        <img className="bleu" src={organisation} alt="Organisation" />
        <img className="bleu" src={objectif} alt="Objectif" />
      </div>
      <div className="title">
        <div>QUALITATIF</div>
        <div>OBJECTIF</div>
        <div>ORGANISATION</div>
      </div>
      <div className="explication">
        <p>
          Passez votre business au niveau supérieur avec <br /> un projet web à
          la pointe de la technologie <br />, optimisé, rapide et réactif.
        </p>
        <p>
          Imaginer, concevoir et programmer des projets
          <br /> web en proposant des solutions <br /> techniques et
          automatisées.
        </p>
        <p>
          À distance ou en présentiel, on communique,
          <br /> on programme des objectifs,
          <br /> on utilise des méthodes agiles.
        </p>
      </div>
      <div className="center-hr">
        <hr className="horizontal-line" />
      </div>

      <div className="language">
        <img className="icone" src={react} alt="React" />
        <img className="icone mongo" src={mongo} alt="MongoDB" />
        <img className="icone" src={node} alt="Node.js" />
        <img className="icone" src={js} alt="JavaScript" />
        <img className="icone" src={css} alt="CSS" />
        <img className="icone" src={html} alt="HTML" />
      </div>
      <div className="center-hr">
        <hr className="horizontal-line line1" />
      </div>
      <div className="qualite">
      <div className="dev">Besoin d'un développeur Front-End ?</div>
      <div className="ensemble">
        Voici ce que nous pourrions faire ensemble{" "}
      </div>
      <div className="moi">
        <img className="tof" src={djiby} alt="Djiby" />
        <p className="presentation">
          "En qualité de développeur web chevronné, je me distingue par ma
          maîtrise dans la conception et <br />
          la réalisation de sites en exploitant les langages essentiels tels que
          HTML, CSS et JavaScript.
          <br /> Mon expertise s'étend vers l'utilisation de technologies
          avant-gardistes telles que React.js <br /> pour des interfaces
          dynamiques, ainsi que MongoDB et Node.js avec Express <br /> pour une
          gestion efficace des bases de données et un développement côté
          serveur.
          <br /> Mon savoir-faire se déploie dans une intégration fluide de ces
          technologies <br /> afin de modeler des expériences web interactives
          et hautement performantes."
        </p>
      </div>
      </div>
      <div className="center-hr">
        <hr className="horizontal-line line2" />
      </div>

      <div className="me">
        <div className="realisation">Découvrez mes réalisations</div>
        <p className="mini">
          Consultez mon portfolio et découvrez l'ensemble de mes réalisations.
        </p>
        <div className="oeuvre">
          <img className="tofbooki" src={tofbooki} alt="Booki" />
          <div className="texte">
            <div className="Applicationbooki">Application web - Booki</div>
            <p className="descript">
              Booki est une plateforme de réservation d'hébergement, <br />
              c'est un projet personnel qui m'a permis de m'exercer et
              d'apprendre <br />
              de nouvelles technologies. Étant développée From Scratch, ma
              responsabilité <br />
              était de créer le projet avec toutes les fonctionnalités qui lui
              incombe.
            </p>

            <Link to="/projet" className="consulter">
              Consulter le projet
            </Link>
          </div>
        </div>
      </div>
      <div className="center-hr">
        <hr className="horizontal-line line3" />
      </div>
      <div className="particv">
        <div className="cv">
          Curriculum Vitae du développeur Frontend React.js
        </div>
        <div className="titrecv">
          Pour en savoir davantage sur mon parcours, téléchargez mon CV en
          ligne.
        </div>
        <div className="download">
          <div className="prendre">
            <a href={cvPath} download className="lien-telechargement">
              <img
                className="telechargement"
                src={download}
                alt="Télécharger"
              />
              <p className="lien"> Télécharger</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectif;
