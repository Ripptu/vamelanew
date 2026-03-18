import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

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
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsVisible(false)}
          className="absolute inset-0 bg-slate-900/20 cursor-pointer"
        />
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-lg relative z-10 flex flex-col items-center justify-center"
        >
          <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative border border-blue-100">
            {/* Checkered Paper Background with Gradient Fade */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(186, 230, 253, 0.6) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(186, 230, 253, 0.6) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
                maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
              }}
            />
            
            {/* Soft Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/50 to-white/90 pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-20"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10 relative z-10 flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              
              <motion.h2 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
              >
                Warten Sie noch kurz!
              </motion.h2>
              
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-600 mb-8 text-lg leading-relaxed max-w-sm"
              >
                Lassen Sie uns Ihnen zeigen, wie Ihre neue Website aussehen könnte. Ein professioneller Entwurf – <span className="font-semibold text-blue-600">komplett kostenlos.</span>
              </motion.p>
              
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-3 w-full"
              >
                <a
                  href="/#gratis-entwurf"
                  onClick={() => setIsVisible(false)}
                  className="group relative w-full flex justify-center items-center py-3.5 px-4 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md transition-all hover:shadow-lg"
                >
                  Gratis-Entwurf sichern
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-slate-500 hover:text-slate-700 font-medium py-2 transition-colors text-sm"
                >
                  Nein danke, ich verzichte auf das Angebot
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
