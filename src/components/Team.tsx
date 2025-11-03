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
      github: 'https://github.com/Foula34',
      email: 'fofanafoula70@gmail.com'
    },
    {
      name: 'Hawa Barry',
      role: 'Designer',
      bio: 'Experte en design UX/UI avec une passion pour les énergies renouvelables',
      image: "assets/equipe/hawa.jpg",
      linkedin: 'https://www.linkedin.com/in/hawa-barry-7b92b6336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: '#',
      email: 'hawab5139@gmail.com'
    },
    {
      name: 'Boubacar Diallo',
      role: 'Ingénieur IOT',
      bio: 'Spécialiste en solutions IoT pour la gestion intelligente de l\'énergie',
      image: "assets/equipe/boubacar.jpg",
      linkedin: 'https://www.linkedin.com/in/thierno-boubacar-diallo-711b41349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: '#',
      email: 'siddiguediallo2000@gmail.com'
    },
    {
      name: 'Alseny Bangoura',
      role: 'Financier et Responsable Communication',
      bio: 'Expert en finance et communication pour les projets durables',
      image: "assets/equipe/alseny.jpg",
      linkedin: 'http://www.linkedin.com/in/alseny-gn',
      github: '#',
      email: 'bangoura33072@gmail.com'
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Member Photo */}
                <div className="relative mb-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold mb-1.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-1.5 pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
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

