import React from "react";
import { AboutHeader } from "../additional components/AboutHeader";
import { AboutArticle } from "../additional components/AboutArticle";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";
import { SEO } from "../common/SEO/SEO";

export function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Victoria's Painting",
      "description": "Learn about our professional painting company, our team, values, and commitment to quality craftsmanship",
      "url": `${window.location.origin}/about`,
      "telephone": "+1-973-234-4198"
    }
  };

  return (
    <div>
      <SEO
        title="About Us - Victoria's Painting | Professional Painting Team in New Jersey"
        description="Meet the Victoria's Painting team. Learn about our commitment to quality, years of experience, and dedication to transforming spaces with expert painting services in New Jersey."
        keywords="about Victoria's Painting, professional painting team, painting company New Jersey, experienced painters, quality painting services, painting craftsmanship"
        canonicalUrl={`${window.location.origin}/about`}
        structuredData={structuredData}
      />
      <AboutHeader />
      <AboutArticle />
      <Contacts />
      <Footer />
    </div>
  );
}

export default AboutPage;