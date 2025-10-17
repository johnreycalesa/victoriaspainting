import React from "react";
import aboutimg from "../../../assets/img/about_areas.webp";
import listimg from "../../../assets/img/list-area.webp";

export function ContactAreas() {
  return (
    <section className="section-container bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <div className="inline-block mb-4">
          <div className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            Service Coverage
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
          Areas Served
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Victoria's Painting is pleased to provide the best house painting to
          your specific neighborhood in and around Morristown. We service the
          following areas:
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Map Image */}
        <div className="group relative overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-2xl transition-all duration-500">
          <img
            src={aboutimg}
            alt="Areas covered for the services in a map"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-white font-bold text-xl">Service Area Map</h3>
            <p className="text-white/90 text-sm mt-1">Coverage across New Jersey</p>
          </div>
        </div>

        {/* List Image */}
        <div className="group relative overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-2xl transition-all duration-500">
          <img
            src={listimg}
            alt="Areas covered for the services"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-white font-bold text-xl">Coverage Details</h3>
            <p className="text-white/90 text-sm mt-1">Complete list of service areas</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 md:mt-16 text-center">
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          Don't see your area listed? We may still be able to help!
        </p>
        <a
          href="tel:+19732344198"
          className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-brand hover:shadow-button hover:translate-y-1 transform"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Call Us: +1 973-234-4198</span>
        </a>
      </div>
    </section>
  );
}
