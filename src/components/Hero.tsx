import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs - subtle gray */}
        <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gray-200 dark:bg-gray-800 rounded-full opacity-10 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 dark:bg-gray-700 rounded-full opacity-10 animate-bounce blur-lg"></div>
        <div className="absolute bottom-20 left-4 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 bg-gray-200 dark:bg-gray-800 rounded-full opacity-10 animate-pulse blur-2xl"></div>
        
        {/* Solar panel animation - hidden on mobile */}
        <div ref={heroRef} className="hidden md:block absolute top-1/2 right-4 lg:right-10 transform -translate-y-1/2 transition-transform duration-300 ease-out">
          <div className="relative">
            {/* Solar panels - gray instead of blue */}
            <div className="grid grid-cols-2 gap-1 p-3 lg:p-4 bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-600 dark:bg-gray-700 rounded-sm animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
            
            {/* Energy flow animation - minimal */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-6 lg:h-8 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse opacity-50"
                    style={{ animationDelay: `${i * 300}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        <div className="min-h-screen flex items-center py-12 sm:py-0">
          <div className="max-w-4xl w-full">
            {/* Main Headline */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Révolutionnez votre énergie solaire
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-gray-900 dark:text-white">
                    Transformez votre surplus solaire
                  </span>
                  <br />
                  <span className="text-gray-800 dark:text-gray-200">
                    en énergie partagée et en revenus
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                  Avec <span className="font-semibold text-orange-600 dark:text-orange-400">SoliBox</span>, 
                  l'électricité que vous n'utilisez pas alimente vos voisins, 
                  renforce votre communauté et vous génère un revenu.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={() => scrollToSection('#solution')}
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>Découvrir SoliBox</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm sm:text-base font-semibold rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                    <span>Commencer maintenant</span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                {[
                  { value: '60%', label: 'Zones rurales sans électricité fiable' },
                  { value: '40%', label: 'Surplus solaire gaspillé' },
                  { value: '100+', label: 'Familles connectées' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 px-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};