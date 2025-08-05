import React from 'react';
import { collaborationStyle, collaborationStyleHeader } from '../../constants/Aboutpage/aboutData';

const CollaborationStyle: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="text-center mb-20">
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {collaborationStyleHeader.title.replace(collaborationStyleHeader.highlightText, '')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
              {collaborationStyleHeader.highlightText}
            </span>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-secondary via-orange-500 to-secondary rounded-full"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-orange-500 via-secondary to-orange-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {collaborationStyle.map((style, index) => (
          <div key={index} className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 dark:border-white/20 hover:border-secondary">
            <div className="p-10 text-center">
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 via-orange-500/10 to-secondary/20 rounded-full flex items-center justify-center border-2 border-white/20 mx-auto">
                    <style.icon className="text-secondary text-2xl" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">{style.title}</h3>
                
                <div>
                  <p className="text-gray-300 leading-relaxed">{style.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaborationStyle;
