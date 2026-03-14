import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function FooterCTA({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="bg-gradient-to-br from-white to-slate-100 rounded-[40px] border border-slate-200 p-12 md:p-20 text-center relative shadow-xl overflow-hidden"
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
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900"
          >
            Bereit, endlich als<br/><span className="font-serif italic text-primary font-normal">Marktführer aufzutreten?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto mb-10"
          >
            Im kostenlosen Erstgespräch zeigen wir dir, wie dein neuer Online-Auftritt aussehen und rund um die Uhr für dich verkaufen wird.
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
              whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 8px 10px -6px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary/30 relative overflow-hidden animate-shimmer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Kostenloses Design Konzept
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80"
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={src} alt="Kunde" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span className="font-bold text-slate-900">+40 zufriedene Kunden</span>
                <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                  <span>Aktuell 2 Projektplätze verfügbar</span>
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
          className="text-[120px] md:text-[200px] font-bold text-slate-100 leading-none tracking-tighter whitespace-nowrap"
        >
          VAMELA
        </motion.div>
      </div>
    </section>
  );
}


