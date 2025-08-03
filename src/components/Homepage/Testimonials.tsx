import React from 'react';
import { testimonials, stats, testimonialsData } from '../../constants/testimonialsData';
import { ctaLink } from '../../constants/globalData';

const Testimonials: React.FC = () => {
  return (
    <section className="min-h-screen bg-primary px-6 md:px-12 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {testimonialsData.section.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {testimonialsData.section.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-8 shadow-lg hover:shadow-accent/30 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 dark:bg-white/10 rounded-2xl p-8 text-white border border-white/20 dark:border-white/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              {testimonialsData.cta.title}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {testimonialsData.cta.subtitle}
            </p>
            <a
              href={`${ctaLink}${testimonialsData.cta.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              {testimonialsData.cta.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;