import React from 'react';
import { FaEnvelope, FaWhatsapp, FaPaperPlane, FaPhone } from 'react-icons/fa';

const ContactMethods: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* WhatsApp - Primary */}
        <a
          href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-500/30 hover:border-green-400 p-8 text-center backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="bg-green-500/20 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110">
              <FaWhatsapp className="text-3xl text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
              WhatsApp
            </h3>
            <p className="text-green-400 font-semibold mb-3 text-lg">Instant Response</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Get quick replies for urgent projects or general inquiries. Perfect for real-time discussions.
            </p>
            <div className="inline-flex items-center text-green-400 font-semibold group-hover:text-white transition-colors duration-300">
              <span>Message Now</span>
              <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </a>

        {/* Email - Professional */}
        <a
          href="mailto:contact.rajnishtripathi@gmail.com?subject=Project%20Inquiry&body=Hi%20Rajnish,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
          className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-500/30 hover:border-blue-400 p-8 text-center backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="bg-blue-500/20 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
              <FaEnvelope className="text-3xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              Email
            </h3>
            <p className="text-blue-400 font-semibold mb-3 text-lg">Professional</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Perfect for detailed project discussions, proposals, and formal business communications.
            </p>
            <div className="inline-flex items-center text-blue-400 font-semibold group-hover:text-white transition-colors duration-300">
              <span>Send Email</span>
              <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </a>

        {/* Schedule Call */}
        <a
          href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project%20requirements%20in%20detail"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-500/30 hover:border-purple-400 p-8 text-center backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="bg-purple-500/20 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
              <FaPhone className="text-3xl text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Schedule Call
            </h3>
            <p className="text-purple-400 font-semibold mb-3 text-lg">Let's Talk</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Prefer voice discussion? Let's schedule a call to dive deep into your project requirements and goals.
            </p>
            <div className="inline-flex items-center text-purple-400 font-semibold group-hover:text-white transition-colors duration-300">
              <span>Book Call</span>
              <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </a>
      </div>

      {/* Quick Response Promise */}
      <div className="mt-12 text-center">
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-white mb-3">
            ⚡ Quick Response Guarantee
          </h4>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-secondary font-semibold">WhatsApp:</span> Usually within 1-2 hours • 
            <span className="text-secondary font-semibold"> Email:</span> Within 24 hours • 
            <span className="text-secondary font-semibold"> Calls:</span> Scheduled within 48 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;
