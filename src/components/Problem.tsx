import React from 'react';
import { AlertCircle, Zap, Users, TrendingDown } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Accès limité à l\'électricité',
      description: 'Plus de 60% des zones rurales en Afrique n\'ont pas accès à une électricité fiable et abordable.',
    },
    {
      icon: TrendingDown,
      title: 'Surplus solaire gaspillé',
      description: 'Les propriétaires de panneaux solaires gaspillent jusqu\'à 40% de leur production excédentaire.',
    },
    {
      icon: Zap,
      title: 'Coûts énergétiques élevés',
      description: 'Les ménages dépensent une part importante de leurs revenus pour des solutions énergétiques inefficaces.',
    },
    {
      icon: Users,
      title: 'Manque de partage communautaire',
      description: 'Les ressources énergétiques locales ne sont pas optimisées pour bénéficier à toute la communauté.',
    },
  ];

  return (
    <section id="problem" className="section-padding bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Le défi énergétique
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Des millions de personnes en Afrique font face à des défis énergétiques critiques qui limitent leur développement.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card p-8 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-950/30 rounded-xl flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-accent-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};