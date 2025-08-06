import React from 'react';
import { timeline, stats, aboutData } from '../../constants/Homepage/aboutData';

const About: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 py-10 md:py-20 md:py-28 px-6 md:px-8">

      <div className="hidden md:flex md:w-1/2 flex-col items-start">
        <div className="relative flex flex-col justify-center h-full" style={{ minHeight: '260px' }}>
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-secondary z-0" style={{height: '100%'}}></div>
          <div className="flex flex-col justify-between h-full" style={{ minHeight: '220px' }}>
            {timeline.map((item, id) => {
              const Icon = item.icon;
              return (
                <div key={id} className="flex items-center relative z-10 min-h-[64px]">
                  <span className="-ml-[2px] flex items-center justify-center w-10 h-10 rounded-full bg-secondary shadow-md absolute left-4 top-1/2 -translate-y-1/2">
                    <Icon size={22} className="text-white" />
                  </span>
                  <span className="ml-16 font-bold text-white text-lg">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {aboutData.title}
        </h3>
        <p className="text-gray-300 mb-8 max-w-xl">
          {aboutData.description}
        </p>
        
        <div className="flex gap-8 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-secondary">{stat.value}</span>
              <span className="text-gray-400 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
        
        
        <div className="flex items-center gap-3 bg-white/10 rounded-full px-5 py-3 border border-white/20 shadow-md mt-2 w-max">
          <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-secondary font-medium">
            {aboutData.location.city}, {aboutData.location.state}, {aboutData.location.country}
          </span>
        </div>
       
      </div>
    </section>
  );
};

export default About;