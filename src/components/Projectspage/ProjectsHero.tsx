import React from 'react';

const ProjectsHero: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10">
      <div className="text-center relative">
        <div className="inline-block relative mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Projects</span>
          </h1>
          {/* Decorative elements around title */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg"></div>
        </div>
        
        <div className="relative">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
        </div>
        
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          A showcase of my development journey - from full-stack web applications to blockchain solutions and mobile apps. Each project represents a unique challenge and learning experience.
        </p>
      </div>
    </section>
  );
};

export default ProjectsHero;
