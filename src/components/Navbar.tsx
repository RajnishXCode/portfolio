import { useNavigate } from "react-router-dom";
import { navbarLinks, userTitle } from "../constants/globalData";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-primary text-white font-sans text-base py-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full px-6 md:px-12">
        {/* Logo/Name */}
        <div className="font-bold text-2xl tracking-wide" onClick={() => navigate("/")}>{userTitle}</div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {navbarLinks.map((link) => (
            <li key={link.name} className="hover:text-orange-400 cursor-pointer transition">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
