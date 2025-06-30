import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">RT</span>
                  </div>
                  <p className="text-gray-600 font-medium">Professional Photo</p>
                  <p className="text-sm text-gray-500">Placeholder</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate freelance developer with expertise in modern web technologies and blockchain solutions. 
                With years of experience in the industry, I specialize in creating robust, scalable applications that 
                drive business growth and user engagement.
              </p>
              
              <p>
                My technical stack includes <span className="font-semibold text-indigo-600">MERN Stack</span> (MongoDB, Express.js, React, Node.js), 
                <span className="font-semibold text-indigo-600"> React Native</span> for mobile development, and 
                <span className="font-semibold text-indigo-600"> Blockchain</span> technologies including ICP (Internet Computer Protocol).
              </p>

              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends 
                and best practices. Every project I work on is an opportunity to learn and grow.
              </p>
            </div>

            {/* Location and Contact Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Lucknow, India</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {['MERN Stack', 'React Native', 'Blockchain (ICP)', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 