import React from "react";
import '../../../../assets/css/Contacts.css';
import { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../../../assets/css/fonts.css";
import phone from "../../../../assets/img//icons/phone_contacts.png";
import email from "../../../../assets/img//icons/email_contacts.png";
import address from "../../../../assets/img//icons/address_contacts.png";

export function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rb4l5cw', 'template_0bdyval', form.current, 'nKYHmb69A350_7kwn')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                e.target.reset();
            });
    };

    return (
        <div className="contact-container">
            <div className="box" id="left-box">
                <h1>Get a Free Estimate</h1>
                <h2>
                    We`re eager to hear about your painting vision! Let us know and we’ll
                    be in touch ASAP.
                </h2>
                <form action="#" method="post" ref={form} onSubmit={sendEmail}>
                    <div className="form-classes">
                        <div className="rows-row">
                            <input type="text" id="name" placeholder="Name" name="from_name" required />
                            <br />
                            <input type="email" id="email" placeholder="Email" name="from_email" required />
                            <br />
                        </div>
                    </div>
                    <div className="form-classes">
                        <div className="rows-row">
                            <input type="tel" pattern="\d{3}-\d{3}-\d{4}" id="phone" name="from_phone" placeholder="Phone Number" maxlength="12" required />
                            <br />
                            <select id="select" placeholder="Select" name="select">
                                <option value disabled selected hidden required>
                                    Services Needed
                                </option>
                                <option value=" Dry Wall Painting & Repair" style={{ margin: "10px" }}>
                                    Dry Wall Painting & Repair
                                </option>
                                <option value="Cabinet Painting " style={{ margin: "10px" }}>
                                    Cabinet Painting
                                </option>
                                <option value=" Power Wash" style={{ margin: "10px" }}>
                                    Power Wash
                                </option>
                                <option value="Wallpaper Removal" style={{ margin: "10px" }}>
                                    Wallpaper Removal
                                </option>
                                <option value="Exterior  & Interior Painting" style={{ margin: "10px" }}>
                                    Exterior  & Interior Painting
                                </option>
                                <option value=" Deck Sealing & Deck Staining" style={{ margin: "10px" }}>
                                    Deck Sealing & Deck Staining
                                </option>
                                <option value="Others" style={{ margin: "10px" }}>
                                    Other
                                </option>
                            </select>
                            <br />
                        </div>
                    </div>
                    <div className="rows-column">
                        <textarea id="message" placeholder="My message . . ." name="message" required />
                        <input type="submit" defaultValue="Submit" id="submit" />
                    </div>
                </form>
            </div>
            <div className="box" id="right-box">
                <div id="contacts">
                    <h1>WANT A HOME MAKEOVER? </h1>
                    <h2>CONTACT US:</h2>
                    <div className="text-design-contacts">
                        <img src={phone} alt="Phone Number" className="logo" />
                        <a href="tel:+19732344198">+1 973-234-4198</a>
                        <br />
                    </div>
                    <div className="text-design-contacts">
                        <img src={email} alt="Email" className="logo" />
                        <a href="mailto:business@victoriaspainting.com" >
                            business@victoriaspainting.com
                        </a>
                        <br />
                    </div>
                    <div className="text-design-contacts">
                        <img src={address} alt="Address" className="logo" /> Dover, New
                        Jersey
                    </div>
                </div>
            </div>
        </div >
    );
}
