import { useRef } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 973-234-4198",
    href: "tel:+19732344198"
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "business@victoriaspainting.com",
    href: "mailto:business@victoriaspainting.com"
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Dover, New Jersey",
    href: null
  },
  {
    id: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: "Monday – Friday: 09:00 AM – 5:00 PM\nSaturday – Sunday: Closed",
    href: null
  }
];

export function ContactHeader() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rb4l5cw",
        "template_0bdyval",
        form.current,
        "nKYHmb69A350_7kwn"
      )
      .then(
        (result) => {
          alert("Message sent successfully! We'll be in touch soon.");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          e.target.reset();
        }
      );
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        <div className="section-container relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-medium text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get In Touch</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Contact <span className="text-white/90">Us</span>
            </h1>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-white/40"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-24 h-1 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-12 h-0.5 bg-white/40"></div>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
              Get in touch with our team for a free consultation and estimate
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              {["Quick Response", "Free Estimates", "Professional Service"].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base font-medium text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Have a question or ready to start your project? We're here to help!
                Reach out to us using any of the methods below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-primary-light text-white p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark mb-1">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-primary transition-colors duration-300 break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-primary/20 rounded-2xl shadow-brand-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Send Us a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="about-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="about-name"
                    name="from_name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phones" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phones"
                    name="from_phone"
                    placeholder="123-456-7890"
                    required
                    className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="about-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="about-email"
                  name="from_email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="select" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="select"
                  name="select"
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="about-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="about-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-brand hover:shadow-button hover:translate-y-1 transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
