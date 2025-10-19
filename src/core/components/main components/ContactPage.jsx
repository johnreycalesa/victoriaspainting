import React from "react";
import { ContactHeader } from "../additional components/ContactHeader";
import { ContactAreas } from "../additional components/ContactAreas";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";
import { SEO } from "../common/SEO/SEO";

export function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Victoria's Painting",
      "telephone": "+1-973-234-4198",
      "email": "contact@victoriaspainting.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-973-234-4198",
        "contactType": "Customer Service",
        "areaServed": "US-NJ",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us - Get Your Free Painting Estimate | Victoria's Painting"
        description="Contact Victoria's Painting for a free estimate on your painting project. Call us at +1-973-234-4198 or fill out our contact form. Serving New Jersey with professional painting services."
        keywords="contact Victoria's Painting, free painting estimate, painting quote NJ, call painter, painting consultation, request estimate, New Jersey painter contact"
        canonicalUrl={`${window.location.origin}/contact`}
        structuredData={structuredData}
      />
      <ContactHeader />
      <ContactAreas />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ContactPage;