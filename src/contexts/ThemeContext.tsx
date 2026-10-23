import React, { useState, useEffect } from 'react';
import { ThemeContext } from './theme';

// localStorage peut être indisponible (navigation privée, stockage bloqué) : on ne plante pas.
function readSavedTheme(): string | null {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = readSavedTheme();
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Sinon, utiliser la préférence système
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Appliquer la classe dark sur l'élément HTML
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Pas de stockage disponible : le thème reste valable pour la visite en cours.
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
