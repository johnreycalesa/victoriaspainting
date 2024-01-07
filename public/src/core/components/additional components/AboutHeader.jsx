import React from "react";
import { useState } from "react";
import '../../../assets/css/fonts.css';
import '../../../assets/css/About_Header.css';
import icon1 from "../../../assets/img/icons/phone_contacts.png";
import icon2 from "../../../assets/img/icons/email_contacts.png";
import icon3 from "../../../assets/img/icons/address_contacts.png";
import icon4 from "../../../assets/img/icons/shops_contacts.png";



export function AboutHeader() {
    const fieldFocus = event => {
        document.getElementById("navbar-id").classList.toggle('navbar-menu-hide');
    };
    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
    });
    // =================================================================
    function handleStateChange(e) {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    // =================================================================
    const submitEmail = async (e) => {
        e.preventDefault();
        // console.log({ mailerState });
        const response = await fetch("https://victoriaspainting.com/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailerState }),
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                // console.log(resData);
                if (resData.status === "success") {
                    alert("Message Sent");
                    e.target.value = "";
                    document.getElementById("phone").value = "";
                    document.getElementById("select").value = "";
                } else if (resData.status === "fail") {
                    alert("Message failed to send");
                    e.target.value = "";
                    document.getElementById("phone").value = "";
                    document.getElementById("select").value = "";
                }
            })
            .then(() => {
                setMailerState({
                    email: "",
                    name: "",
                    message: "",
                });
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
                        <p href="mailto:business@victoriaspainting.com " >business@victoriaspainting.com </p>
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
                <form action="#" method="post" id="right-section" onSubmit={submitEmail}>
                    <div id="name_phone">
                        <input className="fields" type="text" id="about-name" onChange={handleStateChange}
                            name="name"
                            value={mailerState.name} placeholder="Name" required /><br />
                        <input className="fields" type="number" pattern="[0-9]{11}" id="phones" placeholder="Phone"
                            onChange={handleStateChange}
                            name="phone"
                            value={mailerState.phones} placeholder="Phone Number" required /><br />
                    </div>
                    <input className="fields email-subject" type="email" id="about-email" onChange={handleStateChange}
                        name="email"
                        value={mailerState.email} placeholder="Email Address" required /><br />
                    <input className="fields email-subject" type="text" id="select" onChange={handleStateChange}
                        name="select"
                        value={mailerState.select} placeholder="Subject" required /><br />
                    <textarea className="fields" id="about-message" onChange={handleStateChange}
                        name="message"
                        value={mailerState.message} style={{ "height": "105px" }} placeholder="Your Message" defaultValue={""} required /><br />
                    <input type="submit" defaultValue="" className="fields" id="about-submit" />
                </form>
            </section>
        </div>
    );
}