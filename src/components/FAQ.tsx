import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

type Item = {
  question: string;
  answer: string;
};

const faqs: Item[] = [
  {
    question: 'Comment fonctionne SoliBox concrètement ?',
    answer:
      'SoliBox est un boîtier installé en aval de votre onduleur solaire. Il détecte le surplus que vous n’utilisez pas et le redirige automatiquement vers les foyers voisins sous contrat. Chaque kilowattheure redistribué est mesuré et rémunéré.',
  },
  {
    question: 'Combien puis-je espérer gagner par mois ?',
    answer:
      'Pour une installation de 3 kW avec un surplus partagé de 40 %, le revenu mensuel projeté est d’environ 30 000 GNF. C’est une estimation issue du modèle économique — elle sera affinée à partir des données réelles du premier pilote village. Le calculateur de la section Modèle économique permet de simuler votre cas.',
  },
  {
    question: 'Ai-je besoin d’une installation solaire existante ?',
    answer:
      'Oui. SoliBox s’ajoute à une installation déjà en place. Si vous n’en avez pas encore — c’est souvent le cas dans les villages cibles — l’équipe peut vous orienter vers des installateurs solaires partenaires et intégrer l’ensemble dans un projet pilote.',
  },
  {
    question: 'L’installation modifie-t-elle mon système solaire ?',
    answer:
      'Non. Le boîtier se branche en aval de l’onduleur, sans intervention sur le câblage solaire et sans remettre en cause la garantie constructeur. L’installation prend 48 h, mise en service comprise.',
  },
  {
    question: 'Que se passe-t-il si je n’ai pas de surplus à un moment donné ?',
    answer:
      'Votre consommation est toujours prioritaire. SoliBox ne redirige que ce qui dépasse vos besoins instantanés. Si vous ne produisez pas de surplus, vous ne partagez rien — et ne percevez pas de revenu sur cette plage.',
  },
  {
    question: 'Comment suis-je payé ?',
    answer:
      'Mensuellement, en GNF, par Orange Money, MTN Money, ou virement bancaire selon votre préférence. Aucune retenue minimum, aucun seuil de versement.',
  },
  {
    question: 'Quel est le prix du boîtier ?',
    answer:
      'Le boîtier prototype est proposé à 1 500 000 GNF en achat direct, ou en location-vente à environ 60 000 GNF/mois pendant 36 mois (vous conservez 100 % des revenus surplus et le boîtier devient votre propriété au terme). Pour les déploiements pilotes en village portés par une ONG, une fondation ou un programme, des modalités spécifiques sont possibles — sans apport initial, via partage de revenus.',
  },
  {
    question: 'SoliBox est-il fait pour les villages ?',
    answer:
      'Oui — c’est précisément la cible prioritaire. SoliBox vise les villages d’intérieur Guinée où le réseau est intermittent ou absent. Une connexion mobile basique (2G/3G) suffit pour la télémétrie. Le premier pilote terrain est prévu en intérieur Guinée pour 2027, dès que le financement est sécurisé.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-sand dark:bg-ink-900"
    >
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          {/* Left: header + secondary CTA */}
          <header data-reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow mb-6">FAQ</p>
            <h2 className="headline-section mb-8">
              Questions{' '}
              <span className="text-ink-500 dark:text-ink-400 font-normal">
                fréquentes.
              </span>
            </h2>
            <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 mb-6 max-w-sm">
              Pas trouvé votre cas ? La page contact est ouverte aux producteurs
              comme aux bénéficiaires.
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              Poser une question
            </button>
          </header>

          {/* Right: accordion */}
          <ul className="col-span-12 lg:col-span-8 border-t border-mist dark:border-ink-800">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={i}
                  className="border-b border-mist dark:border-ink-800"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <span className="text-base sm:text-lg text-ink-900 dark:text-paper font-medium leading-snug group-hover:text-solar-700 dark:group-hover:text-solar-400 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-6 h-6 text-ink-500 dark:text-ink-400"
                      aria-hidden
                    >
                      <Plus
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 text-base leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
