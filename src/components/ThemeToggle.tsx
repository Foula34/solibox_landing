import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-paper transition-colors"
    >
      <span className="relative inline-block w-4 h-4">
        <Sun
          aria-hidden
          className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
          }`}
        />
        <Moon
          aria-hidden
          className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`}
        />
      </span>
      <span>{isDark ? 'Mode clair' : 'Mode sombre'}</span>
    </button>
  );
};
