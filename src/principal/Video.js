import React from "react";
import { useParams } from "react-router-dom";
import Apiworld from "./projet/Apiworld.mov"; 
import Beverly from "./projet/Beverly.mov";
import Bookie from "./projet/Booki.mov";
import Instagram from "./projet/Instagram.mov";
import Print from "./projet/Print.mov";
import Formulaire from "./projet/Formulaire.mov";

const projectVideos = {
  1: Beverly,
  2: Bookie,
  3: Instagram,
  4: Print,
  5: Apiworld,
  6: Formulaire
};

const ProjectPage = () => {
  const { id } = useParams();
  const videoSrc = projectVideos[id];

  if (!videoSrc) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <h1>Projet {id}</h1>
      <video width="640" height="480" controls>
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de cette vidéo.
      </video>
    </div>
  );
};

export default ProjectPage;
