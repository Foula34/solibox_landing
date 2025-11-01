import React, { useState } from 'react';
import { Zap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 2000);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } catch (error) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 2000);
    }
  };

  const footerLinks = {
    product: [
      { name: 'Comment ça marche', href: '#solution' },
      { name: 'Tarifs', href: '#earnings' },
      { name: 'Installation', href: '#contact' },
      { name: 'Support technique', href: '#contact' }
    ],
    company: [
      { name: 'À propos', href: '#hero' },
      { name: 'Notre mission', href: '#impact' },
      { name: 'Roadmap', href: '#roadmap' },
      { name: 'Carrières', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Guide d\'installation', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    legal: [
      { name: 'Politique de confidentialité', href: '#' },
      { name: 'Conditions d\'utilisation', href: '#' },
      { name: 'Mentions légales', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/solibox', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/solibox', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/solibox', color: 'hover:text-gray-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/solibox', color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="h-8 w-8 text-orange-600" />
                <div className="absolute inset-0 bg-orange-600 rounded-full blur-lg opacity-10"></div>
              </div>
              <span className="text-xl font-bold text-white">
                SoliBox
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Révolutionnons l'accès à l'énergie en Afrique en transformant le surplus solaire en revenus et en énergie partagée pour tous.
            </p>

            <div className="space-y-3">
              <a 
                href="mailto:solidboxosc@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-gray-100 transition-colors duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm">solidboxosc@gmail.com</span>
              </a>
              <a 
                href="tel:+224624366897"
                className="flex items-center space-x-3 text-gray-300 hover:text-gray-100 transition-colors duration-300 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">+224 624 36 68 97</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Conakry, Guinée</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-800 rounded-lg hover:bg-gray-700 ${social.color} transition-all duration-300 group`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Produit</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        if (link.href !== '#') {
                          scrollToSection(link.href);
                        }
                      }
                    }}
                    className="text-gray-300 hover:text-gray-100 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        if (link.href !== '#') {
                          scrollToSection(link.href);
                        }
                      }
                    }}
                    className="text-gray-300 hover:text-gray-100 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        if (link.href !== '#') {
                          scrollToSection(link.href);
                        }
                      }
                    }}
                    className="text-gray-300 hover:text-gray-100 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        if (link.href !== '#') {
                          scrollToSection(link.href);
                        }
                      }
                    }}
                    className="text-gray-300 hover:text-gray-100 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Restez connecté à l'innovation énergétique
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Recevez les dernières actualités de SoliBox et les opportunités de revenus
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 md:ml-8 mt-4 md:mt-0">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="w-full sm:flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 outline-none transition-colors duration-300 text-sm sm:text-base"
              />
              <button 
                type="submit"
                disabled={newsletterStatus !== 'idle'}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'success' ? '✓ Inscrit' : newsletterStatus === 'error' ? '✕ Erreur' : "S'inscrire"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SoliBox. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Alimenté par l'énergie solaire</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 font-medium">En ligne</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold  mb-1">500+</div>
              <div className="text-xs text-gray-400">Foyers connectés</div>
            </div>
            <div>
              <div className="text-2xl font-bold  mb-1">2.5M</div>
              <div className="text-xs text-gray-400">kWh partagés</div>
            </div>
            <div>
              <div className="text-2xl font-bold  mb-1">15M</div>
              <div className="text-xs text-gray-400">GNF économisés</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className="text-xs text-gray-400">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};