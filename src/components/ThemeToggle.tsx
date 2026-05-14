import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

type Props = {
  /** Compact = icon only, no text label. Used in the mobile header. */
  compact?: boolean;
};

export const ThemeToggle: React.FC<Props> = ({ compact = false }) => {
  const { isDark, toggleTheme } = useTheme();
  const ariaLabel = isDark ? 'Activer le mode clair' : 'Activer le mode sombre';

  if (compact) {
    return (
      <button
        onClick={toggleTheme}
        aria-label={ariaLabel}
        title={ariaLabel}
        className="inline-flex items-center justify-center w-9 h-9 -mr-1 text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-paper transition-colors"
      >
        <span className="relative inline-block w-5 h-5">
          <Sun
            aria-hidden
            className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
              isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            }`}
          />
          <Moon
            aria-hidden
            className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
              isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            }`}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={ariaLabel}
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
