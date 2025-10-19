import React from "react";
import facebook from "../../../../assets/img//icons/facebook.png";
import gmail from "../../../../assets/img//icons/gmail.png";
import instagram from "../../../../assets/img//icons/instagram.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-light to-primary text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Victoria's Painting
            </h2>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              At Victoria's Painting, we take pride in delivering high quality
              painting services that exceed our customers' expectations. Our
              team of skilled professionals is committed to providing
              exceptional craftsmanship and excellent customer service, ensuring
              that every project is completed with the utmost care and attention
              to detail. You can trust us to transform your space into a
              beautiful and inviting environment.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 p-3"
                aria-label="Facebook"
              >
                <ion-icon
                  name="logo-facebook"
                  size="large"
                  alt="Facebook logo"
                ></ion-icon>
              </a>
              <a
                href="mailto:business@victoriaspainting.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <ion-icon
                  name="logo-google"
                  size="large"
                  alt="Gmail logo"
                ></ion-icon>
              </a>
              <a
                href="https://www.instagram.com/victoriaspaintingllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <ion-icon
                  name="logo-instagram"
                  size="large"
                  alt="Instagram logo"
                ></ion-icon>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start space-x-2 group">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Dry Wall Painting &amp; Repair
                </span>
              </li>
              <li className="flex items-start space-x-2 group">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Cabinet Painting
                </span>
              </li>
              <li className="flex items-start space-x-2 group">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Power Wash
                </span>
              </li>
              <li className="flex items-start space-x-2 group">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Wallpaper Removal
                </span>
              </li>
              <li className="flex items-start space-x-2 group">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Exterior &amp; Interior Painting
                </span>
              </li>
              <li className="flex items-start space-x-2 group">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Deck Sealing &amp; Deck Staining
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-4 text-white/80">
              <a
                href="tel:+19732344198"
                className="flex items-start space-x-3 group hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
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
                <span className="group-hover:underline">+1 973-234-4198</span>
              </a>

              <a
                href="mailto:business@victoriaspainting.com"
                className="flex items-start space-x-3 group hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="group-hover:underline break-all">
                  business@victoriaspainting.com
                </span>
              </a>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Dover, New Jersey</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="section-container py-6">
          <p className="text-center text-white/60 text-sm">
            All rights reserved by ©victoriaspainting {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
