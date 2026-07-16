import { ArrowRight, CheckCircle2, Target, Zap, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function StrategyWorkshopPage({ onOpenContact }: { onOpenContact?: () => void }) {
  useEffect(() => {
    // Scroll immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Fallback for some browsers/routers that might delay rendering
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-transparent pt-24 pb-16 selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>Strategie-Workshop | VAMELA</title>
        <meta name="description" content="Gemeinsam entwickeln wir die perfekte digitale Strategie für dein Unternehmen. Jetzt kostenlosen Strategie-Workshop anfragen." />
        <link rel="canonical" href="https://vamela.info/strategie-workshop" />
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Vamela <span className="font-serif italic text-primary font-normal">Strategy Blueprint</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Der Workshop, der aus deiner Webseite eine digitale Vertriebsmaschine macht. Klarheit, Strategie und ein messbarer Fahrplan für dein Business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-16">
          {[
            { title: "Deep Dive", icon: BrainCircuit, desc: "Ich analysiere dein Business, deine Zielgruppe und deine Pain Points, um genau zu verstehen, was deine Kunden wirklich brauchen." },
            { title: "Kundenreise", icon: Target, desc: "Ich plane den Weg vom ersten Klick zur Anfrage. Psychologisch fundiert, um Einwände vorab zu entkräften." },
            { title: "Brand Voice", icon: Zap, desc: "Ich definiere, wie deine Marke spricht und welche Trust-Elemente nötig sind, um unwiderstehliche Autorität aufzubauen." },
            { title: "Technik & SEO", icon: CheckCircle2, desc: "Ich lege den Grundstein für eine blitzschnelle, SEO-optimierte Webseite, die Google und deine Kunden lieben." }
          ].map((item, i) => (
            <motion.article 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="p-6 md:p-8 rounded-3xl bg-white  border border-slate-200 transition-shadow hover:shadow-md"
            >
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" />
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative p-6 md:p-12 rounded-[2.5rem] text-center overflow-hidden border border-slate-200 bg-slate-50/80 "
        >
          {/* Graph Paper Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900">Schluss mit dem Raten: Dein Vamela Blueprint</h2>
            <p className="text-base md:text-lg mb-8 md:mb-10 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Deine Webseite sollte dein bester Verkäufer sein – nicht nur eine digitale Visitenkarte. 
              Ich löse das Problem der fehlenden Anfragen durch psychologisch fundierte Strategie, 
              bevor auch nur ein Pixel designt wird.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 text-left">
              <div className="bg-white  p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Keine Anfragen?</h4>
                <p className="text-xs md:text-sm text-slate-600">Ich analysiere, warum Besucher abspringen und drehe die Stellschrauben für mehr Anfragen.</p>
              </div>
              <div className="bg-white  p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Unklare Botschaft?</h4>
                <p className="text-xs md:text-sm text-slate-600">Ich schärfe dein Profil, damit Kunden sofort verstehen, warum sie bei dir kaufen müssen.</p>
              </div>
              <div className="bg-white  p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Kein Fahrplan?</h4>
                <p className="text-xs md:text-sm text-slate-600">Du erhältst den Vamela Blueprint: Deine komplette Strategie, Sitemap, Wireframe-Skizzen und Content-Roadmap.</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={onOpenContact}
                className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all relative overflow-hidden animate-shimmer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none w-full sm:w-auto justify-center"
              >
                Jetzt Blueprint anfragen
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
