import React from "react";
import { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../../assets/css/fonts.css';
import '../../../assets/css/About_Header.css';
import icon1 from "../../../assets/img/icons/phone_contacts.png";
import icon2 from "../../../assets/img/icons/email_contacts.png";
import icon3 from "../../../assets/img/icons/address_contacts.png";
import icon4 from "../../../assets/img/icons/shops_contacts.png";



export function AboutHeader() {
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
        <div id="image-content">
            <header>
                <h1 id="about">Contact Us</h1>
            </header>
            <section id="about-section">
                <div id="left-section">
                    <div className="contact-info">
                        <img src={icon1} />
                        <p href="tel:+19732344198">+1 973-234-4198</p>
                    </div>
                    <div className="contact-info">
                        <img src={icon2} />
                        <p href="mailto:business@victoriaspainting.com" >business@victoriaspainting.com</p>
                    </div>
                    <div className="contact-info">
                        <img src={icon3} />
                        <p>New Jersey</p>
                    </div>
                    <div className="contact-info hours">
                        <img src={icon4} />
                        <div id="working-hours">
                            <h2>Working Hours</h2>
                            <p>Monday – Friday: 09:00 AM – 5:00 PM<br />Saturday – Sunday: Close</p>
                        </div>
                    </div>
                </div>
                <form action="#" method="post" id="right-section" ref={form} onSubmit={sendEmail}>
                    <div id="name_phone">
                        <input className="fields" type="text" id="about-name" name="from_name" placeholder="Name" required /><br />
                        <input className="fields" type="number" pattern="[0-9]{11}" id="phones" placeholder="Phone"
                            name="from_phone" placeholder="Phone Number" required /><br />
                    </div>
                    <input className="fields email-subject" type="email" id="about-email" name="from_email" placeholder="Email Address" required /><br />
                    <input className="fields email-subject" type="text" id="select" name="select" placeholder="Subject" required /><br />
                    <textarea className="fields" id="about-message" name="message" style={{ "height": "105px" }} placeholder="Your Message" defaultValue={""} required /><br />
                    <input type="submit" defaultValue="" className="fields" id="about-submit" />
                </form>
            </section>
        </div>
    );
}