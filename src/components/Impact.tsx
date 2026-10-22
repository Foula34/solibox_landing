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
    metric: '2',
    unit: 'foyers pilotes',
    description:
      'équipés à Conakry en novembre et décembre 2026, pour mesurer en conditions réelles l’énergie partagée, le revenu du producteur et la fiabilité du boîtier.',
    status: 'en cours',
    horizon: 'Pilote · fin 2026',
  },
  {
    metric: '1 010',
    unit: 'boîtiers installés',
    description:
      'visés en parc cumulé, après un premier déploiement commercial à Conakry en 2027 et l’extension aux grandes villes de l’intérieur.',
    status: 'objectif',
    horizon: 'Horizon 2029',
  },
  {
    metric: '~1 400',
    unit: 'MWh / an redistribués',
    description:
      'entre voisins à ce stade, soit près de 137 000 euros reversés chaque année aux foyers producteurs. Hypothèse prudente, calculée sur le seul profil résidentiel.',
    status: 'objectif',
    horizon: 'Horizon 2029',
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
    how: 'kWh partagés × tarif de référence de 950 GNF/kWh, contre 453 GNF/kWh pour le tarif EDG domestique. Versement mensuel par mobile money, traçable.',
  },
  {
    what: 'Parc installé',
    how: 'Boîtiers effectivement mis en service, et non boîtiers vendus. Chaque unité est rattachée à un producteur identifié et à ses voisins sous contrat.',
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
        <header data-reveal className="max-w-3xl mb-20 lg:mb-24">
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
            Voici les objectifs publics que SoliBox se fixe, du pilote de fin 2026
            à l&rsquo;horizon 2029. Chaque métrique est rattachée à un instrument de
            mesure, pas à une projection marketing, et nous distinguons
            délibérément ce qui sera mesuré de ce qui est projeté.
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
