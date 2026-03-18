import { motion } from 'motion/react';
import { Check, Zap, Calendar, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="zahlung" className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-slate-700">Transparente Investition</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Flexibilität, die zu <span className="font-serif italic text-primary font-normal">dir passt.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Egal ob einmaliges Projekt oder kontinuierliches Wachstum – wähle das Modell, das dein Unternehmen voranbringt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* One-time */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col relative z-10"
          >
            <div className="mb-8">
              <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
                <Zap className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Einmaliges Projekt</h3>
              <p className="text-slate-500 leading-relaxed">
                Perfekt für den Start oder klar definierte Anforderungen. Volle Kontrolle, einmalige Investition.
              </p>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8"></div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Klar definierter Projektumfang', 
                'Fester Preis ohne Überraschungen', 
                'Schnelle & zielgerichtete Umsetzung', 
                'Volle Eigentumsrechte nach Abschluss'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.5} /> 
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none">
              Projekt anfragen
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Subscription */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-800 shadow-2xl shadow-primary/20 flex flex-col relative z-20 md:-ml-4 lg:-ml-8 md:scale-105"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 rounded-[2rem] pointer-events-none"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-indigo-500/50 rounded-[2rem] blur opacity-20 pointer-events-none"></div>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-indigo-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-primary/30 flex items-center gap-2 border border-white/10">
              <Sparkles className="w-4 h-4" />
              Am beliebtesten
            </div>
            
            <div className="mb-8 mt-4 relative z-10">
              <div className="w-14 h-14 bg-primary/20 text-primary-light rounded-2xl flex items-center justify-center mb-6 border border-primary/30 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <Calendar className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Monats-Abo</h3>
              <p className="text-slate-400 leading-relaxed">
                Kontinuierliche Weiterentwicklung und Support zu einem günstigeren Preis. Monatlich kündbar – maximale Freiheit.
              </p>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8 relative z-10"></div>
            
            <ul className="space-y-4 mb-10 flex-1 relative z-10">
              {[
                'Kontinuierliche Conversion-Optimierung', 
                'Bevorzugter VIP-Support', 
                'Geringere initiale Investition', 
                'Jederzeit monatlich kündbar'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
                    <Check className="w-3.5 h-3.5 text-primary-light" strokeWidth={2.5} /> 
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-center transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] relative z-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-primary focus-visible:outline-none">
              Abo anfragen
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
