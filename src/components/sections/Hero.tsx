import React, { useEffect, useState, useRef } from 'react';
import { FaReact, FaEthereum, FaNodeJs, FaGithub, FaDocker, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiPython, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techIcons = [
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

const Hero: React.FC = () => {
  // Typing animation state
  const [typed, setTyped] = useState('');
  const typingText = 'Blockchain Developer';

  useEffect(() => {
    if (typed.length < typingText.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + typingText[typed.length]);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [typed]);

  // Auto-scrolling tech stack strip
  const stripRef = useRef<HTMLDivElement>(null);
  // Duplicate icons for seamless loop
  const iconList = [...techIcons, ...techIcons];

  return (
    <section className="relative h-screen min-h-screen flex flex-col justify-center bg-[#181c2a] overflow-hidden">
      {/* Main Flex Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-0 flex-grow h-full px-6 md:px-12">
        {/* Left Content (do not touch) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start h-full md:pr-8 z-10">
          {/* --- YOUR TEXT SECTION HERE, UNCHANGED --- */}
          <div className="flex flex-col justify-center h-full w-full">
            <span className="block text-3xl md:text-4xl font-bold text-white mb-2">
              Hello<span className="text-red-500 align-middle ml-1">.</span>
            </span>
            <div className="flex items-center mb-2">
              <span className="block w-12 h-1 bg-orange-500 mr-4 rounded-full" />
              <span className="text-2xl md:text-3xl text-white font-light">I'm Rajnish</span>
            </div>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              Full-Stack & <span className="text-orange-500">Blockchain Developer</span>
            </span>
            <div className="flex gap-4 mb-8">
              <a
                href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white px-7 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
              >
                Got a project?
              </a>
              <a
                href="/RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-500 text-white px-7 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500/10 transition-all duration-300"
                download
              >
                My resume
              </a>
            </div>
          </div>
        </div>
        {/* Right Image with SVG Ring and Chevrons */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative h-full min-h-[420px]">
          {/* Chevrons */}
          <svg className="absolute left-0 top-[40%] -translate-y-1/2 z-0 hidden md:block" width="60" height="120" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="50,20 10,90 50,160" stroke="#FF5722" strokeWidth="3" fill="none" opacity="0.18" />
          </svg>
          <svg className="absolute right-0 top-[80%] -translate-y-1/2 z-0 hidden md:block" width="60" height="120" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="10,20 50,90 10,160" stroke="#FF5722" strokeWidth="3" fill="none" opacity="0.18" />
          </svg>
          {/* SVG Ring behind image, centered */}
          <svg
            className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            width="100%" height="100%" viewBox="0 0 420 420" fill="none"
            style={{ minWidth: 320, minHeight: 320, maxWidth: 500, maxHeight: 500 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="210"
              cy="210"
              r="170"
              stroke="#FF5722"
              strokeWidth="16"
              fill="none"
              opacity="0.7"
            />
          </svg>
          {/* Actual image, bottom-aligned and no circular boundary */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full flex items-end justify-center z-10">
            <img
              src="/public/mypic.png"
              alt="Rajnish Tripathi"
              className="object-cover h-[85vh] w-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>
      {/* Tech Stack Strip (do not touch) mt-8*/}
      <div className="w-screen  py-4 bg-[#23272f] border-t border-b border-[#232946] overflow-hidden relative px-0">
        <div
          ref={stripRef}
          className="flex items-center gap-10 animate-tech-scroll"
          style={{ width: 'max-content' }}
        >
          {iconList.map(({ Icon, color }, idx) => (
            <span key={idx} className="mx-4" style={{ minWidth: 40, minHeight: 40 }}>
              <Icon size={40} color={color} />
            </span>
          ))}
        </div>
        <style>{`
          @keyframes tech-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-tech-scroll {
            animation: tech-scroll 18s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero; 