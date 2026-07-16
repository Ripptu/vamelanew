import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Zap, ArrowRight, Sparkles, ShieldCheck, X, DollarSign, Calendar } from 'lucide-react';

export function PricingSection() {
  const [isOneTime, setIsOneTime] = useState(true);

  return (
    <section id="zahlung" className="py-16 md:py-24 relative overflow-hidden bg-transparent">
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
            Professionelle Webseiten <span className="font-serif italic text-primary font-normal">für dein Business.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Wähle die passende Zahlungsweise für dein Budget.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${isOneTime ? 'text-slate-900' : 'text-slate-500'}`}>Einmalzahlung</span>
            <button 
              onClick={() => setIsOneTime(!isOneTime)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ backgroundColor: !isOneTime ? 'var(--color-primary)' : '#e2e8f0' }}
            >
              <span className="sr-only">Zahlungsweise umschalten</span>
              <motion.span
                layout
                className="inline-block h-5 w-5 rounded-full bg-white  shadow transform transition-transform"
                animate={{ x: !isOneTime ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${!isOneTime ? 'text-slate-900' : 'text-slate-500'}`}>
              Monatliches Abo
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch max-w-6xl mx-auto pt-4 md:pt-0">
          {/* Card 1: Basis / Starter */}
          <PricingCard
            title="Digitale Visitenkarte"
            price={isOneTime ? "299 €" : "99 €"}
            period={isOneTime ? "einmalig" : "/ Monat"}
            description={isOneTime ? "Deine professionelle Basispräsenz zum Festpreis." : "Die Basis-Präsenz für den kleinen Start."}
            features={isOneTime ? [
              '1-Pager Design (Startseite)',
              'Basis-Kontaktformular',
              'Domainanbindung',
              'High-Speed Hosting (1. Jahr inkl.)'
            ] : [
              'High-Speed Hosting & SSL',
              '1-Pager Design (Startseite)',
              'Basis-Kontaktformular',
              'Domain inklusive'
            ]}
            isHighlighted={false}
          />

          {/* Card 2: Premium / Lokal-Dominanz */}
          <PricingCard
             title="Lokal-Dominanz"
             price={isOneTime ? "999 €" : "299 €"}
             period={isOneTime ? "einmalig" : "/ Monat"}
             description={isOneTime ? "Perfekt für maximale lokale Sichtbarkeit." : "Rundum-Sorglos-Paket für Handwerker."}
             features={isOneTime ? [
               'Individuelles Design (bis 5 Seiten)',
               'Lokale SEO-Grundoptimierung',
               'Google Business Profile Anbindung',
               'Setup von WhatsApp-Support',
               'Premium Hosting (1. Jahr inkl.)'
             ] : [
               'Premium Hosting & Domain inkl.',
               'Webseite (bis zu 5 Unterseiten)',
               'Lokale SEO-Grundoptimierung',
               'Google Business Profile Anbindung',
               '3h Änderungen monatlich inkl.'
             ]}
            isHighlighted={true}
          />

          {/* Card 3: VIP / Premium Partner */}
          <PricingCard
            title={isOneTime ? "VIP Business" : "Premium Partner"}
            price={isOneTime ? "2.499 €" : "799 €"}
            period={isOneTime ? "einmalig" : "/ Monat"}
            description={isOneTime ? "Das volle Paket, für unbegrenztes Wachstum." : "Dein Full-Service-Partner."}
            features={isOneTime ? [
              'Unbegrenzte Unterseiten',
              'Google SEO & GEO Optimierung',
              'Performance-Monitoring Setup',
              'Persönliche Einweisung',
              'Premium Hosting (1. Jahr inkl.)'
            ] : [
              'Alles aus der Lokal-Dominanz',
              'Unbegrenzte Unterseiten',
              'Google SEO & GEO Optimierung',
              'Performance-Monitoring',
              'Unbegrenzte Änderungen inkl.',
              'Vollständige Blog-Pflege'
            ]}
            isHighlighted={false}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, price, period, description, features, isHighlighted }: { title: string, price: string, period: string, description: string, features: string[], isHighlighted: boolean }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`p-6 md:p-8 rounded-[1.5rem] flex flex-col relative ${isHighlighted ? 'bg-white  border-2 border-primary shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'bg-white  border border-slate-200'}`}
    >
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
          Am beliebtesten
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <div className="mb-2 flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-slate-900">{price}</span>
          <span className="text-slate-500 font-medium text-sm">{period}</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="h-px w-full bg-slate-200 mb-6"></div>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-slate-700 text-sm">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isHighlighted ? 'bg-primary/10' : 'bg-slate-100'}`}>
              <Check className={`w-3 h-3 ${isHighlighted ? 'text-primary' : 'text-slate-600'}`} strokeWidth={2.5} />
            </div>
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#gratis-entwurf" className={`group w-full px-6 py-3 rounded-xl font-medium text-sm text-center transition-all flex items-center justify-center gap-2 ${isHighlighted ? 'bg-primary hover:bg-primary-hover text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
        Anfragen
        <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.article>
  );
}
