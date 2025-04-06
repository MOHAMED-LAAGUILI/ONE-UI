/* eslint-disable react/prop-types */

export default function Header({
  motion,
  t,
  isMenuOpen,
  X,
  Menu,
  setIsMenuOpen,
}) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              One UI
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {t("Features")}
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {t("About")}
            </a>
            <a
              href="#installation"
              className="text-gray-600 dark:text-gray-300 text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {t("Installation")}
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              {t("Contact Us")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-800/50"
        >
          <div className="text-center justify-center mx-32 py-2 space-y-1 ">
            <motion.a
              href="#features"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Features")}
            </motion.a>
            <motion.a
              href="#about"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("About")}
            </motion.a>
            <motion.a
              href="#installation"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Installation")}
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="block px-4 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Contact Us")}
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}