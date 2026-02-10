import React, { useState, useEffect } from 'react';

export const SocialProof: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState(0);

  const proofs = [
    { name: 'Mamadou', city: 'Conakry', action: 'vient de s\'inscrire' },
    { name: 'Fatoumata', city: 'Kindia', action: 'a installé SoliBox' },
    { name: 'Ibrahim', city: 'Labé', action: 'a gagné 125,000 GNF ce mois' },
    { name: 'Aissatou', city: 'Kankan', action: 'vient de rejoindre' },
    { name: 'Ousmane', city: 'Conakry', action: 'partage son énergie' },
  ];

  useEffect(() => {
    // Show first proof after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next proof after 15 seconds
    const nextTimer = setTimeout(() => {
      setCurrentProof((prev) => (prev + 1) % proofs.length);
      setIsVisible(true);
    }, 15000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, currentProof, proofs.length]);

  const proof = proofs[currentProof];

  return (
    <div
      className={`fixed bottom-8 left-8 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="card p-4 shadow-2xl max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">
              {proof.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-primary-900 dark:text-white truncate">
              {proof.name} de {proof.city}
            </p>
            <p className="text-xs text-primary-600 dark:text-primary-400 truncate">
              {proof.action}
            </p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};
