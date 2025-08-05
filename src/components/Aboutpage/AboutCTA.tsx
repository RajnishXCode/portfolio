import React from 'react';

const AboutCTA: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 dark:border-white/20 hover:border-secondary">
        <div className="p-12 text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Amazing</span> Together
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your ideas into reality? I'm always excited to discuss new projects and explore how we can create something extraordinary.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Primary CTA Button */}
            <a href='#' className="bg-secondary text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/80 transition-all duration-300">
              Start a Project
            </a>
            
            {/* Secondary CTA Button */}
            <a href='#' className="border border-secondary text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition-all duration-300">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
