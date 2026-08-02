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

const KWH_PRICE = 1500; // GNF / kWh — prix estimé sur le marché
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
      'Vous financez le boîtier en une fois et commencez à rentabiliser votre installation solaire dès le premier jour.',
    terms: [
      'Propriété immédiate du boîtier SoliBox',
      'Conservez 90% des revenus générés (10% de frais plateforme & Mobile Money)',
      'Maintenance & Support inclus la première année',
      'Garantie constructeur',
    ],
  },
  {
    key: 'location-vente',
    label: 'Rentabilisation Progressive (Location-vente)',
    price: '60 000',
    priceUnit: `GNF / mois × ${LEASE_MONTHS} mois`,
    forWho:
      'Ne déboursez pas une grosse somme au départ. Le boîtier s\'autofinance grâce à l\'énergie que vous revendez à vos voisins.',
    terms: [
      'Investissement initial réduit',
      'Paiement lissé sur 36 mois (financé par vos gains)',
      'Transfert de propriété automatique au terme du contrat',
      'Maintenance & Assistance technique incluses',
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
              Une seule promesse : amorti en quelques mois.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            Le boîtier SoliBox est un produit de haute précision actuellement
            assemblé à l&rsquo;unité. Nos prix reflètent ce statut
            d&rsquo;innovation et diminueront lors de la production
            industrielle post-pilote.
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
            <span className="text-ink-900 dark:text-paper font-medium">
              Projets Impact & Pilotes Ruraux
            </span>
            <br />
            Vous êtes une ONG, une fondation ou un bailleur de fonds ? Nous
            déployons des micro-grids ruraux sur mesure avec un modèle de
            partage de revenus sans apport initial requis.
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary self-start"
          >
            Discuter d&rsquo;un pilote institutionnel
          </button>
        </div>

        {/* Scenarios / Table */}
        <div className="mb-24 lg:mb-28">
          <header className="mb-10">
            <p className="eyebrow mb-4">Potentiel de gains</p>
            <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] max-w-xl">
              Des revenus proportionnels à votre installation.
            </h3>
          </header>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-mist dark:border-ink-800">
                  <th className="py-4 px-4 font-semibold text-ink-900 dark:text-paper text-sm">Profil Producteur</th>
                  <th className="py-4 px-4 font-semibold text-ink-900 dark:text-paper text-sm">Nombre de foyers raccordés</th>
                  <th className="py-4 px-4 font-semibold text-ink-900 dark:text-paper text-sm">Estimation Gain Mensuel (Net)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist dark:divide-ink-800 text-sm">
                <tr className="hover:bg-ink-50 dark:hover:bg-ink-900/50 transition-colors">
                  <td className="py-4 px-4 text-ink-700 dark:text-ink-300">
                    <span className="font-medium text-ink-900 dark:text-paper block mb-1">Basic</span>
                    Petite installation
                  </td>
                  <td className="py-4 px-4 text-ink-700 dark:text-ink-300">1 foyer voisin</td>
                  <td className="py-4 px-4 font-semibold text-solar-600 dark:text-solar-400">100 000 – 150 000 GNF</td>
                </tr>
                <tr className="hover:bg-ink-50 dark:hover:bg-ink-900/50 transition-colors">
                  <td className="py-4 px-4 text-ink-700 dark:text-ink-300">
                    <span className="font-medium text-ink-900 dark:text-paper block mb-1">Standard</span>
                    Installation moyenne
                  </td>
                  <td className="py-4 px-4 text-ink-700 dark:text-ink-300">2 à 3 foyers voisins</td>
                  <td className="py-4 px-4 font-semibold text-solar-600 dark:text-solar-400">250 000 – 450 000 GNF</td>
                </tr>
                <tr className="hover:bg-ink-50 dark:hover:bg-ink-900/50 transition-colors">
                  <td className="py-4 px-4 text-ink-700 dark:text-ink-300">
                    <span className="font-medium text-ink-900 dark:text-paper block mb-1">Pro</span>
                    Grande installation
                  </td>
                  <td className="py-4 px-4 text-ink-700 dark:text-ink-300">4+ foyers / Boutiques</td>
                  <td className="py-4 px-4 font-semibold text-solar-600 dark:text-solar-400">+ 600 000 GNF</td>
                </tr>
              </tbody>
            </table>
          </div>
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
