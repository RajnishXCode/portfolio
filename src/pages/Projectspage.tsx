import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaGlobe, FaRocket, FaUsers, FaClock, FaStar } from 'react-icons/fa'
import { useState } from 'react'

function Projectspage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Social Media Boosting Platform",
      description: "Full-stack social media automation platform with React frontend, Node.js backend, and Python tools for content optimization.",
      longDescription: "A comprehensive platform that automates social media posting, analyzes engagement metrics, and provides AI-powered content suggestions. Built with modern tech stack including React, Node.js, Flask, and MongoDB.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Node.js", "Flask", "Python", "MongoDB", "JWT"],
      category: "fullstack",
      status: "completed",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      year: "2024",
      duration: "4 months",
      teamSize: "Solo Project"
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "Decentralized voting application using Ethereum smart contracts with transparent and tamper-proof voting mechanism.",
      longDescription: "A secure voting platform built on Ethereum blockchain ensuring transparency and immutability. Features include voter registration, candidate management, and real-time results.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&auto=format",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      category: "blockchain",
      status: "completed",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      year: "2024",
      duration: "3 months",
      teamSize: "Team of 3"
    },
    {
      id: 3,
      title: "Location Sharing Mobile App",
      description: "Permission-based location sharing app built with React Native, featuring real-time tracking and privacy controls.",
      longDescription: "Mobile application for secure location sharing with granular permission controls. Users can share their location with specific contacts for defined time periods.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
      technologies: ["React Native", "Firebase", "Google Maps API", "Node.js"],
      category: "mobile",
      status: "in-progress",
      githubUrl: "https://github.com/example",
      featured: false,
      year: "2024-25",
      duration: "Ongoing",
      teamSize: "Team Lead"
    },
    {
      id: 4,
      title: "School Admission Software",
      description: "Desktop application for managing school admissions with student records, fee management, and automated reporting.",
      longDescription: "Comprehensive school management system that digitizes the entire admission process, from application to enrollment, with integrated payment processing.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format",
      technologies: ["Python", "Tkinter", "MySQL", "SQLAlchemy"],
      category: "desktop",
      status: "completed",
      githubUrl: "https://github.com/example",
      featured: false,
      year: "2020",
      duration: "2 months",
      teamSize: "Solo Project"
    },
    {
      id: 5,
      title: "E-commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce platforms with sales tracking, inventory management, and customer insights.",
      longDescription: "Advanced analytics platform providing comprehensive insights into e-commerce performance with interactive charts, predictive analytics, and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
      category: "fullstack",
      status: "completed",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      year: "2023",
      duration: "5 months",
      teamSize: "Team of 4"
    },
    {
      id: 6,
      title: "CLI Development Tools",
      description: "Collection of command-line tools for developers including project scaffolding, code analysis, and deployment automation.",
      longDescription: "Suite of CLI tools designed to streamline developer workflow, featuring project templates, code quality analysis, and one-click deployment scripts.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop&auto=format",
      technologies: ["Python", "Click", "Bash", "Docker", "GitHub Actions"],
      category: "tools",
      status: "completed",
      githubUrl: "https://github.com/example",
      featured: false,
      year: "2019-2022",
      duration: "Iterative",
      teamSize: "Solo Project"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'fullstack', label: 'Full Stack', icon: FaGlobe },
    { id: 'blockchain', label: 'Blockchain', icon: FaRocket },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'desktop', label: 'Desktop', icon: FaDatabase },
    { id: 'tools', label: 'Tools', icon: FaCode }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="dark min-h-screen w-screen overflow-x-hidden bg-primary relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-lg rotate-45 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-secondary/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-secondary/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border border-secondary/10 rounded-lg rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10">
        <div className="text-center relative">
          <div className="inline-block relative mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Projects</span>
            </h1>
            {/* Decorative elements around title */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg"></div>
          </div>
          
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A showcase of my development journey - from full-stack web applications to blockchain solutions and mobile apps. Each project represents a unique challenge and learning experience.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
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

      {/* Filter Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8 relative z-10">
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

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Enhanced Call to Action */}
      <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="relative group">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
            {/* Subtle animated pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-8 left-8 w-32 h-32 border border-secondary/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 border border-secondary/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="relative p-12 text-center">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Interested in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Collaborating?</span>
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm always excited to work on new projects and explore innovative solutions. Let's discuss how we can bring your ideas to life!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative bg-secondary text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/25 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <FaRocket className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    Start a Project
                  </span>
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="/RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <FaExternalLinkAlt className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    View Resume
                  </span>
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Projectspage