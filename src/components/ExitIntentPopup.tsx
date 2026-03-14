import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export function ExitIntentPopup({ onOpenContact }: { onOpenContact: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('ExitIntentPopup useEffect running');
    const handleMouseLeave = (e: MouseEvent) => {
      console.log('Mouse leave detected', e.clientY, e.relatedTarget);
      // Check if the mouse left the top of the window (indicating intent to close/switch tab)
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
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          onClick={() => setIsVisible(false)}
          className="absolute inset-0 bg-slate-900/60 cursor-pointer"
        />
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-lg relative z-10"
        >
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-100 text-center">
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">👋</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Warte kurz! Bevor du gehst...
            </h2>
            
            <p className="text-slate-600 mb-8 text-lg">
              Willst du dir nicht einen <span className="font-bold text-slate-900">kostenlosen Website-Entwurf</span> schnappen? Wir erstellen dir ein individuelles Konzept – komplett ohne Kosten.
            </p>
            
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {[
                "Individuell für dein Business",
                "SEO-optimierte Struktur",
                "Sofort einsatzbereites Konzept"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col gap-3">
              <a
                href="/#gratis-entwurf"
                onClick={() => setIsVisible(false)}
                className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Jetzt Entwurf sichern
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-500 hover:text-slate-700 font-medium py-2 transition-colors focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:outline-none rounded-md"
              >
                Nein danke, ich verzichte auf meinen Entwurf
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
