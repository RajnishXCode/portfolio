import React from 'react';
import { contactCTA } from '../../constants/Contactpage/contactData';

const ContactCTA: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 md:px-8 md:py-20 relative z-10">
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
                <div
                  key={index}
                  onClick={() => {
                    if (button.href) {
                      if (button.target === '_blank') {
                        window.open(button.href, '_blank');
                      } else {
                        window.location.href = button.href;
                      }
                    }
                  }}
                  className={`${button.className} cursor-pointer`}
                >
                  <Icon />
                  {button.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
