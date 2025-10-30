import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: 'Foula Fofana',
      role: 'Propriétaire de panneaux solaires',
      location: 'Conakry, Guinée',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Grâce à SoliBox, je génère 3,500 GNF par mois avec mon surplus solaire. Cela couvre mes frais d\'électricité et me laisse même un bénéfice pour ma famille.',
      impact: '+3,500 GNF/mois',
      before: 'Surplus gaspillé',
      after: 'Revenus réguliers'
    },
    {
      name: 'Alseny Bangoura',
      role: 'Commerçant',
      location: 'Labé, Guinée',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Mon petit commerce bénéficie maintenant d\'une électricité stable grâce aux panneaux solaires de mes voisins. Je peux enfin travailler le soir et mes clients sont contents.',
      impact: 'Électricité stable 24/7',
      before: 'Coupures fréquentes',
      after: 'Commerce prospère'
    },
    {
      name: 'Boubacar Diallo',
      role: 'Responsable communautaire',
      location: 'Kankan, Guinée',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'SoliBox a transformé notre quartier. 15 familles partagent maintenant leur énergie solaire, créant une véritable solidarité énergétique. C\'est l\'avenir!',
      impact: '15 familles connectées',
      before: 'Foyers isolés',
      after: 'Micro-réseau communautaire'
    },
    {
      name: 'Hawa Barry',
      role: 'Enseignante',
      location: 'Boké, Guinée',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Mes enfants peuvent maintenant étudier le soir avec un éclairage stable. L\'énergie partagée de nos voisins nous aide énormément, et c\'est moins cher que le générateur.',
      impact: '50% d\'économies',
      before: 'Générateur bruyant et cher',
      after: 'Énergie propre et abordable'
    }
  ];

  const impactStats = [
    { value: '500+', label: 'Familles connectées', unit: '' },
    { value: '2.5M', label: 'kWh partagés', unit: '' },
    { value: '1.8M', label: 'GNF économisés', unit: '' },
    { value: '85%', label: 'Satisfaction utilisateurs', unit: '' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, currentTestimonial]);

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Histoires d'
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez comment SoliBox transforme la vie des communautés en Guinée
            </p>
          </div>

          {/* Impact Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Before/After Visual */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Transformation d'un quartier avec SoliBox
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 flex items-center">
                     Avant SoliBox
                  </h4>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800/30">
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Surplus solaire gaspillé (40% de l'énergie produite)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Voisins dépendants de générateurs coûteux et polluants</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Coupures d'électricité fréquentes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Pas de revenus additionnels pour les propriétaires</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 flex items-center">
                     Avec SoliBox
                  </h4>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orane-800/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800/30">
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>100% du surplus solaire valorisé et partagé</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Énergie propre et abordable pour tous les voisins</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Alimentation électrique stable 24/7</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Revenus passifs de 200,000-500,000 GNF/mois</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Témoignages de notre communauté
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Les vraies histoires de transformation grâce à SoliBox
              </p>
            </div>

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl overflow-hidden">
              {/* Background Quote */}
              <div className="absolute top-4 right-4 opacity-5">
                <Quote className="w-32 h-32 text-gray-600" />
              </div>

              <div className="relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : index < currentTestimonial 
                          ? 'opacity-0 -translate-x-full absolute inset-0' 
                          : 'opacity-0 translate-x-full absolute inset-0'
                    }`}
                  >
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* User Info */}
                      <div className="text-center md:text-left">
                        <div className="inline-block relative mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-orange-200 dark:border-orange-800"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full p-2">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs mb-3">
                          {testimonial.location}
                        </p>
                        
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="md:col-span-2 space-y-6">
                        <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
                            <div className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">
                              Impact
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                              {testimonial.impact}
                            </div>
                          </div>
                          
                          <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl">
                            <div className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">
                              Avant
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                              {testimonial.before}
                            </div>
                          </div>
                          
                          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
                            <div className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">
                              Après
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                              {testimonial.after}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-orange-500 w-8' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors duration-300 group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};