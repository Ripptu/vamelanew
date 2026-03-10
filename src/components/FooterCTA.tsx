import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function FooterCTA({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <div className="bg-gradient-to-br from-white to-slate-100 rounded-[40px] border border-slate-200 p-12 md:p-20 text-center relative shadow-xl overflow-hidden">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
            Bereit, endlich als<br/><span className="font-serif italic text-primary font-normal">Marktführer aufzutreten?</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
            Im kostenlosen Erstgespräch zeigen wir dir, wie dein neuer Online-Auftritt aussehen und rund um die Uhr für dich verkaufen wird.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <motion.button
              onClick={onOpenContact}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary/30 relative overflow-hidden animate-shimmer"
            >
              Kostenloses Design Konzept
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span className="font-bold text-slate-900">+40 zufriedene Kunden</span>
                <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span>Aktuell 2 Projektplätze verfügbar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Big Background Text */}
      <div className="absolute -bottom-10 left-0 right-0 text-center pointer-events-none overflow-hidden h-40 z-[-1]">
        <div className="text-[120px] md:text-[200px] font-bold text-slate-100 leading-none tracking-tighter whitespace-nowrap opacity-80">
          VAMELA
        </div>
      </div>
    </section>
  );
}


