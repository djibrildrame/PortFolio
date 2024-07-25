import React from "react";
import {  Routes, Route } from "react-router-dom";
import Tete from "./principal/Tete";
import Slider from "./principal/Slide";
import service from "./principal/img/Contactphoto.png";
import contact from "./principal/img/Capture d’écran 2024-07-20 à 12.35.35.png";
import Objectif from "./principal/Objectif";
import projet from "./principal/img/Capture d’écran 2024-07-20 à 07.16.47.png";
import Booki from "./principal/pagesprojet/Booki";
import Footer from "./principal/Footer";
import Projet from "./principal/Mugipage";
import Service from "./principal/Service";
import Contact from "./principal/Contact";
import Video from "./principal/Video";

const images = [projet, service, contact];
const titles = ["Projet", "Service", "Contact"];

function App() {
  return (

      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Tete />
              <Slider images={images} titles={titles} />
              <Objectif />
              <Footer />
            </>
          } />
          <Route path="/Booki" element={<Booki />} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projet/:id" element={<Video />} />
        </Routes>
      </div>
  
  );
}

export default App;