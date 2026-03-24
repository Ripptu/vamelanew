import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Zap, Calendar, ArrowRight, Sparkles, ShieldCheck, X } from 'lucide-react';

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="zahlung" className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
      <style>{`
        @keyframes goldShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-gold-shimmer {
          animation: goldShimmer 3s linear infinite;
        }
      `}</style>
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 md:mb-6">
            Professionelle Webseiten <span className="font-serif italic text-primary font-normal">im fairen Abo.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Keine hohen Einmalkosten. Wähle das Paket, das zu deinem Unternehmen passt und profitiere von unserem All-Inclusive Service.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Monatlich</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ backgroundColor: isYearly ? 'var(--color-primary)' : '#e2e8f0' }}
            >
              <span className="sr-only">Abrechnungsintervall umschalten</span>
              <motion.span
                layout
                className="inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform"
                animate={{ x: isYearly ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              Jährlich <span className="text-[10px] uppercase tracking-wider bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Bis zu 35% sparen</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch max-w-6xl mx-auto pt-4 md:pt-0">
          {/* Starter */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-white p-6 md:p-8 rounded-[1.5rem] border border-slate-200 flex flex-col relative z-10 h-full"
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center border border-slate-100">
                  <Zap className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Digitale Visitenkarte</h3>
              </div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {isYearly ? '89 €' : '99 €'}
                </span>
                <span className="text-slate-500 font-medium text-sm">/ Monat</span>
              </div>
              <div className="h-6 mb-2">
                <AnimatePresence>
                  {isYearly && (
                    <motion.span 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="inline-block text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md"
                    >
                      10% Ersparnis (jährlich)
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Die Basis-Präsenz für den kleinen Start. Jede weitere Änderung kostet extra.
              </p>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6"></div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {[
                { text: 'High-Speed Hosting & SSL', included: true },
                { text: '1-Pager Design (Startseite)', included: true },
                { text: 'Basis-Kontaktformular', included: true },
                { text: 'Keine Domain enthalten', included: false },
                { text: 'Keine SEO-Optimierung', included: false },
                { text: 'Keine inbegriffenen Änderungen', included: false },
                { text: 'Kein Google My Business', included: false }
              ].map((item) => (
                <li key={item.text} className={`flex items-start gap-3 text-sm ${item.included ? 'text-slate-700' : 'text-slate-400'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.included ? 'bg-slate-100' : 'bg-slate-50'}`}>
                    {item.included ? (
                      <Check className="w-3 h-3 text-slate-600" strokeWidth={2.5} /> 
                    ) : (
                      <X className="w-3 h-3 text-slate-400" strokeWidth={2.5} />
                    )}
                  </div>
                  <span className={item.included ? 'font-medium' : ''}>{item.text}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium text-sm text-center transition-all flex items-center justify-center gap-2 mt-auto">
              Projekt anfragen
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.article>

          {/* Premium */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-white p-6 md:p-8 rounded-[1.5rem] border-2 border-primary flex flex-col relative z-30 md:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)] md:shadow-[0_0_50px_rgba(59,130,246,0.4)] h-full"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 border border-white whitespace-nowrap shadow-sm">
              <Sparkles className="w-3 h-3" />
              Am beliebtesten
            </div>
            
            <div className="mb-6 mt-2 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center border border-primary/10">
                  <Calendar className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Lokal-Dominanz</h3>
              </div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {isYearly ? '239 €' : '299 €'}
                </span>
                <span className="text-primary/80 font-medium text-sm">/ Monat</span>
              </div>
              <div className="h-6 mb-2">
                <AnimatePresence>
                  {isYearly && (
                    <motion.span 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="inline-block text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md"
                    >
                      20% Ersparnis (jährlich)
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Hier ist ALLES drin, was ein Handwerker/Facility-Betrieb braucht.
              </p>
            </div>
            
            <div className="h-px w-full bg-slate-200 mb-6 relative z-10"></div>
            
            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              {[
                'Premium High-Speed Hosting & SSL',
                'Domain inklusive',
                '1 kostenlose E-Mail-Adresse',
                'Bis zu 5 Unterseiten',
                'Lokale SEO-Grundoptimierung',
                'Google Business Profile Verknüpfung',
                '3 Stunden Änderungen pro Monat INKLUSIVE!',
                'Schneller WhatsApp-Support'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-0.5 border border-primary/10">
                    <Check className="w-3 h-3 text-primary" strokeWidth={2.5} /> 
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#gratis-entwurf" className="group w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-medium text-sm text-center transition-all flex items-center justify-center gap-2 relative z-10 mt-auto shadow-md">
              Abo anfragen
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.article>

          {/* VIP */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="relative p-[2px] rounded-[1.5rem] flex flex-col h-full z-10 shadow-md"
          >
            {/* Gold Shimmer Border */}
            <div className="absolute inset-0 bg-[linear-gradient(110deg,#fbbf24,45%,#fffbeb,55%,#fbbf24)] bg-[length:200%_100%] animate-gold-shimmer rounded-[1.5rem]"></div>
            
            <div className="relative bg-white p-6 md:p-8 rounded-[calc(1.5rem-2px)] flex flex-col h-full z-10">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center border border-amber-100">
                    <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Premium Partner</h3>
                </div>
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">
                    {isYearly ? '519 €' : '799 €'}
                  </span>
                  <span className="text-amber-600/80 font-medium text-sm">/ Monat</span>
                </div>
                <div className="h-6 mb-2">
                  <AnimatePresence>
                    {isYearly && (
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="inline-block text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md"
                      >
                        35% Ersparnis (jährlich)
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Nur für extrem solvente Betriebe. Das absolute Rundum-Sorglos-Paket.
                </p>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6"></div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Alles aus dem Lokal-Dominanz Paket',
                  'Bis zu 10 kostenlose E-Mail-Adressen',
                  'Unbegrenzte Unterseiten',
                  'GEO Optimierung (Sichtbar in KI-Antworten wie ChatGPT)',
                  'Erweiterte SEO-Optimierung (Monatlich)',
                  'Performance-Reporting (PDF)',
                  'Unbegrenzte Änderungen inklusive',
                  'Vollständige Pflege eures Blogs'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                      <Check className="w-3 h-3 text-amber-600" strokeWidth={2.5} /> 
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#gratis-entwurf" className="group w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium text-sm text-center transition-all flex items-center justify-center gap-2 mt-auto">
                VIP anfragen
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
