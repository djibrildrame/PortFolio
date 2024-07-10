// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Tete from "./principal/Tete";
import Slider from "./principal/Slide";
import service from "./principal/img/services.jpeg";
import contact from "./principal/img/images.jpeg";
import Objectif from "./principal/Objectif";
import projet from "./principal/img/projet.png";
import Exploit from "./principal/exploit";
import Booki from "./principal/pagesprojet/Booki";
import Footer from "./principal/Footer";
import Mugipage from "./principal/Mugipage";

const images = [projet, service, contact];
const titles = ["mugi", "service", "contact"];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Exploit" element={<Exploit />} />
        <Route path="/Booki" element={<Booki />} />
        <Route path="/Mugipage" element={<Mugipage />} />
      </Routes>
      <Tete />
      <Slider images={images} titles={titles} />

      <Objectif />
      <Footer />
    </div>
  );
}

export default App;
