import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => scrollToSection('#contact')}
      className="fixed bottom-8 right-8 z-50 group btn-primary shadow-2xl animate-glow"
      aria-label="Commencer maintenant"
    >
      <span className="hidden sm:inline">Commencer</span>
      <ArrowRight className="w-5 h-5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
};
