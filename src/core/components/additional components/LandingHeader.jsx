import React from "react";

const stats = [
  {
    number: "40",
    label: "combined years of industry experience",
  },
  {
    number: "390",
    label: "clients so far",
  },
  {
    number: "100%",
    label: "Satisfaction Guaranteed",
  },
  {
    number: "20",
    label: "over areas served",
  },
  {
    number: "100%",
    label: "skilled workers",
  },
];

export function LandingHeader() {
  return (
    <header className="bg-gray-50">
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
              personality with our expert home makeover services. <strong className="font-bold text-white">Victoria's
              Painting</strong> offers a wide range of interior design from painting to
              overall home makeover.
            </p>
            <p className="text-base md:text-lg mb-8 text-white/80">
              Contact us today to schedule a consultation and take the first
              step towards transforming your home.
            </p>

            {/* Service Icons */}
            <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-10 mb-10 flex-wrap">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <i
                  className="fa-solid fa-house text-3xl md:text-5xl lg:text-6xl p-2 md:p-3 lg:p-4"
                  alt="House icon"
                ></i>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <i
                  className="fa-solid fa-door-open text-3xl md:text-5xl lg:text-6xl p-2 md:p-3 lg:p-4"
                  alt="Door icon"
                ></i>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <i
                  className="fa-solid fa-shower text-3xl md:text-5xl lg:text-6xl p-2 md:p-3 lg:p-4"
                  alt="Shower icon"
                ></i>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <i
                  className="fa-solid fa-paint-roller text-3xl md:text-5xl lg:text-6xl p-2 md:p-3 lg:p-4"
                  alt="Paint Roller icon"
                ></i>
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

      {/* About Section with Stats Grid */}
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* First stat - takes 2 columns */}
              <div className="col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-brand p-6 md:p-8 border border-primary/20 hover:shadow-brand-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-3">
                    {stats[0].number}
                  </div>
                  <div className="text-sm md:text-base text-gray-700 font-medium">
                    {stats[0].label}
                  </div>
                </div>
              </div>

              {/* Second stat */}
              <div className="bg-white rounded-xl shadow-brand p-5 md:p-6 border border-gray-100 hover:shadow-brand-lg hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stats[1].number}
                </div>
                <div className="text-xs md:text-sm text-gray-600 leading-tight">
                  {stats[1].label}
                </div>
              </div>

              {/* Third stat */}
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl shadow-brand p-5 md:p-6 text-white hover:shadow-brand-lg transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stats[2].number}
                </div>
                <div className="text-xs md:text-sm text-white/90 leading-tight">
                  {stats[2].label}
                </div>
              </div>

              {/* Fourth stat */}
              <div className="bg-white rounded-xl shadow-brand p-5 md:p-6 border border-gray-100 hover:shadow-brand-lg hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stats[3].number}
                </div>
                <div className="text-xs md:text-sm text-gray-600 leading-tight">
                  {stats[3].label}
                </div>
              </div>

              {/* Fifth stat */}
              <div className="bg-white rounded-xl shadow-brand p-5 md:p-6 border border-gray-100 hover:shadow-brand-lg hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stats[4].number}
                </div>
                <div className="text-xs md:text-sm text-gray-600 leading-tight">
                  {stats[4].label}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Ready For A Change?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Is your home in need of a face-lift? Are you ready for a change?
              Don't stress over the color selection process for your home.
              Whether you want the interior or exterior painted, <strong className="font-bold text-primary">Victoria's
              Painting</strong> is there to help. Not only can you get time with a
              professional color consultant, so you'll know exactly which colors
              to pick.
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
