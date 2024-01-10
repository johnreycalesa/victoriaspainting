import React from "react";
import { Nav } from "../common/Navigation Bar/Nav";
import { ServicesHeader } from "../additional components/ServicesHeader";
import { ServicesArticle } from "../additional components/ServicesArticle";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

export function ServicesPage() {
  return (
    <div>
      <ServicesHeader />
      <ServicesArticle />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ServicesPage;