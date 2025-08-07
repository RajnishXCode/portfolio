import { testimonials, stats, testimonialsData } from '../../constants/Homepage/testimonialsData';
import { ctaLink } from '../../constants/globalData';

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-primary px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {testimonialsData.section.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {testimonialsData.section.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-accent/30 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm sm:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 dark:bg-white/10 rounded-2xl p-6 sm:p-8 text-white border border-white/20 dark:border-white/20 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {testimonialsData.cta.title}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
              {testimonialsData.cta.subtitle}
            </p>
            <div
              onClick={() => {
                window.open(`${ctaLink}${testimonialsData.cta.whatsappMessage}`, '_blank');
              }}
              className="bg-secondary hover:bg-secondary/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block cursor-pointer"
            >
              {testimonialsData.cta.buttonText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;