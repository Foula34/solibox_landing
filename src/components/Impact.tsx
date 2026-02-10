import React, { useState, useEffect } from 'react';
import { Users, Zap, Leaf, TrendingUp } from 'lucide-react';

export const Impact: React.FC = () => {
  const [counts, setCounts] = useState({ families: 0, kwh: 0, savings: 0 });

  useEffect(() => {
    const duration = 2000;
    const targets = { families: 500, kwh: 2500, savings: 1800 };
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        families: Math.floor((targets.families / steps) * step),
        kwh: Math.floor((targets.kwh / steps) * step),
        savings: Math.floor((targets.savings / steps) * step),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: `${counts.families}+`,
      label: 'Familles connectées',
      color: 'text-accent-500'
    },
    {
      icon: Zap,
      value: `${counts.kwh}M`,
      label: 'kWh partagés',
      color: 'text-accent-500'
    },
    {
      icon: TrendingUp,
      value: `${counts.savings}M`,
      label: 'GNF économisés',
      color: 'text-accent-500'
    },
    {
      icon: Leaf,
      value: '85%',
      label: 'Satisfaction utilisateurs',
      color: 'text-accent-500'
    }
  ];

  return (
    <section id="impact" className="section-padding bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Notre impact
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Des résultats concrets qui transforment des communautés entières.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card p-8 text-center hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-950/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-5xl font-bold ${stat.color} mb-3`}>
                {stat.value}
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {/* Before */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-6">
              Avant SoliBox
            </h3>
            <ul className="space-y-4">
              {[
                'Surplus solaire gaspillé (40%)',
                'Générateurs coûteux et polluants',
                'Coupures d\'électricité fréquentes',
                'Pas de revenus additionnels'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                  <span className="text-primary-600 dark:text-primary-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="card p-8 ring-2 ring-accent-500">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-6">
              Avec SoliBox
            </h3>
            <ul className="space-y-4">
              {[
                '100% du surplus valorisé',
                'Énergie propre et abordable',
                'Alimentation stable 24/7',
                'Revenus passifs réguliers'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-primary-700 dark:text-primary-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};