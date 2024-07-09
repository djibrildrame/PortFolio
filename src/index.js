import React from "react";
import { render } from "react-dom"; // Utilisez 'render' au lieu de 'react-dom/client'
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
