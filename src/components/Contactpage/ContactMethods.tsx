import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { contactMethods, responseGuarantee } from '../../constants/Contactpage/contactData';

const ContactMethods: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <a
              key={index}
              href={method.href}
              target={method.target}
              rel={method.rel}
              className={`group ${method.colorClasses.background} rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 ${method.colorClasses.border} ${method.colorClasses.hoverBorder} p-8 text-center backdrop-blur-xl relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-current/5 to-transparent"></div>
              <div className="relative z-10">
                <div className={`${method.colorClasses.iconBg} rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center ${method.colorClasses.hoverIconBg} transition-all duration-300 group-hover:scale-110`}>
                  <Icon className={`text-3xl ${method.colorClasses.iconColor}`} />
                </div>
                <h3 className={`text-2xl font-bold text-white mb-3 ${method.colorClasses.titleHover} transition-colors duration-300`}>
                  {method.title}
                </h3>
                <p className={`${method.colorClasses.subtitleColor} font-semibold mb-3 text-lg`}>
                  {method.subtitle}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {method.description}
                </p>
                <div className={`inline-flex items-center ${method.colorClasses.buttonColor} font-semibold ${method.colorClasses.buttonHover} transition-colors duration-300`}>
                  <span>{method.buttonText}</span>
                  <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Quick Response Promise */}
      <div className="mt-12 text-center">
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-white mb-3">
            {responseGuarantee.title}
          </h4>
          <p className="text-gray-300 leading-relaxed">
            {responseGuarantee.methods.map((method, index) => (
              <span key={index}>
                <span className="text-secondary font-semibold">{method.type}:</span> {method.time}
                {index < responseGuarantee.methods.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;
