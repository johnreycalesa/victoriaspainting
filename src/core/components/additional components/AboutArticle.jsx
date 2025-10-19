import React from "react";
import servicesimg1 from "../../../assets/img/servicespage.webp";
import servicesimg2 from "../../../assets/img/servicespage (2).webp";

const features = [
  {
    id: 1,
    title: "Qualified Expert",
    description:
      "Our team has over 45 years of combined experience in the industry of painting and remodeling kitchen cabinets business.",
    image: servicesimg2,
    imageAlt: "Professional painting expert at work",
    reverse: false,
  },
  {
    id: 2,
    title: "Flexible Schedule",
    description:
      "We are here to serve our customers' needs and want to ensure we agree upon a time and dates that work for all parties.",
    image: servicesimg1,
    imageAlt: "Flexible painting schedule service",
    reverse: true,
  },
];

export function AboutArticle() {
  return (
    <section className="section-container bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
          Why Choose Us
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          We are able to complete the majority of renovations with the help of
          our team of skilled workers. We only outsource work for certain parts
          of the job to ensure professional quality.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-16 md:space-y-20">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
              feature.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className={`${feature.reverse ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative group overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={feature.image}
                  loading="lazy"
                  alt={feature.imageAlt}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`${
                feature.reverse ? "lg:order-1" : "lg:order-2"
              } space-y-6`}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="pt-4">
                <a
                  href="tel:+19732344198"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-light font-semibold transition-colors duration-300 group"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 md:mt-20 bg-gradient-to-r from-primary to-primary-light rounded-2xl shadow-brand-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold">45+</div>
            <div className="text-base md:text-lg text-white/90">
              Years Experience
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold">100%</div>
            <div className="text-base md:text-lg text-white/90">
              Quality Assured
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold">24/7</div>
            <div className="text-base md:text-lg text-white/90">
              Customer Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
