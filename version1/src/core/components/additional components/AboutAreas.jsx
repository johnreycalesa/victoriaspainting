import React from "react";
import '../../../assets/css/About_Areas.css';
import '../../../assets/css/fonts.css';
import aboutimg from "../../../assets/img/about_areas.webp";
import listimg from "../../../assets/img/list-area.webp";

export function AboutAreas() {
    return (
        <div id="areas">
            <header>
                <h1>Areas Served</h1>
                <p>Victoria’s Painting is pleased to provide the best house painting to your specific neighborhood in and around Morristown. We service the following areas:</p>
            </header>
            <article id="about_areas">
                <img src={aboutimg} className="area_img" id="area-left" alt="Areas covered for the services in a map"/>
                <img src={listimg} className="area_img" id="list-right" alt="Areas covered for the services"/>
            </article>
        </div>
    )
}