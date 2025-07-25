import React from 'react';
import { FaCode, FaMobileAlt, FaEthereum } from 'react-icons/fa';

const timeline = [
  {
    title: 'Website Development',
    icon: FaCode,
  },
  {
    title: 'Mobile App Development',
    icon: FaMobileAlt,
  },
  {
    title: 'Blockchain Development',
    icon: FaEthereum,
  },
];

const About: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 py-20 md:py-28 px-4 md:px-8">
      {/* Timeline/Services (Left) */}
      <div className="md:w-1/2 flex flex-col items-start">
        <div className="relative flex flex-col justify-center h-full" style={{ minHeight: '260px' }}>
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#FF6B35] z-0" style={{height: '100%'}}></div>
          <div className="flex flex-col justify-between h-full" style={{ minHeight: '220px' }}>
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center relative z-10 min-h-[64px]">
                  {/* Icon in Orange Circle, centered on the line */}
                  <span className="-ml-[2px] flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6B35] shadow-md absolute left-4 top-1/2 -translate-y-1/2">
                    <Icon size={22} className="text-white" />
                  </span>
                  {/* Service Name */}
                  <span className="ml-16 font-bold text-white text-lg">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* About & Stats (Right) */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">About me</h3>
        <p className="text-gray-300 mb-8 max-w-xl">I started my software journey from curiosity and a love for building things. I enjoy turning ideas into real products, whether it’s a website, app, or blockchain solution. My focus is on clean code, great user experience, and helping clients succeed.</p>
        <div className="flex gap-8 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#FF6B35]">10+</span>
            <span className="text-gray-400 text-sm mt-1">Completed Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#FF6B35]">95%</span>
            <span className="text-gray-400 text-sm mt-1">Client Satisfaction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#FF6B35]">2+</span>
            <span className="text-gray-400 text-sm mt-1">Years Experience</span>
          </div>
        </div>
        {/* Location/Contact Badge
        <div className="flex items-center gap-3 bg-white/10 dark:bg-white/10 rounded-full px-5 py-3 border border-white/20 shadow-md mt-2 w-max">
          <svg className="w-6 h-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-[#FF6B35] font-medium">Lucknow, India</span>
        </div> */}
      </div>
    </section>
  );
};

export default About; 