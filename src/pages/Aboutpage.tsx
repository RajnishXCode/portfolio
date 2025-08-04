import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaGraduationCap, FaCode, FaBriefcase, FaTrophy, FaRocket, FaEye, FaHandshake, FaComments, FaClock, FaHeart } from 'react-icons/fa'
import '../styles/aboutpage.css'

function Aboutpage() {
  const careerTimeline = [
    {
      year: "2018",
      title: "Python Programming Journey Begins",
      description: "Started coding journey in school with Python, discovering the power of programming and problem-solving",
      icon: FaGraduationCap,
      type: "education"
    }, 
    {
      year: "2019",
      title: "CLI Tools Development",
      description: "Built simple command-line tools using Python, learning automation and script development",
      icon: FaCode,
      type: "project"
    },
    {
      year: "2020",
      title: "First Full-Stack Project",
      description: "Developed School Admission Software using Python & MySQL, digitalizing paper-based processes while starting college",
      icon: FaTrophy,
      type: "achievement"
    },
    {
      year: "2022-23",
      title: "Freelance Web Developer",
      description: "Mastered full-stack web development during college, delivered multiple freelance projects using modern frameworks",
      icon: FaBriefcase,
      type: "work"
    },
    {
      year: "2024",
      title: "Social Media Platform Launch",
      description: "Built and launched full-stack social media boosting platform (React, Node, Flask, Python tools) - landed first job",
      icon: FaRocket,
      type: "milestone"
    },
    {
      year: "2024-25",
      title: "Web3 & Team Leadership",
      description: "Delivered 5+ blockchain projects, led teams as acting TL, currently building permission-based location sharing mobile app",
      icon: FaTrophy,
      type: "achievement"
    }
  ]

  const visionGoals = [
    {
      icon: FaRocket,
      title: "Innovation Leader",
      description: "Become a recognized expert in cutting-edge technologies like AI, blockchain, and modern web frameworks."
    },
    {
      icon: FaEye,
      title: "Impactful Solutions",
      description: "Create software that solves real-world problems and makes a meaningful difference in people's lives."
    },
    {
      icon: FaHeart,
      title: "Tech Community",
      description: "Contribute to open-source projects and mentor aspiring developers in their coding journey."
    }
  ]

  const collaborationStyle = [
    {
      icon: FaComments,
      title: "Clear Communication",
      description: "I believe in transparent, regular updates and always keeping stakeholders informed throughout the development process."
    },
    {
      icon: FaClock,
      title: "Agile Approach",
      description: "I work in iterative cycles, delivering value early and often while remaining flexible to changing requirements."
    },
    {
      icon: FaHandshake,
      title: "Partnership Mindset",
      description: "I see every project as a collaboration where we work together towards a shared vision and mutual success."
    }
  ]

  return (
    <div className="dark min-h-screen w-screen overflow-x-hidden bg-primary relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary/5 to-orange-500/5 rounded-lg rotate-45 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-orange-500/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-secondary/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border border-secondary/10 rounded-lg rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-secondary/3 to-orange-500/3 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      
      {/* Hero Section with Enhanced Design */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-16 relative z-10">
        <div className="text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/10 to-orange-500/10 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <div className="inline-block relative mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Me</span>
            </h1>
            {/* Decorative elements around title */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 rounded-br-lg"></div>
          </div>
          
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative">
            <span className="relative z-10">
              A passionate developer on a mission to create meaningful digital experiences that bridge the gap between innovative technology and real-world solutions.
            </span>
            {/* Subtle highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent rounded-lg -z-10"></div>
          </p>
        </div>
      </section>

      {/* Personal Story Section with Premium Design */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="relative">
          {/* Enhanced background with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/8 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl hover:shadow-accent/30 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-orange-500/5 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-12 ">
              <div className="md:w-1/3 relative">
                {/* Elite Profile Avatar with Advanced Effects */}
                <div className="relative group perspective-1000">
                  {/* Main Avatar Container with Perfect Layering */}
                  <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-white/10 backdrop-blur-sm group-hover:scale-105 transition-all duration-700 ease-out overflow-hidden shadow-2xl group-hover:shadow-secondary/20">
                    {/* Multi-layered backdrop effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-orange-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Profile Image with Perfect Optimization */}
                    <img 
                      src="/mypic.png" 
                      alt="Rajnish - Software Developer" 
                      className="w-full h-full object-cover rounded-full relative z-20 group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-105 contrast-105 group-hover:brightness-110 group-hover:contrast-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallbackElement) {
                          fallbackElement.style.opacity = '1';
                        }
                      }}
                    />
                    
                    {/* Enhanced Fallback Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 z-10">
                      <FaCode className="text-6xl text-secondary group-hover:text-orange-500 transition-colors duration-500 drop-shadow-lg" />
                    </div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-secondary/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Perfect Orbital Ring System */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Outer orbit ring with enhanced styling */}
                    <div className="absolute inset-0 border border-secondary/20 rounded-full animate-spin shadow-lg" 
                         style={{
                           animationDuration: '20s',
                           animationTimingFunction: 'linear',
                           filter: 'drop-shadow(0 0 8px rgba(255, 87, 34, 0.1))'
                         }}>
                      {/* Orbital dot indicator */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-secondary to-orange-500 rounded-full shadow-lg"></div>
                    </div>
                    
                    {/* Inner orbit ring with counter-rotation */}
                    <div className="absolute inset-4 border border-orange-500/20 rounded-full animate-spin shadow-lg" 
                         style={{
                           animationDuration: '15s',
                           animationDirection: 'reverse',
                           animationTimingFunction: 'linear',
                           filter: 'drop-shadow(0 0 6px rgba(255, 87, 34, 0.15))'
                         }}>
                      {/* Inner orbital dot */}
                      <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-secondary rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Micro orbit ring for extra sophistication */}
                    <div className="absolute inset-8 border border-secondary/10 rounded-full animate-spin opacity-50" 
                         style={{
                           animationDuration: '10s',
                           animationTimingFunction: 'linear'
                         }}>
                      <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Ambient Glow Effects */}
                  <div className="absolute -inset-8 opacity-0 group-hover:opacity-40 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-orange-500/20 to-secondary/20 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Pulse Ring Animation for Focus */}
                  <div className="absolute inset-0 rounded-full border-2 border-secondary/30 opacity-0 group-hover:opacity-100 animate-ping" style={{animationDuration: '2s'}}></div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-4 right-4 z-30">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-full blur-sm animate-pulse"></div>
                      <div className="relative w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-orange-500 rounded-full blur opacity-60"></div>
                      <div className="relative bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-xl">
                        <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
                          Available for Projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="relative mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Story</span>
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-secondary to-orange-500 rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <div className="relative group">
                    <p className="relative z-10 p-4 rounded-lg transition-all duration-300 group-hover:text-white">
                      My journey into software development began with pure curiosity. What started as tinkering with code quickly evolved into a deep passion for solving complex problems and building solutions that matter.
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="relative group">
                    <p className="relative z-10 p-4 rounded-lg transition-all duration-300 group-hover:text-white">
                      Over the past few years, I've immersed myself in the ever-evolving world of technology, mastering everything from frontend frameworks to blockchain development. Each project has been a stepping stone, teaching me not just how to write better code, but how to think like a problem-solver.
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="relative group">
                    <p className="relative z-10 p-4 rounded-lg transition-all duration-300 group-hover:text-white">
                      Today, I combine technical expertise with a user-centric approach, ensuring that every solution I build is not just functional, but truly valuable to the people who use it.
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline Section with Elite Design */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Timeline</span>
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-orange-500/20 rounded-lg blur opacity-30"></div>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Enhanced Timeline Line with Glow Effect */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full">
            <div className="w-full h-full bg-gradient-to-b from-secondary via-orange-500 to-secondary"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-secondary via-orange-500 to-secondary blur-sm opacity-50"></div>
          </div>
          
          <div className="space-y-16">
            {careerTimeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative">
                    {/* Card Background with Multiple Layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-secondary/30 group-hover:shadow-accent/30 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="flex items-center mb-6">
                        <div className="relative mr-6">
                          <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-orange-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-orange-500/20 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                            <item.icon className="text-secondary text-2xl group-hover:text-orange-500 transition-colors duration-300" />
                          </div>
                        </div>
                        <div>
                          <div className="text-secondary font-bold text-xl mb-1 group-hover:text-orange-500 transition-colors duration-300">{item.year}</div>
                          <div className="text-white font-semibold text-lg">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{item.description}</p>
                      
                      {/* Decorative corner elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Timeline Node */}
                <div className="relative z-20 flex items-center justify-center my-8 md:my-0">
                  <div className="absolute w-8 h-8 bg-gradient-to-r from-secondary to-orange-500 rounded-full blur opacity-50"></div>
                  <div className="relative w-6 h-6 bg-gradient-to-r from-secondary to-orange-500 rounded-full border-4 border-primary shadow-2xl pulse-ring">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Goals Section with Luxurious Design */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Goals</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionGoals.map((goal, index) => (
            <div key={index} className="group relative">
              {/* Background layers with depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-secondary/30 hover:shadow-accent/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating effect */}
              <div className="relative z-10 p-8 group-hover:transform group-hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-6">
                    {/* Icon container with multiple effects */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-orange-500 to-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-secondary/20 via-orange-500/10 to-secondary/20 rounded-full flex items-center justify-center border-2 border-white/10 backdrop-blur-sm group-hover:border-secondary/30 transition-all duration-500">
                      <div className="absolute inset-2 bg-gradient-to-br from-secondary/10 to-orange-500/10 rounded-full group-hover:from-secondary/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
                      <goal.icon className="text-secondary text-3xl relative z-10 group-hover:text-orange-500 transition-colors duration-500" />
                    </div>
                    
                    {/* Orbital elements */}
                    <div className="absolute inset-0 border border-secondary/10 rounded-full animate-spin opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{animationDuration: '10s'}}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-secondary transition-colors duration-300">{goal.title}</h3>
                </div>
                
                <div className="relative">
                  <p className="text-gray-300 leading-relaxed text-center group-hover:text-white transition-colors duration-300">{goal.description}</p>
                  
                  {/* Subtle accent line */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-secondary to-orange-500 group-hover:w-16 transition-all duration-500"></div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Style Section with Sophisticated Design */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Collaboration <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Style</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-secondary via-orange-500 to-secondary rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-orange-500 via-secondary to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collaborationStyle.map((style, index) => (
            <div key={index} className="group relative">
              {/* Multi-layered background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-secondary/30 hover:shadow-accent/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-10 text-center group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="mb-8">
                  {/* Enhanced icon design */}
                  <div className="relative inline-block">
                    <div className="absolute -inset-6 bg-gradient-to-r from-secondary via-orange-500 to-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-secondary/20 via-orange-500/10 to-secondary/20 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm group-hover:border-secondary/40 transition-all duration-500 mx-auto">
                      <div className="absolute inset-2 bg-gradient-to-br from-secondary/10 to-orange-500/10 rounded-full group-hover:from-secondary/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
                      <style.icon className="text-secondary text-2xl relative z-10 group-hover:text-orange-500 transition-colors duration-500" />
                    </div>
                    
                    {/* Rotating rings */}
                    <div className="absolute inset-0 border border-secondary/10 rounded-full animate-spin opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{animationDuration: '15s'}}></div>
                    <div className="absolute inset-2 border border-orange-500/10 rounded-full animate-spin opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{animationDuration: '10s', animationDirection: 'reverse'}}></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">{style.title}</h3>
                  
                  <div className="relative">
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{style.description}</p>
                    
                    {/* Decorative quote marks */}
                    <div className="absolute -top-2 -left-2 text-secondary/20 text-2xl font-bold group-hover:text-secondary/40 transition-colors duration-300">"</div>
                    <div className="absolute -bottom-2 -right-2 text-orange-500/20 text-2xl font-bold group-hover:text-orange-500/40 transition-colors duration-300">"</div>
                  </div>
                </div>
                
                {/* Elegant corner accents */}
                <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg"></div>
                <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Call to Action Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="relative">
          {/* Luxurious background with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-orange-500/10 to-secondary/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:shadow-accent/30 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-secondary/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-secondary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10 p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">Amazing</span> Together
                
                {/* Decorative elements */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to turn your ideas into reality? I'm always excited to discuss new projects and explore how we can create something extraordinary.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Primary CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-orange-500 to-secondary rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <button className="relative bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-secondary text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-3xl">
                  <span className="relative z-10">Start a Project</span>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              {/* Secondary CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 to-orange-500/50 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <button className="relative border-2 border-transparent bg-gradient-to-r from-secondary to-orange-500 p-0.5 rounded-xl group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary px-10 py-4 rounded-lg group-hover:bg-primary/80 transition-colors duration-300">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500 text-lg font-semibold">View My Work</span>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-2xl"></div>
            <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-orange-500/30 rounded-tr-2xl"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-orange-500/30 rounded-bl-2xl"></div>
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-2xl"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Aboutpage