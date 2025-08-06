import { useRef } from 'react';
import Navbar from '../Navbar';
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { techIcons, heroData, encodeCtaMessage } from '../../constants/Homepage/heroData';
import { ctaLink } from '../../constants/globalData';

const Hero = () => {

  // Auto-scrolling tech stack strip
  const stripRef = useRef<HTMLDivElement>(null);
  // Duplicate icons for seamless loop
  const iconList = [...techIcons, ...techIcons];

  const handleCTA = () => {
    const message = encodeCtaMessage();
    window.open(`${ctaLink}${message}`, '_blank');
  };

  return (
    <section className="relative h-auto md:h-screen flex flex-col justify-center bg-primary overflow-hidden">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-0 flex-grow h-full px-6 md:px-12">

        <div className="w-full mt-10 md:w-1/2 flex flex-col justify-center items-start h-full md:pr-8 z-10">
          <div className="flex flex-col justify-center h-full w-full">
            <span className="block text-3xl md:text-4xl font-bold text-white mb-2">
              {heroData.greeting}<span className="text-red-500 align-middle ml-1">.</span>
            </span>
            <div className="flex items-center mb-2">
              <span className="block w-12 h-1 bg-secondary mr-4 rounded-full" />
              <span className="text-2xl md:text-3xl text-white font-light">{heroData.contraction} {heroData.name}</span>
            </div>
            <span className="block text-5xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6">
              {heroData.title}<span className="text-orange-500"></span>
            </span>
            <div className="flex gap-4 mb-8">
              <div
                onClick={handleCTA}
                className="bg-secondary hover:cursor-pointer hover:bg-secondary/80 text-white px-7 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
              >
                {heroData.buttons.project}
              </div>
              <a
                href={heroData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-secondary text-white px-7 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition-all duration-300"
                download
              >
                {heroData.buttons.resume}
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center relative h-full min-h-[420px]">
          {/* Chevrons */}
          <FaLessThan size={100} className='text-secondary/70 absolute -left-5 top-[40%] -translate-y-1/2 z-0 hidden md:block' />
          <FaGreaterThan  size={100} className='text-secondary/70 absolute -right-5 top-[80%] -translate-y-1/2 z-0 hidden md:block' />

          {/* SVG Ring behind image, centered, with gradient stroke */}
          <svg
            className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            width="100%" height="100%" viewBox="0 0 420 420" fill="none"
            style={{ minWidth: 320, minHeight: 320, maxWidth: 500, maxHeight: 500 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ring-gradient" x1="210" y1="40" x2="210" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="1" />
                <stop offset="70%" stopColor="var(--color-secondary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle
              cx="210"
              cy="210"
              r="170"
              stroke="url(#ring-gradient)"
              strokeWidth="16"
              fill="none"
              opacity="0.95"
            />
          </svg>
          {/* Actual image, bottom-aligned and no circular boundary */}
          <div className="absolute bottom-0 left-[55%] -translate-x-1/2 w-full h-full flex items-end justify-center z-20">
            <img
              src={heroData.profileImage}
              alt={heroData.profileImageAlt}
              className="object-cover h-[85vh] w-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Tech Stack Strip */}
      <div className="w-screen  py-4 bg-background border-t border-b border-[#232946] overflow-hidden relative px-0">
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