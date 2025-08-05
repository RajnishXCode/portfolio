export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard with real-time analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    github: 'https://github.com/RajnishXCode/ecommerce-platform',
    live: 'https://ecommerce-demo.vercel.app',
  },
  {
    title: 'DeFi Trading Dashboard',
    description: 'A blockchain-based trading platform for DeFi tokens with real-time price feeds, portfolio tracking, and smart contract integration. Built on Ethereum and Internet Computer Protocol.',
    tags: ['React', 'Web3.js', 'Solidity', 'ICP', 'TypeScript', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
    github: 'https://github.com/RajnishXCode/defi-dashboard',
    live: 'https://defi-trading-app.vercel.app',
  },
  {
    title: 'Task Management Mobile App',
    description: 'Cross-platform mobile application for team collaboration and task management. Features include real-time notifications, file sharing, and project analytics with offline capabilities.',
    tags: ['React Native', 'Firebase', 'Redux', 'Push Notifications', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    github: 'https://github.com/RajnishXCode/task-manager-app',
    live: 'https://play.google.com/store/apps/details?id=com.taskmanager',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Business intelligence dashboard with machine learning insights, predictive analytics, and automated reporting. Integrates with multiple data sources and provides actionable insights.',
    tags: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    github: 'https://github.com/RajnishXCode/ai-analytics-dashboard',
    live: 'https://analytics-dashboard-ai.vercel.app',
  },
];

export const portfolioData = {
  section: {
    title: 'Projects',
    subtitle: 'Here are some of my recent projects that showcase my skills and experience.'
  }
};
