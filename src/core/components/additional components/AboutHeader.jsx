import React from "react";
import aboutimg1 from "../../../assets/img/icons/icon1_about.png";
import aboutimg3 from "../../../assets/img/icons/icon3_about.png";
import aboutimg4 from "../../../assets/img/icons/icon4_about.png";

const services = [
  { id: 1, name: "Cabinet Painting", icon: aboutimg1 },
  { id: 2, name: "Tile and Wood Floor Painting", icon: aboutimg1 },
  { id: 3, name: "Counter-top Painting", icon: aboutimg3 },
  { id: 4, name: "Closets and Pantries Painting", icon: aboutimg4 },
];

export function AboutHeader() {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-light text-white">
      {/* Header Section */}
      <div className="section-container py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          About Us
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wide text-white/90">
          We Are Professionals In The Following Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-12 md:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white border-2 border-primary/20 hover:border-primary rounded-2xl p-6 md:p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-brand-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary to-primary-light p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={service.icon}
                      alt={`${service.name} icon`}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <p className="text-base md:text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
