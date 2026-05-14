import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success';

const interestOptions = [
  'Je veux installer SoliBox chez moi',
  'Je souhaite recevoir de l’énergie',
  'Je représente une organisation ou un programme',
  'Je suis investisseur',
  'Presse / autre',
];

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [data, setData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setData({ name: '', email: '', interest: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-paper dark:bg-ink-950"
    >
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
          {/* Left: editorial column with direct details */}
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow mb-6">Contact</p>
            <h2 className="headline-section mb-8">
              Parlons{' '}
              <span className="text-solar-600 dark:text-solar-400">
                concrètement.
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300 mb-12 max-w-md">
              Que vous soyez foyer producteur, futur bénéficiaire, partenaire
              institutionnel ou investisseur — un seul point d&rsquo;entrée.
            </p>

            {/* Plain text contact lines, no icon boxes */}
            <dl className="space-y-6 border-t border-mist dark:border-ink-800 pt-8">
              <ContactLine label="Email">
                <a
                  href="mailto:contact@soliboxgn.com"
                  className="text-ink-900 dark:text-paper border-b border-mist dark:border-ink-800 hover:border-ink-900 dark:hover:border-paper transition-colors pb-px"
                >
                  contact@soliboxgn.com
                </a>
              </ContactLine>
              <ContactLine label="Téléphone">
                <a
                  href="tel:+224624366897"
                  className="text-ink-900 dark:text-paper border-b border-mist dark:border-ink-800 hover:border-ink-900 dark:hover:border-paper transition-colors pb-px"
                >
                  +224 624 36 68 97
                </a>
              </ContactLine>
              <ContactLine label="Bureau">
                <span className="text-ink-900 dark:text-paper">
                  Conakry, Guinée
                </span>
              </ContactLine>
              <ContactLine label="Réponse">
                <span className="text-ink-600 dark:text-ink-400">
                  Sous 48 h ouvrées
                </span>
              </ContactLine>
            </dl>
          </div>

          {/* Right: editorial form */}
          <div className="col-span-12 lg:col-span-7">
            {status === 'success' ? (
              <div className="border-t border-mist dark:border-ink-800 pt-12">
                <p className="eyebrow mb-6">Message reçu</p>
                <h3 className="font-display font-semibold text-4xl sm:text-5xl text-ink-900 dark:text-paper leading-tight tracking-[-0.015em] mb-6">
                  Merci.
                </h3>
                <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 max-w-md">
                  Votre message est arrivé. L&rsquo;équipe SoliBox vous recontacte
                  sous 48 h ouvrées à l&rsquo;adresse indiquée.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-10 border-t border-mist dark:border-ink-800 pt-8">
                <Field
                  label="Nom complet"
                  name="name"
                  required
                  value={data.name}
                  onChange={onChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={data.email}
                  onChange={onChange}
                />
                <Field
                  label="Sujet"
                  name="interest"
                  required
                  value={data.interest}
                  onChange={onChange}
                  asSelect
                  options={interestOptions}
                />
                <Field
                  label="Message"
                  name="message"
                  value={data.message}
                  onChange={onChange}
                  asTextarea
                />

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>
                      {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-xs text-ink-500 dark:text-ink-400">
                    En envoyant, vous acceptez d&rsquo;être recontacté par
                    l&rsquo;équipe SoliBox.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLine: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="grid grid-cols-12 gap-4 items-baseline">
    <dt className="col-span-4 text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
      {label}
    </dt>
    <dd className="col-span-8 text-base">{children}</dd>
  </div>
);

const Field: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  type?: string;
  required?: boolean;
  asTextarea?: boolean;
  asSelect?: boolean;
  options?: string[];
}> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
  asTextarea,
  asSelect,
  options,
}) => {
  const baseInputClass =
    'block w-full bg-transparent border-0 border-b border-mist dark:border-ink-800 py-3 text-base text-ink-900 dark:text-paper placeholder:text-ink-400 dark:placeholder:text-ink-600 focus:border-ink-900 dark:focus:border-paper focus:outline-none focus:ring-0 transition-colors';

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-eyebrow text-ink-500 dark:text-ink-400 mb-3"
      >
        {label}
        {required && <span className="text-solar-600 dark:text-solar-400 ml-1">*</span>}
      </label>

      {asTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={3}
          className={`${baseInputClass} resize-none`}
          placeholder="Quelques mots sur votre demande…"
        />
      ) : asSelect ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputClass} pr-8 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%238A8275%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22 clip-rule=%22evenodd%22/></svg>')] bg-no-repeat bg-[right_0.25rem_center]`}
        >
          <option value="" disabled>
            Sélectionner un sujet
          </option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseInputClass}
        />
      )}
    </div>
  );
};
