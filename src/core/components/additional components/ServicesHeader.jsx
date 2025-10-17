export function ServicesHeader() {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>

      <div className="section-container relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-medium text-white/90">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Professional Services</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Our <span className="text-white/90">Services</span>
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
            We Are Professionals In The Following Services
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
            {["Expert Craftsmanship", "Quality Materials", "Timely Delivery"].map((feature, index) => (
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
  );
}
