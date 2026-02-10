import React from 'react';
import { CheckCircle, Zap, Users, Building, Globe } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

export const Roadmap: React.FC = () => {
  const roadmapSteps = [
    {
      phase: 'Phase 1',
      title: 'Prototype & Validation',
      status: 'completed',
      date: 'Q1 2024',
      description: 'Développement du prototype et tests avec 25 foyers',
      icon: Zap,
    },
    {
      phase: 'Phase 2',
      title: 'Déploiement Communautaire',
      status: 'current',
      date: 'Q2-Q3 2024',
      description: 'Extension à 3 quartiers avec 150 foyers connectés',
      icon: Users,
    },
    {
      phase: 'Phase 3',
      title: 'Expansion Régionale',
      status: 'planned',
      date: 'Q4 2024 - Q1 2025',
      description: 'Déploiement dans 5 villes avec 1,000+ foyers',
      icon: Building,
    },
    {
      phase: 'Phase 4',
      title: 'Vision Internationale',
      status: 'future',
      date: '2025+',
      description: 'Expansion en Afrique de l\'Ouest avec 10,000+ connections',
      icon: Globe,
    }
  ];

  return (
    <section id="roadmap" className="section-padding bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Notre roadmap
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Un plan ambitieux pour révolutionner l'accès à l'énergie en Afrique.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isCompleted = step.status === 'completed';
              const isCurrent = step.status === 'current';

              return (
                <div
                  key={index}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center ${
                    isCompleted 
                      ? 'bg-accent-500' 
                      : isCurrent 
                        ? 'bg-accent-500 animate-glow' 
                        : 'bg-primary-300 dark:bg-primary-700'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-24">
                    <div className={`card p-8 ${isCurrent ? 'ring-2 ring-accent-500' : ''}`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-accent-500">
                          {step.phase}
                        </span>
                        <span className="text-sm text-primary-500 dark:text-primary-400">
                          {step.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-3">
                        {step.title}
                        {isCurrent && (
                          <span className="ml-3 inline-flex items-center px-3 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-950/30 text-accent-600 dark:text-accent-400 rounded-full">
                            En cours
                          </span>
                        )}
                      </h3>
                      
                      <p className="text-primary-600 dark:text-primary-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="card p-12">
            <h3 className="text-3xl font-bold text-primary-900 dark:text-white mb-4">
              Rejoignez la révolution énergétique
            </h3>
            <p className="text-lg text-primary-600 dark:text-primary-400 mb-8 max-w-2xl mx-auto">
              Ne manquez pas l'opportunité de faire partie des pionniers qui transforment l'accès à l'énergie.
            </p>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Rejoindre la communauté
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};