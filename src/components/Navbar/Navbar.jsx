// Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '#hero', hasDropdown: false },
    { 
      name: 'Services', 
      path: '#services', 
      hasDropdown: false,
      
    },
    { name: 'Our Work', path: '#work', hasDropdown: false },
    { name: 'About', path: '#about', hasDropdown: false },
    { name: 'Contact', path: '#contact', hasDropdown: false },
  ];

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <motion.div 
          className="navbar__logo"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a href="/" className="logo">
            <span className="logo__main">D-SIGN DESIGNERS</span>
            
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="navbar__nav">
          <ul className="nav__list">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="nav__item"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a 
                  href={item.path} 
                  className="nav__link"
                  onClick={() => item.hasDropdown && handleDropdown(index)}
                >
                  <span className="nav__text">{item.name}</span>
                  {item.hasDropdown && (
                    <FiChevronDown 
                      className={`nav__icon ${activeDropdown === index ? 'nav__icon--active' : ''}`} 
                    />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="dropdown"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <ul className="dropdown__list">
                          {item.dropdownItems.map((dropItem, dropIndex) => (
                            <li key={dropIndex} className="dropdown__item">
                              <a href={dropItem.path} className="dropdown__link">
                                {dropItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="navbar__cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact" className="cta__button">
            Get Quote
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <span className="toggle__icon">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-menu__content">
              <ul className="mobile-nav__list">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="mobile-nav__item"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a 
                      href={item.path} 
                      className="mobile-nav__link"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <div className="mobile-dropdown">
                        {item.dropdownItems.map((dropItem, dropIndex) => (
                          <a 
                            key={dropIndex}
                            href={dropItem.path} 
                            className="mobile-dropdown__link"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="mobile-menu__cta">
                <a 
                  href="#contact" 
                  className="mobile-cta__button"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
