import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactCTA: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 border-2 border-white/20 dark:border-white/20 backdrop-blur-xl">
        <div className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start <span className="text-secondary">Working Together?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/80 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaWhatsapp />
              Start a Project
            </a>
            <a
              href="/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaEnvelope />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
