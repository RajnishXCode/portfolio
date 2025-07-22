import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development'
    },
    {
      title: 'Task Management App',
      description: 'A React Native mobile application for task and project management. Includes real-time collaboration, push notifications, and offline functionality.',
      tech: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile Development'
    },
    {
      title: 'DeFi Dashboard',
      description: 'A decentralized finance dashboard built on ICP blockchain. Users can track their crypto portfolios, manage DeFi positions, and interact with smart contracts.',
      tech: ['ICP', 'Motoko', 'React', 'Web3.js'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web3/Blockchain'
    },
    {
      title: 'Restaurant Management System',
      description: 'A comprehensive restaurant management system with order tracking, inventory management, and analytics dashboard for restaurant owners.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development'
    }
  ];

  return (
    <section className="min-h-screen bg-[#181c2a] dark:bg-[#181c2a] px-6 md:px-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-indigo-400/30 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 dark:border-white/20 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-indigo-900/60 to-indigo-700/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">Project Preview</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-indigo-900/40 text-indigo-200 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-indigo-200 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-indigo-900/40 text-indigo-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-indigo-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-indigo-900/40 text-indigo-200 text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-900/60 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Want to see more of my work? Check out my complete portfolio.
          </p>
          <a
            href="/portfolio"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 