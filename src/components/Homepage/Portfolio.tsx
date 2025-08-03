import React from 'react';
import { projects, portfolioData } from '../../constants/portfolioData';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-primary py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-4">{portfolioData.section.title}</h2>
          <div className="relative">
            <div className="h-16 w-1 bg-secondary mx-auto"></div>
            <div className="absolute bottom-0 left-1/2 transform translate-x-[-40%] translate-y-4 h-2 w-2 bg-secondary rounded-full"></div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-32 mt-16">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16`}
            >
              {/* Project Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-secondary/20 border border-secondary/50 text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8">{project.description}</p>
                
                <div className="flex gap-5">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-secondary text-white px-5 py-2 rounded text-sm font-medium hover:bg-secondary/80 transition-all"
                  >
                    View GitHub
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/30 text-white px-5 py-2 rounded text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-1"
                  >
                    View project <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
              
              {/* Project Image */}
              <div className="lg:w-1/2 flex items-center justify-center">
                <div className={`relative w-full ${idx % 2 === 0 ? 'flex justify-end' : 'flex justify-start'}`}>
                  {/* Shadow box behind content */}
                  <div className={`absolute w-5/6 h-full rounded-lg border-2 border-white/20 shadow-lg
                    ${idx % 2 === 0 ? 'transform translate-x-3 -translate-y-3' : 'transform -translate-x-3 -translate-y-3'}`}>
                  </div>
                  
                  {/* Main content (image) */}
                  <div className={`relative z-10 overflow-hidden rounded-lg w-5/6 border border-white/20 shadow-lg
                    ${idx % 2 === 0 ? 'mr-0' : 'ml-0'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-72 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;