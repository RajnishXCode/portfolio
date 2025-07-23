import React from 'react';

const techStack = [
  'MERN Stack',
  'React Native',
  'Blockchain (ICP)',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
];

const About: React.FC = () => {
  return (
    <section className="h-screen min-h-screen flex items-center justify-center bg-[#181c2a] dark:bg-[#181c2a] px-6 md:px-12">
      <div className="max-w-2xl mx-auto w-full">
        <div className="relative bg-white/10 dark:bg-white/10 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-2xl px-8 py-12 flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-900/70 to-indigo-700/40 border-4 border-indigo-900/40 shadow-lg flex items-center justify-center mb-6">
            <span className="text-white text-5xl font-bold">RT</span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">About Me</h2>
          {/* Short Intro */}
          <p className="text-lg text-indigo-100 mb-6 text-center max-w-xl">
            I'm a passionate freelance developer specializing in modern web and blockchain solutions. I build robust, scalable apps that drive business growth and user engagement.
          </p>
          {/* Tech Stack Grid */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-indigo-900/40 text-indigo-200 rounded-full text-sm font-medium border border-indigo-700/40 shadow"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Location/Contact Badge */}
          <div className="flex items-center gap-3 bg-white/10 dark:bg-white/10 rounded-full px-5 py-3 border border-white/20 shadow-md mt-2">
            <svg className="w-6 h-6 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-indigo-200 font-medium">Lucknow, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 