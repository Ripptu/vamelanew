import { motion } from 'motion/react';
import { Check, Zap, Calendar, ArrowRight } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="zahlung" className="py-16 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4 md:mb-6">
            Flexibilität, die zu dir passt.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed px-2">
            Egal ob einmaliges Projekt oder kontinuierliches Wachstum – wähle das Modell, das dein Unternehmen voranbringt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-stretch">
          {/* One-time */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-50/50 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-200/60 flex flex-col"
          >
            <div className="mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-slate-100">
                <Zap className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2 md:mb-3">Einmaliges Projekt</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Perfekt für den Start oder klar definierte Anforderungen. Volle Kontrolle, einmalige Investition.
              </p>
            </div>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
              {['Klarer Projektumfang', 'Fester Preis', 'Schnelle Umsetzung', 'Keine Folgekosten'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                  <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" strokeWidth={2} /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 md:py-4 rounded-full font-medium text-sm md:text-base text-center transition-colors border border-slate-200 flex items-center justify-center gap-2">
              Projekt anfragen
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Subscription */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-primary/20 shadow-2xl shadow-primary/5 flex flex-col relative"
          >
            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 md:px-4 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium tracking-wide shadow-sm">
              Am beliebtesten
            </div>
            
            <div className="mb-6 md:mb-8 mt-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Calendar className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2 md:mb-3">Monats-Abo</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Kontinuierliche Weiterentwicklung und Support zu einem günstigeren Preis. Monatlich kündbar – maximale Freiheit.
              </p>
            </div>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
              {['Kontinuierliche Optimierung', 'Bevorzugter Support', 'Günstigerer Monatspreis', 'Monatlich kündbar'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 md:py-4 rounded-full font-medium text-sm md:text-base text-center transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20">
              Abo anfragen
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
