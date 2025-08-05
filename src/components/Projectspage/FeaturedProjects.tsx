import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaClock, FaUsers, FaRocket, FaStar } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  status: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  duration: string;
  teamSize: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {featuredProjects.slice(0, 2).map((project) => (
          <div key={project.id} className="group relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-accent/30">
            {/* Animated gradient border */}
            <div className="absolute inset-0 transition-opacity duration-500 rounded-3xl blur-sm -z-10"></div>
            
            <div className="relative">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Status Badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                  <FaStar className="inline mr-1" />
                  Featured
                </span>
              </div>
              
              {project.status === 'in-progress' && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm animate-pulse">
                    In Progress
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
              
              {/* Enhanced Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full text-sm backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:bg-secondary/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Project Info */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-secondary/10 rounded-full p-3 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                    <FaClock className="text-secondary" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{project.duration}</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/10 rounded-full p-3 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                    <FaUsers className="text-secondary" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{project.teamSize}</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/10 rounded-full p-3 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                    <FaRocket className="text-secondary" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{project.year}</p>
                </div>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-secondary/80 flex items-center justify-center gap-2 group/btn"
                  >
                    <FaExternalLinkAlt className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    Live Demo
                  </a>
                )}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
