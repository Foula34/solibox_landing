import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

type Logo = {
  name: string;
  logo: string;
  website: string;
  category: string;
};

const logos: Logo[] = [
  {
    name: 'Orange',
    logo: 'assets/partenaires/orange.png',
    website: 'https://www.orange.com',
    category: 'Télécommunications',
  },
  {
    name: 'Orange Énergies',
    logo: 'assets/partenaires/orange-energie.png',
    website: 'https://www.orange.com',
    category: 'Énergie',
  },
  {
    name: 'PNUD',
    logo: 'assets/partenaires/pnud.png',
    website: 'https://www.undp.org',
    category: 'Programme institutionnel',
  },
  {
    name: 'AWS',
    logo: 'assets/partenaires/aws.png',
    website: 'https://aws.amazon.com',
    category: 'Infrastructure cloud',
  },
];

export const Partners: React.FC = () => {
  return (
    <section
      id="partners"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        {/* Header — 2-col asymmetric */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 mb-16 lg:mb-20">
          <header className="col-span-12 lg:col-span-5">
            <p className="eyebrow mb-6">Écosystème</p>
            <h2 className="headline-section">
              Soutiens et{' '}
              <span className="text-ink-500 dark:text-ink-400 font-normal">
                infrastructure.
              </span>
            </h2>
          </header>

          <p className="col-span-12 lg:col-span-7 lg:pt-3 text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            Programmes institutionnels, opérateurs locaux et fournisseurs
            d&rsquo;infrastructure cloud qui rendent le pilote SoliBox
            opérationnel à Conakry. Les relations contractuelles précises sont
            détaillées sur demande.
          </p>
        </div>

        {/* Logo strip — no card, no shadow, no grayscale hover trick */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 grid-divide border-t border-mist dark:border-ink-800">
          {logos.map((l) => (
            <li key={l.name} className="bg-paper dark:bg-ink-950 px-6 py-10 flex flex-col items-center text-center">
              <a
                href={l.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 mb-6 transition-opacity hover:opacity-70"
                aria-label={l.name}
              >
                <img
                  src={l.logo}
                  alt={l.name}
                  className="max-h-12 max-w-[140px] object-contain dark:brightness-0 dark:invert"
                />
              </a>
              <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
                {l.category}
              </p>
            </li>
          ))}
        </ul>

        {/* Quiet closing line */}
        <div className="mt-20 lg:mt-24 pt-10 border-t border-mist dark:border-ink-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <p className="font-display font-medium text-2xl sm:text-3xl text-ink-900 dark:text-paper leading-snug tracking-[-0.01em] max-w-xl">
            Votre organisation peut accompagner le pilote — financement,
            distribution, audit, ou expertise terrain.
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary self-start sm:self-end"
          >
            Proposer un partenariat
          </button>
        </div>
      </div>
    </section>
  );
};
