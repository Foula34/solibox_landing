import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

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
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30 animate-bounce blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-300 to-blue-400 rounded-full opacity-15 animate-pulse blur-2xl"></div>
        
        {/* Solar panel animation */}
        <div ref={heroRef} className="absolute top-1/2 right-10 transform -translate-y-1/2 transition-transform duration-300 ease-out">
          <div className="relative">
            {/* Solar panels */}
            <div className="grid grid-cols-2 gap-1 p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
            
            {/* Energy flow animation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-8 bg-gradient-to-t from-orange-400 to-transparent rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 300}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 backdrop-blur-sm">
                  
                  Révolutionnez votre énergie solaire
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    Transformez votre surplus solaire
                  </span>
                  <br />
                  <span className="text-gray-800 dark:text-gray-200">
                    en énergie partagée et en revenus
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                  Avec <span className="font-semibold text-orange-600 dark:text-orange-400">SoliBox</span>, 
                  l'électricité que vous n\'utilisez pas alimente vos voisins, 
                  renforce votre communauté et vous génère un revenu.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>Découvrir SoliBox</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                
                <button className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Commencer maintenant</span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
                {[
                  { value: '60%', label: 'Zones rurales sans électricité fiable' },
                  { value: '40%', label: 'Surplus solaire gaspillé' },
                  { value: '100+', label: 'Familles connectées' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
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