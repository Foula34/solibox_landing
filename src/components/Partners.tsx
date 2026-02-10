import React from 'react';
import { Building2 } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

export const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Orange',
      logo: "assets/partenaires/orange.png",
      website: 'https://www.orange.com'
    },
    {
      name: 'PNUD',
      logo: "assets/partenaires/pnud.png",
      website: 'https://www.undp.org'
    },
    {
      name: 'AWS',
      logo: "assets/partenaires/aws.png",
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Orange Energies',
      logo: "assets/partenaires/orange-energie.png",
      website: 'https://www.orange.com'
    }
  ];

  return (
    <section id="partners" className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Nos partenaires
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Des partenaires de confiance qui partagent notre vision.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 flex items-center justify-center hover-lift animate-fade-up grayscale hover:grayscale-0 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-20 object-contain"
                />
              ) : (
                <Building2 className="w-16 h-16 text-primary-400" />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="card p-12 inline-block">
            <p className="text-lg text-primary-600 dark:text-primary-400 mb-6">
              Vous souhaitez devenir partenaire ?
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
