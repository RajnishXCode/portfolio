import React from 'react';
import { FaReact, FaMobileAlt, FaServer, FaEthereum, FaBolt, FaPalette } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites, landing pages, and dashboards using the MERN stack, tailored for your needs.',
    icon: <FaReact size={40} color="#818cf8" />, // Indigo-400
    highlights: ['MERN Stack', 'Landing Pages', 'Dashboards'],
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with React Native & Expo, including Firebase integration and bug fixes.',
    icon: <FaMobileAlt size={40} color="#818cf8" />, // Indigo-400
    highlights: ['React Native', 'Firebase', 'Optimization'],
  },
  {
    title: 'Backend & APIs',
    description: 'REST APIs, Firebase backends, and secure authentication for your projects.',
    icon: <FaServer size={40} color="#818cf8" />, // Indigo-400
    highlights: ['Node.js/Express', 'Firebase', 'Auth Systems'],
  },
  {
    title: 'Web3 & Blockchain',
    description: 'dApp development, smart contracts, and token systems for IC Chain & Ethereum.',
    icon: <FaEthereum size={40} color="#818cf8" />, // Indigo-400
    highlights: ['dApps', 'Smart Contracts', 'Tokenomics'],
  },
  {
    title: 'Real-Time Features',
    description: 'Live location, chat, notifications, and real-time data sync for interactive apps.',
    icon: <FaBolt size={40} color="#818cf8" />, // Indigo-400
    highlights: ['Socket.io', 'Live Data', 'Firebase Sync'],
  },
  {
    title: 'UI/UX & Consulting',
    description: 'Modern UI with Tailwind CSS, responsive design, and project planning support.',
    icon: <FaPalette size={40} color="#818cf8" />, // Indigo-400
    highlights: ['Tailwind CSS', 'Responsive', 'Tech Guidance'],
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#181c2a] dark:bg-[#181c2a] px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 dark:text-indigo-300 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Practical web, mobile, and blockchain solutions to help you launch and grow your ideas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-indigo-400/20 dark:border-indigo-300/10 shadow-2xl rounded-3xl p-8 md:p-10 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-indigo-400/30"
              style={{ boxShadow: '0 8px 32px 0 rgba(129,140,248,0.10)' }}
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-900/80 dark:bg-indigo-900/80 rounded-full p-4 shadow-md border border-indigo-400/30 flex items-center justify-center" style={{ zIndex: 2 }}>
                {service.icon}
              </div>
              <div className="pt-10 pb-4 flex flex-col items-center w-full">
                {/* Title */}
                <h3 className="text-xl font-bold text-indigo-200 dark:text-indigo-100 mb-2 text-center">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-200 dark:text-gray-300 mb-4 text-center min-h-[48px]">
                  {service.description}
                </p>
                {/* Highlights */}
                <div className="flex gap-2 mb-2 flex-wrap justify-center">
                  {service.highlights.map((h, i) => (
                    <span key={i} className="bg-indigo-800/40 dark:bg-indigo-900/60 text-indigo-200 dark:text-indigo-100 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-400/20 dark:border-indigo-300/10">
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
                className="mt-4 inline-flex items-center text-indigo-300 dark:text-indigo-200 font-semibold hover:text-indigo-100 dark:hover:text-white transition-colors"
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
        <div className="text-center mt-10 md:mt-16">
          <p className="text-lg text-gray-300 dark:text-gray-400 mb-6">
            Ready to start your project? Let's discuss how I can help bring your ideas to life.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600/90 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-md border border-indigo-400/20"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 