import React from "react";
import { Nav } from "../common/Navigation Bar/Nav";
import { AboutHeader } from "../additional components/AboutHeader";
import { AboutAreas } from "../additional components/AboutAreas";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

export function AboutPage() {
  return (
    <div>
      <AboutHeader />
      <AboutAreas />
      <Contacts />
      <Footer />
    </div>
  );
}

export default AboutPage;