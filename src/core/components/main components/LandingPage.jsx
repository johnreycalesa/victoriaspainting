import React from "react";
import { LandingHeader } from "../additional components/LandingHeader";
import { LandingServices } from "../additional components/LandingServices";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";
import { SEO } from "../common/SEO/SEO";

function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Victoria's Painting",
    "description": "Professional color consulting and painting services for residential and commercial projects",
    "url": window.location.origin,
    "telephone": "+1-973-234-4198",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00",
    "serviceType": ["Residential Painting", "Commercial Painting", "Color Consulting", "Interior Painting", "Exterior Painting"]
  };

  return (
    <div>
      <SEO
        title="Victoria's Painting - Professional Color Consulting & Painting Services | New Jersey"
        description="Transform your space with Victoria's Painting. Expert residential and commercial painting services, professional color consulting, and quality craftsmanship in New Jersey. Free estimates available."
        keywords="painting services NJ, color consulting, residential painting, commercial painting, professional painters New Jersey, house painting, interior painting, exterior painting, Victoria's Painting"
        canonicalUrl={`${window.location.origin}/`}
        structuredData={structuredData}
      />
      <LandingHeader />
      <LandingServices />
      <Contacts />
      <Footer />
    </div>
  );
}

export default LandingPage;