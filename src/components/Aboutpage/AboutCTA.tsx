import React from 'react';
import { aboutCTA } from '../../constants/Aboutpage/aboutData';

const AboutCTA: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-8 md:py-20 relative z-10">
      <div className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 dark:border-white/20 hover:border-secondary">
        <div className="p-12 text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {aboutCTA.title.replace(aboutCTA.highlightText, '')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
                {aboutCTA.highlightText}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {aboutCTA.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {aboutCTA.buttons.map((button, index) => (
              <div
                key={index}
                className={button.className}
                onClick={() => {
                  if (button.href) {
                    if (button.target === '_blank') {
                      window.open(button.href, '_blank');
                    } else {
                      window.location.href = button.href;
                    }
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                {button.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
