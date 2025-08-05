import React from 'react';
import { FaRocket, FaExternalLinkAlt } from 'react-icons/fa';

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
                Interested in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Collaborating?</span>
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on new projects and explore innovative solutions. Let's discuss how we can bring your ideas to life!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative bg-secondary text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaRocket className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  Start a Project
                </span>
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="/RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaExternalLinkAlt className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  View Resume
                </span>
                {/* Hover background */}
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
