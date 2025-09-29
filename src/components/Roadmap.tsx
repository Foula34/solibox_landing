import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Circle, Zap, Users, Globe, Building } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(0);
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

  const roadmapSteps = [
    {
      phase: 'Phase 1',
      title: 'Prototype & Validation',
      status: 'completed',
      date: 'Q1 2024',
      description: 'Développement du premier prototype SoliBox et tests pilotes avec 25 foyers',
      icon: Zap,
      achievements: [
        'Prototype fonctionnel développé',
        'Tests réussis avec 25 familles',
        'Validation du concept technique',
        'Premiers revenus générés: +2,000 GNF/mois'
      ],
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
    },
    {
      phase: 'Phase 2',
      title: 'Déploiement Communautaire',
      status: 'current',
      date: 'Q2-Q3 2024',
      description: 'Extension à 3 quartiers pilotes avec 150 foyers connectés',
      icon: Users,
      achievements: [
        '150 foyers connectés (en cours)',
        'Application mobile lancée',
        'Formation des techniciens locaux',
        'Partenariats avec coopératives'
      ],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
    },
    {
      phase: 'Phase 3',
      title: 'Expansion Régionale',
      status: 'planned',
      date: 'Q4 2024 - Q1 2025',
      description: 'Déploiement dans 5 villes de Guinée avec 1,000+ foyers',
      icon: Building,
      achievements: [
        'Déploiement dans 5 villes',
        '1,000+ foyers connectés',
        'Centres de maintenance régionaux',
        'Formation d\'entrepreneurs locaux'
      ],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
    },
    {
      phase: 'Phase 4',
      title: 'Vision Internationale',
      status: 'future',
      date: '2025+',
      description: 'Expansion en Afrique de l\'Ouest avec 10,000+ connections',
      icon: Globe,
      achievements: [
        'Expansion multi-pays',
        '10,000+ foyers connectés',
        'Plateforme B2B pour entreprises',
        'Impact environnemental majeur'
      ],
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
    }
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCompletedSteps(prev => {
          if (prev < roadmapSteps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 800);

      return () => clearInterval(timer);
    }
  }, [isVisible, roadmapSteps.length]);

  const milestones = [
    { metric: '500+', label: 'Foyers déjà connectés', achieved: true },
    { metric: '2.5M', label: 'kWh partagés à ce jour', achieved: true },
    { metric: '15M', label: 'GNF générés en revenus', achieved: true },
    { metric: '1,000+', label: 'Familles en liste d\'attente', achieved: false }
  ];

  return (
    <section id="roadmap" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Notre 
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"> Vision</span>
              <br />& Roadmap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez notre plan ambitieux pour révolutionner l'accès à l'énergie en Afrique de l'Ouest
            </p>
          </div>

          {/* Current Milestones */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  milestone.achieved 
                    ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800/30' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  milestone.achieved ? 'bg-green-500' : 'bg-gray-400 dark:bg-gray-600'
                }`}>
                  {milestone.achieved ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <Circle className="w-6 h-6 text-white" />
                  )}
                </div>
                
                <div className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  milestone.achieved 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {milestone.metric}
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap Timeline */}
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isCompleted = step.status === 'completed';
              const isCurrent = step.status === 'current';
              const isVisible = completedSteps >= index;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  {/* Connection Line */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 z-0">
                      <div 
                        className={`w-full bg-gradient-to-b transition-all duration-1000 ${
                          completedSteps > index 
                            ? 'from-orange-500 to-blue-500 h-full' 
                            : 'from-orange-500 to-orange-500 h-0'
                        }`}
                        style={{ transitionDelay: `${600 + index * 200}ms` }}
                      ></div>
                    </div>
                  )}

                  <div className={`relative bg-gradient-to-br ${step.bgGradient} rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 backdrop-blur-sm ${
                    isCurrent ? 'ring-2 ring-orange-400 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900' : ''
                  } ${isCompleted ? 'shadow-lg shadow-green-500/10' : ''}`}>
                    <div className="grid md:grid-cols-4 gap-6 items-start">
                      {/* Phase Info */}
                      <div className="text-center md:text-left">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                          isCompleted 
                            ? 'bg-green-500 shadow-lg shadow-green-500/30' 
                            : isCurrent 
                              ? `bg-gradient-to-r ${step.gradient} shadow-lg shadow-orange-500/30` 
                              : 'bg-gray-400 dark:bg-gray-600'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="w-8 h-8 text-white" />
                          ) : (
                            <IconComponent className="w-8 h-8 text-white" />
                          )}
                        </div>
                        
                        <div className={`text-sm font-medium mb-1 ${
                          isCurrent 
                            ? 'text-orange-600 dark:text-orange-400' 
                            : isCompleted 
                              ? 'text-green-600 dark:text-green-400' 
                              : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {step.phase}
                        </div>
                        
                        <div className="text-xs text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded-full">
                          {step.date}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-3 space-y-4">
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${
                            isCurrent 
                              ? 'text-transparent bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text' 
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {step.title}
                            {isCurrent && (
                              <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
                                En cours
                              </span>
                            )}
                            {isCompleted && (
                              <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                                Terminé
                              </span>
                            )}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className={`flex items-start space-x-3 transition-all duration-300 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                              }`}
                              style={{ transitionDelay: `${800 + index * 200 + achievementIndex * 100}ms` }}
                            >
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                isCompleted 
                                  ? 'bg-green-500' 
                                  : isCurrent 
                                    ? 'bg-orange-500' 
                                    : 'bg-gray-400 dark:bg-gray-600'
                              }`}></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Rejoignez la révolution énergétique dès maintenant
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Ne manquez pas l'opportunité de faire partie des pionniers qui transforment l'accès à l'énergie en Afrique
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <button className="w-full sm:w-auto bg-white text-orange-600 font-semibold px-8 py-3 rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg">
                  Rejoindre la communauté
                </button>
                <button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                  Devenir partenaire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};