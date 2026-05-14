import React from 'react';

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email: string;
};

const team: Member[] = [
  {
    name: 'Foula Fofana',
    role: 'Développeur · Co-fondateur',
    image: 'assets/equipe/foula.jpg',
    linkedin: 'https://www.linkedin.com/in/foula-fofana-1769782a5/',
    github: 'https://github.com/Foula34',
    email: 'fofanafoula70@gmail.com',
  },
  {
    name: 'Hawa Barry',
    role: 'Designer produit',
    image: 'assets/equipe/hawa.jpg',
    linkedin: 'https://www.linkedin.com/in/hawa-barry-7b92b6336',
    email: 'hawab5139@gmail.com',
  },
  {
    name: 'Boubacar Diallo',
    role: 'Ingénieur IoT',
    image: 'assets/equipe/boubacar.jpg',
    linkedin: 'https://www.linkedin.com/in/thierno-boubacar-diallo-711b41349',
    email: 'siddiguediallo2000@gmail.com',
  },
  {
    name: 'Alseny Bangoura',
    role: 'Finance & opérations',
    image: 'assets/equipe/alseny.jpg',
    linkedin: 'http://www.linkedin.com/in/alseny-gn',
    email: 'bangoura33072@gmail.com',
  },
  {
    name: 'Sékou Doumbouya',
    role: 'IA & optimisation',
    image: 'assets/equipe/sekou.jpg',
    linkedin: 'https://www.linkedin.com/in/sekou-doumbouya-a51143254',
    github: 'https://huggingface.co/doumbouyasekou',
    email: 'doumbouyasekou967@gmail.com',
  },
];

export const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        {/* Header */}
        <header className="max-w-3xl mb-20 lg:mb-24">
          <p className="eyebrow mb-6">L’équipe</p>
          <h2 className="headline-section mb-8">
            Cinq personnes,{' '}
            <span className="text-ink-500 dark:text-ink-400 font-normal">
              une seule mission.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            SoliBox est construit à Conakry par une équipe pluridisciplinaire
            — ingénierie, design, finance, IA. Chaque décision technique est
            prise par celui ou celle qui l&rsquo;implémente.
          </p>
        </header>

        {/* Roster — square portraits, no ring, no circle, no fake animations */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {team.map((m) => (
            <li key={m.email} className="flex flex-col">
              <div className="aspect-square overflow-hidden bg-mist dark:bg-ink-800 mb-6">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale-[0.15] hover:grayscale-0 transition-[filter] duration-500"
                  loading="lazy"
                />
              </div>

              <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400 mb-2">
                {m.role}
              </p>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] mb-5">
                {m.name}
              </h3>

              {/* Social as plain text links, inline */}
              <p className="text-sm text-ink-500 dark:text-ink-400 flex flex-wrap items-center gap-x-1">
                {m.linkedin && (
                  <>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-mist dark:border-ink-800 hover:text-ink-900 hover:border-ink-900 dark:hover:text-paper dark:hover:border-paper transition-colors pb-px"
                    >
                      LinkedIn
                    </a>
                    <span className="text-ink-300 dark:text-ink-700 mx-1.5">·</span>
                  </>
                )}
                {m.github && (
                  <>
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-mist dark:border-ink-800 hover:text-ink-900 hover:border-ink-900 dark:hover:text-paper dark:hover:border-paper transition-colors pb-px"
                    >
                      {m.github.includes('huggingface') ? 'Hugging Face' : 'GitHub'}
                    </a>
                    <span className="text-ink-300 dark:text-ink-700 mx-1.5">·</span>
                  </>
                )}
                <a
                  href={`mailto:${m.email}`}
                  className="border-b border-mist dark:border-ink-800 hover:text-ink-900 hover:border-ink-900 dark:hover:text-paper dark:hover:border-paper transition-colors pb-px"
                >
                  Email
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
