import { FaCode, FaDatabase, FaMobile, FaGlobe, FaRocket } from 'react-icons/fa';
import { ctaLink } from '../globalData';

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
  description: 'A showcase of my development journey, from full-stack web applications to blockchain solutions and mobile apps. Each project represents a unique challenge and learning experience.'
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
      href: `${ctaLink}Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project`,
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
    title: "Sociwave Social Media Boosting Platform",
    description: "Full-stack social media automation platform with React frontend, Node.js backend, and Python tools for content optimization.",
    longDescription: "A comprehensive platform that automates social media posting, analyzes engagement metrics, and provides AI-powered content suggestions. Built with modern tech stack including React, Node.js, Flask, and MongoDB.",
    // image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop&auto=format",
    image: "/sociwave.png",
    technologies: ["React", "Node.js", "Flask", "Python", "MongoDB", "JWT"],
    category: "fullstack",
    status: "completed",
    liveUrl: "https://sociwave.vercel.app/",
    githubUrl: "https://github.com/RajnishXCode/SociWave",
    featured: false,
    year: "2024",
    duration: "3 months",
    teamSize: "Solo Project"
  },
  {
    id: 2,
    title: "Corporate Website for Savitri Enterprises",
    description: "Complete brand identity and web development project for an Indian construction company. Responsive design and user-friendly interface.",
    longDescription: "Designed custom logo and brand identity, then developed a professional corporate website with responsive design, service showcases, project galleries, and client inquiry forms.",
    // image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&auto=format",
    image: "/savitrienterprises.png",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "fullstack",
    status: "completed",
    liveUrl: "https://savitrienterprises.vercel.app/",
    githubUrl: "/private",
    featured: true,
    year: "2025",
    duration: "2 Weeks",
    teamSize: "Solo Project"
  },
  {
    id: 3,
    title: "SafeWalk - Location Sharing Mobile App",
    description: "Permission-based location sharing app built with React Native, featuring real-time tracking and privacy controls.",
    longDescription: "Mobile application for secure location sharing with granular permission controls. Users can share their location with specific contacts for defined time periods.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
    technologies: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Google Maps API"],
    category: "mobile",
    status: "in-progress",
    liveUrl:"",
    githubUrl: "/private",
    featured: false,
    year: "2024-25",
    duration: "Ongoing",
    teamSize: "Solo Project"
  },
  {
    id: 4,
    title: "KVS School Admission Software",
    description: "Desktop application for managing school admissions with student records. Digital version for streamlined processes.",
    longDescription: "Comprehensive school management system that digitizes the entire admission process, from application to enrollment.",
    // image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format",
    image: "https://images.unsplash.com/photo-1623329385382-bc435e9e9414?q=80&w=600&h=400&fit=crop&auto=format",
    technologies: ["Python", "Tkinter", "MySQL", "SQLAlchemy"],
    category: "desktop",
    status: "completed",
    liveUrl: "",
    githubUrl: "https://github.com/RajnishXCode/KVS-Admission-form",
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
    status: "in-progress",
    liveUrl: "",
    githubUrl: "/private",
    featured: false,
    year: "2025",
    duration: "5 months",
    teamSize: "Team of 2"
  },
  {
    id: 6,
    title: "ObfusGuard Encoding and Hashing Algorithm",
    description: "Non-cryptographic, multi-layered encoding and hashing algorithm for lightweight obfuscation.",
    longDescription: "A suite of tools designed for text obfuscation and hashing, featuring multiple encoding layers and a non-reversible hashing function.",
    // image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop&auto=format",
    image: "/obfusguard.png",
    technologies: ["Python", "Encoding", "Hashing", "Obfuscation", "Text Processing"],
    category: "tools",
    status: "completed",
    liveUrl: "https://pypi.org/project/obfusguard/",
    githubUrl: "https://github.com/RajnishXCode/ObfusGuard",
    featured: true,
    year: "2024",
    duration: "1 month",
    teamSize: "Solo Project"
  },
  {
    id: 7,
    title: 'YouTube Automation Bot for View Generation',
    description: 'Automated Python bot to searches and plays YouTube videos using system automation.',
    longDescription: 'An automated Python bot that searches and plays YouTube videos using system automation. Features multi-account support for engagement analytics and view generation. Utilizes coordinate-based automation with customizable settings for different machine configurations.',
    // image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1074&auto=format&fit=crop',
    technologies: ['Python', 'Automation', 'Web Scraping', 'Bot Development'],
    category: 'tools',
    status: 'completed',
    liveUrl: '',
    githubUrl: 'https://github.com/RajnishXCode/PyAutoBOT',
    featured: false,
    year: "2024",
    duration: "2 months",
    teamSize: "Solo Project",
  },
  {
  id: 8,
  title: 'Custom Restaurant Billing App',
  description: 'Mobile billing system built for a local restaurant with instant thermal printer integration.',
  longDescription: 'Developed a custom mobile billing application for Zaika Junction, a local restaurant. The app enables staff to generate and print bills instantly via a connected thermal printer. Designed with a simple, user-friendly interface tailored to restaurant workflows, making order management and billing faster and more efficient.',
  image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1074&auto=format&fit=crop',
  technologies: ['Flutter', 'Node.js', 'Thermal Printer Integration', 'Mobile App Development'],
  category: 'mobile',
  status: 'completed',
  liveUrl: '',
  githubUrl: '/private',
  featured: false,
  year: "2024",
  duration: "1.5 months",
  teamSize: "Team of 2",
}
];
