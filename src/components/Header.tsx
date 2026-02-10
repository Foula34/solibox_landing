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
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass shadow-soft' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <img 
                src="/assets/logo/soliboxlogo-removebg-preview.png" 
                alt="SoliBox" 
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-bold text-primary-900 dark:text-white">
              SoliBox
              <span className="text-accent-500">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-300 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:block btn-primary text-sm px-6 py-3"
            >
              Commencer
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
              className="lg:hidden p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary-900 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-primary-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  scrollToSection(item.href);
                }}
                className="block px-4 py-3 text-base font-medium text-primary-700 dark:text-primary-300 hover:text-accent-500 hover:bg-primary-50 dark:hover:bg-primary-800 rounded-xl transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection('#contact');
              }}
              className="w-full btn-primary text-base mt-4"
            >
              Commencer
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};