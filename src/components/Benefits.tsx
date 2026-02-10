import React from 'react';
import { Leaf, TrendingUp, Shield, Clock } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenus garantis',
      description: 'Générez jusqu\'à 30% de revenus supplémentaires en vendant votre surplus d\'énergie.',
      stat: '+30%',
    },
    {
      icon: Leaf,
      title: 'Impact écologique',
      description: 'Réduisez les émissions de CO₂ en optimisant l\'utilisation de l\'énergie solaire locale.',
      stat: '-40%',
    },
    {
      icon: Shield,
      title: 'Sécurité énergétique',
      description: 'Accédez à une source d\'énergie fiable et indépendante du réseau national.',
      stat: '24/7',
    },
    {
      icon: Clock,
      title: 'Installation rapide',
      description: 'Mise en service en moins de 48h avec notre équipe d\'experts certifiés.',
      stat: '48h',
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Pourquoi SoliBox
            <span className="text-accent-500">?</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Des avantages concrets pour vous et votre communauté.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card p-8 text-center hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-950/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-accent-500" />
              </div>

              {/* Stat */}
              <div className="text-4xl font-bold text-accent-500 mb-4">
                {benefit.stat}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};