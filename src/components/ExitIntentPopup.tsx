import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';

export function ExitIntentPopup({ onOpenContact }: { onOpenContact: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isUnpacked, setIsUnpacked] = useState(false);

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

  // Confetti colors
  const colors = ['#ef4444', '#eab308', '#3b82f6', '#22c55e', '#a855f7', '#ec4899'];

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
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="w-full max-w-md relative z-10 flex flex-col items-center justify-center"
        >
          {!isUnpacked ? (
            <motion.div 
              className="relative cursor-pointer group"
              onClick={() => setIsUnpacked(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Floating Animation for the Gift */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 flex items-center justify-center"
              >
                {/* Cartoon Gift Box */}
                <div className="relative w-48 h-48">
                  {/* Box Body */}
                  <div className="absolute bottom-0 left-4 right-4 h-32 bg-[#FF4B4B] rounded-xl border-4 border-slate-900 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] overflow-hidden">
                    {/* Vertical Ribbon */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-[#FFD100] border-x-4 border-slate-900"></div>
                  </div>
                  
                  {/* Box Lid */}
                  <motion.div 
                    className="absolute bottom-28 left-0 right-0 h-14 bg-[#FF3333] rounded-xl border-4 border-slate-900 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] z-10 overflow-hidden"
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                     {/* Vertical Ribbon on Lid */}
                     <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-[#FFD100] border-x-4 border-slate-900"></div>
                  </motion.div>

                  {/* Bow */}
                  <motion.div 
                    className="absolute bottom-36 left-1/2 -translate-x-1/2 flex z-20"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-16 h-16 border-4 border-slate-900 bg-[#FFD100] rounded-full -mr-4 shadow-inner" style={{ borderRadius: '50% 50% 0 50%' }} />
                    <div className="w-16 h-16 border-4 border-slate-900 bg-[#FFD100] rounded-full -ml-4 shadow-inner" style={{ borderRadius: '50% 50% 50% 0' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FFB800] border-4 border-slate-900 rounded-full z-30"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Click Me Hint */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-slate-900 font-bold px-6 py-2 rounded-full border-4 border-slate-900 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] whitespace-nowrap"
              >
                Klick mich! 🎁
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[12px_12px_0px_rgba(0,0,0,0.1)] border-4 border-slate-900 text-center relative overflow-hidden w-full"
            >
              {/* Confetti Explosion */}
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0,
                    rotate: 0 
                  }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 500, 
                    y: (Math.random() - 0.5) * 500,
                    scale: [0, Math.random() * 1.5 + 0.5, 0],
                    rotate: Math.random() * 360
                  }}
                  transition={{ 
                    duration: 1.5 + Math.random(), 
                    ease: "easeOut",
                  }}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-sm z-0"
                  style={{ 
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                  }}
                />
              ))}

              {/* Close Button */}
              <button 
                onClick={() => setIsVisible(false)} 
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Schließen"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
              
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                className="w-20 h-20 bg-[#FFD100] text-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border-4 border-slate-900 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] relative z-10 rotate-3"
              >
                <Gift className="w-10 h-10" strokeWidth={2.5} />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4 relative z-10 uppercase">
                Überraschung!
              </h2>
              
              <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed relative z-10">
                Bevor du gehst: Lass uns dir zeigen, wie deine neue Website aussehen könnte. Ein individueller, professioneller Entwurf – <span className="text-[#FF4B4B] font-bold">komplett kostenlos.</span>
              </p>
              
              <div className="flex flex-col gap-4 relative z-10">
                <a
                  href="/#gratis-entwurf"
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-[#FF4B4B] hover:bg-[#E63E3E] text-white px-8 py-4 rounded-xl font-bold text-xl transition-transform hover:-translate-y-1 active:translate-y-1 border-4 border-slate-900 shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.2)] active:shadow-[0px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  Gratis-Entwurf sichern
                </a>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-slate-500 hover:text-slate-900 font-bold py-2 transition-colors focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:outline-none rounded-full"
                >
                  Nein danke, vielleicht später
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
