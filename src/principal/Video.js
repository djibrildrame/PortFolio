import React from "react";
import { useParams } from "react-router-dom";
import Apiworld from "./projet/Apiworld.mov"; 
import Beverly from "./projet/Beverly.mov";
import Bookie from "./projet/Booki.mov";
import Instagram from "./projet/Instagram.mov";
import Print from "./projet/Print.mov";
import Formulaire from "./projet/Formulaire.mov";
import "./Mugipage.css";
import logo from "./IMGprojet/logo.png";

const projectVideos = {
  1: { title: "Beverly Paris", src: Beverly },
  2: { title: "Bookie", src: Bookie },
  3: { title: "Instagram", src: Instagram },
  4: { title: "Print", src: Print },
  5: { title: "Api World", src: Apiworld },
  6: { title: "Formulaire", src: Formulaire }
};

const soustitres = {
  1: { soustitre: "Site vestimentaire avec un assortiment de choix homme et femme réalisé pour un particulier." },
  2: { soustitre: "Une page d'accueil du site d'hôtel Bookie avec différentes catégories et divers choix pour le client." },
  3: { soustitre: "Reproduction d'une page de connexion d'Instagram avec un formulaire stocké dans une base de données sur les informations de l'utilisateur." },
  4: { soustitre: "Page d'accueil de Print site d'imprimerie avec Slider pour rendre le site attractif." },
  5: { soustitre: "Sites sur toutes les cartes du mondes réalisés et triés par catégories en fonction des continents avec une requête en API." },
  6: { soustitre: "Formulaire avec différentes couleurs et des conditions concernant les mots de passes et mail sinon le formulaire n'est pas accepté." }
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectVideos[id];
  const soustitre = soustitres[id]?.soustitre;

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <img className="logo" src={logo} alt="logo principal" />
      <div>
        <h1 className="param">{project.title}</h1>
        <h4>{soustitre}</h4>
        <video className="video" width="1000" height="500" controls>
          <source src={project.src} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
      </div>
    </div>
  );
};

export default ProjectPage;
