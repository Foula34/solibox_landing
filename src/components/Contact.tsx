import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      // Simulation d'envoi - À remplacer par un vrai appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Ici vous pouvez ajouter l'appel API réel :
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      
      // Reset to idle after showing success
      setTimeout(() => {
        setFormStatus('idle');
      }, 4000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 2000);
      return;
    }

    try {
      // Simulation d'envoi - À remplacer par un vrai appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } catch (error) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'solidboxosc@gmail.com',
      description: 'Écrivez-nous pour toute question',
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+224 624 36 68 97',
      description: 'Appelez-nous du lundi au vendredi',
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Conakry, Guinée',
      description: 'Notre siège social en Guinée',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const interestOptions = [
    'Je veux installer SoliBox chez moi',
    'Je souhaite acheter de l\'énergie partagée',
    'Je veux devenir partenaire/revendeur',
    'Je représente une organisation/ONG',
    'Je suis investisseur',
    'Autre demande'
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Rejoignez la révolution énergétique
              <br className="hidden sm:block" />
              <span className="text-gray-900 dark:text-white">
                Partagez, alimentez, gagnez
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Prêt à transformer votre surplus solaire en revenus ? Contactez-nous pour commencer votre parcours SoliBox
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Commençons la conversation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Que vous souhaitiez installer SoliBox, devenir partenaire, ou simplement en savoir plus sur notre mission, 
                  nous sommes là pour vous accompagner dans votre transition énergétique.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const isEmail = info.title === 'Email';
                  const isPhone = info.title === 'Téléphone';
                  
                  const handleClick = () => {
                    if (isEmail) {
                      window.location.href = `mailto:${info.value}`;
                    } else if (isPhone) {
                      window.location.href = `tel:${info.value.replace(/\s/g, '')}`;
                    }
                  };
                  
                  return (
                    <div
                      key={index}
                      onClick={handleClick}
                      className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 group cursor-pointer ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 bg-gradient-to-r ${info.gradient} rounded-xl group-hover:shadow-lg transition-shadow duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-300 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  📧 Restez informé
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Recevez les dernières nouvelles de SoliBox et les opportunités de revenus dans votre région
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-gray-600 outline-none transition-colors duration-300"
                  />
                  <button 
                    type="submit"
                    disabled={newsletterStatus !== 'idle'}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {newsletterStatus === 'success' ? '✓' : newsletterStatus === 'error' ? '✕' : "S'abonner"}
                  </button>
                </form>
                {newsletterStatus === 'success' && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">Merci pour votre inscription !</p>
                )}
                {newsletterStatus === 'error' && (
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">Veuillez entrer un email valide.</p>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Message envoyé avec succès!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Merci pour votre intérêt. Notre équipe vous contactera dans les 24 heures.
                    </p>
                    <button
                    onClick={() => {
                      setFormStatus('idle');
                      scrollToSection('#contact');
                    }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Envoyer un autre message
                  </button>
                  </div>
                ) : formStatus === 'error' ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-6">
                      <X className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Erreur lors de l'envoi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Une erreur s'est produite. Veuillez réessayer plus tard.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Réessayer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Demande de contact
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-600 focus:border-gray-600 outline-none transition-colors duration-300"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-600 focus:border-gray-600 outline-none transition-colors duration-300"
                          placeholder="+224 XXX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Je m'intéresse à *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors duration-300"
                      >
                        <option value="">Sélectionnez votre intérêt</option>
                        {interestOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors duration-300 resize-none"
                        placeholder="Décrivez votre projet ou vos questions..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full bg-orange-600 text-white font-semibold py-4 rounded-xl hover:bg-orange-700 hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe concernant SoliBox.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};