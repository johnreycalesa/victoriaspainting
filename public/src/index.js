import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter } from 'react-router-dom'
import  Nav  from "./core/components/common/Navigation Bar/Nav";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>,
)
