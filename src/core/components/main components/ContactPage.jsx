import React from "react";
import { ContactHeader } from "../additional components/ContactHeader";
import { ContactAreas } from "../additional components/ContactAreas";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

export function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <ContactAreas />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ContactPage;