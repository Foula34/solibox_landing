import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulation - remplacer par un vrai appel API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@soliboxgn.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+224 624 36 68 97',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Conakry, Guinée',
    }
  ];

  const interestOptions = [
    'Je veux installer SoliBox',
    'Je souhaite acheter de l\'énergie',
    'Je veux devenir partenaire',
    'Je représente une organisation',
    'Je suis investisseur',
    'Autre'
  ];

  return (
    <section id="contact" className="section-padding bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6">
            Contactez-nous
            <span className="text-accent-500">.</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed">
            Prêt à transformer votre surplus solaire en revenus ? Parlons-en.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="card p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-950/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="card p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    Nous vous recontacterons sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl focus-accent"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl focus-accent"
                        placeholder="+224 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl focus-accent"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Je m'intéresse à *
                    </label>
                    <select
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl focus-accent"
                    >
                      <option value="">Sélectionnez</option>
                      {interestOptions.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl focus-accent resize-none"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{formStatus === 'loading' ? 'Envoi...' : 'Envoyer'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};