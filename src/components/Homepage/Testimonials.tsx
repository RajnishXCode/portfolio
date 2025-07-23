import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Rajnish delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
      author: "Priya Sharma",
      role: "Founder, Fashion Boutique",
      company: "StyleHub"
    },
    {
      quote: "Working with Rajnish was a game-changer for our startup. He built a robust mobile app that helped us scale from 100 to 10,000 users within months. Highly recommended!",
      author: "Arjun Patel",
      role: "CEO",
      company: "TechStart Solutions"
    },
    {
      quote: "Rajnish's expertise in blockchain and Web3 technologies helped us create a cutting-edge DeFi application. His knowledge of ICP and smart contracts is outstanding.",
      author: "Meera Reddy",
      role: "CTO",
      company: "CryptoFin Labs"
    },
    {
      quote: "The restaurant management system Rajnish built for us has streamlined our operations completely. The interface is intuitive and the backend is rock-solid.",
      author: "Vikram Singh",
      role: "Owner",
      company: "Spice Garden Restaurant"
    }
  ];

  return (
    <section className="min-h-screen bg-[#181c2a] dark:bg-[#181c2a] px-6 md:px-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-white/10 rounded-2xl p-8 hover:shadow-indigo-400/30 transition-all duration-300 border border-white/20 dark:border-white/20"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-indigo-100 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-indigo-200">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">50+</div>
            <div className="text-indigo-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">30+</div>
            <div className="text-indigo-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">5+</div>
            <div className="text-indigo-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">100%</div>
            <div className="text-indigo-200">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              Join the list of satisfied clients who have transformed their ideas into successful digital solutions.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20start%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-indigo-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-900/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-indigo-900/40 backdrop-blur-md"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 