import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="group relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-accent/30">
          {/* Animated gradient border on hover */}
          <div className="absolute inset-0 transition-opacity duration-500 rounded-2xl blur-sm -z-10"></div>
          
          <div className="relative">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            
            {/* Status badges with enhanced styling */}
            <div className="absolute top-3 right-3 flex gap-2">
              {project.featured && (
                <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                  Featured
                </span>
              )}
            </div>
            
            {project.status === 'in-progress' && (
              <div className="absolute top-3 left-3">
                <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm animate-pulse">
                  In Progress
                </span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
            
            {/* Enhanced Tech Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="bg-secondary/15 text-secondary border border-secondary/20 px-2 py-1 rounded-md text-xs backdrop-blur-sm transition-all duration-300 hover:border-secondary/40">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-gray-600/20 text-gray-400 px-2 py-1 rounded-md text-xs border border-gray-500/20">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex gap-2">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-secondary/80 flex items-center justify-center gap-1 group/btn"
                >
                  <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                  Demo
                </a>
              )}
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-secondary/50 text-secondary hover:bg-secondary hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1 backdrop-blur-sm"
              >
                <FaGithub className="text-xs" />
                Code
              </a>
            </div>
          </div>

          {/* Hover effect particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-4 w-1 h-1 bg-secondary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
