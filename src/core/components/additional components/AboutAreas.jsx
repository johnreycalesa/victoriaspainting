import React from "react";
import '../../../assets/css/About_Areas.css';
import '../../../assets/css/fonts.css';
import aboutimg from "../../../assets/img/about_areas.png";
import listimg from "../../../assets/img/list-area.png";

export function AboutAreas() {
    return (
        <div id="areas">
            <header>
                <h1>Areas Served</h1>
                <p>Victoria’s Painting is pleased to provide the best house painting to your specific neighborhood in and around Morristown. We service the following areas:</p>
            </header>
            <article id="about_areas">
                <img src={aboutimg} className="area_img" id="area-left"/>
                <img src={listimg} className="area_img" id="list-right"/>
            </article>
        </div>
    )
}