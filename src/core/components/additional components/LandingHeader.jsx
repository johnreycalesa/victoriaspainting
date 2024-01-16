import React from "react";
import "../../../assets/css/Landing_Header.css";
import "../../../assets/css/fonts.css";
import icon1 from "../../../assets/img/icons/icon1_landing.png";
import icon2 from "../../../assets/img/icons/icon2_landing.png";
import icon3 from "../../../assets/img/icons/icon3_landing.png";
import icon4 from "../../../assets/img/icons/icon4_landing.png";
import history from "../../../assets/img/services_history.png";

export function LandingHeader() {
    return (
        <header className="center-text">
            <div className="landing-container">
                <div className="text-container">
                    <h1 className="text-overlay">Transform your Home</h1>
                    <p className="text-overlay">
                        Develop your home into a space that reflects your unique style and
                        personality with our expert home makeover services. Victoria’s
                        Painting offers a wide range of interior design from painting to
                        overall home makeover.{" "}
                    </p>
                    <p className="text-overlay">
                        Contact us today to schedule a consultation and take the first step
                        towards transforming your home.
                    </p>
                    <div className="text-overlay">
                        <img src={icon1} />
                        <img src={icon2} />
                        <img src={icon3} />
                        <img src={icon4} />
                    </div>
                    <a href="tel:+19732344198" className="text-overlay">
                        CALL US <br /> +1-973-234-4198
                    </a>
                </div>
            </div>
            <div className="center-text headers">
                <h1>Victoria's Painting</h1>
                <p>
                    <i>Color Consulting &amp; Painting Services</i>
                </p>
            </div>
            <div id="header_content">
                <div id="header_left">
                    <img className="history_image" src={history} />
                </div>
                <div id="header_right">
                    <p>
                        Is your home in need of a face-lift? Are you ready for a change?
                        Don’t stress over the color selection process for your home. Whether
                        you want the interior or exterior painted, Victoria’s Painting is
                        there to help. Not only can you get time with a professional color
                        consultant, so you’ll know exactly which colors to pick.
                    </p>
                </div>
            </div>
        </header>
    );
}
