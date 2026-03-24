import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';

let hasShownThisPageLoad = false;

export function ExitIntentPopup({ onOpenContact }: { onOpenContact: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) {
        if (!hasShownThisPageLoad) {
          setIsVisible(true);
          hasShownThisPageLoad = true;
        }
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
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setIsVisible(false)}
          className="absolute inset-0 bg-slate-900/20 cursor-pointer"
        />
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-md relative z-10 flex flex-col items-center justify-center"
        >
          <div className="bg-white/90 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 border border-white/60 text-center relative overflow-hidden w-full">
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 rounded-full transition-colors z-20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", bounce: 0.5 }}
              className="w-16 h-16 bg-gradient-to-b from-primary/5 to-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 relative z-10"
            >
              <Gift className="w-8 h-8" strokeWidth={1.5} />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3 relative z-10">
              Ein Geschenk für dich
            </h2>
            
            <p className="text-slate-600 mb-8 text-base leading-relaxed relative z-10">
              Bevor du gehst: Lass mich dir zeigen, wie deine neue Website aussehen könnte. Ein individueller, professioneller Entwurf – <span className="text-primary font-medium">komplett kostenlos.</span>
            </p>
            
            <div className="flex flex-col gap-3 relative z-10">
              <a
                href="/#gratis-entwurf"
                onClick={() => setIsVisible(false)}
                className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-medium text-base transition-all active:scale-[0.98]"
              >
                Gratis-Entwurf sichern
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-slate-600 font-medium py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:outline-none rounded-lg"
              >
                Nein danke, vielleicht später
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
