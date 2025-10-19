import { useEffect } from "react";
import contactimg1 from "../../../assets/img/contactpage_img.webp";
import contactimg2 from "../../../assets/img/contactpage_img (2).webp";
import contactimg3 from "../../../assets/img/contactpage_img (3).webp";
import contactimg4 from "../../../assets/img/contactpage_img (4).jpg";
import contactimg5 from "../../../assets/img/contactpage_img (5).jpg";
import contactimg6 from "../../../assets/img/contactpage_img (6).webp";

const services = [
  {
    id: 1,
    title: "Dry Wall Painting & Repair",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: contactimg1,
    alt: "Dry wall painting and repair service",
  },
  {
    id: 2,
    title: "Cabinet Painting",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: contactimg2,
    alt: "Cabinet painting service",
  },
  {
    id: 3,
    title: "Power Wash",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: contactimg3,
    alt: "Power washing service",
  },
  {
    id: 4,
    title: "Wallpaper Removal",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: contactimg4,
    alt: "Wallpaper removal service",
  },
  {
    id: 5,
    title: "Exterior & Interior Painting",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: contactimg5,
    alt: "Exterior and interior painting service",
  },
  {
    id: 6,
    title: "Deck Sealing & Deck Staining",
    description:
      "Contact us today to schedule a consultation and take the first step towards transforming your home.",
    image: contactimg6,
    alt: "Deck sealing and staining service",
  },
];

export function ServicesList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional painting and restoration services tailored to your
            needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-2xl transition-all duration-500 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    loading="lazy"
                    alt={service.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service number badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {String(service.id).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-4 md:space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl shadow-brand">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark leading-tight group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 pt-2">
                  {[
                    "Licensed & Insured",
                    "Expert Technicians",
                    "Quality Guaranteed",
                  ].map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg shadow-brand hover:shadow-button hover:translate-y-1 transition-all duration-300 group/btn"
                  >
                    <span>Get Free Quote</span>
                    <svg
                      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
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

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-20 text-center bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-brand-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can
            bring your vision to life
          </p>
          <a
            href="tel:+19732344198"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary font-bold text-lg py-4 px-10 rounded-lg shadow-brand-lg hover:shadow-button hover:translate-y-1 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
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
            <span>+1-973-234-4198</span>
          </a>
        </div>
      </div>
    </section>
  );
}
