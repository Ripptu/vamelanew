import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export function FreeDraftSection() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    goal: '',
    style: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hallo! Ich hätte gerne einen Gratis Website-Entwurf.\n\nWer bin ich: ${formData.name}\nWas mache ich: ${formData.business}\nZiel der Website: ${formData.goal}\nGewünschter Stil: ${formData.style}`;
    
    const whatsappUrl = `https://wa.me/4917624200179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="gratis-entwurf" className="py-16 md:py-32 bg-white relative overflow-hidden" aria-labelledby="free-draft-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-6 sm:p-10 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-slate-200 relative overflow-hidden"
        >
          <div className="text-center mb-8 md:mb-12 relative z-10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 text-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-slate-200">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            </div>
            <h2 id="free-draft-title" className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4 md:mb-6">
              Dein Gratis Website-Entwurf.
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto px-2">
              Lass uns dir zeigen, wie deine neue Website aussehen könnte. Ein individueller, professioneller Entwurf – komplett kostenlos und unverbindlich.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-3xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <label htmlFor="draft-name" className="block text-xs md:text-sm font-medium text-slate-900 ml-1">Wer bist du?</label>
                <input 
                  id="draft-name"
                  required
                  type="text" 
                  className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900"
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
                  className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900"
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
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900 min-h-[100px] md:min-h-[120px] resize-y"
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
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm md:text-base text-slate-900"
                placeholder="Ideen: minimalistisch, dunkel, hell, modern, clean"
                value={formData.style}
                onChange={(e) => setFormData({...formData, style: e.target.value})}
              />
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
