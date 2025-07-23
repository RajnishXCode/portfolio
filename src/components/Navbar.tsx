import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#181c2a] text-white font-sans text-base py-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full px-6 md:px-12">
        {/* Logo/Name */}
        <div className="font-bold text-2xl tracking-wide">Rajnish Tripathi</div>
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li className="hover:text-orange-400 cursor-pointer transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-orange-400 cursor-pointer transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-orange-400 cursor-pointer transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-orange-400 cursor-pointer transition">Contacts</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
