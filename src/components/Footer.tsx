import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { footerText, userTitle, socialLinks } from "../constants/globalData";

function Footer() {
  return (
    <div className="bg-background text-white flex flex-col items-center justify-center py-5 mt-10 border-t border-[#232946] backdrop-blur-sm">
      <div className="text-2xl font-bold">{userTitle}</div>
      <div className="text-sm">{footerText}</div>
      <div className="flex flex-row items-center justify-center gap-4 mt-4">
        <div
          className="flex items-center justify-center bg-white rounded-full p-2"
          onClick={() => window.open(socialLinks.email)}
        >
          <MdEmail size={20} color="var(--color-background)" />
        </div>
        <div
          className="flex items-center justify-center rounded-full"
          onClick={() => window.open(socialLinks.github)}
        >
          <FaGithub size={38} color="white" />
        </div>
        <div
          className="flex items-center justify-center bg-white rounded-full p-2"
          onClick={() => window.open(socialLinks.linkedin)}
        >
          <FaLinkedinIn size={20} color="var(--color-background)" />
        </div>
        <div
          className="flex items-center justify-center bg-white rounded-full p-2"
          onClick={() => window.open(socialLinks.twitter)}
        >
          <FaXTwitter size={20} color="var(--color-background)" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
