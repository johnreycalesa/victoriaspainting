import React from "react";
import '../../../assets/css/Landing_Services.css';
import '../../../assets/css/fonts.css';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactPage from "../main components/ContactPage.jsx";
import img1 from "../../../assets/img/services_img.png";
import img2 from "../../../assets/img/services_img (2).png";
import img3 from "../../../assets/img/services_img (3).png";
import img4 from "../../../assets/img/services_img (4).png";
import img5 from "../../../assets/img/services_img (5).png";
import img6 from "../../../assets/img/services_img (6).png";


export function LandingServices() {
    return (
        <article className="center-text-landing">
            <div>
                <h1 style={{ textAlign: 'center' }}>Our Services</h1>
                <p>We are professional in the following services</p>
            </div>
            <div className="landing-services">
                <div className="landing-article_cards">
                    <img className="article_images" src={img1} />
                    <h2><i> Dry Wall Painting &amp; Repair</i></h2>
                    <p>
                        Contact us today to schedule a consultation and take the first step
                        towards transforming your home.
                    </p>
                    <Link to="/services" >
                        <button className="article_buttons">EXPLORE</button></Link>
                </div>
                <div className="landing-article_cards">
                    <img className="article_images" src={img2} />
                    <h2><i>Cabinet Painting </i></h2>
                    <p>
                        Contact us today to schedule a consultation and take the first step
                        towards transforming your home.
                    </p>
                    <Link to="/services" ><button className="article_buttons">EXPLORE</button></Link>
                </div>
                <div className="landing-article_cards">
                    <img className="article_images" src={img3} />
                    <h2><i>Power Wash</i></h2>
                    <p>
                        Contact us today to schedule a consultation and take the first step
                        towards transforming your home.
                    </p>
                    <Link to="/services" ><button className="article_buttons">EXPLORE</button></Link>
                </div>
                <div className="landing-article_cards">
                    <img className="article_images" src={img4} />
                    <h2><i>Wallpaper Removal</i></h2>
                    <p>
                        Contact us today to schedule a consultation and take the first step
                        towards transforming your home.
                    </p>
                    <Link to="/services" ><button className="article_buttons">EXPLORE</button></Link>
                </div>
                <div className="landing-article_cards">
                    <img className="article_images" src={img5} />
                    <h2><i>Exterior &amp; Interior Painting</i></h2>
                    <p>
                        Contact us today to schedule a consultation and take the first step
                        towards transforming your home.
                    </p>
                    <Link to="/services" ><button className="article_buttons">EXPLORE</button></Link>
                </div>
                <div className="landing-article_cards">
                    <img className="article_images" src={img6} />
                    <h2> <i>Deck Sealing &amp; Deck Staining</i></h2>
                    <p>
                        Contact us today to schedule a consultation and take the first step
                        towards transforming your home.
                    </p>
                    <Link to="/services" ><button className="article_buttons">EXPLORE</button></Link>
                </div>
            </div>
            <Routes>
                <Route path="/services" element={<ContactPage />} /></Routes>
        </article>
    );
}