import React from "react";
import icon1 from "../../../assets/img/icons/icon1_landing.png";
import icon2 from "../../../assets/img/icons/icon2_landing.png";
import icon3 from "../../../assets/img/icons/icon3_landing.png";
import icon4 from "../../../assets/img/icons/icon4_landing.png";
import history from "../../../assets/img/services_history.webp";

export function LandingHeader() {
  return (
    <header className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Home
            </h1>
            <p className="text-lg md:text-xl mb-4 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Develop your home into a space that reflects your unique style and
              personality with our expert home makeover services. Victoria's
              Painting offers a wide range of interior design from painting to
              overall home makeover.
            </p>
            <p className="text-base md:text-lg mb-8 text-white/80">
              Contact us today to schedule a consultation and take the first step
              towards transforming your home.
            </p>

            {/* Service Icons */}
            <div className="flex justify-center items-center gap-6 md:gap-10 mb-10 flex-wrap">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <img src={icon1} alt="Cabinet icon" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <img src={icon2} alt="Door icon" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <img src={icon3} alt="Faucet icon" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <img src={icon4} alt="Paintroll icon" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:+19732344198"
              className="inline-block bg-white hover:bg-gray-50 text-primary font-bold text-lg py-4 px-10 rounded-lg shadow-brand-lg hover:shadow-button hover:translate-y-1 transition-all duration-300"
            >
              <span className="block text-sm font-normal mb-1">CALL US</span>
              <span className="text-xl">+1-973-234-4198</span>
            </a>
          </div>
        </div>
      </div>

      {/* Company Tagline Section */}
      <div className="py-12 md:py-16 text-center bg-white border-b border-gray-200">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            Victoria's Painting
          </h2>
          <p className="text-lg md:text-xl text-gray-600 italic">
            Color Consulting &amp; Painting Services
          </p>
        </div>
      </div>

      {/* About Section with Image */}
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-3xl transition-shadow duration-300"
              src={history}
              alt="Company history and statistics"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Ready For A Change?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Is your home in need of a face-lift? Are you ready for a change?
              Don't stress over the color selection process for your home. Whether
              you want the interior or exterior painted, Victoria's Painting is
              there to help. Not only can you get time with a professional color
              consultant, so you'll know exactly which colors to pick.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-block">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
