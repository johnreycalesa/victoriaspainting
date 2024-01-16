import React from "react";
import '../../../assets/css/Contact_Services.css';
import '../../../assets/css/fonts.css';
import { useEffect } from 'react';
import contactimg1 from "../../../assets/img/contactpage_img.png";
import contactimg2 from "../../../assets/img/contactpage_img (2).png";
import contactimg3 from "../../../assets/img/contactpage_img (3).png";
import contactimg4 from "../../../assets/img/contactpage_img (4).png";
import contactimg5 from "../../../assets/img/contactpage_img (5).png";
import contactimg6 from "../../../assets/img/contactpage_img (6).png";

export function ContactServices() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <article className="center-text">
            <div className="services">
                <div className="about-article_cards">
                    <img className="contact_article_images" src={contactimg1} />
                    <div className="services-description">
                        <h2> Dry Wall Painting &amp; Repair</h2>
                        <p> Contact us today to schedule a consultation and take the first step towards transforming your home.</p>
                    </div>
                </div>
                <div className="about-article_cards-reverse">
                    <img className="contact_article_images" src={contactimg2} />
                    <div className="services-description">
                        <h2>Cabinet Painting </h2>
                        <p>Contact us today to schedule a consultation and take the first step towards transforming your home.</p>
                    </div>
                </div>
                <div className="about-article_cards">
                    <img className="contact_article_images" src={contactimg3} />
                    <div className="services-description">
                        <h2>Power Wash</h2>
                        <p>Contact us today to schedule a consultation and take the first step towards transforming your home.</p>
                    </div>
                </div>
                <div className="about-article_cards-reverse">
                    <img className="contact_article_images" src={contactimg4} />
                    <div className="services-description">
                        <h2>Wallpaper Removal</h2>
                        <p>Contact us today to schedule a consultation and take the first step towards transforming your home.</p>
                    </div>
                </div>
                <div className="about-article_cards">
                    <img className="contact_article_images" src={contactimg5} />
                    <div className="services-description">
                        <h2>Exterior &amp; Interior Painting</h2>
                        <p>Contact us today to schedule a consultation and take the first step towards transforming your home.</p>
                    </div>
                </div>
                <div className="about-article_cards-reverse">
                    <img className="contact_article_images" src={contactimg6} />
                    <div className="services-description">
                        <h2> Deck Sealing &amp; Deck Staining</h2>
                        <p>Contact us today to schedule a consultation and take the first step towards transforming your home.</p>
                    </div>
                </div>
            </div>
        </article>
    );
}