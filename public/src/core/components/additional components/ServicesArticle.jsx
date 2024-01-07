import React from "react";
import '../../../assets/css/Services_Article.css';
import '../../../assets/css/fonts.css';
import servicesimg1 from "../../../assets/img/servicespage.png";
import servicesimg2 from "../../../assets/img/servicespage (2).png";

export function ServicesArticle() {
    return (
        <div className="container">
            <header>
                <h1>Why Choose Us</h1>
                <p>We are able to complete the majority of renovations with the help of our team of skilled workers. We only outsource work for certain parts of the job to ensure professional quality.</p>
            </header>
            <div className="inner-div-services" id="first-div">
                <div className="card">
                    <img src={servicesimg2} />
                    </div>
                <div className="card desc">
                    <div className="card-div" id="first-card">
                        <h1>Qualified Expert</h1>
                        <p>Our team has over 45 years of combined experience in the industry of painting and remodeling kitchen cabinets business.</p>
                    </div>
                </div>
            </div>
            <div className="inner-div-services" id="second-div">
            <div className="card">
                <img src={servicesimg1} /></div>
                <div className="card desc">
                    <div className="card-div" id="second-card">
                        <h1>Flexible Schedule</h1>
                        <p> We are here to serve our customers' needs and want to ensure we agree upon a time and dates that work for all parties.</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 