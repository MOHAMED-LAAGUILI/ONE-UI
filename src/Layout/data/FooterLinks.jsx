import { seoData } from "./SeoData";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export   const socialLinks = [
    {
      href: seoData.socialLinks.linkedin,
      label: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      hoverClass: "hover:text-blue-500",
    },
    {
      href: seoData.socialLinks.github,
      label: "GitHub",
      icon: <FaGithub size={20} />,
      hoverClass: "hover:text-gray-300",
    },
    {
      href: seoData.socialLinks.discord,
      label: "Discord",
      icon: <FaDiscord size={20} />,
      hoverClass: "hover:text-blue-400",
    },

  ];