import React from 'react';
import { careerTimeline, careerTimelineHeader } from '../../constants/Aboutpage/aboutData';

const CareerTimeline: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-8 py-20 relative z-10">
      <div className="text-center mb-20">
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            {careerTimelineHeader.title.replace(careerTimelineHeader.highlightText, '')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
              {careerTimelineHeader.highlightText}
            </span>
          </h2>
          <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-orange-500/20 rounded-lg blur opacity-30"></div>
        </div>
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4"></div>
      </div>
      
      <div className="relative">
        {/* Enhanced Timeline Line with Glow Effect */}
        {/* Desktop Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block">
          <div className="w-full h-full bg-gradient-to-b from-secondary via-orange-500 to-secondary"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-secondary via-orange-500 to-secondary blur-sm opacity-50"></div>
        </div>
        
        {/* Mobile Timeline Line */}
        <div className="absolute left-8 w-0.5 h-full md:hidden">
          <div className="w-full h-full bg-gradient-to-b from-secondary via-orange-500 to-secondary"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-secondary via-orange-500 to-secondary blur-sm opacity-50"></div>
        </div>
        
        <div className="space-y-8 md:space-y-16">
          {careerTimeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Mobile Layout */}
              <div className="flex md:hidden">
                {/* Timeline Node for Mobile */}
                <div className="relative z-20 flex items-start justify-start mt-2" style={{ width: '44px' }}>
                  <div className="absolute w-8 h-8 bg-gradient-to-r from-secondary to-orange-500 rounded-full blur opacity-50" style={{ left: '20px' }}></div>
                  <div className="relative w-6 h-6 bg-gradient-to-r from-secondary to-orange-500 rounded-full border-4 border-primary shadow-2xl" style={{ left: '21px' }}>
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                
                {/* Card for Mobile */}
                <div className="flex-1">
                  <div className="bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 hover:border-secondary">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative mr-4">
                          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-orange-500/20 flex items-center justify-center border border-white/20">
                            <item.icon className="text-secondary text-lg" />
                          </div>
                        </div>
                        <div>
                          <div className="text-secondary font-bold text-lg mb-1">{item.year}</div>
                          <div className="text-white font-semibold text-base">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 hover:border-secondary">
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="relative mr-6">
                          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-orange-500/20 flex items-center justify-center border border-white/20">
                            <item.icon className="text-secondary text-2xl" />
                          </div>
                        </div>
                        <div>
                          <div className="text-secondary font-bold text-xl mb-1">{item.year}</div>
                          <div className="text-white font-semibold text-lg">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Timeline Node for Desktop */}
                <div className="relative z-20 flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-gradient-to-r from-secondary to-orange-500 rounded-full blur opacity-50"></div>
                  <div className="relative w-6 h-6 bg-gradient-to-r from-secondary to-orange-500 rounded-full border-4 border-primary shadow-2xl">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
