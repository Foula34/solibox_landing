import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

type Plan = {
  key: string;
  label: string;
  price: string;
  priceUnit: string;
  forWho: string;
  terms: string[];
};

const KWH_PRICE = 200; // GNF / kWh — aligné avec Benefits & Hero

const plans: Plan[] = [
  {
    key: 'location',
    label: 'Location simple',
    price: '120 000',
    priceUnit: 'GNF / mois',
    forWho:
      'Installation déjà rentable. Vous cherchez un revenu net, fixe, sans variabilité.',
    terms: [
      'Aucune part sur les revenus du surplus',
      'Maintenance et garantie incluses',
      'Engagement 12 mois',
      'Support technique standard',
    ],
  },
  {
    key: 'partage',
    label: 'Partage des revenus',
    price: '30 %',
    priceUnit: 'des revenus surplus',
    forWho:
      'Installation à rentabiliser. Vous préférez aucun coût d’entrée, en échange d’une part variable.',
    terms: [
      'Aucun loyer mensuel',
      'Versements mensuels en GNF, sans seuil',
      'Aucun engagement de durée',
      'Tableau de bord temps réel',
    ],
  },
  {
    key: 'hybride',
    label: 'Hybride',
    price: '90 000',
    priceUnit: 'GNF / mois + 15 %',
    forWho:
      'Vous voulez un équilibre entre coût fixe minoré et part variable réduite.',
    terms: [
      'Loyer réduit',
      '15 % sur les revenus surplus',
      'Maintenance et garantie incluses',
      'Support prioritaire',
    ],
  },
];

export const Earnings: React.FC = () => {
  // Inline calculator state
  const [solarPower, setSolarPower] = useState(3); // kW
  const [sunHours, setSunHours] = useState(6); // h/day
  const [sharePercent, setSharePercent] = useState(40); // %

  const dailyProduction = solarPower * sunHours;
  const monthlyProduction = dailyProduction * 30;
  const sharedEnergy = (monthlyProduction * sharePercent) / 100;
  const monthlyRevenue = sharedEnergy * KWH_PRICE;
  const yearlyRevenue = monthlyRevenue * 12;

  const formatGNF = (n: number) =>
    new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n);

  return (
    <section
      id="earnings"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        {/* Header */}
        <header data-reveal className="max-w-3xl mb-20 lg:mb-24">
          <p className="eyebrow mb-6">Tarification</p>
          <h2 className="headline-section mb-8">
            Trois formules.{' '}
            <span className="text-ink-500 dark:text-ink-400 font-normal">
              Lisibles, sans frais cachés.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            Le choix dépend de votre tolérance au coût fixe et de l&rsquo;état de
            rentabilisation de votre installation. Aucune des trois ne comporte
            de frais d&rsquo;activation, ni de pénalité de sortie sur la formule
            partage.
          </p>
        </header>

        {/* Comparative grid — 3 plans side by side, no "Recommandé" badge */}
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-divide mb-24 lg:mb-28">
          {plans.map((plan) => (
            <article key={plan.key} className="card-stat flex flex-col">
              <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500 mb-6">
                {plan.label}
              </p>

              <p className="font-display font-bold text-5xl lg:text-6xl text-ink-900 dark:text-paper leading-[0.95] tracking-[-0.02em]">
                {plan.price}
              </p>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                {plan.priceUnit}
              </p>

              <hr className="border-mist dark:border-ink-800 my-8" />

              <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300 mb-8 max-w-xs">
                {plan.forWho}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.terms.map((term, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-300 leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-2 w-1 h-1 bg-ink-400 dark:bg-ink-500 rounded-full flex-shrink-0"
                    />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary self-start"
              >
                <span>Demander cette formule</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>

        {/* Inline calculator */}
        <div>
          <header className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-4">Estimation</p>
              <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] max-w-xl">
                Calculez votre revenu mensuel
              </h3>
            </div>
            <p className="hidden md:block text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500">
              Base · {KWH_PRICE} GNF/kWh
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-divide">
            {/* Inputs */}
            <div className="card-stat space-y-10">
              <CalcSlider
                label="Puissance solaire"
                value={solarPower}
                unit="kW"
                min={1}
                max={10}
                step={0.5}
                onChange={setSolarPower}
              />
              <CalcSlider
                label="Heures d’ensoleillement"
                value={sunHours}
                unit="h / jour"
                min={3}
                max={12}
                step={0.5}
                onChange={setSunHours}
              />
              <CalcSlider
                label="Surplus partagé"
                value={sharePercent}
                unit="%"
                min={10}
                max={80}
                step={5}
                onChange={setSharePercent}
              />
            </div>

            {/* Result */}
            <div className="card-stat flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500 mb-4">
                  Revenu mensuel estimé
                </p>
                <p className="font-display font-bold text-6xl sm:text-7xl text-ink-900 dark:text-paper leading-[0.95] tracking-[-0.025em] tabular-nums">
                  ~{formatGNF(monthlyRevenue)}
                  <span className="text-ink-400 dark:text-ink-500 font-semibold"> GNF</span>
                </p>
                <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
                  soit ~{formatGNF(yearlyRevenue)} GNF par an
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-x-8 gap-y-4 mt-10 pt-8 border-t border-mist dark:border-ink-800">
                <Stat label="Production / jour" value={`${dailyProduction.toFixed(1)} kWh`} />
                <Stat label="Production / mois" value={`${formatGNF(monthlyProduction)} kWh`} />
                <Stat label="Surplus partagé" value={`${formatGNF(sharedEnergy)} kWh / mois`} />
                <Stat label="Revenu / jour" value={`${formatGNF(monthlyRevenue / 30)} GNF`} />
              </dl>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-ink-500 dark:text-ink-400 max-w-2xl">
            Estimation indicative. Les revenus réels dépendent de la demande
            locale, du profil de consommation des voisins, et des conditions
            d&rsquo;ensoleillement de votre site. Le prix moyen retenu ({KWH_PRICE}{' '}
            GNF/kWh) est aligné avec le pilote SoliBox de Conakry.
          </p>
        </div>
      </div>
    </section>
  );
};

const CalcSlider: React.FC<{
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}> = ({ label, value, unit, min, max, step, onChange }) => (
  <div>
    <div className="flex items-baseline justify-between mb-3">
      <span className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500">
        {label}
      </span>
      <span className="font-display font-semibold text-3xl text-ink-900 dark:text-paper leading-none tabular-nums">
        {value}
        <span className="text-base text-ink-500 dark:text-ink-400 ml-2 font-sans font-normal">{unit}</span>
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      aria-label={label}
      className="w-full h-px bg-ink-200 dark:bg-ink-700 appearance-none cursor-pointer accent-solar-600"
    />
    <div className="flex justify-between text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500 mt-2">
      <span>{min} {unit}</span>
      <span>{max} {unit}</span>
    </div>
  </div>
);

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <dt className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500 mb-1">
      {label}
    </dt>
    <dd className="text-sm text-ink-900 dark:text-paper">{value}</dd>
  </div>
);
