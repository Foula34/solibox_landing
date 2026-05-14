import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

type Stat = {
  kpi: string;
  label: string;
  source: string;
};

const stats: Stat[] = [
  {
    kpi: '60 %',
    label: 'des zones rurales en Guinée n’ont pas d’accès fiable à l’électricité.',
    source: 'Banque Mondiale, 2023',
  },
  {
    kpi: '~40 %',
    label: 'du surplus solaire résidentiel est perdu chaque jour, faute de stockage ou de redistribution.',
    source: 'Estimation IRENA, 2023',
  },
  {
    kpi: '100+',
    label: 'foyers déjà pré-inscrits sur le pilote de Conakry, opéré par SoliBox.',
    source: 'Programme SoliBox, Q1 2026',
  },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-paper dark:bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32"
    >
      <div className="container-custom px-6 sm:px-8 lg:px-12">
        {/* Eyebrow with live indicator */}
        <p className="eyebrow mb-10 sm:mb-14">
          <span className="relative inline-flex items-center mr-1.5">
            <span className="absolute inline-block w-2 h-2 rounded-full bg-solar-500 opacity-60 animate-ping" />
            <span className="relative inline-block w-2 h-2 rounded-full bg-solar-500" />
          </span>
          Pilote actif · Conakry · 2026
        </p>

        {/* Editorial layout: headline left, demo panel right */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* Headline column */}
          <div className="col-span-12 lg:col-span-8">
            <h1 className="headline-display max-w-4xl">
              L&rsquo;électricité que vous ne consommez pas{' '}
              <span className="text-solar-600 dark:text-solar-400">
                devient un revenu
              </span>
              <span className="text-ink-400 dark:text-ink-500"> — </span>
              et l&rsquo;énergie de vos voisins.
            </h1>

            {/* Editorial rule */}
            <div className="mt-12 mb-8 h-px w-16 bg-ink-300 dark:bg-ink-700" />

            <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-ink-600 dark:text-ink-300">
              SoliBox redistribue automatiquement le surplus de votre installation
              solaire aux foyers voisins non raccordés, et le convertit en revenu
              mensuel mesurable, payé en GNF.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button
                onClick={() => scrollToSection('#solution')}
                className="btn-primary group"
              >
                <span>Voir comment ça marche</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                Devenir partenaire
              </button>
            </div>
          </div>

          {/* Side panel — single editorial figure */}
          <aside className="col-span-12 lg:col-span-4 pt-10 lg:pt-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-mist dark:border-ink-800 flex">
            <figure className="flex flex-col justify-end w-full">
              <p className="eyebrow mb-6">Cas type</p>
              <p className="font-display font-bold text-6xl sm:text-7xl leading-[0.95] tracking-[-0.02em] text-ink-900 dark:text-paper">
                ~30 000
                <span className="text-ink-400 dark:text-ink-500 font-semibold"> GNF</span>
              </p>
              <p className="mt-2 text-sm uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
                par mois
              </p>
              <figcaption className="mt-6 text-sm leading-relaxed text-ink-600 dark:text-ink-300 max-w-xs">
                Revenu médian estimé pour une installation solaire résidentielle
                de 3&nbsp;kW connectée à SoliBox, en mode partage de revenus.
              </figcaption>
              <p className="mt-4 text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500">
                Estimation pilote · sujette à variation
              </p>
            </figure>
          </aside>
        </div>

        {/* Editorial stat bar — sourced, no animations, no glow */}
        <div className="mt-24 sm:mt-28 lg:mt-32 grid grid-cols-1 md:grid-cols-3 grid-divide">
          {stats.map((stat) => (
            <div key={stat.kpi} className="card-stat">
              <p className="font-display font-bold text-5xl sm:text-6xl leading-[0.95] tracking-[-0.02em] text-ink-900 dark:text-paper">
                {stat.kpi}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink-700 dark:text-ink-300 max-w-xs">
                {stat.label}
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500">
                Source · {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
