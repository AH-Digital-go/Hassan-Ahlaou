
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
        'service_q3szv07',
        'template_5ejv2m5',
        formRef.current,
        'Zsp7rnfRIjfWHUcDB'
      )
      .then(() => {
        alert('Message envoyé avec succès !');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Erreur lors de l'envoi du message.");
      });
  };


  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">TRAVAILLONS<br />ENSEMBLE</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Prêt·e à transformer votre activité avec l’IA ? Profitez de solutions sur mesure, d’aides au financement et d’un accompagnement complet pour passer à l’action dès aujourd’hui.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-green-foreground" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">automation@ahdigital.tech </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-green-foreground" />
                </div>
                <div>
                  <div className="text-white font-semibold">Téléphone</div>
                  <div className="text-gray-400">0636308953</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-green-foreground" />
                </div>
                <div>
                  <div className="text-white font-semibold">Localisation</div>
                  <div className="text-gray-400">Technopark Route National N°10</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Heures du travail</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9:00 AM - 18:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10:00 AM - 13:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Envoyer un Message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom</label>
                  <input 
                  name='prenom'
                    type="text" 
                    className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent-green focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <input 
                  name='nom'
                    type="text" 
                    className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent-green focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                name='email'
                  type="email" 
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent-green focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Sujet</label>
                <input 
                name='sujet'
                  type="text" 
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent-green focus:outline-none transition-colors"
                  placeholder="Business Consultation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                name='message'
                  rows={5}
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent-green focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent-green text-accent-green-foreground font-semibold py-4 rounded-xl hover:bg-accent-green/90 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Contactez Nous</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-20 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Hassan AHLAOU. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
