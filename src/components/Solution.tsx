import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EnergyFlow } from './EnergyFlow';

type Step = {
  n: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    n: '01',
    title: 'Vous produisez',
    body: 'Votre installation solaire alimente d’abord votre foyer. Le compteur SoliBox détecte le surplus en temps réel, à la seconde près.',
  },
  {
    n: '02',
    title: 'SoliBox redistribue',
    body: 'Le surplus est routé automatiquement vers les foyers voisins sous contrat — sans intervention de votre part, sans batterie.',
  },
  {
    n: '03',
    title: 'Vous encaissez',
    body: 'Chaque kWh redistribué est mesuré, certifié, et payé mensuellement en GNF par Orange Money, MTN ou virement.',
  },
];

type Spec = { label: string; value: string };

const specs: Spec[] = [
  { label: 'Couverture', value: 'Conakry · pilote Q1 2026' },
  { label: 'Capacité', value: '1 à 8 kW résidentiel' },
  { label: 'Paiement', value: 'Orange Money · MTN · virement' },
  { label: 'Installation', value: '48 h, sans modification système' },
];

export const Solution: React.FC = () => {
  return (
    <section
      id="solution"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        {/* Header */}
        <header data-reveal className="max-w-3xl mb-20 lg:mb-24">
          <p className="eyebrow mb-6">Comment ça marche</p>
          <h2 className="headline-section mb-8">
            Trois étapes. Une installation.{' '}
            <span className="text-solar-600 dark:text-solar-400">
              Un revenu mensuel.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            SoliBox s&rsquo;intercale entre votre installation solaire et le
            compteur. Quand vous ne consommez pas, le surplus part chez les
            voisins. Chaque kilowattheure est mesuré, certifié, payé.
          </p>
        </header>

        {/* Energy + revenue flow diagram */}
        <div data-reveal className="mb-20 lg:mb-24">
          <EnergyFlow />
        </div>

        {/* 3-step flow */}
        <ol className="grid grid-cols-1 md:grid-cols-3 grid-divide mb-24 lg:mb-28">
          {steps.map((step, i) => (
            <li key={step.n} className="card-stat relative">
              <div className="flex items-center justify-between mb-10">
                <span className="font-display font-medium text-2xl text-ink-400 dark:text-ink-500 leading-none tabular-nums">
                  {step.n}
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-ink-300 dark:text-ink-700" />
                )}
              </div>
              <h3 className="font-display font-medium text-3xl text-ink-900 dark:text-paper mb-4 leading-tight tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Demo video — full-width, sober frame */}
        <div className="mb-24 lg:mb-28">
          <div className="flex items-end justify-between mb-6">
            <p className="eyebrow">Démonstration</p>
            <p className="hidden sm:block text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500">
              SoliBox · prototype Q1 2026
            </p>
          </div>
          <div className="relative aspect-video bg-ink-900 dark:bg-ink-800 ring-1 ring-mist dark:ring-ink-800 overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wd5hOg3iOJc"
              title="Démonstration SoliBox"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Spec sheet — institutional touch */}
        <div>
          <p className="eyebrow mb-10">Spécifications du pilote</p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-mist dark:border-ink-800">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`py-6 lg:py-8 border-b border-mist dark:border-ink-800 ${
                  i < specs.length - 1 ? 'lg:border-r' : ''
                } lg:pr-8`}
              >
                <dt className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500 mb-3">
                  {spec.label}
                </dt>
                <dd className="text-base text-ink-900 dark:text-paper leading-relaxed">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
