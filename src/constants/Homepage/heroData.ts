import type { IconType } from 'react-icons';
import { FaReact, FaEthereum, FaNodeJs, FaGithub, FaDocker, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiPython, SiTypescript, SiTailwindcss } from 'react-icons/si';

export interface TechIcon {
  Icon: IconType;
  color: string;
}

export const techIcons: TechIcon[] = [
  { Icon: FaHtml5, color: '#E44D26' },
  { Icon: FaCss3Alt, color: '#1572B6' },
  { Icon: FaJsSquare, color: '#F7DF1E' },
  { Icon: FaReact, color: '#61DAFB' },
  { Icon: FaNodeJs, color: '#3C873A' },
  { Icon: FaAngular, color: '#DD0031' },
  { Icon: SiPython, color: '#3776AB' },
  { Icon: FaEthereum, color: '#627EEA' },
  { Icon: FaGithub, color: '#fff' },
  { Icon: FaDocker, color: '#2496ED' },
  { Icon: SiTypescript, color: '#3178C6' },
  { Icon: SiTailwindcss, color: '#38BDF8' },
];

export const heroData = {
  greeting: 'Hello',
  contraction : 'I\'m',
  name: 'Rajnish',
  title: 'Full-Stack & Blockchain Developer',
  resumePath: '/RESUME.pdf',
  profileImage: '/mypic.png',
  profileImageAlt: 'Rajnish Tripathi',
  buttons: {
    project: 'Got a project?',
    resume: 'My resume'
  }
};

export const ctaMessage = 'Hi Rajnish, I got a project for you!';

export const encodeCtaMessage = () => {
    return encodeURIComponent(`${ctaMessage}`);
};