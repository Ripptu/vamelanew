import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      className="relative w-full pt-28 pb-16 md:pt-64 md:pb-48 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      aria-label="Hero Section"
    >
      {isMobile ? (
        /* Mobile Image Background */
        <img 
          src="https://s1.directupload.eu/images/260311/7cub544u.png" 
          alt=""
          role="presentation"
          loading="eager"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Desktop Video Background */
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          controls={false}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          aria-hidden="true"
        >
          <source src="https://res.cloudinary.com/dubyt9p64/video/upload/v1773257630/hf_20260311_191854_939b9625-99a5-4581-ae75-85b8cadc0a5b_ymyfwx.mp4" type="video/mp4" />
        </video>
      )}
      
      {/* White Fade Overlay - stronger fade to white */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-white/50 to-white pointer-events-none"></div>

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-4 md:mb-8 leading-[1.1] md:leading-[1.05] text-slate-950"
        >
          Webdesign, das aus Besuchern<br/><span className="font-serif italic text-primary font-normal">zahlende Kunden macht.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-slate-500 mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          VAMELA entwickelt maßgeschneiderte Webseiten, die dein Angebot glasklar kommunizieren, Vertrauen aufbauen und messbar qualifizierte Anfragen generieren.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 md:gap-8 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto">
            <motion.button
              onClick={onOpenContact}
              aria-label="Kostenlosen Entwurf anfragen"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium text-base md:text-lg flex items-center justify-center gap-2 transition-colors relative overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kostenlosen Entwurf anfragen
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </motion.button>
            
            <motion.a
              href="https://wa.me/4917624200179?text=Hallo%20VAMELA,%20ich%20hätte%20gerne%20eine%20kurze%20Einschätzung%20zu%20meiner%20Website."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jetzt per WhatsApp anfragen"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium text-base md:text-lg flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
            >
              Jetzt per WhatsApp anfragen
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
            </motion.a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80"
              ].map((src, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                  className="relative w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden cursor-pointer"
                >
                  <img src={src} alt="" role="presentation" width="40" height="40" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-slate-900 text-sm">+40 zufriedene Kunden</div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                Aktuell 2 Projektplätze verfügbar
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
