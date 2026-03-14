import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export function FreeDraftSection() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    goal: '',
    style: 'minimalistisch'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hallo! Ich hätte gerne einen Gratis Website-Entwurf.
    
    Wer bin ich: ${formData.name}
    Was mache ich: ${formData.business}
    Ziel der Website: ${formData.goal}
    Gewünschter Stil: ${formData.style}`;
    
    const whatsappUrl = `https://wa.me/4915121111111?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-12 rounded-3xl border border-slate-100 shadow-sm"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-4xl md:text-5xl text-slate-900 mb-6">
              Dein Gratis Website-Entwurf
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Willst du dir einen professionellen Website-Entwurf erstellen lassen, der deine Marke perfekt repräsentiert – <strong>komplett kostenlos und ohne einen Cent auszugeben?</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Wer bist du?</label>
              <input 
                required
                type="text" 
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Dein Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Was machst du?</label>
              <input 
                required
                type="text" 
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Dein Business / Deine Tätigkeit"
                value={formData.business}
                onChange={(e) => setFormData({...formData, business: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Was willst du mit deiner Website erreichen?</label>
              <textarea 
                required
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-32"
                placeholder="Dein Ziel (z.B. mehr Anfragen, Image-Aufbau...)"
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Stil?</label>
              <select 
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                value={formData.style}
                onChange={(e) => setFormData({...formData, style: e.target.value})}
              >
                <option value="minimalistisch">Minimalistisch</option>
                <option value="dunkel">Dunkel</option>
                <option value="hell">Hell</option>
                <option value="modern">Modern</option>
                <option value="altmodisch">Altmodisch</option>
                <option value="clean">Clean</option>
              </select>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Jetzt Gratis-Entwurf anfordern
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
