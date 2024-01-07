import React from "react";
import { Nav } from "../common/Navigation Bar/Nav";
import { ContactHeaders } from "../additional components/ContactHeader";
import { ContactServices } from "../additional components/ContactServices";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

export function ContactPage() {
  return (
    <div>
      <ContactHeaders />
      <ContactServices />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ContactPage;