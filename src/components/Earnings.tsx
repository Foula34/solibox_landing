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


  const pricingPlans = [
    {
      title: 'Location Simple',
      percentage: 60,
      amount: '120,000',
      description: 'Location mensuelle de la SoliBox avec maintenance incluse',
      color: 'from-orange-500 to-orange-600',
      features: [
        'Accès à la plateforme de suivi',
        'Maintenance incluse',
        'Support technique 24/7',
        'Garantie complète'
      ]
    },
    {
      title: 'Partage des Revenus',
      percentage: 70,
      amount: '30%',
      description: 'Partage des revenus sur la vente du surplus d\'énergie',
      color: 'from-orange-500 to-orange-600',
      features: [
        '30% des revenus de vente d\'énergie',
        'Paiements mensuels',
        'Tableau de bord en temps réel',
        'Rapports détaillés'
      ]
    },
    {
      title: 'Location-Partage',
      percentage: 80,
      amount: '90,000',
      description: 'Formule combinée avec loyer réduit et partage des revenus',
      color: 'from-orange-400 to-orange-600',
      features: [
        'Loyer mensuel réduit',
        '15% des revenus d\'énergie',
        'Maintenance incluse',
        'Support prioritaire'
      ]
    }
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
              Notre Modèle 
              <span className="text-gray-900 dark:text-white"> Économique</span>
              <br className="hidden sm:block" />Flexible et Rentable
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Choisissez la formule qui correspond à vos besoins et générez des revenus avec votre SoliBox
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
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Formules Adaptées à Tous</h3>
              
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 break-words">
                À partir de 
                <span className="text-orange-400"> 90,000 GNF</span>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-2">
                Choisissez entre <span className="font-semibold">location simple</span> ou <span className="font-semibold">partage des revenus</span>
              </p>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">0 GNF</div>
                  <div className="text-xs sm:text-sm text-gray-400">Frais d'installation</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Support technique</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
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
                Nos Formules Tarifaires
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Choisissez la formule qui correspond le mieux à vos besoins
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      {plan.title}
                    </h4>
                    <span className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300">
                      {plan.amount} {plan.title !== 'Partage des Revenus' ? 'GNF/mois' : 'des revenus'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {plan.description}
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${plan.color} rounded-full transition-all duration-1000 delay-${index * 200}`}
                      style={{ 
                        width: isVisible ? `${plan.percentage}%` : '0%',
                        transitionDelay: `${600 + index * 200}ms`
                      }}
                    ></div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {plan.percentage}% des utilisateurs choisissent cette option
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
