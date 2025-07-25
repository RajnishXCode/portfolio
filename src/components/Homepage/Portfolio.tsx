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
    description: 'Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user’s favorite movies into another container.',
    tags: ['HTML', 'CSS', 'Javascript', 'API', 'Version control'],
    image: 'https://placehold.co/400x300?text=Movie+API',
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
    image: 'https://placehold.co/400x300?text=SaaS+Landing',
    github: '#',
    live: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#181c2a] dark:bg-[#181c2a] px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects</h2>
          <div className="w-10 h-1 bg-[#FF6B35] rounded mb-6"></div>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/5 border border-[#FF6B35]/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-lg">
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-48 flex items-center justify-center bg-[#181c2a] rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-xl" />
              </div>
              {/* Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-[#FF6B35]/20 text-[#FF6B35] text-xs font-semibold px-3 py-1 rounded-full border border-[#FF6B35]/30">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                </div>
                <div className="flex gap-3 mt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#e85c2a] transition-all">View Github</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="border border-[#FF6B35]/40 text-[#FF6B35] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#FF6B35]/10 transition-all flex items-center gap-1">View project <span className="ml-1">→</span></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e85c2a] transition-all shadow-lg">See More</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 