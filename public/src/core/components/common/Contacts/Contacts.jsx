import React from "react";
import '../../../../assets/css/Contacts.css';
import { useState } from "react";
import "../../../../assets/css/fonts.css";
import phone from "../../../../assets/img//icons/phone_contacts.png";
import email from "../../../../assets/img//icons/email_contacts.png";
import address from "../../../../assets/img//icons/address_contacts.png";

export function Contacts() {

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
    const response = await fetch("https://localhost:3000/send", {
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
          e.target.value="";
          document.getElementById("phone").value="";
          document.getElementById("select").value="";
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
  // =================================================================

  // =================================================================
  return (
    <div className="contact-container">
      <div className="box" id="left-box">
        <h1>Get a Free Estimate</h1>
        <h2>
          We`re eager to hear about your painting vision! Let us know and we’ll
          be in touch ASAP.
        </h2>
        <form action="#" method="post" onSubmit={submitEmail}>
          <div className="form-classes">
            <div className="rows-row">
              <input type="text" id="name" placeholder="Name"
                onChange={handleStateChange}
                name="name"
                value={mailerState.name} required />
              <br />
              <input type="email" id="email" placeholder="Email"
                onChange={handleStateChange}
                name="email"
                value={mailerState.email} required />
              <br />
            </div>
          </div>
          <div className="form-classes">
            <div className="rows-row">
              <input type="number" pattern="[0-9]{11}" id="phone" placeholder="Phone"
                onChange={handleStateChange}
                name="phone"
                value={mailerState.phone} required />
              <br />
              <select id="select" placeholder="Select"
                onChange={handleStateChange}
                name="select"
                value={mailerState.select}>
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
            <textarea id="message" placeholder="My message . . ."
              onChange={handleStateChange}
              name="message"
              value={mailerState.message} required />
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
