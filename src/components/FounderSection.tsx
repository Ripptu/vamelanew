import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12"
        >
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-slate-50 rounded-[2.5rem] -z-10 transform -rotate-3"></div>
            
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/50">
              <img src="https://i.postimg.cc/cZPmBdCM/4995ad88-01bd-465e-9b20-c3178ee83d1e.png" alt="Christian" className="w-full aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-medium mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  Dein Ansprechpartner
                </div>
                <h3 className="text-3xl font-bold mb-1">Christian</h3>
                <p className="text-slate-300 font-medium">Gründer & Geschäftsführer</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <Quote className="w-16 h-16 text-primary/20 mb-8" />
          
          <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
            <p>
              Der Markt ist voll von alt eingesessenen Agenturen, die auf veralteten Systemen und ressourcenfressenden Prozessen festhängen – nur um am Ende eine Seite zu liefern, die aussieht, als wäre sie aus 2016.
            </p>
            <p>
              Am anderen Ende: Kreativagenturen, zu stolz um ihre Fähigkeiten in einem markttauglichen Kontext einzusetzen. Und Marketing-Agenturen, die alles anbieten, aber nichts davon wirklich können.
            </p>
            <p className="text-2xl md:text-3xl font-serif italic text-slate-900 font-medium my-8">
              VAMELA existiert, um diese <span className="text-primary">Lücke zu schließen.</span>
            </p>
            <p>
              Wir kombinieren Flaggschiff-Design, verkaufspsychologische Copy und modernste Technologie. Alles aus einer Hand, ohne Kompromisse. Unser Ziel ist es, dich als unangefochtenen Marktführer in deiner Nische zu positionieren.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">100%</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Fokus auf Ergebnisse</span>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">Premium</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Design & Entwicklung</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
