import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../../assets/css/Nav.css";
import "../../../../assets/css/fonts.css";
import LandingPage from "../../main components/LandingPage";
import ServicesPage from "../../main components/ServicesPage";
import AboutPage from "../../main components/AboutPage";
import ContactPage from "../../main components/ContactPage";
import logo from "../../../../assets/img/logo_img.png";
import eng from "../../../../assets/img//icons/flag.png";
import more from "../../../../assets/img//icons/more-btn.jpg";

const App = () => {
  const handleClick = event => {
    document.getElementById("navbar-id").classList.toggle('navbar-menu-hide');
  };

  const handleScroll = event => {
    document.getElementById("navbar-id").classList.add('navbar-menu-hide');
  };
  window.addEventListener('scroll', handleScroll);
  return (
    <div>
      <nav>
        <img
          src={more}
          className="dropdown"
          onClick={handleClick}
        />
        <div className="logo">
          <Link to="/" >
            <img src={logo} alt="Logo" /></Link>
        </div>
        <ul className="navbar-menu" id="navbar-id" >
          <li>
            <NavLink to="/services" style={{ textDecoration: "none" }}>
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
              Contact Us
            </NavLink>
          </li>

          <li href="tel:+19732344198" className="phone-number">+1 973-234-4198</li>
          <li className="language-dropdown">
            <button className="dropbtn">
              <img src={eng} alt="english flag" /> EN
            </button>
          </li>
        </ul>

      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ContactPage />} />
        <Route path="/about" element={<ServicesPage />} />
        <Route path="/contact" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
export default App;
