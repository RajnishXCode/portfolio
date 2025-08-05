import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10">
      <div className="text-center relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/10 to-orange-500/10 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="inline-block relative mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Me</span>
          </h1>
          {/* Decorative elements around title */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 rounded-br-lg"></div>
        </div>
        
        <div className="relative">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8 rounded-full"></div>
        </div>
        
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative">
          <span className="relative z-10">
            A passionate developer on a mission to create meaningful digital experiences that bridge the gap between innovative technology and real-world solutions.
          </span>
          {/* Subtle highlight effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent rounded-lg -z-10"></div>
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
