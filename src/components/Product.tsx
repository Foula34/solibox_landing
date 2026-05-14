import React from 'react';

type Screen = {
  label: string;
  caption: string;
  src: string;
  skeleton: 'dashboard' | 'detail' | 'payment';
};

// Mobile app screens. Drop your Samsung captures at the paths below
// (rename your files to match exactly). Each capture replaces the
// fallback skeleton automatically when present.
const screens: Screen[] = [
  {
    label: 'Côté producteur',
    caption:
      'Production solaire en temps réel, surplus partagé avec les voisins et revenu mensuel cumulé.',
    src: '/assets/app/producer.jpeg',
    skeleton: 'dashboard',
  },
  {
    label: 'Côté consommateur',
    caption:
      'Consommation, foyer producteur source et coût estimé du kWh redistribué.',
    src: '/assets/app/consumer.jpeg',
    skeleton: 'detail',
  },
  {
    label: 'Versement consommateur',
    caption:
      'Facturation mensuelle réglée en mobile money — Orange Money, MTN, ou virement bancaire.',
    src: '/assets/app/payment.jpeg',
    skeleton: 'payment',
  },
];

export const Product: React.FC = () => {
  return (
    <section
      id="product"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        {/* Header */}
        <header className="max-w-3xl mb-20 lg:mb-24">
          <p className="eyebrow mb-6">Le produit</p>
          <h2 className="headline-section mb-8">
            Du matériel à l&rsquo;app,{' '}
            <span className="text-solar-600 dark:text-solar-400">
              conçus à Conakry.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            SoliBox fonctionne comme un marketplace énergétique en
            pair-à-pair. Un boîtier physique relie chaque toit producteur à
            ses foyers voisins consommateurs, et l&rsquo;application gère les
            deux côtés du flux — avec des vues distinctes pour qui produit et
            qui consomme.
          </p>
        </header>

        {/* Hardware block */}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16 mb-24 lg:mb-32">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-6">Matériel</p>
            <BoitierPhoto />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-12">
            <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] mb-6">
              Le boîtier prototype.
            </h3>
            <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 mb-6 max-w-md">
              Le boîtier s&rsquo;intercale entre votre onduleur solaire et le
              compteur. Il mesure la production en temps réel et redirige le
              surplus vers les foyers voisins sous contrat — sans batterie,
              sans intervention sur le câblage solaire.
            </p>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8 pt-6 border-t border-mist dark:border-ink-800 text-sm">
              <Spec label="Mesure" value="Par seconde" />
              <Spec label="Connectivité" value="2G / 3G" />
              <Spec label="Capacité" value="1 – 8 kW" />
              <Spec label="Origine" value="Conçu à Conakry" />
            </dl>
          </div>
        </div>

        {/* Software block — 3 phone mockups */}
        <div>
          <div className="flex items-end justify-between mb-10 lg:mb-14">
            <div>
              <p className="eyebrow mb-4">Application mobile</p>
              <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink-900 dark:text-paper leading-tight tracking-[-0.01em] max-w-xl">
                Deux rôles, une seule app.
              </h3>
            </div>
            <p className="hidden md:block text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-500">
              Android · iOS · Q3 2026
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {screens.map((screen) => (
              <li key={screen.label}>
                <PhoneFrame label={screen.label} src={screen.src} skeleton={screen.skeleton} />
                <p className="mt-6 text-sm leading-relaxed text-ink-600 dark:text-ink-300 max-w-xs">
                  {screen.caption}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// === Sub-components ===

const Spec: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <dt className="text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-500 mb-1">
      {label}
    </dt>
    <dd className="text-ink-900 dark:text-paper">{value}</dd>
  </div>
);

// Photo of the prototype box. File served from /public/assets/app/boitier.jpeg.
// If missing, the placeholder behind shows through.
const BoitierPhoto: React.FC = () => (
  <figure className="relative w-full aspect-[5/4] bg-mist dark:bg-ink-800 overflow-hidden">
    {/* Placeholder behind, visible if image fails */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-eyebrow text-ink-400 dark:text-ink-600 mb-2">
          Photo prototype
        </p>
        <p className="text-xs text-ink-400 dark:text-ink-600">
          /public/assets/app/boitier.jpeg
        </p>
      </div>
    </div>
    <img
      src="/assets/app/boitier.jpeg"
      alt="Prototype du boîtier SoliBox"
      className="relative w-full h-full object-cover"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
  </figure>
);

// Mobile phone mockup — minimal frame, drop screenshot at src.
const PhoneFrame: React.FC<{ label: string; src: string; skeleton: Screen['skeleton'] }> = ({
  label,
  src,
  skeleton,
}) => (
  <figure className="flex flex-col">
    <div className="relative mx-auto w-full max-w-[240px]">
      <div className="relative aspect-[9/19.5] rounded-[2rem] border-[5px] border-ink-900 dark:border-ink-700 overflow-hidden bg-paper dark:bg-ink-900">
        {/* Skeleton fallback */}
        <ScreenSkeleton type={skeleton} />
        {/* Real screenshot — drops over the skeleton when the file exists */}
        <img
          src={src}
          alt={`Capture d'écran SoliBox — ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
    </div>
    <figcaption className="mt-5 text-center text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
      {label}
    </figcaption>
  </figure>
);

// Skeleton UI shown when no screenshot is provided yet — gives the page
// a finished look during dev and acts as a fallback in production.
const ScreenSkeleton: React.FC<{ type: Screen['skeleton'] }> = ({ type }) => {
  const Block = ({ className }: { className: string }) => (
    <div className={`bg-ink-100 dark:bg-ink-800 ${className}`} />
  );

  if (type === 'dashboard') {
    return (
      <div className="absolute inset-0 flex flex-col p-5 pt-10 gap-3">
        <Block className="h-3 w-16 rounded-sm" />
        <Block className="h-12 w-32 rounded-sm" />
        <Block className="h-px w-full bg-mist dark:bg-ink-800" />
        <div className="mt-2">
          <Block className="h-2 w-10 rounded-sm mb-2" />
          {/* fake chart */}
          <svg viewBox="0 0 160 60" className="w-full h-16">
            <polyline
              points="0,45 20,40 40,42 60,30 80,25 100,15 120,18 140,12 160,8"
              fill="none"
              stroke="#FF9900"
              strokeWidth="1.5"
            />
            <polyline
              points="0,45 20,40 40,42 60,30 80,25 100,15 120,18 140,12 160,8 160,60 0,60"
              fill="#FF9900"
              opacity="0.08"
            />
          </svg>
        </div>
        <Block className="h-2 w-20 rounded-sm mt-2" />
        <Block className="h-8 w-full rounded-sm" />
        <Block className="h-8 w-full rounded-sm" />
        <Block className="h-8 w-full rounded-sm" />
      </div>
    );
  }

  if (type === 'detail') {
    return (
      <div className="absolute inset-0 flex flex-col p-5 pt-10 gap-3">
        <Block className="h-3 w-20 rounded-sm" />
        <Block className="h-8 w-24 rounded-sm" />
        {/* fake hourly bars */}
        <div className="flex items-end gap-1 h-24 mt-3">
          {[35, 50, 65, 80, 95, 88, 72, 60, 48, 35].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 bg-ink-200 dark:bg-ink-700"
            />
          ))}
        </div>
        <Block className="h-2 w-16 rounded-sm mt-2" />
        <Block className="h-px w-full bg-mist dark:bg-ink-800 my-2" />
        <Block className="h-10 w-full rounded-sm" />
        <Block className="h-10 w-full rounded-sm" />
      </div>
    );
  }

  // payment
  return (
    <div className="absolute inset-0 flex flex-col p-5 pt-10 gap-3">
      <Block className="h-3 w-20 rounded-sm" />
      <Block className="h-px w-full bg-mist dark:bg-ink-800" />
      <div className="space-y-3 mt-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1">
              <Block className="h-6 w-6 rounded-full" />
              <div className="flex-1 space-y-1">
                <Block className="h-2 w-3/4 rounded-sm" />
                <Block className="h-2 w-1/2 rounded-sm" />
              </div>
            </div>
            <Block className="h-2 w-8 rounded-sm" />
          </div>
        ))}
      </div>
      <Block className="h-px w-full bg-mist dark:bg-ink-800 mt-2" />
      <Block className="h-10 w-full rounded-sm bg-solar-500/30 dark:bg-solar-500/30" />
    </div>
  );
};
