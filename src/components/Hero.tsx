import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="pt-24 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 w-full text-center relative overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dubyt9p64/video/upload/v1773257630/hf_20260311_191854_939b9625-99a5-4581-ae75-85b8cadc0a5b_ymyfwx.mp4" type="video/mp4" />
      </video>
      {/* White Fade Overlay - stronger fade to white */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-white/50 to-white"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 text-primary text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm"
      >
        Für B2B-Dienstleister und Berater
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-20 text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
      >
        Wir Bauen <span className="font-serif italic text-primary font-normal">Flaggschiff Webseiten</span><br/>die dich als Marktführer<br/>positionieren
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-20 text-lg text-slate-800 mb-10 max-w-2xl mx-auto"
      >
        Deine Webseite sollte nicht nur deine Visitenkarte sein, sondern der stärkste Hebel im gesamten Verkaufs- und Marketingprozess.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <motion.button
          onClick={onOpenContact}
          whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 8px 10px -6px rgba(37, 99, 235, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 transition-all shadow-lg shadow-primary/30 relative overflow-hidden animate-shimmer"
        >
          Kostenloses Webseiten-Konzept
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
        
        <div className="flex items-center gap-3 text-sm text-slate-900 text-left">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div>
            <div className="font-bold text-slate-950">+40 zufriedene Kunden</div>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Aktuell 2 Projektplätze verfügbar
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
