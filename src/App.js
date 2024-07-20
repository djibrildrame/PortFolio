import React from "react";
import {  Routes, Route } from "react-router-dom";
import Tete from "./principal/Tete";
import Slider from "./principal/Slide";
import service from "./principal/img/Service.png";
import contact from "./principal/img/images.jpeg";
import Objectif from "./principal/Objectif";
import projet from "./principal/img/Capture d’écran 2024-07-20 à 07.16.47.png";
import Booki from "./principal/pagesprojet/Booki";
import Footer from "./principal/Footer";
import Mugipage from "./principal/Mugipage";
import ServicePage from "./principal/Service";
import ContactPage from "./principal/Contact";
import Video from "./principal/Video";

const images = [projet, service, contact];
const titles = ["Mugipage", "ServicePage", "ContactPage"];

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
          <Route path="/Mugipage" element={<Mugipage />} />
          <Route path="/service" element={<ServicePage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projet/:id" element={<Video />} />
        </Routes>
      </div>
  
  );
}

export default App;

