import React from "react";
import { ServicesHeader } from "../additional components/ServicesHeader";
import { ServicesList } from "../additional components/ServicesList";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

export function ServicesPage() {
  return (
    <div>
      <ServicesHeader />
      <ServicesList />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ServicesPage;