import { useState } from 'react';
import { motion } from 'motion/react';

export function FounderSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/5"
        >
          <div className="text-xs font-bold tracking-widest text-primary uppercase mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            Dein Ansprechpartner
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="rounded-[22px] overflow-hidden relative">
              <img src="https://i.postimg.cc/cZPmBdCM/4995ad88-01bd-465e-9b20-c3178ee83d1e.png" alt="Christian Stockmeier" className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              <div className="p-6 bg-gradient-to-t from-slate-900 to-transparent absolute bottom-0 left-0 right-0 text-white">
                <div className="text-xs font-medium text-slate-300 mb-1">Dein Ansprechpartner:</div>
                <div className="text-2xl font-bold mb-1">Christian Stockmeier</div>
                <div className="text-sm text-slate-300 mb-6">Gründer & Geschäftsführer</div>
                <div className="flex items-center gap-1 text-[10px] justify-center text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Aktuell 2 Projektplätze verfügbar
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div 
          className="w-full md:w-3/5 space-y-8 transition-opacity duration-300"
          onMouseLeave={() => setHovered(null)}
        >
          {[
            { id: 1, text: '"Der Markt ist voll von alt eingesessenen Agenturen, die auf veralteten Systemen und ressourcenfressenden Prozessen festhängen - nur um am Ende eine Seite zu liefern, die aussieht, als wäre sie aus 2016.' },
            { id: 2, text: 'Am anderen Ende: Kreativagenturen, zu stolz um ihre Fähigkeiten in einem markttauglichen Kontext einzusetzen. Und Marketing-Agenturen, die alles anbieten aber nichts davon wirklich können.' },
            { id: 3, text: 'VAMELA existiert um diese Lücke zu schließen.' },
            { id: 4, text: 'Flaggschiff-Design, verkaufspsychologische Copy und modernste Technologie - alles aus einer Hand, ohne Kompromisse."' }
          ].map((item, index) => (
            <motion.p 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-xl md:text-2xl font-medium leading-relaxed transition-opacity duration-300 ${
                hovered === null || hovered === item.id ? 'opacity-100' : 'opacity-40'
              } ${index === 2 ? 'font-serif italic text-primary' : 'text-slate-900'}`}
              onMouseEnter={() => setHovered(item.id)}
            >
              {item.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
