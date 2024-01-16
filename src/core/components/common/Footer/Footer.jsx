import React from "react";
import "../../../../assets/css/Footer.css";
import "../../../../assets/css/fonts.css";
import phone from "../../../../assets/img//icons/phone_footer.png";
import email from "../../../../assets/img//icons/email_footer.png";
import address from "../../../../assets/img//icons/address_footer.png";
import facebook from "../../../../assets/img//icons/facebook.png";
import gmail from "../../../../assets/img//icons/gmail.png";
import linkedin from "../../../../assets/img//icons/linkedin.png";
import instagram from "../../../../assets/img//icons/instagram.png";

export function Footer() {
  return (
    <div id="footer_div">
      <footer>
        <div id="left-column">
          <h1>Victoria’s Painting</h1>
          <p>
            At Victoria’s Painting, we take pride in delivering high quality
            painting services that exceed our customers’ expectations. Our team
            of skilled professionals is committed to providing exceptional
            craftsmanship and excellent customer service, ensuring that every
            project is completed with the utmost care and attention to detail.
            You can trust us to transform your space into a beautiful and
            inviting environment.
          </p>
          <div id="links">
            <a href="#"><img src={facebook} className="socials" /></a>
            <a href="#"><img src={gmail} className="socials" /></a>
            <a href="https://www.instagram.com/victoriaspaintingllc/" target="_blank">
              <img src={instagram} className="socials" />
            </a>
          </div>
        </div>
        <div id="center-column">
          <h1>SERVICES</h1>
          <ul>
            <li>Dry Wall Painting &amp; Repair</li>
            <li>Cabinet Painting</li>
            <li>Power Wash</li>
            <li>Wallpaper Removal</li>
            <li>Exterior &amp; Interior Painting</li>
            <li>Deck Sealing &amp; Deck Staining</li>
          </ul>
        </div>
        <div id="right-column">
          <h1>CONTACT</h1>
          <div className="text-design">
            <img src={phone} alt="Phone Number" className="logo" />
            <a href="tel:+19732344198" className="contact-footer">
              +1 973-234-4198
            </a>
            <br />
          </div>
          <div className="text-design">
            <img src={email} className="logo" />
            <a href="mailto: business@victoriaspainting.com" className="contact-footer">
              business@victoriaspainting.com
            </a>
            <br />
          </div>
          <div className="text-design">
            <img src={address} className="contact-footer logo" /> Dover, New Jersey
          </div>
        </div>
      </footer>
      <div id="credits-div">
        <p id="credits">All rights reserved by ©victoriaspainting 2023</p>
      </div>
    </div>
  );
}
