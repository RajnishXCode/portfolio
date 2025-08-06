import React from 'react';
import { visionGoals, visionGoalsHeader } from '../../constants/Aboutpage/aboutData';

const VisionGoals: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-8 md:py-20 relative z-10">
      <div className="text-center mb-20">
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {visionGoalsHeader.title.replace(visionGoalsHeader.highlightText, '')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
              {visionGoalsHeader.highlightText}
            </span>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visionGoals.map((goal, index) => (
          <div key={index} className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 dark:border-white/20 hover:border-secondary">
            <div className="p-8 text-center">
              <div className="mb-8">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary/20 via-orange-500/10 to-secondary/20 rounded-full flex items-center justify-center border-2 border-white/10">
                    <goal.icon className="text-secondary text-3xl" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{goal.title}</h3>
              </div>
              
              <div>
                <p className="text-gray-300 leading-relaxed text-center">{goal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionGoals;
