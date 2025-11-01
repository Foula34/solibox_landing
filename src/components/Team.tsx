import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Github, Mail, User, Zap } from 'lucide-react';

export const Team: React.FC = () => {
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

  const teamMembers = [
    {
      name: 'Foula Fofana',
      role: 'Développeur',
      bio: 'Ingénieur logiciel passionné par les solutions énergétiques durables',
      image: "assets/equipe/foula.jpg",
      linkedin: 'https://www.linkedin.com/in/foula-fofana-1769782a5/',
      github: 'https//github.com/Foula34',
      email: 'fofanafoula70@gmail.com'
    },
    {
      name: 'Hawa Barry',
      role: 'Designer',
      bio: 'Experte en design UX/UI avec une passion pour les énergies renouvelables',
      image: null,
      linkedin: '#',
      github: '#',
      email: 'membre2@solibox.com'
    },
    {
      name: 'Boubacar Diallo',
      role: 'Ingénieur IOT',
      bio: 'Spécialiste en solutions IoT pour la gestion intelligente de l\'énergie',
      image: null,
      linkedin: '#',
      github: '#',
      email: 'membre3@solibox.com'
    },
    {
      name: 'Alseny Bangoura',
      role: 'Financier et Responsable Communication',
      bio: 'Expert en finance et communication pour les projets durables',
      image: null,
      linkedin: '#',
      github: '#',
      email: 'membre4@solibox.com'
    },
    {
      name: 'Sekou Doumbouya',
      role: 'Développeur IA',
      bio: 'Développeur spécialisé en intelligence artificielle appliquée aux énergies renouvelables',
      image: null,
      linkedin: '#',
      github: '#',
      email: 'membre5@solibox.com'
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Notre 
              <span className="text-gray-900 dark:text-white"> Équipe</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Rencontrez l'équipe passionnée qui œuvre chaque jour pour révolutionner l'accès à l'énergie en Afrique
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Member Photo */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-orange-600 dark:text-orange-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

