import React from "react";
import { ServicesHeader } from "../additional components/ServicesHeader";
import { ServicesList } from "../additional components/ServicesList";
import { Contacts } from "../common/Contacts/Contacts";
import { Footer } from "../common/Footer/Footer";
import { SEO } from "../common/SEO/SEO";

export function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Painting Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Victoria's Painting",
      "telephone": "+1-973-234-4198",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NJ",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "New Jersey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Painting",
            "description": "Professional interior and exterior house painting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Painting",
            "description": "Expert painting services for commercial properties and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Consulting",
            "description": "Professional color selection and consultation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting",
            "description": "Quality interior painting for all types of spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Painting",
            "description": "Durable exterior painting and protection services"
          }
        }
      ]
    }
  };

  return (
    <div>
      <SEO
        title="Our Services - Professional Painting & Color Consulting | Victoria's Painting"
        description="Explore Victoria's Painting comprehensive services: residential painting, commercial painting, interior/exterior work, and expert color consulting. Quality craftsmanship for every project in New Jersey."
        keywords="painting services, residential painting, commercial painting, interior painting, exterior painting, color consulting, house painting, business painting, professional painters NJ"
        canonicalUrl={`${window.location.origin}/services`}
        structuredData={structuredData}
      />
      <ServicesHeader />
      <ServicesList />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ServicesPage;