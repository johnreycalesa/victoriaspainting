import React from "react";
import { AboutHeader } from "../additional components/AboutHeader";
import { AboutArticle } from "../additional components/AboutArticle";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";

export function AboutPage() {
  return (
    <div>
      <AboutHeader />
      <AboutArticle />
      <Contacts />
      <Footer />
    </div>
  );
}

export default AboutPage;