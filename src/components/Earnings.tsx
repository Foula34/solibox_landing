import React, { useEffect, useRef, useState } from 'react';
import { DollarSign, Calculator } from 'lucide-react';
import { Modal } from './Modal';
import { RevenueCalculator } from './RevenueCalculator';
import { scrollToSection } from '../utils/scrollUtils';

export const Earnings: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Commencer avec true pour garantir l'affichage
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Forcer l'affichage après un court délai pour garantir la visibilité
    const forceVisibleTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01, rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback : si la section est déjà visible au chargement, l'afficher immédiatement
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight + 500 && rect.bottom > -500;
        if (isInViewport) {
          setIsVisible(true);
        }
      }
    };

    checkVisibility();
    const timeoutId = setTimeout(checkVisibility, 300);

    return () => {
      clearTimeout(forceVisibleTimeout);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const target = 15000;
      const duration = 2000;
      const increment = target / (duration / 50);
      
      const timer = setInterval(() => {
        setAnimatedValue(prev => {
          const next = prev + increment;
          return next >= target ? target : next;
        });
      }, 50);

      setTimeout(() => clearInterval(timer), duration);
    }
  }, [isVisible]);


  const revenueStreams = [
    {
      title: 'Vente directe d\'énergie',
      percentage: 70,
      amount: '1,680',
      description: 'Revenus directs de la vente de surplus aux voisins',
      color: 'from-gray-600 to-gray-700'
    },
    {
      title: 'Prime de stabilité réseau',
      percentage: 20,
      amount: '480',
      description: 'Bonus pour contribution à la stabilité du micro-réseau',
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: 'Récompenses de partage',
      percentage: 10,
      amount: '240',
      description: 'Incentives pour participation active au réseau communautaire',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const monthlyBreakdown = [
    { month: 'Jan', revenue: 2400, surplus: 8.2 },
    { month: 'Fév', revenue: 2650, surplus: 8.8 },
    { month: 'Mar', revenue: 2800, surplus: 9.1 },
    { month: 'Avr', revenue: 2950, surplus: 9.5 },
    { month: 'Mai', revenue: 3200, surplus: 10.2 },
    { month: 'Jun', revenue: 3400, surplus: 10.8 }
  ];

  return (
    <section id="earnings" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Générez des 
              <span className="text-gray-900 dark:text-white"> Revenus</span>
              <br className="hidden sm:block" />avec SoliBox
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Découvrez comment votre surplus solaire peut devenir une source de revenus stable et prévisible
            </p>
          </div>

          {/* Main Revenue Display */}
          <div className={`relative bg-gray-900 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 opacity-10">
              <DollarSign className="w-full h-full transform rotate-12" />
            </div>
            
            <div className="relative z-10 text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Revenus moyens mensuels</h3>
              
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 break-words">
                {Math.round(animatedValue).toLocaleString()} 
                <span className="text-lg sm:text-xl lg:text-2xl font-normal ml-1 sm:ml-2">GNF</span>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-2">
                Soit environ <span className="font-semibold">+40% de revenus supplémentaires</span> pour un foyer moyen
              </p>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">8 kWh</div>
                  <div className="text-xs sm:text-sm text-gray-400">Surplus quotidien moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">200 GNF</div>
                  <div className="text-xs sm:text-sm text-gray-400">Prix par kWh</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">30 jours</div>
                  <div className="text-xs sm:text-sm text-gray-400">Génération continue</div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Sources de revenus détaillées
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Diversifiez vos revenus avec plusieurs flux de rémunération
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {revenueStreams.map((stream, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      {stream.title}
                    </h4>
                    <span className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300">
                      {stream.amount} GNF
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {stream.description}
                  </p>
                  
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stream.color} rounded-full transition-all duration-1000 delay-${index * 200}`}
                      style={{ 
                        width: isVisible ? `${stream.percentage}%` : '0%',
                        transitionDelay: `${600 + index * 200}ms`
                      }}
                    ></div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stream.percentage}% du revenu total
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Projection */}
          <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Évolution des revenus sur 6 mois
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 px-4">
                Vos revenus augmentent avec l'optimisation du réseau et la croissance de la communauté
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {monthlyBreakdown.map((data, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl text-center shadow-lg hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {data.month}
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {data.revenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {data.surplus} kWh/j
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-600 dark:bg-gray-500 rounded-full transition-all duration-1000"
                      style={{ 
                        width: isVisible ? `${(data.revenue / 3400) * 100}%` : '0%',
                        transitionDelay: `${1000 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator CTA */}
          <div className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 dark:bg-gray-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
                Calculez vos revenus personnalisés
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto px-4">
                Chaque installation est unique. Utilisez notre calculateur pour estimer précisément vos revenus potentiels selon votre configuration solaire.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <button 
                  onClick={() => setIsCalculatorOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Calculer mes revenus
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full sm:w-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  Planifier une consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Modal */}
      <Modal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        title="Calculateur de revenus"
        size="md"
      >
        <RevenueCalculator onClose={() => setIsCalculatorOpen(false)} />
      </Modal>
    </section>
  );
};
