import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function SolutionSection({ onOpenContact, limit, showLinkToPage }: { onOpenContact: () => void, limit?: number, showLinkToPage?: boolean }) {
  const allCards = [
    // Card 1
    <motion.article 
      key="card1"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 overflow-hidden relative transition-shadow"
    >
      <div className="text-center mb-8 md:mb-10 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-slate-900">Professionelles Design</h3>
        <p className="text-slate-600 text-sm">Eine Webseite, die deine wahre Qualität widerspiegelt und Vertrauen aufbaut – ganz ohne hohe Einmalkosten.</p>
      </div>
      <div className="relative h-40 md:h-48 flex justify-center items-end">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-t-xl relative flex flex-col items-center pt-8">
          <div className="absolute -top-6 w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-primary font-bold italic z-10">S</div>
          
          {/* Lines connecting to S */}
          <div className="absolute top-0 w-full h-12 flex justify-center">
            <div className="w-3/4 border-t-2 border-l-2 border-r-2 border-slate-200 rounded-t-xl h-full -mt-3"></div>
          </div>

          <div className="flex gap-4 w-full px-4">
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-3 opacity-50">
              <div className="h-2 bg-slate-200 rounded w-1/2 mb-2"></div>
              <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-16 bg-slate-200 rounded w-full"></div>
            </div>
            <div className="flex-1 bg-white border border-primary/20 rounded-lg p-3">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-3 h-3 bg-primary rounded-sm"></div>
                <div className="text-[8px] font-bold">Zenith AI</div>
              </div>
              <div className="text-xs font-bold mb-1">Baustelle fertig?</div>
              <div className="text-xs font-bold mb-2">Das Büro auch.</div>
              <div className="flex gap-1">
                <div className="h-3 bg-primary rounded w-1/2"></div>
                <div className="h-3 bg-slate-800 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>,

    // Card 2
    <motion.article 
      key="card2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 overflow-hidden relative transition-shadow"
    >
      <div className="text-center mb-8 md:mb-10 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-slate-900">Mehr Kunden gewinnen</h3>
        <p className="text-slate-600 text-sm">Wir optimieren jeden Text und Button so, dass Besucher genau wissen, was sie tun müssen: Bei dir anfragen.</p>
      </div>
      <div className="relative h-40 md:h-48 flex justify-center items-end">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div className="text-sm font-bold">Conversions Rate</div>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded-full font-bold">+75%</div>
          </div>
          
          <div className="flex items-end gap-2 h-24 relative z-10">
            {[40, 60, 45, 80, 100, 70, 55].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className={`flex-1 rounded-t-md relative ${i === 4 ? 'bg-gradient-to-t from-primary to-purple-400' : 'bg-slate-200'}`} 
              >
                {i === 4 && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Dashed line */}
          <div className="absolute top-[60%] left-0 right-0 border-t-2 border-dashed border-primary/30 z-0"></div>
        </div>
      </div>
    </motion.article>,

    // Card 3
    <motion.article 
      key="card3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 text-center relative overflow-hidden transition-shadow"
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      <div className="h-32 md:h-40 flex items-center justify-center mb-4 md:mb-6 relative z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-slate-200 absolute"></div>
          <div className="w-32 h-32 rounded-full border border-slate-200 absolute"></div>
          <div className="w-16 h-16 rounded-full border border-slate-200 absolute"></div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            <div className="absolute top-4 left-1/2 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-[10px] text-primary -translate-x-1/2 -translate-y-1/2">📊</div>
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            <div className="absolute bottom-12 left-8 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-[10px] text-primary -translate-x-1/2 -translate-y-1/2">🖌️</div>
          </motion.div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            <div className="absolute top-1/2 right-4 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-[10px] text-primary -translate-x-1/2 -translate-y-1/2">&lt;/&gt;</div>
          </motion.div>
        </div>
        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center z-10 p-3">
          <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" width="64" height="64" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 relative z-10 text-slate-900">All-Inclusive Service</h3>
      <p className="text-slate-600 text-sm md:text-base relative z-10">Ich kümmere mich um Hosting, Wartung und Updates. Du lehnst dich entspannt zurück.</p>
    </motion.article>,

    // Card 4
    <motion.article 
      key="card4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 text-center relative overflow-hidden transition-shadow"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="h-32 md:h-40 flex items-center justify-center mb-4 md:mb-6 relative z-10">
        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} className="w-20 h-20 bg-slate-900 rounded-2xl rotate-12 flex items-center justify-center">
          <Zap className="w-10 h-10 text-yellow-400 fill-yellow-400 -rotate-12" />
        </motion.div>
        <div className="absolute top-4 left-1/4 w-0.5 h-8 bg-primary/20 rounded-full"></div>
        <div className="absolute top-12 right-1/4 w-0.5 h-6 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-8 left-1/3 w-0.5 h-4 bg-primary/20 rounded-full"></div>
      </div>
      <h3 className="text-lg font-bold mb-2 relative z-10 text-slate-900">Immer aktuell & sicher</h3>
      <p className="text-slate-600 text-sm md:text-base relative z-10">Deine Seite bleibt technisch auf dem neuesten Stand, sicher vor Angriffen und wird von Google geliebt.</p>
    </motion.article>,

    // Card 5
    <motion.article 
      key="card5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 text-center relative overflow-hidden transition-shadow"
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      <div className="h-32 md:h-40 flex items-center justify-center mb-4 md:mb-6 relative z-10">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-24 h-24 rounded-full border-4 border-primary/10 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-4 border-primary/20 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">W</div>
          </div>
        </motion.div>
      </div>
      <h3 className="text-lg font-bold mb-2 relative z-10 text-slate-900">Flexibel & Skalierbar</h3>
      <p className="text-slate-600 text-sm md:text-base relative z-10">Dein Unternehmen wächst? Deine Webseite wächst mit – Anpassungen sind im Abo inklusive.</p>
    </motion.article>
  ];

  const displayedCards = limit ? allCards.slice(0, limit) : allCards;

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
          Die smarte Lösung: <span className="font-serif italic text-primary font-normal">Website as a Service</span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg">
          Ich baue nicht einfach nur Webseiten. Ich biete dir ein Rundum-Sorglos-Paket, das mit deinem Unternehmen wächst – zum fairen monatlichen Festpreis.
        </p>
      </motion.div>

      <div className={`grid ${limit === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 mb-6`}>
        {displayedCards.slice(0, limit === 3 ? 3 : 2)}
      </div>

      {!limit && (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {displayedCards.slice(2)}
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12"
      >
        <motion.button
          onClick={onOpenContact}
          aria-label="Projektanfrage starten"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all relative overflow-hidden animate-shimmer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none w-full sm:w-auto justify-center"
        >
          Projektanfrage
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
        {showLinkToPage && (
          <motion.a
            href="/leistungen"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none w-full sm:w-auto justify-center"
          >
            Alle Leistungen ansehen
          </motion.a>
        )}
      </motion.div>
    </section>
  );
}
