import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

export function ExitIntentPopup({ onOpenContact }: { onOpenContact: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 perspective-[2000px]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setIsVisible(false)}
          className="absolute inset-0 bg-slate-900/40 cursor-pointer"
        />
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md relative z-10"
        >
          <div className="bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-10 sm:p-12 shadow-2xl shadow-black/10 border border-white/50 text-center relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-colors z-20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
            
            <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-slate-100 relative z-10">
              <Sparkles className="w-8 h-8" strokeWidth={1.5} />
            </div>
            
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4 relative z-10">
              Ein Geschenk für dich.
            </h2>
            
            <p className="text-slate-500 mb-10 text-[1.05rem] leading-relaxed relative z-10">
              Bevor du gehst: Lass uns dir zeigen, wie deine neue Website aussehen könnte. Ein individueller, professioneller Entwurf – komplett kostenlos.
            </p>
            
            <div className="flex flex-col gap-3 relative z-10">
              <a
                href="/#gratis-entwurf"
                onClick={() => setIsVisible(false)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
              >
                Gratis-Entwurf sichern
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-500 hover:text-slate-900 font-medium py-3 transition-colors focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:outline-none rounded-full"
              >
                Vielleicht später
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
