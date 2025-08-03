export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Rajnish delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
    author: "Priya Sharma",
    role: "Founder, Fashion Boutique",
    company: "StyleHub"
  },
  {
    quote: "Working with Rajnish was a game-changer for our startup. He built a robust mobile app that helped us scale from 100 to 10,000 users within months. Highly recommended!",
    author: "Arjun Patel",
    role: "CEO",
    company: "TechStart Solutions"
  },
  {
    quote: "Rajnish's expertise in blockchain and Web3 technologies helped us create a cutting-edge DeFi application. His knowledge of ICP and smart contracts is outstanding.",
    author: "Meera Reddy",
    role: "CTO",
    company: "CryptoFin Labs"
  },
  {
    quote: "The restaurant management system Rajnish built for us has streamlined our operations completely. The interface is intuitive and the backend is rock-solid.",
    author: "Vikram Singh",
    role: "Owner",
    company: "Spice Garden Restaurant"
  }
];

export const stats: Stat[] = [
  {
    value: "10+",
    label: "Projects Completed"
  },
  {
    value: "10+",
    label: "Happy Clients"
  },
  {
    value: "2+",
    label: "Years Experience"
  },
  {
    value: "95%",
    label: "Client Satisfaction"
  }
];

export const testimonialsData = {
  section: {
    title: "What Clients Say",
    subtitle: "Don't just take my word for it. Here's what my clients have to say about working with me."
  },
  cta: {
    title: "Ready to Start Your Project?",
    subtitle: "Join the list of satisfied clients who have transformed their ideas into successful digital solutions.",
    buttonText: "Start Your Project Today",
    whatsappMessage: "Hi%20Rajnish,%20I%20got%20a%20project%20for%20you!%20Let's%20discuss%20it."
  }
};