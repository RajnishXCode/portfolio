import { FaGraduationCap, FaCode, FaBriefcase, FaTrophy, FaRocket, FaComments, FaClock, FaHandshake, FaEye, FaHeart } from 'react-icons/fa';
import { ctaLink } from '../globalData';

// About Hero data
export const aboutHero = {
  title: 'About Me',
  highlightText: 'Me',
  description: 'A passionate developer on a mission to create meaningful digital experiences that bridge the gap between innovative technology and real-world solutions.'
};

// Personal Story data
export const personalStory = {
  title: 'My Story',
  highlightText: 'Story',
  profileImage: {
    src: '/mypic.png',
    alt: 'Rajnish - Software Developer'
  },
  paragraphs: [
    'My journey into software development began with pure curiosity. What started as tinkering with code quickly evolved into a deep passion for solving complex problems and building solutions that matter.',
    'Over the past few years, I\'ve immersed myself in the ever-evolving world of technology, mastering everything from frontend frameworks to blockchain development. Each project has been a stepping stone, teaching me not just how to write better code, but how to think like a problem-solver.',
    'Today, I combine technical expertise with a user-centric approach, ensuring that every solution I build is not just functional, but truly valuable to the people who use it.'
  ]
};

// Career Timeline data
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  type: string;
}

export const careerTimeline: TimelineItem[] = [
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
];

export const careerTimelineHeader = {
  title: 'Career Timeline',
  highlightText: 'Timeline'
};

// Vision Goals data
export interface VisionGoal {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export const visionGoals: VisionGoal[] = [
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
];

export const visionGoalsHeader = {
  title: 'Vision & Goals',
  highlightText: 'Goals'
};

// Collaboration Style data
export interface CollaborationItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export const collaborationStyle: CollaborationItem[] = [
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
];

export const collaborationStyleHeader = {
  title: 'Collaboration Style',
  highlightText: 'Style'
};

// About CTA data
export const aboutCTA = {
  title: 'Let\'s Build Something Amazing Together',
  highlightText: 'Amazing',
  description: 'Ready to turn your ideas into reality? I\'m always excited to discuss new projects and explore how we can create something extraordinary.',
  buttons: [
    {
      type: 'primary',
      text: 'Start a Project',
      href: `${ctaLink}%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project`,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'bg-secondary text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/80 transition-all duration-300'
    },
    {
      type: 'secondary',
      text: 'View My Work',
      href: '/projects',
      className: 'border border-secondary text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition-all duration-300'
    }
  ]
};
