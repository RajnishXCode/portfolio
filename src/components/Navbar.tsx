import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navbarLinks, userTitle } from "../constants/globalData";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-primary text-white font-sans text-base py-6 relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full px-6 md:px-12">
        {/* Logo/Name */}
        <div 
          className="font-bold text-2xl tracking-wide cursor-pointer hover:text-orange-400 transition-colors duration-300" 
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
        >
          {userTitle}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navbarLinks.map((link) => (
            <li key={link.name} className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl transition-all duration-500 ease-in-out z-[100] ${
          isMenuOpen 
            ? 'transform translate-x-0' 
            : 'transform translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.95) 50%, rgba(0,0,0,0.9) 100%)'
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <div
            onClick={closeMenu}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <span className="block w-5 h-0.5 bg-white rotate-45 translate-y-0.5 rounded-full"></span>
            <span className="block w-5 h-0.5 bg-white -rotate-45 -translate-y-0.5 rounded-full"></span>
          </div>
        </div>

        {/* Menu Content */}
        <div className="px-6 pt-4">
          <div className="mb-8">
            <h3 className="text-orange-400 text-xl font-bold mb-2 tracking-wide">
              Menu
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>
          
          <ul className="space-y-3">
            {navbarLinks.map((link, index) => (
              <li 
                key={link.name} 
                className={`transform transition-all duration-600 ease-out ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-12 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms' }}
              >
                <div 
                  onClick={() => {
                    navigate(link.path);
                    closeMenu();
                  }}
                  className="group relative flex items-center px-5 py-4 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/10 hover:border-orange-400/50 backdrop-blur-sm"
                >
                  {/* Animated dot indicator */}
                  <div className="absolute left-2 w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-y-0 group-hover:scale-y-100"></div>
                  
                  {/* Icon placeholder */}
                  <div className="w-3 h-3 bg-orange-400/70 rounded-full mr-4 group-hover:bg-orange-400 transition-colors duration-300 group-hover:shadow-md group-hover:shadow-orange-400/50"></div>
                  
                  <span className="text-white text-lg font-medium group-hover:text-orange-400 transition-all duration-300 tracking-wide">
                    {link.name}
                  </span>
                  
                  {/* Arrow indicator */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-2 h-2 border-r-2 border-b-2 border-orange-400 rotate-[-45deg]"></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-8 left-6 right-6">
          {/* Glowing line */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50 mb-6">
            <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-sm"></div>
          </div>
          
          {/* User signature */}
          <div className="text-center">
            <p className="text-white/80 text-sm font-medium tracking-wider mb-1">
              {userTitle}
            </p>
            <p className="text-orange-400/60 text-xs uppercase tracking-widest font-light">
              Portfolio
            </p>
          </div>
        </div>

        {/* Ambient glow effect */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-400/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-400/5 to-transparent pointer-events-none"></div>
      </div>

      {/* Transparent Overlay - No longer blocks main content */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[90]"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
