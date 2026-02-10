import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { useCountUp } from '../hooks/useCountUp';

export const Hero: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    // Start counting after component mounts
    const timer = setTimeout(() => setStartCounting(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Animated counters
  const count1 = useCountUp({ end: 60, duration: 2000, start: startCounting ? 0 : 60 });
  const count2 = useCountUp({ end: 40, duration: 2000, start: startCounting ? 0 : 40 });
  const count3 = useCountUp({ end: 100, duration: 2000, start: startCounting ? 0 : 100 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-primary-950">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-50 dark:bg-accent-950/30 border border-accent-200 dark:border-accent-800 rounded-full mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-accent-700 dark:text-accent-300">
              Révolutionnez votre énergie solaire
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-900 dark:text-white leading-tight mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Transformez votre
            <br />
            <span className="text-gradient">surplus solaire</span>
            <br />
            en revenus
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 max-w-3xl leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Avec <span className="font-semibold text-accent-500">SoliBox</span>, l'électricité que vous n'utilisez pas alimente vos voisins et vous génère un revenu passif.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => scrollToSection('#solution')}
              className="group btn-primary flex items-center justify-center space-x-2 animate-glow"
            >
              <span>Découvrir SoliBox</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center justify-center"
            >
              Commencer maintenant
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-8 border-t border-primary-200 dark:border-primary-800 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center sm:text-left group">
              <div className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                {count1}%
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                Zones rurales sans électricité fiable
              </div>
            </div>
            <div className="text-center sm:text-left group">
              <div className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                {count2}%
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                Surplus solaire gaspillé
              </div>
            </div>
            <div className="text-center sm:text-left group">
              <div className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                {count3}+
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                Familles connectées
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 dark:border-primary-700 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-accent-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};