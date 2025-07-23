import React from 'react';
import { FaReact, FaMobileAlt, FaEthereum } from 'react-icons/fa';

const services = [
  {
    title: 'Website Development',
    description: 'Modern, responsive web apps tailored to your business goals.',
    icon: <FaReact size={40} color="#6366f1" />,
    highlights: ['SEO Optimized', 'Fast Delivery'],
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with native performance and beautiful UI.',
    icon: <FaMobileAlt size={40} color="#6366f1" />,
    highlights: ['iOS & Android', 'App Store Ready'],
  },
  {
    title: 'Smart Contracts / Web3',
    description: 'Secure blockchain solutions, DeFi, NFTs, and decentralized apps.',
    icon: <FaEthereum size={40} color="#6366f1" />,
    highlights: ['ICP & Ethereum', 'Audited Contracts'],
  },
];

const Services: React.FC = () => {
  return (
    <section className="h-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232946] via-[#181c2a] to-[#232946] dark:from-[#232946] dark:via-[#181c2a] dark:to-[#232946] px-6 md:px-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive web and mobile development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/20 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-indigo-400/30"
              style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.10)' }}
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-100/80 dark:bg-indigo-900/60 rounded-full p-4 shadow-md border border-indigo-100 dark:border-indigo-900 flex items-center justify-center" style={{ zIndex: 2 }}>
                {service.icon}
              </div>
              <div className="pt-10 pb-4 flex flex-col items-center w-full">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-700 dark:text-gray-200 mb-4 text-center min-h-[48px]">
                  {service.description}
                </p>
                {/* Highlights */}
                <div className="flex gap-2 mb-2">
                  {service.highlights.map((h, i) => (
                    <span key={i} className="bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              {/* CTA Button */}
              <a
                href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-300 font-semibold hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors"
              >
                Get Started
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your project? Let's discuss how I can help bring your ideas to life.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600/90 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-md border border-white/30"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 