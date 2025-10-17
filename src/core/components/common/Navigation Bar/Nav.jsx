import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingPage from "../../main components/LandingPage";
import ServicesPage from "../../main components/ServicesPage";
import AboutPage from "../../main components/AboutPage";
import ContactPage from "../../main components/ContactPage";
import logo from "../../../../assets/img/logo_img.png";
import eng from "../../../../assets/img//icons/flag.png";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "text-white bg-primary"
        : "text-gray-700 hover:text-primary hover:bg-gray-50"
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="Victoria's Painting Logo"
                className="h-12 w-auto md:h-14 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-2">
              <li>
                <NavLink to="/services" className={navLinkClasses}>
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClasses}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClasses}>
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a
                  href="tel:+19732344198"
                  className="ml-4 px-4 py-2 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all duration-300 shadow-brand hover:shadow-brand-lg flex items-center space-x-2"
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
                  <span>+1 973-234-4198</span>
                </a>
              </li>
              <li>
                <button className="ml-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-1">
                  <img src={eng} alt="English flag" className="h-4 w-auto" />
                  <span className="font-medium text-gray-700">EN</span>
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col space-y-2 py-4 border-t border-gray-200">
              <li>
                <NavLink
                  to="/services"
                  className={navLinkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={navLinkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a
                  href="tel:+19732344198"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all duration-300 shadow-brand"
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
                  <span>+1 973-234-4198</span>
                </a>
              </li>
              <li>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <img src={eng} alt="English flag" className="h-4 w-auto" />
                  <span className="font-medium text-gray-700">EN</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content - Add padding for fixed navbar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
