import React, { useEffect, useRef, useState } from 'react';
import { DollarSign, Users, Shield, Leaf, Home, TrendingUp } from 'lucide-react';

export const Benefits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      category: 'Producteurs',
      title: 'Monétisez votre surplus',
      description: 'Transformez votre énergie solaire inutilisée en revenus passifs réguliers',
      icon: DollarSign,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      features: [
        'Revenus automatiques 24/7',
        'Tarifs préférentiels garantis',
        'Retour sur investissement accéléré'
      ]
    },
    {
      category: 'Voisins',
      title: 'Électricité abordable',
      description: 'Accédez à une énergie propre et fiable à des prix compétitifs',
      icon: Home,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      features: [
        'Tarifs jusqu\'à 30% moins chers',
        'Alimentation stable et continue',
        'Support technique inclus'
      ]
    },
    {
      category: 'Communautés',
      title: 'Réseaux résilients',
      description: 'Créez des micro-réseaux communautaires autonomes et solidaires',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      features: [
        'Indépendance énergétique',
        'Solidarité communautaire',
        'Développement local durable'
      ]
    },
    {
      category: 'Environnement',
      title: 'Impact écologique',
      description: 'Réduisez les émissions et optimisez l\'utilisation d\'énergies renouvelables',
      icon: Leaf,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      features: [
        'Zéro émission carbone',
        'Réduction du gaspillage énergétique',
        'Promotion des énergies vertes'
      ]
    }
  ];

  const stats = [
    { value: '+40%', label: 'Revenus supplémentaires', icon: TrendingUp, color: 'text-orange-500' },
    { value: '24/7', label: 'Disponibilité énergétique', icon: Shield, color: 'text-orange-500' },
    { value: '100%', label: 'Énergie renouvelable', icon: Leaf, color: 'text-orange-500' },
    { value: '300+', label: 'Familles connectées', icon: Users, color: 'text-orange-500' }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi choisir
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"> SoliBox?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une solution gagnant-gagnant pour tous les acteurs de la chaîne énergétique
            </p>
          </div>

          {/* Stats Row */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative p-8 bg-gradient-to-br ${benefit.bgColor} rounded-2xl border border-white/20 dark:border-gray-700/30 backdrop-blur-sm transition-all duration-500 group cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${isHovered ? 'scale-105 shadow-2xl' : 'hover:scale-102'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden rounded-2xl">
                    <IconComponent className="w-full h-full transform rotate-12 translate-x-4 -translate-y-4" />
                  </div>

                  {/* Category badge */}
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${benefit.color} text-white text-xs font-medium rounded-full mb-4`}>
                    {benefit.category}
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>

                    <ul className="space-y-3 pt-4">
                      {benefit.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-center space-x-3 transition-all duration-300 ${
                            isHovered ? 'translate-x-2' : ''
                          }`}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${benefit.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Prêt à transformer votre surplus solaire en revenus?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Rejoignez des centaines de familles qui génèrent déjà des revenus avec leur énergie solaire excédentaire
              </p>
              <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Découvrir mes revenus potentiels
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};