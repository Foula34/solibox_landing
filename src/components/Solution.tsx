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
      bgGradient: 'from-orange-50 to-orange-100 dark:from-blue-900/20 dark:to-blue-800/20'
    },
    {
      icon: Smartphone,
      title: 'Application Mobile/Web',
      description: 'Gérez facilement le partage d\'énergie, suivez vos revenus et contrôlez votre réseau communautaire.',
      features: ['Interface intuitive', 'Suivi en temps réel', 'Gestion des revenus'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
    },
    {
      icon: TrendingUp,
      title: 'Intelligence Artificielle',
      description: 'Algorithmes avancés pour optimiser la distribution d\'énergie et maximiser vos revenus.',
      features: ['Prédiction de consommation', 'Optimisation automatique', 'Apprentissage continu'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100 dark:from-green-900/20 dark:to-green-800/20'
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
    <section id="solution" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Notre 
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"> Solution</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une solution complète et intelligente pour transformer votre surplus solaire en revenus
            </p>
          </div>

          {/* Solution Components */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className={`relative p-8 bg-gradient-to-br ${solution.bgGradient} rounded-2xl border border-white/20 dark:border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <IconComponent className="w-16 h-16 text-gray-600" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${solution.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {solution.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Comment ça fonctionne
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Un processus simple et automatisé en 3 étapes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-blue-300 dark:from-orange-600 dark:to-blue-600 z-0">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-1000"
                          style={{ width: isActive ? '100%' : '0%' }}
                        ></div>
                      </div>
                    )}

                    <div className="relative z-10 space-y-4">
                      <div className={`mx-auto w-24 h-24 rounded-full border-4 ${
                        isActive 
                          ? 'border-orange-400 bg-gradient-to-r from-orange-500 to-blue-500 shadow-lg shadow-orange-500/30' 
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                      } flex items-center justify-center transition-all duration-500`}>
                        <div className={`w-12 h-12 rounded-full ${
                          isActive 
                            ? 'bg-white text-orange-600' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        } flex items-center justify-center font-bold text-lg transition-all duration-300`}>
                          {isActive ? (
                            <IconComponent className={`w-6 h-6 ${step.color}`} />
                          ) : (
                            step.step
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          isActive 
                            ? 'text-transparent bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
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
                    className="px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800/30 hover:scale-105 transition-transform duration-300"
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