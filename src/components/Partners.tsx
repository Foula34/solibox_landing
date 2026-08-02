import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

type Recognition = {
  status: string;
  name: string;
  edition: string;
  description: string;
  image: string;
};

const items: Recognition[] = [
  {
    status: '1ᵉʳ prix',
    name: 'SADEN Fulbright Innovation Challenge',
    edition: 'Édition 2026',
    description:
      'SoliBox a remporté le premier prix de ce challenge prestigieux, récompensant son potentiel d’innovation et son impact socio-économique majeur.',
    image: '/assets/partenaires/saden.jpeg',
  },
  {
    status: '1ᵉʳ prix',
    name: 'Salon des Étudiants Entrepreneurs',
    edition: 'Catégorie Numérique · 2026',
    description:
      'Premier prix de la catégorie numérique, saluant l’excellence technologique et la viabilité du modèle d’électrification rurale décentralisée.',
    image: '/assets/partenaires/see.jpeg',
  },
  {
    status: '2ᵉ place',
    name: 'Orange Summer Challenge',
    edition: 'Édition 2025',
    description:
      'Programme panafricain d’innovation porté par Orange Digital Center — SoliBox récompensé pour son modèle de redistribution énergétique.',
    image: '/assets/partenaires/osc.jpeg',
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
        <div data-reveal className="grid grid-cols-12 gap-y-12 lg:gap-x-16 mb-16 lg:mb-20">
          <header className="col-span-12 lg:col-span-5">
            <p className="eyebrow mb-6">Reconnaissance</p>
            <h2 className="headline-section">
              Programmes,{' '}
              <span className="text-ink-500 dark:text-ink-400 font-normal">
                concours, distinctions.
              </span>
            </h2>
          </header>

          <p className="col-span-12 lg:col-span-7 lg:pt-3 text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            SoliBox cherche activement les programmes et financements qui
            permettront de passer du prototype validé en laboratoire au premier
            pilote terrain en intérieur Guinée. Voici où nous sommes engagés.
          </p>
        </div>

        {/* Items strip — 3 col grid, with images/logos */}
        <ul className="grid grid-cols-1 md:grid-cols-3 grid-divide border-t border-mist dark:border-ink-800">
          {items.map((item) => (
            <li key={item.name} className="card-stat flex flex-col">
              <div className="mb-8 relative aspect-[4/3] bg-mist dark:bg-ink-800 overflow-hidden w-full group">
                <img 
                  src={item.image} 
                  alt={`Prix - ${item.name}`} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-[filter] duration-500"
                  onError={(e) => {
                    // Fallback visuel si l'image n'est pas encore ajoutée
                    (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3Ctext fill="%239ca3af" x="50%25" y="50%25" text-anchor="middle" font-family="sans-serif" font-size="24"%3EImage/Photo à venir%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <p className="text-[10px] uppercase tracking-eyebrow text-solar-600 dark:text-solar-400 mb-4">
                {item.status}
              </p>
              <p className="font-display font-semibold text-2xl lg:text-3xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] mb-2">
                {item.name}
              </p>
              <p className="text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500 mb-5">
                {item.edition}
              </p>
              <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300 max-w-xs">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Quiet closing line */}
        <div className="mt-20 lg:mt-24 pt-10 border-t border-mist dark:border-ink-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <p className="font-display font-medium text-2xl sm:text-3xl text-ink-900 dark:text-paper leading-snug tracking-[-0.01em] max-w-xl">
            Votre programme, fondation ou agence peut accompagner le pilote
            village SoliBox.
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary self-start sm:self-end"
          >
            Proposer un soutien
          </button>
        </div>
      </div>
    </section>
  );
};
