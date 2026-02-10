import React from 'react';
import { Battery, Share2, DollarSign, Smartphone } from 'lucide-react';

export const Solution: React.FC = () => {
  const features = [
    {
      icon: Battery,
      title: 'Stockage intelligent',
      description: 'SoliBox stocke automatiquement votre surplus d\'énergie solaire et le redistribue de manière optimale.',
    },
    {
      icon: Share2,
      title: 'Partage communautaire',
      description: 'Partagez votre énergie avec vos voisins et créez un réseau énergétique local résilient.',
    },
    {
      icon: DollarSign,
      title: 'Revenus passifs',
      description: 'Générez des revenus en vendant votre surplus d\'énergie à votre communauté.',
    },
    {
      icon: Smartphone,
      title: 'Gestion mobile',
      description: 'Contrôlez et surveillez votre production, consommation et revenus depuis votre smartphone.',
    },
  ];

  return (
    <section id="solution" className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
              La solution SoliBox
              <span className="text-accent-500">.</span>
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed mb-12">
              Une plateforme complète qui transforme votre installation solaire en source de revenus tout en renforçant votre communauté.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-950/30 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative animate-slide-in-right">
            {/* Video Demo */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary-900">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/wd5hOg3iOJc"
                    title="Démonstration SoliBox"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Video overlay decoration */}
                <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};