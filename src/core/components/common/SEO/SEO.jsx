import React from "react";
import { Helmet } from "react-helmet-async";

export function SEO({
  title = "Victoria's Painting - Professional Color Consulting & Painting Services",
  description = "Victoria's Painting Company offers expert color consulting and painting services for residential and commercial projects in New Jersey. Contact us today for a free estimate and transform your space with our professional painters.",
  keywords = "painting services, color consulting, residential painting, commercial painting, professional painters, New Jersey painting, house painting, interior painting, exterior painting",
  canonicalUrl,
  ogImage = "/logo512.png",
  ogType = "website",
  structuredData,
}) {
  const siteUrl = window.location.origin;
  const currentUrl = canonicalUrl || window.location.href;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Victoria's Painting" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Victoria's Painting" />
      <meta name="geo.region" content="US-NJ" />
      <meta name="geo.placename" content="New Jersey" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
