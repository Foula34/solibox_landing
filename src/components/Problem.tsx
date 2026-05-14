import React from 'react';

type Item = {
  n: string;
  title: string;
  body: string;
};

const problems: Item[] = [
  {
    n: '01',
    title: 'Un réseau électrique intermittent',
    body: 'Les coupures quotidiennes obligent les foyers à recourir à des groupes électrogènes coûteux, bruyants et polluants.',
  },
  {
    n: '02',
    title: 'Un surplus solaire qui se dissipe',
    body: 'Faute de stockage ou de redistribution, une part importante de la production solaire résidentielle est perdue chaque jour.',
  },
  {
    n: '03',
    title: 'Une énergie disproportionnellement chère',
    body: 'Pour un foyer non raccordé, le coût du kilowattheure peut être plusieurs fois supérieur à celui du réseau urbain.',
  },
  {
    n: '04',
    title: 'Aucune mutualisation entre voisins',
    body: 'L’énergie produite reste captive d’un seul toit, sans mécanisme simple pour la partager — ni la valoriser.',
  },
];

export const Problem: React.FC = () => {
  return (
    <section
      id="problem"
      className="section-padding bg-sand dark:bg-ink-900"
    >
      <div className="container-custom">
        {/* Editorial header */}
        <header data-reveal className="max-w-3xl">
          <p className="eyebrow mb-6">Le contexte</p>
          <h2 className="headline-section mb-8">
            Un toit qui produit.{' '}
            <span className="text-ink-500 dark:text-ink-400">
              Un quartier qui attend.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            En Guinée, l&rsquo;accès à l&rsquo;électricité reste structurellement
            inégal — alors que sur les toits voisins, des installations solaires
            laissent partir chaque jour une part importante de leur production.
          </p>
        </header>

        <hr className="border-mist dark:border-ink-800 my-16 lg:my-20" />

        {/* Two-column spread: big figure + numbered list */}
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
          <figure className="col-span-12 lg:col-span-5">
            <p className="eyebrow mb-8">Chiffre clé</p>
            <p className="font-display font-bold text-[6.5rem] sm:text-[9rem] lg:text-[10rem] leading-[0.9] tracking-[-0.03em] text-ink-900 dark:text-paper">
              47<span className="text-ink-400 dark:text-ink-500">%</span>
            </p>
            <figcaption className="mt-8 text-base leading-relaxed text-ink-700 dark:text-ink-300 max-w-sm">
              taux d&rsquo;accès à l&rsquo;électricité en Guinée — l&rsquo;un
              des plus bas d&rsquo;Afrique de l&rsquo;Ouest.
            </figcaption>
            <p className="mt-5 text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500">
              Source · Banque Mondiale, 2023
            </p>
          </figure>

          <ol className="col-span-12 lg:col-span-7 lg:border-l border-mist dark:border-ink-800 lg:pl-12">
            {problems.map((p, i) => (
              <li
                key={p.n}
                className={`grid grid-cols-12 gap-x-6 py-8 ${
                  i !== 0 ? 'border-t border-mist dark:border-ink-800' : ''
                } ${i === 0 ? 'pt-0' : ''}`}
              >
                <span className="col-span-2 lg:col-span-1 font-display font-medium text-2xl text-ink-400 dark:text-ink-500 leading-none pt-1 tabular-nums">
                  {p.n}
                </span>
                <div className="col-span-10 lg:col-span-11">
                  <h3 className="text-lg font-medium text-ink-900 dark:text-paper mb-2">
                    {p.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 max-w-xl">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
