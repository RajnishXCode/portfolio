import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialLink {
  icon: React.ComponentType<any>;
  name: string;
  username: string;
  description: string;
  link: string;
  color: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      name: 'GitHub',
      username: '@RajnishXCode',
      description: 'Check out my code repositories',
      link: 'https://github.com/RajnishXCode',
      color: ''
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      username: '@RajnishXCode',
      description: 'Professional networking',
      link: 'https://www.linkedin.com/in/RajnishXCode/',
      color: ''
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      username: '@RajnishXCode',
      description: 'Follow for tech updates',
      link: 'https://twitter.com/RajnishXCode',
      color: ''
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Follow Me <span className="text-secondary">Online</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Stay updated with my latest projects and tech insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 dark:border-white/20 hover:border-secondary p-6 text-center backdrop-blur-xl ${social.color}`}
          >
            <div className="mb-4">
              <social.icon className="text-4xl text-white mx-auto mb-4 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                {social.name}
              </h3>
              <p className="text-secondary font-semibold mb-2">{social.username}</p>
              <p className="text-gray-400 text-sm">{social.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
