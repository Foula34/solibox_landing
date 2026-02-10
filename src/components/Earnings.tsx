import React, { useState } from 'react';
import { DollarSign, Calculator } from 'lucide-react';
import { Modal } from './Modal';
import { RevenueCalculator } from './RevenueCalculator';
import { scrollToSection } from '../utils/scrollUtils';

export const Earnings: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const pricingPlans = [
    {
      title: 'Location Simple',
      price: '120,000 GNF',
      period: '/mois',
      description: 'Location mensuelle avec maintenance incluse',
      features: [
        'Accès plateforme de suivi',
        'Maintenance incluse',
        'Support technique 24/7',
        'Garantie complète'
      ]
    },
    {
      title: 'Partage des Revenus',
      price: '30%',
      period: 'des revenus',
      description: 'Partage sur la vente du surplus d\'énergie',
      features: [
        '30% des revenus de vente',
        'Paiements mensuels',
        'Tableau de bord temps réel',
        'Rapports détaillés'
      ],
      highlighted: true
    },
    {
      title: 'Location-Partage',
      price: '90,000 GNF',
      period: '/mois',
      description: 'Formule combinée avec loyer réduit',
      features: [
        'Loyer mensuel réduit',
        '15% des revenus',
        'Maintenance incluse',
        'Support prioritaire'
      ]
    }
  ];

  return (
    <section id="earnings" className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Modèle économique
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Choisissez la formule qui correspond à vos besoins et générez des revenus avec SoliBox.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`card p-8 animate-fade-up ${
                plan.highlighted ? 'ring-2 ring-accent-500 shadow-glow-md' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-4">
                  Recommandé
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                {plan.title}
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent-500">{plan.price}</span>
                <span className="text-primary-600 dark:text-primary-400 ml-1">{plan.period}</span>
              </div>
              
              <p className="text-primary-600 dark:text-primary-400 mb-6">
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-primary-700 dark:text-primary-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className={plan.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}
              >
                Choisir
              </button>
            </div>
          ))}
        </div>

        {/* Calculator CTA */}
        <div className="card p-12 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="w-16 h-16 bg-accent-100 dark:bg-accent-950/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-accent-500" />
          </div>
          
          <h3 className="text-3xl font-bold text-primary-900 dark:text-white mb-4">
            Calculez vos revenus personnalisés
          </h3>
          
          <p className="text-lg text-primary-600 dark:text-primary-400 mb-8 max-w-2xl mx-auto">
            Chaque installation est unique. Utilisez notre calculateur pour estimer précisément vos revenus potentiels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsCalculatorOpen(true)}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Calculer mes revenus</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              Planifier une consultation
            </button>
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
