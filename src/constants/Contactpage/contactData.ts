import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaPhone } from 'react-icons/fa';
import { ctaLink } from '../globalData';

// Contact methods data
export interface ContactMethod {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  buttonText: string;
  colorClasses: {
    background: string;
    border: string;
    hoverBorder: string;
    iconBg: string;
    hoverIconBg: string;
    iconColor: string;
    titleHover: string;
    subtitleColor: string;
    buttonColor: string;
    buttonHover: string;
  };
  target?: string;
  rel?: string;
}

export const contactMethods: ContactMethod[] = [
  {
    type: 'whatsapp',
    title: 'WhatsApp',
    subtitle: 'Instant Response',
    description: 'Get quick replies for urgent projects or general inquiries. Perfect for real-time discussions.',
    href: `${ctaLink}Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project`,
    icon: FaWhatsapp,
    buttonText: 'Message Now',
    target: '_blank',
    rel: 'noopener noreferrer',
    colorClasses: {
      background: 'bg-gradient-to-br from-green-500/20 to-green-600/10',
      border: 'border-green-500/30',
      hoverBorder: 'hover:border-green-400',
      iconBg: 'bg-green-500/20',
      hoverIconBg: 'group-hover:bg-green-500/30',
      iconColor: 'text-green-400',
      titleHover: 'group-hover:text-green-400',
      subtitleColor: 'text-green-400',
      buttonColor: 'text-green-400',
      buttonHover: 'group-hover:text-white',
    }
  },
  {
    type: 'email',
    title: 'Email',
    subtitle: 'Professional',
    description: 'Perfect for detailed project discussions, proposals, and formal business communications.',
    href: 'mailto:contact.rajnishtripathi@gmail.com?subject=Project%20Inquiry&body=Hi%20Rajnish,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A',
    icon: FaEnvelope,
    buttonText: 'Send Email',
    colorClasses: {
      background: 'bg-gradient-to-br from-blue-500/20 to-blue-600/10',
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-400',
      iconBg: 'bg-blue-500/20',
      hoverIconBg: 'group-hover:bg-blue-500/30',
      iconColor: 'text-blue-400',
      titleHover: 'group-hover:text-blue-400',
      subtitleColor: 'text-blue-400',
      buttonColor: 'text-blue-400',
      buttonHover: 'group-hover:text-white',
    }
  },
  {
    type: 'call',
    title: 'Schedule Call',
    subtitle: "Let's Talk",
    description: 'Prefer voice discussion? Let\'s schedule a call to dive deep into your project requirements and goals.',
    href: 'https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project%20requirements%20in%20detail',
    icon: FaPhone,
    buttonText: 'Book Call',
    target: '_blank',
    rel: 'noopener noreferrer',
    colorClasses: {
      background: 'bg-gradient-to-br from-purple-500/20 to-purple-600/10',
      border: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400',
      iconBg: 'bg-purple-500/20',
      hoverIconBg: 'group-hover:bg-purple-500/30',
      iconColor: 'text-purple-400',
      titleHover: 'group-hover:text-purple-400',
      subtitleColor: 'text-purple-400',
      buttonColor: 'text-purple-400',
      buttonHover: 'group-hover:text-white',
    }
  }
];

// Response guarantee data
export const responseGuarantee = {
  title: '⚡ Quick Response Guarantee',
  methods: [
    {
      type: 'WhatsApp',
      time: 'Usually within 1-2 hours'
    },
    {
      type: 'Email',
      time: 'Within 24 hours'
    },
    {
      type: 'Calls',
      time: 'Scheduled within 48 hours'
    }
  ]
};

// Social links data
export interface SocialLink {
  icon: React.ComponentType<any>;
  name: string;
  username: string;
  description: string;
  link: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    name: 'GitHub',
    username: '@RajnishXCode',
    description: 'Check out my code repositories',
    link: 'https://github.com/RajnishXCode',
    color: ''
  },
  {
    icon: FaLinkedin,
    name: 'LinkedIn',
    username: '@RajnishXCode',
    description: 'Professional networking',
    link: 'https://www.linkedin.com/in/RajnishXCode/',
    color: ''
  },
  {
    icon: FaTwitter,
    name: 'Twitter',
    username: '@RajnishXCode',
    description: 'Follow for tech updates',
    link: 'https://twitter.com/RajnishXCode',
    color: ''
  }
];

// Contact CTA data
export const contactCTA = {
  title: 'Ready to Start Working Together?',
  highlightText: 'Working Together?',
  description: "I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something amazing together!",
  buttons: [
    {
      type: 'primary',
      text: 'Start a Project',
      href: `${ctaLink}Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project`,
      icon: FaWhatsapp,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'bg-secondary hover:bg-secondary/80 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3'
    },
    {
      type: 'secondary',
      text: 'View Resume',
      href: '/RESUME.pdf',
      icon: FaEnvelope,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3'
    }
  ]
};

// Contact hero data
export const contactHero = {
  title: "Let's Connect",
  highlightText: 'Connect',
  description: "Ready to start your next project? I'm here to help bring your ideas to life. Choose your preferred way to reach out and let's discuss how we can work together to create something amazing."
};

// Social section data
export const socialSection = {
  title: 'Follow Me Online',
  highlightText: 'Online',
  description: 'Stay updated with my latest projects and tech insights'
};
