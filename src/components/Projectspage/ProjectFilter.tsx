import React from 'react';
import { FaCode, FaDatabase, FaMobile, FaGlobe, FaRocket } from 'react-icons/fa';

interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface ProjectFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ activeFilter, setActiveFilter }) => {
  const categories: Category[] = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'fullstack', label: 'Full Stack', icon: FaGlobe },
    { id: 'blockchain', label: 'Blockchain', icon: FaRocket },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'desktop', label: 'Desktop', icon: FaDatabase },
    { id: 'tools', label: 'Tools', icon: FaCode }
  ];

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        All <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Projects</span>
      </h2>
      
      {/* Enhanced Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-xl border ${
              activeFilter === category.id
                ? 'bg-secondary text-white shadow-2xl shadow-secondary/25 scale-105 border-transparent'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border-white/10 hover:border-secondary/30 hover:scale-105'
            }`}
          >
            {/* Animated background for active state */}
            {activeFilter === category.id && (
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl -z-10"></div>
            )}
            
            <category.icon className={`transition-all duration-300 ${
              activeFilter === category.id ? 'text-white' : 'text-secondary group-hover:text-secondary'
            }`} />
            <span>{category.label}</span>
            
            {/* Hover effect indicator */}
            <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
              activeFilter !== category.id ? 'opacity-0 group-hover:opacity-100 bg-secondary/5' : ''
            }`}></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
