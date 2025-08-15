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
    title: 'YouTube Automation Bot',
    description: 'An automated Python bot that searches and plays YouTube videos using system automation. Features multi-account support for engagement analytics and view generation. Utilizes coordinate-based automation with customizable settings for different machine configurations.',
    tags: ['Python', 'Automation', 'Web Scraping', 'Bot Development'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    github: 'https://github.com/RajnishXCode/PyAutoBOT',
    live: '',
  },
  {
    title: 'ObfusGuard Encoding and Hashing Algorithm',
    description: 'A non-cryptographic, multi-layered encoding and hashing algorithm designed to provide simple obfuscation and hashing for text input. Features three levels of encoding and a hashing function that transforms input into non-reversible hash. Suitable for educational purposes and lightweight obfuscation.',
    tags: ['Python', 'Hashing', 'Encoding', 'Security', 'Algorithm'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    github: 'https://github.com/RajnishXCode/obfusguard',
    live: 'https://pypi.org/project/obfusguard/',
  },
];

export const portfolioData = {
  section: {
    title: 'Projects',
    subtitle: 'Here are some of my recent projects that showcase my skills and experience.'
  }
};
