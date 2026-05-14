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

const KWH_PRICE = 200; // GNF / kWh — modèle pilote
const BOX_PRICE = 1_500_000; // GNF — prix prototype achat direct
const LEASE_MONTHLY = 60_000; // GNF / mois indicatif
const LEASE_MONTHS = 36;

const plans: Plan[] = [
  {
    key: 'achat',
    label: 'Achat direct',
    price: '1 500 000',
    priceUnit: 'GNF · prix prototype',
    forWho:
      'Vous avez la capacité d’investir le boîtier en une fois. Vous conservez 100 % des revenus surplus dès l’installation.',
    terms: [
      'Boîtier propriété immédiate',
      'Aucun engagement, aucune part sur les revenus',
      'Maintenance première année incluse',
      'Garantie constructeur',
    ],
  },
  {
    key: 'location-vente',
    label: 'Location-vente',
    price: '60 000',
    priceUnit: `GNF / mois × ${LEASE_MONTHS} mois`,
    forWho:
      'Vous préférez répartir le coût sur trois ans. Vous gardez 100 % des revenus surplus, le boîtier devient votre propriété à terme.',
    terms: [
      `${LEASE_MONTHS} mensualités fixes`,
      'Transfert de propriété au terme du contrat',
      'Maintenance et support inclus pendant la location',
      'Sortie anticipée possible (modalités sur demande)',
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
  const amortMonths = monthlyRevenue > 0 ? Math.ceil(BOX_PRICE / monthlyRevenue) : Infinity;

  const formatGNF = (n: number) =>
    new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n);

  const formatAmort = () => {
    if (!Number.isFinite(amortMonths)) return '—';
    const years = Math.floor(amortMonths / 12);
    const months = amortMonths % 12;
    if (years === 0) return `${amortMonths} mois`;
    if (months === 0) return `${years} an${years > 1 ? 's' : ''}`;
    return `${years} an${years > 1 ? 's' : ''} ${months} mois`;
  };

  return (
    <section
      id="earnings"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        {/* Header */}
        <header data-reveal className="max-w-3xl mb-20 lg:mb-24">
          <p className="eyebrow mb-6">Modèle économique</p>
          <h2 className="headline-section mb-8">
            Deux formules.{' '}
            <span className="text-ink-500 dark:text-ink-400 font-normal">
              Une seule promesse : aucun frais caché.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            Le boîtier SoliBox est un prototype actuellement fabriqué à
            l&rsquo;unité. Le prix reflète ce statut, et baissera mécaniquement
            avec la production en série une fois le pilote terrain validé.
          </p>
        </header>

        {/* Two-formula grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-divide mb-16 lg:mb-20">
          {plans.map((plan) => (
            <article key={plan.key} className="card-stat flex flex-col">
              <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500 mb-6">
                {plan.label}
              </p>

              <p className="font-display font-bold text-5xl lg:text-6xl text-ink-900 dark:text-paper leading-[0.95] tracking-[-0.02em] tabular-nums">
                {plan.price}
              </p>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                {plan.priceUnit}
              </p>

              <hr className="border-mist dark:border-ink-800 my-8" />

              <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300 mb-8 max-w-sm">
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

        {/* Pilot village line — dedicated funding model */}
        <div className="mb-24 lg:mb-28 pt-8 border-t border-mist dark:border-ink-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <p className="text-base sm:text-lg leading-relaxed text-ink-700 dark:text-ink-300 max-w-2xl">
            Pour les{' '}
            <span className="text-ink-900 dark:text-paper font-medium">
              déploiements pilotes en milieu rural
            </span>
            {' '}— portés par une ONG, une fondation, une agence ou un programme
            de financement — les modalités sont calibrées au cas par cas, avec
            modèle de partage de revenus possible sans apport initial.
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary self-start"
          >
            Discuter d&rsquo;un pilote
          </button>
        </div>

        {/* Inline calculator */}
        <div>
          <header className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-4">Projection</p>
              <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] max-w-xl">
                Estimer revenu et amortissement.
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
                  Revenu mensuel projeté
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
                <Stat label="Production / mois" value={`${formatGNF(monthlyProduction)} kWh`} />
                <Stat label="Surplus partagé" value={`${formatGNF(sharedEnergy)} kWh / mois`} />
                <Stat
                  label="Amortissement achat"
                  value={formatAmort()}
                  highlight
                />
                <Stat
                  label="Coût location-vente"
                  value={`${formatGNF(LEASE_MONTHLY * LEASE_MONTHS)} GNF total`}
                />
              </dl>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-ink-500 dark:text-ink-400 max-w-2xl">
            Projection indicative basée sur un tarif de {KWH_PRICE} GNF/kWh et un
            prix prototype de {formatGNF(BOX_PRICE)} GNF. Les revenus réels
            dépendront de la demande locale, du profil de consommation des
            voisins et des conditions d&rsquo;ensoleillement. Les chiffres
            seront ajustés à l&rsquo;issue du premier pilote terrain.
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

const Stat: React.FC<{ label: string; value: string; highlight?: boolean }> = ({
  label,
  value,
  highlight,
}) => (
  <div>
    <dt className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500 mb-1">
      {label}
    </dt>
    <dd
      className={`text-sm ${
        highlight
          ? 'text-solar-600 dark:text-solar-400 font-medium'
          : 'text-ink-900 dark:text-paper'
      }`}
    >
      {value}
    </dd>
  </div>
);
