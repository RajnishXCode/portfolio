import React from 'react';
import { FaRocket, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsCTA } from '../../constants/Projectspage/projectsData';

const ProjectsCTA: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="relative group">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
        
        <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          {/* Subtle animated pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 w-32 h-32 border border-secondary/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 border border-secondary/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {projectsCTA.title.replace(projectsCTA.highlightText, '')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                  {projectsCTA.highlightText}
                </span>
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {projectsCTA.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {projectsCTA.buttons.map((button, index) => {
                const IconComponent = button.icon === 'rocket' ? FaRocket : FaExternalLinkAlt;
                return (
                  <a
                    key={index}
                    href={button.href}
                    target={button.target}
                    rel={button.rel}
                    className={`group/btn relative ${
                      button.type === 'primary'
                        ? 'bg-secondary text-white hover:shadow-2xl hover:shadow-secondary/25'
                        : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white backdrop-blur-sm'
                    } px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <IconComponent className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      {button.text}
                    </span>
                    {/* Animated background effect */}
                    <div className={`absolute inset-0 ${
                      button.type === 'primary' ? 'bg-secondary/80' : 'bg-secondary'
                    } opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
