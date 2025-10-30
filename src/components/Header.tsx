import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-orange-200/20 dark:border-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between h-14 sm:h-16 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-1 sm:space-x-2 group cursor-pointer flex-shrink-0 min-w-0">
            <div className="relative flex-shrink-0">
             {/*<Zap className="h-8 w-8 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />*/} 
             <img 
                src="/assets/logo/soliboxlogo-removebg-preview.png" 
                alt="SoliBox Logo" 
                className="h-6 w-6 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent whitespace-nowrap">
              SoliBox
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-1 sm:space-x-4 flex-shrink-0">
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Ouvrir le menu"
              className="md:hidden p-1 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex-shrink-0"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors duration-300"
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