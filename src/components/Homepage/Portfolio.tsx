import React from 'react';

const projects = [
  {
    title: 'Battleship',
    description: 'Used components of Javascript to implement basic data structures, through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed.',
    tags: ['HTML', 'CSS', 'Javascript', 'Node.js'],
    image: 'https://placehold.co/400x300?text=Battleship',
    github: '#',
    live: '#',
  },
  {
    title: 'Movie Titles API',
    description: 'Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user\'s favorite movies into another container.',
    tags: ['HTML', 'CSS', 'Javascript', 'API', 'Version control'],
    image: 'https://placehold.co/400x300?text=MovieAPI',
    github: '#',
    live: '#',
  },
  {
    title: 'Javascript Calculator',
    description: 'Uses simple algorithm concepts in Javascript to produce an arithmetic result in a terminal!',
    tags: ['HTML', 'CSS', 'Javascript', 'Node.js'],
    image: 'https://placehold.co/400x300?text=Calculator',
    github: '#',
    live: '#',
  },
  {
    title: 'SaaS Landing Page',
    description: 'Used HTML concepts such as creating a form and a basic skeleton. It also used components of both the grid and flexbox elements to produce a landing page.',
    tags: ['HTML', 'CSS'],
    image: 'https://placehold.co/400x300?text=SaaSLanding',
    github: '#',
    live: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#181c2a] dark:bg-[#181c2a] py">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Projects</h2>
          <div className="relative">
            <div className="h-16 w-1 bg-[#FF6B35] mx-auto"></div>
            <div className="absolute bottom-0 left-1/2 transform translate-x-[-40%] translate-y-4 h-2 w-2 bg-[#FF6B35] rounded-full"></div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-32 mt-16">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16`}
            >
              {/* Project Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-transparent border border-gray-600 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8">{project.description}</p>
                
                <div className="flex gap-5">
                  <a 
                    href={project.github} 
                    className="bg-[#FF6B35] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#e85c2a] transition-all"
                  >
                    View GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="border border-gray-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-all flex items-center gap-1"
                  >
                    View project <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
              
              {/* Project Image */}
              <div className="lg:w-1/2 flex items-center justify-center">
                <div className={`relative w-full ${idx % 2 === 0 ? 'flex justify-end' : 'flex justify-start'}`}>
                  {/* Shadow box behind content */}
                  <div className={`absolute w-5/6 h-full rounded-lg border border-2 border-gray-700 shadow-lg
                    ${idx % 2 === 0 ? 'transform translate-x-3 -translate-y-3' : 'transform -translate-x-3 -translate-y-3'}`}>
                  </div>
                  
                  {/* Main content (image) */}
                  <div className={`relative z-10 overflow-hidden rounded-lg w-5/6 border border-gray-700 shadow-lg
                    ${idx % 2 === 0 ? 'mr-0' : 'ml-0'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-72 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;