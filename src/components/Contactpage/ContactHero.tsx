import React from 'react';
import { contactHero } from '../../constants/Contactpage/contactData';

const ContactHero: React.FC = () => {
  return (
    <div className="text-center relative mb-16">
      <div className="inline-block relative mb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
          {contactHero.title.replace(contactHero.highlightText, '')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
            {contactHero.highlightText}
          </span>
        </h1>
        {/* Decorative elements around title */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg"></div>
      </div>
      
      <div className="relative">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
      </div>
      
      <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
        {contactHero.description}
      </p>
    </div>
  );
};

export default ContactHero;
