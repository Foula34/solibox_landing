import React, { useEffect, useRef, useState } from 'react';
import { Building2, Globe } from 'lucide-react';

export const Partners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01, rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight + 500 && rect.bottom > -500;
        if (isInViewport) {
          setIsVisible(true);
        }
      }
    };

    checkVisibility();
    const timeoutId = setTimeout(checkVisibility, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const partners = [
    {
      name: 'Orange',
      logo: "assets/partenaires/orange.png", 
      description: 'Partenaire télécommunications et connectivité',
      website: 'https://www.orange.com'
    },
    {
      name: 'PNUD',
      logo: "assets/partenaires/pnud.png", 
      description: 'Programme des Nations Unies pour le Développement',
      website: 'https://www.undp.org'
    },
    {
      name: 'AWS',
      logo: "assets/partenaires/aws.png", 
      description: 'Amazon Web Services - Infrastructure cloud',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Orange Energies',
      logo: "assets/partenaires/orange-energie.jpeg", 
      description: 'Solutions énergétiques innovantes',
      website: 'https://www.orange.com'
    }
  ];

  return (
    <section id="partners" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Nos 
              <span className="text-gray-900 dark:text-white"> Partenaires</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Des partenaires de confiance qui partagent notre vision et nous accompagnent dans cette révolution énergétique
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center"
                >
                  {/* Partner Logo */}
                  <div className="mb-6 h-24 sm:h-32 flex items-center justify-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`Logo ${partner.name}`}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Building2 className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300" />
                      </div>
                    )}
                  </div>

                  {/* Partner Info */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {partner.description}
                  </p>
                </a>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-900 dark:bg-gray-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white border border-gray-700 inline-block">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-orange-600 mr-3" />
                <p className="text-base sm:text-lg text-gray-300">
                  Vous souhaitez devenir partenaire ?
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block bg-orange-600 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    const headerHeight = 80;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

