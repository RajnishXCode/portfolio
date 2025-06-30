import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaEthereum, FaNodeJs, FaGithub, FaDocker } from 'react-icons/fa';
import { SiInternetcomputer, SiExpo } from 'react-icons/si';

const techIcons = [FaReact, FaEthereum, FaNodeJs, FaGithub, FaDocker, SiInternetcomputer, SiExpo];
const typingText = 'Fullstack & Blockchain Developer';

const Hero: React.FC = () => {
  // Typing animation state
  const [typed, setTyped] = useState('');
  const [showLadder, setShowLadder] = useState([false, false, false, false]);

  // Typing effect
  useEffect(() => {
    if (typed.length < typingText.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + typingText[typed.length]);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [typed]);

  // Ladder animation for elements
  useEffect(() => {
    const timeouts: any[] = [];
    [0, 1, 2, 3].forEach((i) => {
      timeouts.push(
        setTimeout(() => {
          setShowLadder((prev) => {
            const arr = [...prev];
            arr[i] = true;
            return arr;
          });
        }, 400 + i * 250)
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Floating icons random positions
  const floatingIcons = Array.from({ length: 8 }).map((_, i) => {
    const Icon = techIcons[i % techIcons.length];
    const top = Math.random() * 80 + 5;
    const left = Math.random() * 80 + 5;
    const duration = Math.random() * 4 + 6;
    return (
      <span
        key={i}
        className="absolute"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animation: `floatY ${duration}s ease-in-out infinite alternate`,
          opacity: 0.18,
          fontSize: 38 + Math.random() * 22,
          zIndex: 1,
        }}
      >
        <Icon color="#6366f1" />
      </span>
    );
  });

  return (
    <section className="relative  min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-200 via-white to-pink-100">
      {/* SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern-circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="36" fill="#f3f4f6" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-circles)" />
      </svg>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {floatingIcons}
      </div>

      <div className="relative z-20 max-w-3xl w-full mx-auto px-6 py-16 rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl border border-white/40 flex flex-col items-center"
        style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.18)' }}>
        {/* Main Heading */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg transition-all duration-700 ${showLadder[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Rajnish Tripathi
        </h1>
        {/* Typing Title */}
        <div className={`flex justify-center w-full transition-all duration-700 ${showLadder[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-indigo-600 mt-2 mb-6 h-12 min-h-[2.5rem] text-center"
            style={{ fontFamily: 'monospace', letterSpacing: '0.02em', display: 'inline-block' }}
          >
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        {/* Subheading */}
        <p className={`text-xl md:text-2xl text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed text-center transition-all duration-700 ${showLadder[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ textShadow: '0 2px 8px #fff8' }}>
          I help local businesses and startups build fast, scalable, and user-focused web & mobile solutions.
        </p>
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${showLadder[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600/90 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-md border border-white/30"
          >
            Hire Me
          </a>
          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 text-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-indigo-200 backdrop-blur-md"
            download
          >
            Download CV
          </a>
        </div>
        {/* Location Badge */}
        <div className="mt-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full shadow-md border border-gray-200 backdrop-blur-md">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">Based in Lucknow, India</span>
          </div>
        </div>
      </div>
      {/* Keyframes for floating icons */}
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
      `}</style>
    </section>
  );
};

export default Hero; 