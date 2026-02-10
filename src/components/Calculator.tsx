import React, { useState } from 'react';
import { Zap, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Calculator: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [solarPower, setSolarPower] = useState(3); // kW
  const [sunHours, setSunHours] = useState(6); // heures/jour
  const [sharePercent, setSharePercent] = useState(40); // % partagé

  // Calculs
  const dailyProduction = solarPower * sunHours; // kWh/jour
  const monthlyProduction = dailyProduction * 30; // kWh/mois
  const sharedEnergy = (monthlyProduction * sharePercent) / 100; // kWh partagés
  const monthlyRevenue = sharedEnergy * 150; // GNF (prix moyen: 150 GNF/kWh)
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <section id="calculator" ref={ref} className="section-padding bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Calculez vos revenus
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Estimez combien vous pouvez gagner avec SoliBox
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Inputs */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8">
                Vos paramètres
              </h3>

              {/* Solar Power */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Puissance solaire
                  </label>
                  <span className="text-2xl font-bold text-accent-500">
                    {solarPower} kW
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={solarPower}
                  onChange={(e) => setSolarPower(Number(e.target.value))}
                  className="w-full h-2 bg-primary-200 dark:bg-primary-700 rounded-lg appearance-none cursor-pointer accent-accent-500"
                />
                <div className="flex justify-between text-xs text-primary-500 dark:text-primary-400 mt-1">
                  <span>1 kW</span>
                  <span>10 kW</span>
                </div>
              </div>

              {/* Sun Hours */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Heures d'ensoleillement/jour
                  </label>
                  <span className="text-2xl font-bold text-accent-500">
                    {sunHours}h
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.5"
                  value={sunHours}
                  onChange={(e) => setSunHours(Number(e.target.value))}
                  className="w-full h-2 bg-primary-200 dark:bg-primary-700 rounded-lg appearance-none cursor-pointer accent-accent-500"
                />
                <div className="flex justify-between text-xs text-primary-500 dark:text-primary-400 mt-1">
                  <span>3h</span>
                  <span>12h</span>
                </div>
              </div>

              {/* Share Percent */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Surplus partagé
                  </label>
                  <span className="text-2xl font-bold text-accent-500">
                    {sharePercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={sharePercent}
                  onChange={(e) => setSharePercent(Number(e.target.value))}
                  className="w-full h-2 bg-primary-200 dark:bg-primary-700 rounded-lg appearance-none cursor-pointer accent-accent-500"
                />
                <div className="flex justify-between text-xs text-primary-500 dark:text-primary-400 mt-1">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Monthly Revenue */}
            <div className="card p-8 ring-2 ring-accent-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  Revenus mensuels
                </h3>
              </div>
              <div className="text-5xl font-bold text-accent-500 mb-2">
                {monthlyRevenue.toLocaleString('fr-FR')} GNF
              </div>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Soit {sharedEnergy.toFixed(1)} kWh partagés par mois
              </p>
            </div>

            {/* Yearly Revenue */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-200 dark:bg-primary-800 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  Revenus annuels
                </h3>
              </div>
              <div className="text-4xl font-bold text-primary-900 dark:text-white mb-2">
                {yearlyRevenue.toLocaleString('fr-FR')} GNF
              </div>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Production totale: {monthlyProduction.toFixed(0)} kWh/mois
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-accent-500 mb-1">
                  {dailyProduction.toFixed(1)}
                </div>
                <div className="text-xs text-primary-600 dark:text-primary-400">
                  kWh/jour
                </div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-accent-500 mb-1">
                  {(monthlyRevenue / 30).toFixed(0)}
                </div>
                <div className="text-xs text-primary-600 dark:text-primary-400">
                  GNF/jour
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href="#contact" className="btn-primary w-full text-center block">
              Commencer à gagner
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-primary-500 dark:text-primary-400 mt-12 max-w-2xl mx-auto">
          * Estimation basée sur un prix moyen de 150 GNF/kWh. Les revenus réels peuvent varier selon la demande locale et les conditions d'ensoleillement.
        </p>
      </div>
    </section>
  );
};
