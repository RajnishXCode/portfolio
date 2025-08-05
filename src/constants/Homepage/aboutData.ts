import type { IconType } from 'react-icons';
import { FaCode, FaMobileAlt, FaEthereum } from 'react-icons/fa';

export interface TimelineItem {
  id: number;
  title: string;
  icon: IconType;
}

export interface Stat {
  value: string;
  label: string;
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    title: 'Website Development',
    icon: FaCode,
  },
  {
    id: 2,
    title: 'Mobile App Development',
    icon: FaMobileAlt,
  },
  {
    id: 3,
    title: 'Blockchain Development',
    icon: FaEthereum,
  },
];

export const stats: Stat[] = [
  {
    value: '10+',
    label: 'Completed Projects'
  },
  {
    value: '98%',
    label: 'Client Satisfaction'
  },
  {
    value: '2+',
    label: 'Years Experience'
  }
];

export const aboutData = {
  title: 'About me',
  description: 'I started my software journey from curiosity and a love for building things. I enjoy turning ideas into real products, whether it\'s a website, app, or blockchain solution. My focus is on clean code, great user experience, and helping clients succeed.',
  location: {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    country: 'India'
  }
};