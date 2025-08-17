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
    quote: "Rajnish did an excellent job on our branding and website. The new identity looks professional, and people can now easily learn about our company and services. Highly recommended!",
    author: "Sanjeev",
    role: "Founder",
    company: "Savitri Enterprises"
  },
  // {
  //   quote: "Working with Rajnish was a game-changer for our startup. He built a robust mobile app that helped us scale from 100 to 10,000 users within months. Highly recommended!",
  //   author: "Arjun Patel",
  //   role: "CEO",
  //   company: "TechStart Solutions"
  // },
  // {
  //   quote: "Rajnish's expertise in blockchain and Web3 technologies helped us create a cutting-edge DeFi application. His knowledge of ICP and smart contracts is outstanding.",
  //   author: "Meera Reddy",
  //   role: "CTO",
  //   company: "CryptoFin Labs"
  // },
  {
    quote: "Rajnish and his team built us a custom billing app for our restaurant’s needs. It made our operations faster and more organized, while being budget-friendly and a huge time saver.",
    author: "Vikram Singh",
    role: "Owner",
    company: "Zaika Junction Restaurant"
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
    value: "98%",
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