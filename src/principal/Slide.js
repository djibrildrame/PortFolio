import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import gauche from "./img/gauche.png";
import droite from "./img/droite.png";
import "./Slider.css";

const Slider = ({ images, titles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <Link to={`/${titles[activeIndex]}`} className="carousel__link">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
      </Link>
      <div className="arrow">
        <img
          className="carousel__btn carousel__btn--prev"
          onClick={handlePrevSlide}
          src={gauche}
          alt="Left Arrow"
        />
        <img
          className="carousel__btn carousel__btn--next"
          onClick={handleNextSlide}
          src={droite}
          alt="Right Arrow"
        />
      </div>
    </div>
  );
};

export default Slider;
