/* eslint-disable react/prop-types */

export default function PinnedIcons({
  phoneNumber,
  whatsappMessage,
  phoneMessage,
  supportUrl,
  supportMessage,
  coffeeLogo,
  showSupport = true,
  showWhatsApp = true,
  showPhone = true,
  showLinkedIn = true,
  showGitHub = true,
  showDiscord = true,
  PhoneCall,
  MessageCircle,
  Linkedin,
  Github,
  Discord,
  Plus,
  socialLinks,
  isDarkMode
}) {


  const icons = [
    {
      show: showWhatsApp,
      href: `https://wa.me/${phoneNumber}`,
      label: "Chat with us on WhatsApp",
      bgClass: "bg-gradient-to-r from-green-500 to-green-700",
      icon: <MessageCircle size={25} color="white" />,
      hoverKey: "whatsapp",
      message: whatsappMessage,
      tooltipOffset: "-left-[85px]",
    },
    {
      show: showPhone,
      href: `tel:${phoneNumber}`,
      label: "Call us",
      bgClass: "bg-gradient-to-r from-blue-500 to-blue-600",
      icon: <PhoneCall size={25} color="white" />,
      hoverKey: "phone",
      message: phoneMessage,
      tooltipOffset: "-left-[50px]",
    },
    {
      show: showSupport,
      href: supportUrl,
      label: "Support us",
      bgClass: "bg-gradient-to-r from-yellow-200 to-yellow-400",
      icon: (
        <img
          src={coffeeLogo || "/placeholder.svg"}
          alt="Buy Me A Coffee"
          className="w-8 h-8 object-contain"
        />
      ),
      hoverKey: "support",
      message: supportMessage,
      tooltipOffset: "-left-[60px]",
    },
    {
      show: showLinkedIn,
      href: socialLinks.linkedin,
      label: "Connect on LinkedIn",
      bgClass: "bg-gradient-to-r from-blue-700 to-blue-900",
      icon: <Linkedin size={25} color="white" />,
      hoverKey: "linkedin",
      message: "LinkedIn Profile",
      tooltipOffset: "-left-[70px]",
    },
    {
      show: showGitHub,
      href: socialLinks.github,
      label: "View GitHub",
      bgClass: "bg-gray-800",
      icon: <Github size={25} color="white" />,
      hoverKey: "github",
      message: "GitHub Profile",
      tooltipOffset: "-left-[60px]",
    },
    {
      show: showDiscord,
      href: socialLinks.discord,
      label: "Join Discord",
      bgClass: "bg-gradient-to-r from-purple-500 to-purple-700",
      icon: <Discord size={25} color="white" />,
      hoverKey: "discord",
      message: "Discord Server",
      tooltipOffset: "-left-[70px]",
    },
  ];

  return (
    <div data-dial-init className="fixed end-5 bottom-16 group z-[400]">
      <div
        id="speed-dial-menu-default"
        className="flex-col items-center hidden mb-4 space-y-2 transition-transform duration-500 ease-in-out"
      >
        {icons.map((icon, index) =>
          icon.show ? (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-target={`tooltip-${icon.hoverKey}`}
              data-tooltip-placement="left"
              className={`${icon.bgClass} flex justify-center items-center w-[52px] h-[52px] text-white rounded-full shadow-xs focus:ring-4 focus:ring-gray-300 transition-transform duration-200 ease-in-out hover:scale-110`}
            >
              {icon.icon}
              <span className="sr-only">{icon.label}</span>
            </a>
          ) : null
        )}
      </div>

      {/* Speed Dial Toggle Button */}
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        aria-controls="speed-dial-menu-default"
        aria-expanded="false"
        className="flex items-center justify-center text-white dark:text-black bg-gray-900 rounded-full w-14 h-14 hover:bg-gray-800 hover:rotate-45 dark:bg-gray-100 dark:hover:bg-gray-200  focus:outline-none dark transition-transform duration-300 ease-in-out"
      >
        <Plus size={25} color={`${!isDarkMode ? "white" : "black"}`} className="text-white dark:text-black transition-transform duration-300 ease-in-out" />
      </button>
    </div>
  );
}
