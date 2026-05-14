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
    image: 'assets/equipe/foula.jpeg',
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
        <header data-reveal className="max-w-3xl mb-16 lg:mb-20">
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

        {/* Atelier block — portrait photo (5 cols) + transition copy (7 cols).
            Exploits the natural verticality of a portrait shot instead of cropping it. */}
        <div data-reveal className="grid grid-cols-12 gap-y-10 lg:gap-x-16 mb-24 lg:mb-32">
          <figure className="col-span-12 sm:col-span-6 lg:col-span-5">
            <div className="relative aspect-[3/4] bg-mist dark:bg-ink-800 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-600 mb-2">
                    Photo équipe en atelier
                  </p>
                  <p className="text-xs text-ink-400 dark:text-ink-600">
                    /public/assets/equipe/atelier.jpeg
                  </p>
                </div>
              </div>
              <img
                src="/assets/equipe/atelier.jpeg"
                alt="L'équipe SoliBox au travail, Conakry"
                className="relative w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <figcaption className="mt-4 text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
              Fab Lab · Orange Digital Center · Conakry
            </figcaption>
          </figure>

          <div className="col-span-12 sm:col-span-6 lg:col-span-7 lg:pt-10 flex flex-col">
            <p className="eyebrow mb-6">En atelier</p>
            <h3 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] mb-8">
              C&rsquo;est ici que{' '}
              <span className="text-solar-600 dark:text-solar-400">SoliBox s&rsquo;écrit.</span>
            </h3>
            <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 max-w-md">
              L&rsquo;atelier SoliBox prend forme au sein du Fab Lab d&rsquo;
              <span className="text-solar-600 dark:text-solar-400 font-medium">
                Orange Digital Center
              </span>
              {' '}à Conakry. Pas d&rsquo;open-space industriel, pas de salles
              vitrées — juste cinq personnes, chacune en train de construire
              la pièce qu&rsquo;elle comprend mieux que tout le monde.
            </p>
          </div>
        </div>

        {/* Subsection separator — bridges the atelier block and the individual roster */}
        <div data-reveal className="pt-10 border-t border-mist dark:border-ink-800 mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Profils</p>
            <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em]">
              Qui fait quoi.
            </h3>
          </div>
          <p className="text-sm text-ink-500 dark:text-ink-400 max-w-xs">
            Cinq parcours distincts, un point commun : construire à Conakry.
          </p>
        </div>

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
