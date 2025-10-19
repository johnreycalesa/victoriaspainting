import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Nav from "./core/components/common/Navigation Bar/Nav";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  </HelmetProvider>
);
