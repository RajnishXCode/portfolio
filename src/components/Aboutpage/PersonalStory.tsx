import React from 'react';
import { FaCode } from 'react-icons/fa';
import { personalStory } from '../../constants/Aboutpage/aboutData';

const PersonalStory: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 dark:border-white/20 hover:border-secondary">
        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-12 ">
            <div className="md:w-1/3 relative">
              {/* Profile Avatar with Orbital Effects */}
              <div className="relative group perspective-1000">
                {/* Main Avatar Container */}
                <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-white/10 backdrop-blur-sm group-hover:scale-105 transition-all duration-700 ease-out overflow-hidden shadow-2xl group-hover:shadow-secondary/20">
                  {/* Multi-layered backdrop effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-orange-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Profile Image */}
                  <img 
                    src={personalStory.profileImage.src}
                    alt={personalStory.profileImage.alt}
                    className="w-full h-full object-cover rounded-full relative z-20 group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-105 contrast-105 group-hover:brightness-110 group-hover:contrast-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackElement) {
                        fallbackElement.style.opacity = '1';
                      }
                    }}
                  />
                  
                  {/* Fallback Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 z-10">
                    <FaCode className="text-6xl text-secondary group-hover:text-orange-500 transition-colors duration-500 drop-shadow-lg" />
                  </div>
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-secondary/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                </div>
                
                {/* Perfect Orbital Ring System */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Outer orbit ring with enhanced styling */}
                  <div className="absolute inset-0 border border-secondary/20 rounded-full animate-spin shadow-lg" 
                       style={{
                         animationDuration: '20s',
                         animationTimingFunction: 'linear',
                         filter: 'drop-shadow(0 0 8px rgba(255, 87, 34, 0.1))'
                       }}>
                    {/* Orbital dot indicator */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-secondary to-orange-500 rounded-full shadow-lg"></div>
                  </div>
                  
                  {/* Inner orbit ring with counter-rotation */}
                  <div className="absolute inset-4 border border-orange-500/20 rounded-full animate-spin shadow-lg" 
                       style={{
                         animationDuration: '15s',
                         animationDirection: 'reverse',
                         animationTimingFunction: 'linear',
                         filter: 'drop-shadow(0 0 6px rgba(255, 87, 34, 0.15))'
                       }}>
                    {/* Inner orbital dot */}
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-secondary rounded-full shadow-md"></div>
                  </div>
                  
                  {/* Micro orbit ring for extra sophistication */}
                  <div className="absolute inset-8 border border-secondary/10 rounded-full animate-spin opacity-50" 
                       style={{
                         animationDuration: '10s',
                         animationTimingFunction: 'linear'
                       }}>
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary/60 rounded-full"></div>
                  </div>
                </div>
                
                {/* Ambient Glow Effects */}
                <div className="absolute -inset-8 opacity-0 group-hover:opacity-40 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-orange-500/20 to-secondary/20 rounded-full blur-2xl"></div>
                </div>
                
                {/* Pulse Ring Animation for Focus */}
                <div className="absolute inset-0 rounded-full border-2 border-secondary/30 opacity-0 group-hover:opacity-100 animate-ping" style={{animationDuration: '2s'}}></div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-4 right-4 z-30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-sm animate-pulse"></div>
                    <div className="relative w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="relative mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                  {personalStory.title.replace(personalStory.highlightText, '')}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
                    {personalStory.highlightText}
                  </span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-secondary to-orange-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                {personalStory.paragraphs.map((paragraph, index) => (
                  <div key={index} className="relative group">
                    <p className="relative z-10 p-4 rounded-lg transition-all duration-300 group-hover:text-white">
                      {paragraph}
                    </p>
                    <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r from-secondary/5 to-orange-500/5' : 'bg-gradient-to-r from-orange-500/5 to-secondary/5'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;
