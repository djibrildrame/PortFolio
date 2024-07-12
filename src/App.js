import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tete from "./principal/Tete";
import Slider from "./principal/Slide";
import service from "./principal/img/services.jpeg";
import contact from "./principal/img/images.jpeg";
import Objectif from "./principal/Objectif";
import projet from "./principal/img/projet.png";
import Booki from "./principal/pagesprojet/Booki";
import Footer from "./principal/Footer";
import Mugipage from "./principal/Mugipage";
import ProjectPage from "./principal/Video";

const images = [projet, service, contact];
const titles = ["mugi", "service", "contact"];

function App() {
  return (
    <Router>
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
          <Route path="/projet/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
