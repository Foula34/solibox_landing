import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Solution', href: '#solution' },
    { name: 'Avantages', href: '#benefits' },
    { name: 'Impact', href: '#impact' },
    { name: 'Équipe', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-primary-900 dark:bg-primary-950 text-white">
      <div className="container-custom section-padding">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              SoliBox
              <span className="text-accent-500">.</span>
            </div>
            <p className="text-primary-300 leading-relaxed mb-6">
              Révolutionnons l'accès à l'énergie en Afrique en transformant le surplus solaire en revenus.
            </p>
            <div className="space-y-2 text-sm text-primary-400">
              <div>solidboxosc@gmail.com</div>
              <div>+224 624 36 68 97</div>
              <div>Conakry, Guinée</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-300 hover:text-accent-500 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="font-semibold mb-4">Impact</h3>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-accent-500">500+</div>
                <div className="text-sm text-primary-400">Foyers connectés</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-500">2.5M</div>
                <div className="text-sm text-primary-400">kWh partagés</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-500">85%</div>
                <div className="text-sm text-primary-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-800 text-center text-sm text-primary-400">
          <p>© {currentYear} SoliBox. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};