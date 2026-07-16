import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Info } from 'lucide-react';
import { sanitize, isBot, limitLength } from '../lib/security';

export function FreeDraftSection() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    goal: '',
    style: '',
    subscription: '',
    honeypot: '' // Anti-spam honeypot
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security: Bot check
    if (isBot(formData.honeypot)) {
      console.warn('Bot detected');
      return;
    }

    // Security: Sanitize and limit length
    const sanitizedName = sanitize(limitLength(formData.name, 100));
    const sanitizedBusiness = sanitize(limitLength(formData.business, 100));
    const sanitizedGoal = sanitize(limitLength(formData.goal, 1000));
    const sanitizedStyle = sanitize(limitLength(formData.style, 100));
    const sanitizedSubscription = sanitize(limitLength(formData.subscription || 'Noch unentschlossen', 100));

    const message = `Hallo! Ich hätte gerne einen Gratis Website-Entwurf.\n\nWer bin ich: ${sanitizedName}\nWas mache ich: ${sanitizedBusiness}\nZiel der Website: ${sanitizedGoal}\nGewünschter Stil: ${sanitizedStyle}\nGewünschtes Abo: ${sanitizedSubscription}`;
    
    const whatsappUrl = `https://wa.me/4917624200179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="gratis-entwurf" className="py-16 md:py-32 bg-transparent relative overflow-hidden" aria-labelledby="free-draft-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white  p-5 sm:p-10 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-slate-200 relative overflow-hidden"
        >
          <div className="text-center mb-8 md:mb-12 relative z-10">
            <h2 id="free-draft-title" className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4 md:mb-6">
              Dein Gratis <span className="font-serif italic text-primary font-normal">Website-Entwurf.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto px-2">
              Lass mich dir zeigen, wie deine neue Website aussehen könnte. Ein individueller, professioneller Entwurf – komplett kostenlos und unverbindlich.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-3xl mx-auto relative z-10">
            {/* Honeypot field - hidden from users */}
            <div className="hidden" aria-hidden="true">
              <input 
                type="text" 
                name="honeypot" 
                tabIndex={-1} 
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <label htmlFor="draft-name" className="block text-xs md:text-sm font-medium text-slate-900 ml-1">Wer bist du?</label>
                <input 
                  id="draft-name"
                  required
                  type="text" 
                  maxLength={100}
                  className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white  focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900"
                  placeholder="Dein Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label htmlFor="draft-business" className="block text-xs md:text-sm font-medium text-slate-900 ml-1">Was machst du?</label>
                <input 
                  id="draft-business"
                  required
                  type="text" 
                  maxLength={100}
                  className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white  focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900"
                  placeholder="Dein Business / Deine Tätigkeit"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label htmlFor="draft-goal" className="block text-xs md:text-sm font-medium text-slate-900 ml-1">Was willst du mit deiner Website erreichen?</label>
              <textarea 
                id="draft-goal"
                required
                maxLength={1000}
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white  focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900 min-h-[100px] md:min-h-[120px] resize-y"
                placeholder="Dein Ziel (z.B. mehr Anfragen, Image-Aufbau...)"
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label htmlFor="draft-style" className="block text-xs md:text-sm font-medium text-slate-900 ml-1">Gewünschter Stil?</label>
              <input 
                id="draft-style"
                type="text"
                maxLength={100}
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white  focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900"
                placeholder="Ideen: minimalistisch, dunkel, hell, modern, clean"
                value={formData.style}
                onChange={(e) => setFormData({...formData, style: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <div className="flex items-center gap-2 ml-1">
                <label htmlFor="draft-subscription" className="block text-xs md:text-sm font-medium text-slate-900">Welches Abo möchtest du?</label>
                <a href="#zahlung" title="Zur Preisübersicht" className="text-slate-400 hover:text-primary transition-colors">
                  <Info className="w-4 h-4" />
                </a>
              </div>
              <select
                id="draft-subscription"
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white  focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm md:text-base text-slate-900 appearance-none"
                value={formData.subscription}
                onChange={(e) => setFormData({...formData, subscription: e.target.value})}
              >
                <option value="" disabled>Bitte wählen (optional)</option>
                <option value="Noch unentschlossen">Ich weiß es noch nicht</option>
                <option value="Digitale Visitenkarte">Digitale Visitenkarte</option>
                <option value="Lokal-Dominanz">Lokal-Dominanz</option>
                <option value="Premium Partner">Premium Partner (VIP)</option>
              </select>
            </div>
            
            <div className="pt-4 md:pt-6">
              <button
                type="submit"
                className="group w-full bg-primary hover:bg-primary-hover text-white py-3 md:py-4 px-6 md:px-8 rounded-full font-medium text-base md:text-lg flex items-center justify-center gap-3 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <span>Jetzt Gratis-Entwurf anfordern</span>
                <Send className="w-4 h-4 text-white/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
