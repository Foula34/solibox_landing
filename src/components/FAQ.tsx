import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const FAQ: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Comment fonctionne SoliBox ?',
      answer: 'SoliBox est un système intelligent qui stocke votre surplus d\'énergie solaire et le redistribue automatiquement à votre communauté. Vous gagnez des revenus pour chaque kWh partagé.'
    },
    {
      question: 'Combien puis-je gagner avec SoliBox ?',
      answer: 'En moyenne, nos utilisateurs génèrent entre 50,000 et 150,000 GNF par mois selon leur production solaire et la demande locale. Utilisez notre calculateur pour une estimation personnalisée.'
    },
    {
      question: 'Ai-je besoin d\'une installation solaire existante ?',
      answer: 'Oui, SoliBox s\'installe sur votre système solaire existant. Si vous n\'en avez pas encore, nous pouvons vous mettre en relation avec nos partenaires installateurs.'
    },
    {
      question: 'L\'installation est-elle compliquée ?',
      answer: 'Non ! Nos techniciens certifiés s\'occupent de tout. L\'installation prend environ 2-3 heures et ne nécessite aucune modification majeure de votre installation existante.'
    },
    {
      question: 'Que se passe-t-il si ma batterie est vide ?',
      answer: 'SoliBox priorise toujours vos besoins en énergie. Le partage ne se fait que sur le surplus disponible. Vous gardez le contrôle total via l\'application mobile.'
    },
    {
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Aucun frais caché. Vous payez uniquement l\'équipement SoliBox et l\'installation. Nous prenons une petite commission (10%) sur les revenus générés pour maintenir la plateforme.'
    },
    {
      question: 'Comment suis-je payé ?',
      answer: 'Les paiements sont effectués mensuellement directement sur votre compte mobile money (Orange Money, MTN, etc.) ou par virement bancaire selon votre préférence.'
    },
    {
      question: 'SoliBox fonctionne-t-il en zone rurale ?',
      answer: 'Absolument ! SoliBox est spécialement conçu pour les zones rurales et péri-urbaines où l\'accès à l\'électricité est limité. Une connexion internet basique suffit.'
    }
  ];

  return (
    <section id="faq" ref={ref} className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Questions fréquentes
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Tout ce que vous devez savoir sur SoliBox
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-primary-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-primary-600 dark:text-primary-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-primary-600 dark:text-primary-400 mb-4">
            Vous avez d'autres questions ?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};
