import React from 'react';

type Benefit = {
  metric: string;
  unit: string;
  title: string;
  body: string;
  source: string;
};

const benefits: Benefit[] = [
  {
    metric: '~30 000',
    unit: 'GNF / mois',
    title: 'Un revenu mensuel régulier',
    body:
      'Pour une installation domestique de 3 kW connectée au pilote, le surplus partagé génère un revenu net moyen estimé. Les versements sont mensuels, en GNF, sans seuil minimum.',
    source: 'Estimation pilote · 200 GNF/kWh × surplus médian',
  },
  {
    metric: '~1,2 t',
    unit: 'CO₂ évitée / an',
    title: 'Une réduction d’émissions traçable',
    body:
      'Chaque kWh solaire redistribué remplace une consommation issue de groupes électrogènes diesel ou de bois de chauffe. La compensation est mesurée au compteur, pas estimée a posteriori.',
    source: 'Facteur d’émission EDG, 2023',
  },
  {
    metric: '48 h',
    unit: 'pour être opérationnel',
    title: 'Une installation sans modification',
    body:
      'L’équipe SoliBox installe le boîtier en aval de votre onduleur existant. Aucune intervention sur le câblage solaire, aucune remise en cause de votre garantie constructeur.',
    source: 'Engagement service · pilote Conakry',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="relative section-padding bg-ink-900 text-paper dark:bg-sand dark:text-ink-900 overflow-hidden"
    >
      {/* Subtle geometric pattern — inspired by West African textile motifs.
          Strictly decorative, set to very low opacity. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full text-paper dark:text-ink-900 opacity-[0.04] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="solibox-motif"
            x="0"
            y="0"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Concentric diamond (Adinkra-inspired geometric) */}
            <polygon
              points="32,8 56,32 32,56 8,32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <polygon
              points="32,20 44,32 32,44 20,32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <circle cx="32" cy="32" r="1.5" fill="currentColor" />
            {/* Corner dots for rhythm */}
            <circle cx="0" cy="0" r="1" fill="currentColor" />
            <circle cx="64" cy="0" r="1" fill="currentColor" />
            <circle cx="0" cy="64" r="1" fill="currentColor" />
            <circle cx="64" cy="64" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#solibox-motif)" />
      </svg>

      <div className="relative container-custom">
        {/* Header — inline eyebrow (cannot use .eyebrow class on inverted bg) */}
        <header data-reveal className="max-w-3xl mb-20 lg:mb-24">
          <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-eyebrow text-ink-400 dark:text-ink-500 mb-6">
            <span className="inline-block h-px w-8 bg-ink-600 dark:bg-ink-400" />
            Trois bénéfices mesurables
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-[-0.015em] mb-8">
            Pas une promesse.{' '}
            <span className="text-ink-300 dark:text-ink-600 font-normal">
              Un mécanisme.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-300 dark:text-ink-700 max-w-2xl">
            Chaque bénéfice annoncé ici est rattaché à une métrique mesurée
            côté compteur, et sourcé. Pas de pourcentages génériques, pas de
            promesses non vérifiables.
          </p>
        </header>

        {/* Benefit rows */}
        <ul className="border-t border-ink-700 dark:border-ink-300">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="grid grid-cols-12 gap-y-8 lg:gap-x-12 py-12 lg:py-16 border-b border-ink-700 dark:border-ink-300"
            >
              <div className="col-span-12 lg:col-span-5">
                <p className="font-display font-bold text-7xl sm:text-8xl leading-[0.92] tracking-[-0.025em]">
                  {b.metric}
                </p>
                <p className="mt-4 text-xs uppercase tracking-eyebrow text-ink-400 dark:text-ink-500">
                  {b.unit}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:pt-6">
                <h3 className="font-display font-medium text-3xl lg:text-4xl mb-4 leading-tight tracking-[-0.01em]">
                  {b.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-300 dark:text-ink-700 mb-5 max-w-2xl">
                  {b.body}
                </p>
                <p className="text-[10px] uppercase tracking-eyebrow text-ink-500">
                  Source · {b.source}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
