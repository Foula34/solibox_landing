import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { scrollToSection } from '../utils/scrollUtils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Solution', href: '#solution' },
    { label: 'Avantages', href: '#benefits' },
    { label: 'Revenus', href: '#earnings' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 overflow-hidden ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between h-14 sm:h-16 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-1 sm:space-x-2 group cursor-pointer flex-shrink-0 min-w-0 max-w-[140px] sm:max-w-none">
            <div className="relative flex-shrink-0">
             {/*<Zap className="h-8 w-8 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />*/} 
             <img 
                src="/assets/logo/soliboxlogo-removebg-preview.png" 
                alt="SoliBox Logo" 
                className="h-5 w-5 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-400 dark:bg-gray-600 rounded-full blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent whitespace-nowrap truncate">
              SoliBox
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Ouvrir le menu"
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex-shrink-0"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  scrollToSection(item.href);
                }}
                className="block px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};