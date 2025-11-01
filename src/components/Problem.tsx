import React, { useEffect, useRef, useState } from 'react';
import { Zap, Home, Users } from 'lucide-react';

export const Problem: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Le défi énergétique en 
              <span className="text-gray-900 dark:text-white"> Guinée</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Millions de personnes manquent d'accès fiable à l'électricité, tandis que l'énergie solaire excédentaire est gaspillée
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Access Problem */}
            <div className={`relative p-6 sm:p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl sm:rounded-2xl border border-red-200 dark:border-red-800/30 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <Home className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 opacity-30" />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Accès limité à l'électricité
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-orange-600 dark:text-red-400">60% des zones rurales</span> en 
                  Afrique de l'Ouest n'ont pas d'accès fiable à l'électricité, limitant le développement économique et social.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Accès électrique rural</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-red-200 dark:bg-red-900/30 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full w-2/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Waste Problem */}
            <div className={`relative p-6 sm:p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl sm:rounded-2xl border border-orange-200 dark:border-orange-800/30 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 opacity-30" />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Surplus solaire gaspillé
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Les foyers équipés de panneaux solaires produisent souvent <span className="font-semibold text-orange-600 dark:text-orange-400">40% d'énergie excédentaire</span> qui 
                  n'est pas utilisée ni valorisée.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Énergie solaire gaspillée</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-orange-200 dark:bg-orange-900/30 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full w-2/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Situation actuelle vs Potentiel avec SoliBox
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Before */}
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
                  Sans partage d'énergie
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Énergie produite</span>
                      <div className="w-full sm:w-32 bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full">
                        <div className="bg-gray-600 dark:bg-gray-500 h-3 sm:h-4 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Énergie utilisée</span>
                      <div className="w-full sm:w-32 bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full">
                        <div className="bg-gray-600 dark:bg-gray-500 h-3 sm:h-4 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Surplus gaspillé</span>
                      <div className="w-full sm:w-32 bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full">
                        <div className="bg-gray-400 dark:bg-gray-600 h-3 sm:h-4 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
                  Avec SoliBox
                </h4>
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Énergie produite</span>
                      <div className="w-full sm:w-32 bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full">
                        <div className="bg-gray-600 dark:bg-gray-500 h-3 sm:h-4 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Énergie utilisée (foyer)</span>
                      <div className="w-full sm:w-32 bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full">
                        <div className="bg-gray-600 dark:bg-gray-500 h-3 sm:h-4 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Surplus partagé</span>
                      <div className="w-full sm:w-32 bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full">
                        <div className="bg-gray-800 dark:bg-gray-400 h-3 sm:h-4 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};