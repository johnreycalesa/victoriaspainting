import React from "react";
import "../../../assets/css/Services_Header.css";
import "../../../assets/css/fonts.css";
import aboutimg1 from "../../../assets/img/icons/icon1_about.png";
import aboutimg3 from "../../../assets/img/icons/icon3_about.png";
import aboutimg4 from "../../../assets/img/icons/icon4_about.png";

export function ServicesHeader() {
  return (
    <div className="main-background">
      <div id="headers">
        <h1>About Us</h1>
        <h2>WE ARE PROFESSIONALS IN THE FOLLOWING SERVICES</h2>
      </div>
      <div id="services-headers">
        <div className="services-headers-content">
          <img src={aboutimg1} />
          <p>
            <i>
              <b>Cabinet Painting</b>
            </i>
          </p>
        </div>{" "}
        <div className="services-headers-content">
          <img src={aboutimg1} />
          <p>
            <i>
              <b>Tile and Wood Floor Painting</b>
            </i>
          </p>
        </div>{" "}
        <div className="services-headers-content">
          <img src={aboutimg3} />
          <p>
            <i>
              <b>Counter-top Painting</b>
            </i>
          </p>
        </div>{" "}
        <div className="services-headers-content">
          <img src={aboutimg4} />
          <p>
            <i>
              <b>Closets and Pantries Painting</b>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}
