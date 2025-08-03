import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeType } from '../types';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themes = [
    { value: 'theme1' as ThemeType, label: 'Minimalist', icon: '◯' },
    { value: 'theme2' as ThemeType, label: 'Professional', icon: '◼' },
    { value: 'theme3' as ThemeType, label: 'Playful', icon: '◈' },
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const getHeaderStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white/95 backdrop-blur-sm border-b border-gray-200 text-gray-800';
      case 'theme2':
        return 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 text-white';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-500/95 to-pink-500/95 backdrop-blur-sm border-b border-white/20 text-white';
      default:
        return 'bg-white/95 backdrop-blur-sm border-b border-gray-200 text-gray-800';
    }
  };

  const getLinkStyles = (isActive: boolean) => {
    const baseStyles = 'px-4 py-2 rounded-lg transition-all duration-300 font-medium';
    switch (currentTheme) {
      case 'theme1':
        return `${baseStyles} ${isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`;
      case 'theme2':
        return `${baseStyles} ${isActive ? 'bg-amber-900/30 text-amber-400' : 'hover:bg-gray-800'}`;
      case 'theme3':
        return `${baseStyles} ${isActive ? 'bg-white/20 text-white' : 'hover:bg-white/10'}`;
      default:
        return `${baseStyles} ${isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`;
    }
  };

  const getDropdownStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white border border-gray-200 shadow-lg';
      case 'theme2':
        return 'bg-gray-800 border border-gray-600 shadow-xl';
      case 'theme3':
        return 'bg-white/95 backdrop-blur-sm border border-purple-200 shadow-xl';
      default:
        return 'bg-white border border-gray-200 shadow-lg';
    }
  };

  const getLogoFont = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'font-sans';
      case 'theme2':
        return 'font-serif';
      case 'theme3':
        return 'font-bold';
      default:
        return 'font-sans';
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${getHeaderStyles()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Palette className="w-8 h-8" />
            <span className={`text-xl font-bold ${getLogoFont()}`}>
              ThemeApp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getLinkStyles(location.pathname === link.path)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentTheme === 'theme1'
                  ? 'hover:bg-gray-100'
                  : currentTheme === 'theme2'
                  ? 'hover:bg-gray-800'
                  : 'hover:bg-white/10'
              }`}
            >
              <span className="hidden sm:inline">
                {themes.find(t => t.value === currentTheme)?.label}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute right-0 mt-2 w-48 rounded-lg ${getDropdownStyles()} overflow-hidden`}
                >
                  {themes.map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() => {
                        setTheme(theme.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200 ${
                        currentTheme === theme.value
                          ? currentTheme === 'theme1'
                            ? 'bg-blue-50 text-blue-700'
                            : currentTheme === 'theme2'
                            ? 'bg-amber-900/30 text-amber-400'
                            : 'bg-purple-100 text-purple-700'
                          : currentTheme === 'theme1'
                          ? 'hover:bg-gray-50 text-gray-700'
                          : currentTheme === 'theme2'
                          ? 'hover:bg-gray-700 text-gray-300'
                          : 'hover:bg-purple-50 text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{theme.icon}</span>
                      <span className="font-medium">{theme.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              currentTheme === 'theme1'
                ? 'border-gray-200 bg-white'
                : currentTheme === 'theme2'
                ? 'border-gray-700 bg-gray-900'
                : 'border-white/20 bg-gradient-to-r from-purple-500 to-pink-500'
            }`}
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block ${getLinkStyles(location.pathname === link.path)}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;