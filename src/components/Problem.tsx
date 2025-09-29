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
    <section id="problem" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Le défi énergétique en 
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"> Guinée</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Millions de personnes manquent d'accès fiable à l'électricité, tandis que l'énergie solaire excédentaire est gaspillée
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Access Problem */}
            <div className={`relative p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl border border-red-200 dark:border-red-800/30 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute top-6 right-6">
                <Home className="w-8 h-8 text-red-500 opacity-30" />
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Accès limité à l'électricité
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-red-600 dark:text-red-400">60% des zones rurales</span> en 
                  Afrique de l'Ouest n\'ont pas d'accès fiable à l\'électricité, limitant le développement économique et social.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Accès électrique rural</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-red-200 dark:bg-red-900/30 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full w-2/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Waste Problem */}
            <div className={`relative p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl border border-orange-200 dark:border-orange-800/30 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute top-6 right-6">
                <Zap className="w-8 h-8 text-orange-500 opacity-30" />
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Surplus solaire gaspillé
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <div className={`bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Situation actuelle vs Potentiel avec SoliBox
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
                  🔴 Sans partage d'énergie
                </h4>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Énergie produite</span>
                      <div className="w-32 bg-green-200 dark:bg-green-900/30 h-4 rounded-full">
                        <div className="bg-green-500 h-4 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Énergie utilisée</span>
                      <div className="w-32 bg-blue-200 dark:bg-blue-900/30 h-4 rounded-full">
                        <div className="bg-blue-500 h-4 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 dark:text-red-400 font-medium">Surplus gaspillé</span>
                      <div className="w-32 bg-red-200 dark:bg-red-900/30 h-4 rounded-full">
                        <div className="bg-red-500 h-4 rounded-full w-2/5 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
                  🟢 Avec SoliBox
                </h4>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Énergie produite</span>
                      <div className="w-32 bg-green-200 dark:bg-green-900/30 h-4 rounded-full">
                        <div className="bg-green-500 h-4 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Énergie utilisée (foyer)</span>
                      <div className="w-32 bg-blue-200 dark:bg-blue-900/30 h-4 rounded-full">
                        <div className="bg-blue-500 h-4 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-600 dark:text-orange-400 font-medium">Surplus partagé 💰</span>
                      <div className="w-32 bg-orange-200 dark:bg-orange-900/30 h-4 rounded-full">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-4 rounded-full w-2/5 animate-pulse"></div>
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