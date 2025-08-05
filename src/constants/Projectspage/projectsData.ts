import { FaCode, FaDatabase, FaMobile, FaGlobe, FaRocket } from 'react-icons/fa';

export interface Project {
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

// Projects Hero Data
export const projectsHero = {
  title: 'My Projects',
  highlightText: 'Projects',
  description: 'A showcase of my development journey - from full-stack web applications to blockchain solutions and mobile apps. Each project represents a unique challenge and learning experience.'
};

// Featured Projects Data
export const featuredProjectsSection = {
  title: 'Featured Projects',
  highlightText: 'Projects'
};

// Project Filter Categories
export interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export const projectCategories: Category[] = [
  { id: 'all', label: 'All Projects', icon: FaCode },
  { id: 'fullstack', label: 'Full Stack', icon: FaGlobe },
  { id: 'blockchain', label: 'Blockchain', icon: FaRocket },
  { id: 'mobile', label: 'Mobile', icon: FaMobile },
  { id: 'desktop', label: 'Desktop', icon: FaDatabase },
  { id: 'tools', label: 'Tools', icon: FaCode }
];

export const projectFilterSection = {
  title: 'All Projects',
  highlightText: 'Projects'
};

// Projects CTA Data
export const projectsCTA = {
  title: 'Interested in Collaborating?',
  highlightText: 'Collaborating?',
  description: 'I\'m always excited to work on new projects and explore innovative solutions. Let\'s discuss how we can bring your ideas to life!',
  buttons: [
    {
      type: 'primary',
      text: 'Start a Project',
      href: 'https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: 'rocket'
    },
    {
      type: 'secondary',
      text: 'View Resume',
      href: '/RESUME.pdf',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: 'external'
    }
  ]
};

export const projectsData: Project[] = [
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
];
