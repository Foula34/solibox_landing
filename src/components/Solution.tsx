import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Smartphone, Zap, Users, TrendingUp } from 'lucide-react';

export const Solution: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 3);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const solutions = [
    {
      icon: Cpu,
      title: 'Dispositif IoT Intelligent',
      description: 'Détecte automatiquement votre surplus d\'énergie solaire et optimise la distribution en temps réel.',
      features: ['Détection automatique', 'Mesure précise', 'Installation simple'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30'
    },
    {
      icon: Smartphone,
      title: 'Application Mobile/Web',
      description: 'Gérez facilement le partage d\'énergie, suivez vos revenus et contrôlez votre réseau communautaire.',
      features: ['Interface intuitive', 'Suivi en temps réel', 'Gestion des revenus'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30'
    },
    {
      icon: TrendingUp,
      title: 'Intelligence Artificielle',
      description: 'Algorithmes avancés pour optimiser la distribution d\'énergie et maximiser vos revenus.',
      features: ['Prédiction de consommation', 'Optimisation automatique', 'Apprentissage continu'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Surplus détecté',
      description: 'SoliBox détecte automatiquement votre surplus d\'énergie',
      icon: Zap,
      color: 'text-orange-500'
    },
    {
      step: 2,
      title: 'Énergie partagée',
      description: 'L\'énergie est distribuée intelligemment aux voisins',
      icon: Users,
      color: 'text-orange-500'
    },
    {
      step: 3,
      title: 'Revenus générés',
      description: 'Vous gagnez de l\'argent pour chaque kWh partagé',
      icon: TrendingUp,
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="solution" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Notre 
              <span className="text-gray-900 dark:text-white"> Solution</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Une solution complète et intelligente pour transformer votre surplus solaire en revenus
            </p>
          </div>

          {/* Solution Components */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className={`relative p-6 sm:p-8 bg-gradient-to-br ${solution.bgGradient} rounded-xl sm:rounded-2xl border border-white/20 dark:border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600" />
                  </div>

                  <div className="relative z-10 space-y-3 sm:space-y-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${solution.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                      {solution.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full`}></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Flow */}
          <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/30 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Comment ça fonctionne
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Un processus simple et automatisé en 3 étapes
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;

                return (
                  <div
                    key={index}
                    className={`relative text-center transition-all duration-500 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    {/* Connection line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 z-0">
                        <div 
                          className="h-full bg-gray-600 dark:bg-gray-400 transition-all duration-1000"
                          style={{ width: isActive ? '100%' : '0%' }}
                        ></div>
                      </div>
                    )}

                    <div className="relative z-10 space-y-3 sm:space-y-4">
                      <div className={`mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 ${
                        isActive 
                          ? 'border-gray-700 dark:border-gray-400 bg-gray-700 dark:bg-gray-400 shadow-lg shadow-gray-500/30' 
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                      } flex items-center justify-center transition-all duration-500`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${
                          isActive 
                            ? 'bg-white text-orange-600' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        } flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300`}>
                          {isActive ? (
                            <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${step.color}`} />
                          ) : (
                            step.step
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${
                          isActive 
                            ? 'text-gray-900 dark:text-white font-bold' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tech Stack */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies utilisées
                </h4>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {['IoT Sensors', 'Machine Learning', 'Blockchain', 'Mobile App', 'Cloud Computing', 'Smart Grid'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};