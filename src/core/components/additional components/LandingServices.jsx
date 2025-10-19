import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/services_img.webp";
import img2 from "../../../assets/img/services_img (2).webp";
import img3 from "../../../assets/img/services_img (3).webp";
import img4 from "../../../assets/img/services_img (4).webp";
import img5 from "../../../assets/img/services_img (5).webp";
import img6 from "../../../assets/img/services_img (6).webp";

const services = [
  {
    id: 1,
    title: "Dry Wall Painting & Repair",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: img1,
    alt: "Man painting the wall",
  },
  {
    id: 2,
    title: "Cabinet Painting",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: img2,
    alt: "Old man painting the cabinet",
  },
  {
    id: 3,
    title: "Power Wash",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: img3,
    alt: "Man is cleaning the wall",
  },
  {
    id: 4,
    title: "Wallpaper Removal",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: img4,
    alt: "Man is fixing and covering holes in the wall",
  },
  {
    id: 5,
    title: "Exterior & Interior Painting",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: img5,
    alt: "Two man are painting the exterior part of the house",
  },
  {
    id: 6,
    title: "Deck Sealing & Deck Staining",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: img6,
    alt: "Old man is cleaning the wooden floor",
  },
];

export function LandingServices() {
  return (
    <section className="section-container bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We are professional in the following services
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-64">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-dark group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <Link to="/services">
                <button className="w-full mt-4 bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-brand hover:shadow-button hover:translate-y-1">
                  EXPLORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
