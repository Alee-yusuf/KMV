import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import logoWhite from '../assets/images/logo-white.png';
import logoDark from '../assets/images/logo-dark.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Default light mode
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about-us' },
    { name: 'Team', section: 'our-team' },
    { name: 'Solutions', section: 'solutions' },
    { name: 'Jobs', section: 'career' },
    { name: 'Contact us', section: 'apply-now' },
  ];

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? 'py-2 bg-background-light/90 dark:bg-primary/90 shadow-lg'
          : 'py-3 bg-background-light/80 dark:bg-primary/80'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img
                src={isDarkMode ? logoWhite : logoDark}
                alt="KMV Enterprises"
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.section}
                to={item.section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveSection(item.section)}
                className="relative px-4 py-2 group cursor-pointer"
              >
                <motion.span
                  className={`text-sm font-medium relative z-10 ${
                    activeSection === item.section 
                      ? 'text-accent' 
                      : 'text-text-light dark:text-text-dark hover:text-accent dark:hover:text-accent'
                  } transition-colors duration-200`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  />
                </motion.span>
                {activeSection === item.section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-accent/10 dark:bg-accent/20 rounded-lg"
                  />
                )}
              </Link>
            ))}

            <motion.button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: isDarkMode ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
