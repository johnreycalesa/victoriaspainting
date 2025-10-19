import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wctmbgh",
        "template_0bdyval",
        form.current,
        "nKYHmb69A350_7kwn"
      )
      .then(
        (result) => {
          // Email sent successfully
          alert("Message sent successfully! We'll be in touch soon.");
          e.target.reset();
        },
        (error) => {
          // Email sending failed
          alert("Failed to send message. Please try again.");
          e.target.reset();
        }
      );
  };

  return (
    <section
      id="contact"
      className="section-container bg-gray-50 border-t border-gray-200 pt-12 md:pt-16 pb-16 md:pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-brand-lg border border-gray-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Get a Free Estimate
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We're eager to hear about your painting vision! Let us know and
            we'll be in touch ASAP.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300"
                />
              </div>
            </div>

            {/* Phone and Service Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  pattern="\d{10}"
                  id="phone"
                  name="from_phone"
                  placeholder="1234567890"
                  maxLength="10"
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="select"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Needed *
                </label>
                <select
                  id="select"
                  name="select"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
                >
                  <option value="" disabled defaultValue hidden>
                    Select a service
                  </option>
                  <option value="Dry Wall Painting & Repair">
                    Dry Wall Painting & Repair
                  </option>
                  <option value="Cabinet Painting">Cabinet Painting</option>
                  <option value="Power Wash">Power Wash</option>
                  <option value="Wallpaper Removal">Wallpaper Removal</option>
                  <option value="Exterior & Interior Painting">
                    Exterior & Interior Painting
                  </option>
                  <option value="Deck Sealing & Deck Staining">
                    Deck Sealing & Deck Staining
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn-secondary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-brand-lg p-8 md:p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want a Home Makeover?
          </h2>
          <p className="text-xl font-semibold mb-8 text-white/90">
            CONTACT US:
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <a
              href="tel:+19732344198"
              className="flex items-start space-x-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
            >
              <svg
                className="w-8 h-8 text-white flex-shrink-0"
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
              <div>
                <p className="text-sm text-white/80">Phone</p>
                <p className="text-lg font-semibold">+1 973-234-4198</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:business@victoriaspainting.com"
              className="flex items-start space-x-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
            >
              <svg
                className="w-8 h-8 text-white flex-shrink-0"
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
              <div>
                <p className="text-sm text-white/80">Email</p>
                <p className="text-lg font-semibold break-all">
                  business@victoriaspainting.com
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start space-x-4 p-4">
              <svg
                className="w-8 h-8 text-white flex-shrink-0"
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
              <div>
                <p className="text-sm text-white/80">Location</p>
                <p className="text-lg font-semibold">Dover, New Jersey</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/90 leading-relaxed">
              Our team is ready to transform your space. Get in touch today for
              a free consultation and estimate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
