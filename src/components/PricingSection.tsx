import { motion } from 'motion/react';
import { Check, Zap, Calendar, ArrowRight } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="zahlung" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
            Flexibilität, die zu dir passt.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Egal ob einmaliges Projekt oder kontinuierliches Wachstum – wähle das Modell, das dein Unternehmen voranbringt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* One-time */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-200/60 flex flex-col"
          >
            <div className="mb-8">
              <div className="w-12 h-12 bg-white text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <Zap className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Einmaliges Projekt</h3>
              <p className="text-slate-500 leading-relaxed">
                Perfekt für den Start oder klar definierte Anforderungen. Volle Kontrolle, einmalige Investition.
              </p>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Klarer Projektumfang', 'Fester Preis', 'Schnelle Umsetzung', 'Keine Folgekosten'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" strokeWidth={2} /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-white hover:bg-slate-50 text-slate-900 px-6 py-4 rounded-full font-medium text-center transition-colors border border-slate-200 flex items-center justify-center gap-2">
              Projekt anfragen
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Subscription */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-10 rounded-[2.5rem] border border-primary/20 shadow-2xl shadow-primary/5 flex flex-col relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide shadow-sm">
              Am beliebtesten
            </div>
            
            <div className="mb-8 mt-2">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Monats-Abo</h3>
              <p className="text-slate-500 leading-relaxed">
                Kontinuierliche Weiterentwicklung und Support zu einem günstigeren Preis. Monatlich kündbar – maximale Freiheit.
              </p>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Kontinuierliche Optimierung', 'Bevorzugter Support', 'Günstigerer Monatspreis', 'Monatlich kündbar'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-full font-medium text-center transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20">
              Abo anfragen
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
