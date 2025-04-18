/* eslint-disable react/prop-types */

export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  isDarkMode,
  toggleTheme,
  isNotificationsOpen,
  setIsNotificationsOpen,
  isProfileOpen,
  setIsProfileOpen,
  isLangOpen,
  setIsLangOpen,
  handleLanguageChange,
  language,
  motion,
  Sun,
  Moon,
  Bell,
  HeaderLinks,
  Search,
  flags,
  notificationsDropdownRef,
  langDropdownRef,
  profileDropdownRef,
  isSearchModalOpen,
  setIsSearchModalOpen,
  PanelLeftOpen,
  translator,
  Link,
  SearchModal,
  X,
  React,
  menuItems,
  ShoppingBasket,
  SignInButton,
  UserButton,
  ClerkLoaded,
  user,
}) {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-[#1F1F23] bg-white dark:bg-[#111827] relative">
      {/* Sidebar Toggle Button */}
      <button
        id="sidebar-toggle"
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
        className={`lg:hidden fixed top-3 transition-all ease-in-out duration-300 z-[500] p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] border ${
          isSidebarOpen ? "left-[230px]" : "left-4"
        }`}
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <PanelLeftOpen className="h-6 w-6" />
        )}
      </button>

      {/* Right-side Icons */}
      <div className="flex gap-4 items-center absolute z-[450] right-5">
        {/* Search Bar */}
        <div className="relative z-[450]" ref={notificationsDropdownRef}>
          <button
            onClick={() => setIsSearchModalOpen(true)}
            className=" rounded-full p-[10px] hover:bg-gray-100 dark:hover:bg-[#1F1F23] transition-colors duration-200 border"
          >
            <Search className=" h-4 w-4 text-gray-600 dark:text-gray-500" />
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className=" rounded-full p-[10px] hover:bg-gray-100 dark:hover:bg-[#1F1F23] transition-colors duration-200 border"
        >
          {isDarkMode ? (
            <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun className="h-4 w-4 text-gray-600" />
          )}
        </button>

        {/* Lang Dropdown */}
        <div className="relative z-[500]" ref={langDropdownRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="h-[30px] w-[40px] rounded-md border dark:bg-gray-700 flex items-center justify-center transition-colors duration-200"
          >
            <img
              src={flags[language]?.src || flags.en.src}
              className="w-10"
              alt="language"
            />
          </button>
          {isLangOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-[500] border right-0 mt-2 w-48 bg-white dark:bg-[#1F1F23] shadow-md rounded-lg p-2"
            >
              {Object.entries(flags).map(([key, { src, label }]) => (
                <button
                  key={key}
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] w-full text-left transition-colors duration-200"
                  onClick={() => handleLanguageChange(key)}
                >
                  <img src={src} className="w-6" alt={label} /> {label}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Cart */}
        <div className="relative z-[500]" ref={notificationsDropdownRef}>
          <Link to={"/cart-page"}>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23] relative transition-colors duration-200 border">
              <ShoppingBasket className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </Link>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative z-[500]" ref={notificationsDropdownRef}>
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23] relative transition-colors duration-200 border"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            {/* Replace static number with animated heartbeat dot */}
            <span className="absolute -top-1 -right-1 flex items-center justify-center">
              <span className="relative">
                {/* Green dot as the "heart" */}
                <span className="block h-4 w-4 bg-green-500 rounded-full animate-pulse"></span>
                {/* Fading waves effect */}
                <span className="absolute inset-0 h-4 w-4 bg-green-500 rounded-full opacity-75 animate-ping"></span>
                <span className="absolute inset-0 h-4 w-4 bg-green-500 rounded-full opacity-50 animate-ping delay-200"></span>
              </span>
            </span>
          </button>
          {isNotificationsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-[5000] right-0 border mt-2 w-64 bg-white dark:bg-[#1F1F23] shadow-md rounded-lg p-2"
            >
              <div className="text-sm text-gray-700 dark:text-gray-300 p-2">
                New comment on your post
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 p-2">
                Server maintenance at 2 AM
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 p-2">
                Your password was changed
              </div>
              <button
                onClick={() => setIsNotificationsOpen(false)}
                className="w-full text-center py-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View all
              </button>
            </motion.div>
          )}
        </div>
        {/* Profile Dropdown */}
        <div className="relative" ref={profileDropdownRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="h-9 w-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-200"
          >
            <img
              src="https://i.pravatar.cc/300"
              className="rounded-full border"
            />
            {/*
 <img
              src=`https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/${random(0,99)}.jpg`
              className="rounded-full border"
            />
  */}

            {/*
 https://www.dicebear.com/styles/notionists-neutral/
 <img
              src=`https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Felix`
              className="rounded-full border"
            />
  */}
          </button>
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute z-[100] border right-0 mt-2 w-48 bg-white dark:bg-[#1F1F23] shadow-md rounded-lg p-2"
            >
              {HeaderLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className={`flex items-center gap-2 px-3 py-2 ${item.className}`}
                >
                  {item.icon}
                  <span className={item.colorClass}>{item.name}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        <ClerkLoaded>
          {user ? (
            <div className="border rounded-full px-[2px] py-[2px] flex">
              <UserButton className="" />
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition">
                Login
              </button>
            </SignInButton>
          )}
        </ClerkLoaded>
      </div>

      <SearchModal
        setIsSearchModalOpen={setIsSearchModalOpen}
        isOpen={isSearchModalOpen}
        translator={translator}
        Search={Search}
        X={X}
        Link={Link}
        menuItems={menuItems}
        motion={motion}
        React={React}
      />
    </header>
  );
}
