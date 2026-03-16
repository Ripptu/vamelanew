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
    <section id="gratis-entwurf" className="py-24 md:py-32 bg-white relative overflow-hidden" aria-labelledby="free-draft-title">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-10 sm:p-14 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-black/5 relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
              <Sparkles className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 id="free-draft-title" className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Dein Gratis Website-Entwurf.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Lass uns dir zeigen, wie deine neue Website aussehen könnte. Ein individueller, professioneller Entwurf – komplett kostenlos und unverbindlich.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="draft-name" className="block text-sm font-medium text-slate-700 ml-1">Wer bist du?</label>
                <input 
                  id="draft-name"
                  required
                  type="text" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200/60 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  placeholder="Dein Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="draft-business" className="block text-sm font-medium text-slate-700 ml-1">Was machst du?</label>
                <input 
                  id="draft-business"
                  required
                  type="text" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200/60 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  placeholder="Dein Business / Deine Tätigkeit"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="draft-goal" className="block text-sm font-medium text-slate-700 ml-1">Was willst du mit deiner Website erreichen?</label>
              <textarea 
                id="draft-goal"
                required
                className="w-full px-5 py-4 rounded-2xl border border-slate-200/60 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 min-h-[120px] resize-y"
                placeholder="Dein Ziel (z.B. mehr Anfragen, Image-Aufbau...)"
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="draft-style" className="block text-sm font-medium text-slate-700 ml-1">Gewünschter Stil?</label>
              <input 
                id="draft-style"
                type="text"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200/60 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900"
                placeholder="Ideen: minimalistisch, dunkel, hell, modern, clean"
                value={formData.style}
                onChange={(e) => setFormData({...formData, style: e.target.value})}
              />
            </div>
            
            <div className="pt-6">
              <button
                type="submit"
                className="group w-full bg-slate-900 hover:bg-slate-800 text-white py-4 px-8 rounded-full font-medium text-lg flex items-center justify-center gap-3 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
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
