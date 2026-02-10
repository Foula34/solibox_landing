import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Foula Fofana',
      role: 'Développeur',
      image: "assets/equipe/foula.jpg",
      linkedin: 'https://www.linkedin.com/in/foula-fofana-1769782a5/',
      github: 'https://github.com/Foula34',
      email: 'fofanafoula70@gmail.com'
    },
    {
      name: 'Hawa Barry',
      role: 'Designer',
      image: "assets/equipe/hawa.jpg",
      linkedin: 'https://www.linkedin.com/in/hawa-barry-7b92b6336',
      github: '#',
      email: 'hawab5139@gmail.com'
    },
    {
      name: 'Boubacar Diallo',
      role: 'Ingénieur IOT',
      image: "assets/equipe/boubacar.jpg",
      linkedin: 'https://www.linkedin.com/in/thierno-boubacar-diallo-711b41349',
      github: '#',
      email: 'siddiguediallo2000@gmail.com'
    },
    {
      name: 'Alseny Bangoura',
      role: 'Financier',
      image: "assets/equipe/alseny.jpg",
      linkedin: 'http://www.linkedin.com/in/alseny-gn',
      github: '#',
      email: 'bangoura33072@gmail.com'
    },
    {
      name: 'Sekou Doumbouya',
      role: 'Développeur IA',
      image: "assets/equipe/sekou.jpg",
      linkedin: 'https://www.linkedin.com/in/sekou-doumbouya-a51143254',
      github: 'https://huggingface.co/doumbouyasekou',
      email: 'doumbouyasekou967@gmail.com'
    }
  ];

  return (
    <section id="team" className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Notre équipe
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Une équipe passionnée qui révolutionne l'accès à l'énergie en Afrique.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card p-8 text-center hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover ring-4 ring-accent-100 dark:ring-accent-950/30"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-accent-500 font-medium mb-6">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                {member.github !== '#' && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
