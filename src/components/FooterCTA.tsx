import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const USER_COUNT = 40;
let AVAILABLE_SLOTS = 2;

function getDynamicMessage(slots: number) {
  if (slots === 0) return "Alle Plätze belegt. Trage dich für die Warteliste ein.";
  if (slots === 1) return "Nur noch 1 Platz frei! Sichere dir jetzt deinen Vorsprung.";
  return `Aktuell ${slots} Projektplätze verfügbar – starte jetzt dein Projekt.`;
}

export function FooterCTA({ onOpenContact }: { onOpenContact: () => void }) {
  const dynamicMessage = getDynamicMessage(AVAILABLE_SLOTS);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="bg-white  rounded-[32px] md:rounded-[40px] border border-slate-200 p-8 sm:p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-slate-900"
          >
            Bereit, endlich als<br/><span className="font-serif italic text-primary font-normal">Marktführer aufzutreten?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10"
          >
            Im kostenlosen Erstgespräch zeige ich dir, wie dein neuer Online-Auftritt aussehen und rund um die Uhr für dich verkaufen wird.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            <motion.button
              onClick={onOpenContact}
              aria-label="Kostenloses Design Konzept anfragen"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all relative overflow-hidden animate-shimmer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Kostenloses Design Konzept
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <div className="flex flex-col items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[
                  "https://s1.directupload.eu/images/260324/b4ic9qjm.webp",
                  "https://s1.directupload.eu/images/260324/25ibmjz4.webp",
                  "https://s1.directupload.eu/images/260324/do2yh9ju.webp"
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img loading="lazy" decoding="async" width="40" height="40" src={src} alt={`Kundenreferenz ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-slate-900">+{USER_COUNT} zufriedene Kunden</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${AVAILABLE_SLOTS > 0 ? 'bg-primary' : 'bg-red-500'}`}></div>
                  <span className={AVAILABLE_SLOTS === 1 ? 'text-red-600 font-bold' : ''}>{dynamicMessage}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Big Background Text */}
      <div className="absolute -bottom-10 left-0 right-0 text-center pointer-events-none overflow-hidden h-40 z-[-1]">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[120px] md:text-[200px] font-bold text-primary/5 leading-none tracking-tighter whitespace-nowrap"
        >
          VAMELA
        </motion.div>
      </div>
    </section>
  );
}


