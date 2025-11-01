import React, { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

interface RevenueCalculatorProps {
  onClose: () => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onClose }) => {
  const [dailySurplus, setDailySurplus] = useState(8);
  const [pricePerKwh, setPricePerKwh] = useState(200);
  const [sharingPercentage, setSharingPercentage] = useState(40);

  const monthlyRevenue = Math.round(
    (dailySurplus * 30 * (sharingPercentage / 100)) * pricePerKwh
  );
  const annualRevenue = monthlyRevenue * 12;

  const handleSubmit = () => {
    onClose();
    // Rediriger vers le formulaire de contact après un court délai
    setTimeout(() => {
      scrollToSection('#contact');
    }, 300);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl mb-4">
          <Calculator className="w-8 h-8 text-gray-700 dark:text-gray-300" />
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Estimez vos revenus potentiels avec SoliBox
        </p>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Surplus quotidien moyen (kWh)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="50"
              value={dailySurplus}
              onChange={(e) => setDailySurplus(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-600 focus:border-gray-600 outline-none transition-colors duration-300"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">kWh/jour</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Prix par kWh (GNF)
          </label>
          <input
            type="number"
            min="0"
            max="1000"
            value={pricePerKwh}
            onChange={(e) => setPricePerKwh(Number(e.target.value))}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-600 focus:border-gray-600 outline-none transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pourcentage de surplus partagé: {sharingPercentage}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={sharingPercentage}
            onChange={(e) => setSharingPercentage(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Revenus estimés</span>
        </div>
        <div className="text-center space-y-3">
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {monthlyRevenue.toLocaleString()} GNF
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">par mois</div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
            <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              {annualRevenue.toLocaleString()} GNF
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">par an</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleSubmit}
          className="flex-1 bg-orange-600 text-white font-semibold py-3 rounded-xl hover:bg-orange-700 transition-all duration-300"
        >
          En savoir plus
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-3 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

