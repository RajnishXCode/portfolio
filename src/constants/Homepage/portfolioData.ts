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
    title: "Savitri Enterprises Website",
    description: "Complete brand identity and web development project for an Indian construction company. Designed custom logo and brand identity, then developed a professional corporate website with responsive design, service showcases, project galleries, and client inquiry forms.",
    tags: ["React","Vite","Tailwind CSS","Responsive Design","Corporate Website"],
    image: "/savitrienterprises.png",
    github: "/private",
    live: "https://savitri-enterprises.vercel.app",
  },
  {
    title: "ObfusGuard Encoding and Hashing Algorithm",
    description: "A non-cryptographic, multi-layered encoding and hashing algorithm designed to provide simple obfuscation and hashing for text input. Features three levels of encoding and a hashing function that transforms input into non-reversible hash. Suitable for educational purposes and lightweight obfuscation.",
    tags: ["Python", "Hashing", "Encoding", "Security", "Algorithm"],
    image: "/obfusguard.png",
    github: "https://github.com/RajnishXCode/obfusguard",
    live: "https://pypi.org/project/obfusguard/",
  },
  // {
  //   title: 'E-Commerce Platform',
  //   description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard with real-time analytics.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
  //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
  //   github: 'https://github.com/RajnishXCode/store-nextjs-ecom',
  //   live: 'https://ecommerce-demo.vercel.app',
  // },
  {
    title: "YouTube Automation Bot",
    description: "An automated Python bot that searches and plays YouTube videos using system automation. Features multi-account support for engagement analytics and view generation. Utilizes coordinate-based automation with customizable settings for different machine configurations.",
    tags: ["Python", "Automation", "Web Scraping", "Bot Development"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1074&auto=format&fit=crop",
    github: "https://github.com/RajnishXCode/PyAutoBOT",
    live: "",
  },
  {
    title: "Custom Restaurant Billing App",
    description: "Developed a custom mobile billing application for Zaika Junction, a local restaurant. The app enables staff to generate and print bills instantly via a connected thermal printer. Designed with a simple, user-friendly interface tailored to restaurant workflows, making order management and billing faster and more efficient.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1074&auto=format&fit=crop",
    tags: ["Flutter", "Node.js", "Thermal Printer Integration", "Mobile App Development"],
    live: "",
    github: "/private",
  },
];

export const portfolioData = {
  section: {
    title: "Projects",
    subtitle:
      "Here are some of my recent projects that showcase my skills and experience.",
  },
};
