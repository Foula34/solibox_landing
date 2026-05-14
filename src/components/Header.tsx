import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { scrollToSection } from '../utils/scrollUtils';

const navItems = [
  { label: 'Solution', href: '#solution' },
  { label: 'Produit', href: '#product' },
  { label: 'Modèle', href: '#earnings' },
  { label: 'Impact', href: '#impact' },
  { label: 'Équipe', href: '#team' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 dark:bg-ink-950/95 backdrop-blur-sm transition-[border-color] duration-300 ${
        isScrolled
          ? 'border-b border-mist dark:border-ink-800'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-custom px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-3 group"
            aria-label="Accueil SoliBox"
          >
            <img
              src="/assets/logo/soliboxlogo-removebg-preview.png"
              alt=""
              className="h-8 w-8 object-contain"
            />
            <span className="font-display font-semibold text-xl tracking-[-0.01em] text-ink-900 dark:text-paper">
              SoliBox
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-paper transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile actions */}
          <div className="flex items-center gap-1 lg:gap-3">
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Nous contacter
            </button>

            {/* Mobile-only theme toggle, sits next to the burger */}
            <span className="lg:hidden">
              <ThemeToggle compact />
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
              className="lg:hidden p-2 -mr-2 text-ink-900 dark:text-paper"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="border-t border-mist dark:border-ink-800 pt-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      scrollToSection(item.href);
                    }}
                    className="block py-3 text-base text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-paper transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToSection('#contact');
              }}
              className="btn-primary w-full mt-4"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
