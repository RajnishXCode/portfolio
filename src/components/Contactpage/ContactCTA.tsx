import React from 'react';
import { contactCTA } from '../../constants/Contactpage/contactData';

const ContactCTA: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 border-2 border-white/20 dark:border-white/20 backdrop-blur-xl">
        <div className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {contactCTA.title.replace(contactCTA.highlightText, '')}{' '}
            <span className="text-secondary">{contactCTA.highlightText}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {contactCTA.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {contactCTA.buttons.map((button, index) => {
              const Icon = button.icon;
              return (
                <a
                  key={index}
                  href={button.href}
                  target={button.target}
                  rel={button.rel}
                  className={button.className}
                >
                  <Icon />
                  {button.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
