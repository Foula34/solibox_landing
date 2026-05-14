import React from 'react';

type Goal = {
  metric: string;
  unit: string;
  description: string;
  status: 'en cours' | 'objectif';
  horizon: string;
};

const goals: Goal[] = [
  {
    metric: '100',
    unit: 'foyers',
    description:
      'connectés sur le pilote de Conakry — producteurs et bénéficiaires confondus.',
    status: 'objectif',
    horizon: 'Q4 2026',
  },
  {
    metric: '120',
    unit: 'MWh / an',
    description:
      'd’électricité solaire redistribuée, traçable au compteur SoliBox installé chez chaque producteur.',
    status: 'objectif',
    horizon: 'Q4 2026',
  },
  {
    metric: '~95 t',
    unit: 'CO₂ évitées / an',
    description:
      'par substitution à des sources thermiques (groupes électrogènes, bois de chauffe).',
    status: 'objectif',
    horizon: 'Q4 2026',
  },
];

type Method = {
  what: string;
  how: string;
};

const methodology: Method[] = [
  {
    what: 'Énergie redistribuée',
    how: 'Compteur intelligent SoliBox installé en aval de l’onduleur. Mesure par seconde, certifiée constructeur.',
  },
  {
    what: 'Revenu producteur',
    how: 'kWh × tarif unitaire de la zone (200 GNF/kWh sur le pilote). Versement mensuel, traçable bancairement.',
  },
  {
    what: 'CO₂ évitée',
    how: 'Substitution × facteur d’émission EDG 2023 (≈ 0,8 kg CO₂ / kWh thermique). Audit annuel indépendant prévu.',
  },
];

export const Impact: React.FC = () => {
  return (
    <section
      id="impact"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        {/* Header */}
        <header className="max-w-3xl mb-20 lg:mb-24">
          <p className="eyebrow mb-6">Impact mesurable</p>
          <h2 className="headline-section mb-8">
            L&rsquo;impact se{' '}
            <span className="text-sky-700 dark:text-sky-300">
              mesure
            </span>
            <span className="text-ink-400 dark:text-ink-500">,</span>
            <br />
            il ne se proclame pas.
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            Nous publions ici les objectifs vérifiables que nous nous fixons
            pour le pilote de Conakry. Chaque métrique est rattachée à un
            instrument de mesure, pas à une projection marketing.
          </p>
        </header>

        {/* Goals — 3 columns with status badge */}
        <ul className="grid grid-cols-1 md:grid-cols-3 grid-divide mb-24 lg:mb-28">
          {goals.map((g) => (
            <li key={g.metric} className="card-stat">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500">
                  {g.status}
                </span>
                <span className="text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500">
                  {g.horizon}
                </span>
              </div>
              <p className="font-display font-bold text-6xl lg:text-7xl text-ink-900 dark:text-paper leading-[0.95] tracking-[-0.025em] tabular-nums">
                {g.metric}
              </p>
              <p className="mt-3 text-sm uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
                {g.unit}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-ink-700 dark:text-ink-300 max-w-xs">
                {g.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Methodology */}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow mb-6">Méthodologie</p>
            <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] mb-6">
              Comment on compte.
            </h3>
            <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 max-w-sm">
              Chaque chiffre annoncé sur cette page est dérivé d&rsquo;une mesure
              physique ou d&rsquo;un facteur de conversion documenté.
            </p>
          </div>

          <dl className="col-span-12 lg:col-span-8 border-t border-mist dark:border-ink-800">
            {methodology.map((m) => (
              <div
                key={m.what}
                className="grid grid-cols-12 gap-x-6 py-8 border-b border-mist dark:border-ink-800"
              >
                <dt className="col-span-12 md:col-span-4 text-sm font-medium text-ink-900 dark:text-paper">
                  {m.what}
                </dt>
                <dd className="col-span-12 md:col-span-8 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {m.how}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
