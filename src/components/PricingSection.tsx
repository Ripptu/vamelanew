import { motion } from 'motion/react';
import { Check, Zap, Calendar, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="zahlung" className="py-20 md:py-32 relative overflow-hidden bg-slate-50">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-slate-700">Transparente Investition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4 md:mb-6">
            Flexibilität, die zu <span className="font-serif italic text-primary font-normal">dir passt.</span>
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Egal ob einmaliges Projekt oder kontinuierliches Wachstum – wähle das Modell, das dein Unternehmen voranbringt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* One-time */}
          <motion.article 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white p-6 md:p-12 rounded-[2rem] border border-slate-200 flex flex-col relative z-10"
          >
            <div className="mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-slate-100">
                <Zap className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Einmaliges Projekt</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Perfekt für den Start oder klar definierte Anforderungen. Volle Kontrolle, einmalige Investition.
              </p>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8"></div>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
              {[
                'Klar definierter Projektumfang', 
                'Fester Preis ohne Überraschungen', 
                'Schnelle & zielgerichtete Umsetzung', 
                'Volle Eigentumsrechte nach Abschluss'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 md:gap-4 text-slate-700 text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.5} /> 
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium text-center transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none">
              Projekt anfragen
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.article>

          {/* Subscription */}
          <motion.article 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white p-6 md:p-12 rounded-[2rem] border-2 border-primary flex flex-col relative z-20 md:-ml-4 lg:-ml-8 md:scale-105"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 md:px-6 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide flex items-center gap-1.5 md:gap-2 border border-white whitespace-nowrap">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Am beliebtesten
            </div>
            
            <div className="mb-6 md:mb-8 mt-2 md:mt-4 relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-slate-200">
                <Calendar className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Monats-Abo</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Kontinuierliche Weiterentwicklung und Support zu einem günstigeren Preis. Monatlich kündbar – maximale Freiheit.
              </p>
            </div>
            
            <div className="h-px w-full bg-slate-200 mb-8 relative z-10"></div>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1 relative z-10">
              {[
                'Kontinuierliche Conversion-Optimierung', 
                'Bevorzugter VIP-Support', 
                'Geringere initiale Investition', 
                'Jederzeit monatlich kündbar'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 md:gap-4 text-slate-700 text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} /> 
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-center transition-all flex items-center justify-center gap-2 relative z-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-primary focus-visible:outline-none">
              Abo anfragen
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
