import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

type Status = 'done' | 'current' | 'planned' | 'future';

type Phase = {
  date: string;
  title: string;
  body: string;
  status: Status;
};

const phases: Phase[] = [
  {
    date: '2024 – 2025',
    title: 'Prototype et tests laboratoire',
    body:
      'Validation technique du boîtier de redistribution au Fab Lab d’Orange Digital Center, sur des maisons-test construites en bois par l’équipe.',
    status: 'done',
  },
  {
    date: '2026',
    title: 'Concours, financement, série',
    body:
      'Participation à plusieurs concours d’innovation pour financer la production des premiers boîtiers de série destinés au pilote terrain.',
    status: 'current',
  },
  {
    date: '2027',
    title: 'Premier pilote village',
    body:
      'Déploiement terrain en intérieur Guinée — premier village pilote, mesure réelle des kWh redistribués et des revenus générés.',
    status: 'planned',
  },
  {
    date: '2028+',
    title: 'Commercial et expansion',
    body:
      'Lancement commercial à plus grande échelle, conditionné aux résultats du pilote village, et extension à d’autres pays d’Afrique de l’Ouest.',
    status: 'future',
  },
];

const statusLabel: Record<Status, string> = {
  done: 'Achevé',
  current: 'En cours',
  planned: 'Planifié',
  future: 'Objectif',
};

export const Roadmap: React.FC = () => {
  return (
    <section
      id="roadmap"
      className="section-padding bg-sand dark:bg-ink-900"
    >
      <div className="container-custom">
        {/* Header */}
        <header data-reveal className="max-w-3xl mb-20 lg:mb-24">
          <p className="eyebrow mb-6">Feuille de route</p>
          <h2 className="headline-section mb-8">
            Du prototype au{' '}
            <span className="text-solar-600 dark:text-solar-400">
              réseau régional
            </span>
            .
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            Où SoliBox en est, où il va, à quel horizon. Nous mettons à jour
            cette page au rythme des livraisons effectives, pas des annonces.
            Le jalon en cours conditionne les suivants.
          </p>
        </header>

        {/* Horizontal timeline (desktop) / stacked (mobile) */}
        <div className="relative">
          {/* The connecting rule on desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[9px] left-0 right-0 h-px bg-ink-300 dark:bg-ink-700"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-x-8">
            {phases.map((phase) => (
              <li key={phase.date} className="relative lg:pr-6">
                <div className="flex items-center gap-4 lg:block">
                  {/* Status dot */}
                  <span
                    aria-hidden
                    className={`relative z-10 inline-block w-[18px] h-[18px] rounded-full flex-shrink-0 ${
                      phase.status === 'done'
                        ? 'bg-ink-900 dark:bg-paper'
                        : phase.status === 'current'
                        ? 'bg-solar-600 ring-4 ring-solar-100 dark:ring-solar-950'
                        : phase.status === 'planned'
                        ? 'bg-paper dark:bg-ink-900 border border-ink-400 dark:border-ink-500'
                        : 'bg-paper dark:bg-ink-900 border border-dashed border-ink-400 dark:border-ink-600'
                    }`}
                  />
                  <p className="font-display font-medium text-2xl text-ink-900 dark:text-paper leading-none lg:hidden tabular-nums">
                    {phase.date}
                  </p>
                </div>

                {/* Date — desktop variant under the dot */}
                <p className="hidden lg:block font-display font-medium text-3xl text-ink-900 dark:text-paper leading-none mt-8 tabular-nums">
                  {phase.date}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
                  {statusLabel[phase.status]}
                </p>

                <h3 className="mt-5 text-lg font-medium text-ink-900 dark:text-paper leading-snug">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300 max-w-xs">
                  {phase.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Quiet closing line — no glow card, no "rejoignez la révolution" */}
        <div className="mt-24 lg:mt-28 pt-10 border-t border-mist dark:border-ink-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <p className="font-display font-medium text-2xl sm:text-3xl text-ink-900 dark:text-paper leading-snug tracking-[-0.01em] max-w-xl">
            Vous voulez accompagner un jalon précis — pilote, expansion, ou
            déploiement régional ?
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary self-start sm:self-end"
          >
            Nous écrire
          </button>
        </div>
      </div>
    </section>
  );
};
