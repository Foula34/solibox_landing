import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { scrollToSection } from '../utils/scrollUtils';

const navLinks = [
  { label: 'Solution', href: '#solution' },
  { label: 'Produit', href: '#product' },
  { label: 'Tarification', href: '#earnings' },
  { label: 'Impact', href: '#impact' },
  { label: 'Équipe', href: '#team' },
  { label: 'Feuille de route', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Confidentialité', href: '#' },
  { label: 'CGU', href: '#' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/solibox-gn/',
    icon: Linkedin,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18yf69myKQ',
    icon: Facebook,
  },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-paper">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        {/* Top — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-12 mb-16 lg:mb-20">
          {/* Brand & contact */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/logo/soliboxlogo-removebg-preview.png"
                alt=""
                className="h-8 w-8 object-contain brightness-0 invert"
              />
              <span className="font-display font-semibold text-2xl tracking-[-0.01em]">SoliBox</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-300 max-w-sm mb-8">
              SoliBox redistribue le surplus solaire de votre toit aux foyers
              voisins non raccordés, et le convertit en revenu mensuel. Pilote
              à Conakry.
            </p>
            <dl className="space-y-2.5 text-sm">
              <ContactRow label="Email">
                <a
                  href="mailto:contact@soliboxgn.com"
                  className="text-paper hover:text-solar-400 transition-colors"
                >
                  contact@soliboxgn.com
                </a>
              </ContactRow>
              <ContactRow label="Tél.">
                <a
                  href="tel:+224624366897"
                  className="text-paper hover:text-solar-400 transition-colors"
                >
                  +224 624 36 68 97
                </a>
              </ContactRow>
              <ContactRow label="Bureau">
                <span className="text-paper">Conakry, Guinée</span>
              </ContactRow>
            </dl>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(l.href);
                    }}
                    className="text-sm text-ink-300 hover:text-paper transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 mb-5">
              Légal
            </p>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-300 hover:text-paper transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-eyebrow text-ink-500 mb-5">
              Suivez-nous
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-paper transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row — copyright + theme toggle */}
        <div className="pt-8 border-t border-ink-800 flex flex-col sm:flex-row gap-6 sm:justify-between sm:items-center">
          <p className="text-xs text-ink-500">
            © {year} SoliBox · Construit à Conakry. Tous droits réservés.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

const ContactRow: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="flex gap-3">
    <dt className="text-ink-500 w-16 flex-shrink-0">{label}</dt>
    <dd>{children}</dd>
  </div>
);
