import { ArrowRight, MessageCircle, Instagram, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [location, setLocation] = useState('Freising & Umgebung');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Lokales Geo-Targeting mit Fast Abort Controller
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        clearTimeout(timeoutId);
        if (data && data.city) {
          if (data.city === 'Munich' || data.city === 'München') {
            setLocation('Freising, München & Umgebung');
          } else if (data.city !== 'Freising') {
            setLocation(`Freising & ${data.city}`);
          }
        }
      })
      .catch(() => {
        // Safe Fallback
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section 
      className="relative w-full pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-warm-50"
      aria-label="Hero Section"
    >
      {/* Background Visual Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          poster="https://s1.directupload.eu/images/260324/do2yh9ju.webp"
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="w-full h-full object-cover opacity-65 transition-opacity duration-700"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4#t=0.001" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/60 via-warm-50/30 to-warm-50"></div>
      </div>

      {/* Social Links Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-30"
      >
        <div className="w-[1px] h-12 bg-slate-300"></div>
        <a href="https://www.instagram.com/vamela.info" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors" aria-label="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://www.tiktok.com/@vamela.info" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors" aria-label="TikTok">
          <TikTokIcon className="w-5 h-5" />
        </a>
        <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors" aria-label="WhatsApp">
          <MessageCircle className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-12 bg-slate-300"></div>
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 shadow-xs mb-4 text-xs sm:text-xs font-medium text-slate-700 backdrop-blur-xs"
        >
          <span className="flex items-center text-amber-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Zufriedenheitsgarantie</span>
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-5 leading-[1.15] text-slate-950"
        >
          Dein Webdesigner für {location}.<br/>
          <span className="font-serif italic text-primary font-normal">Sichtbar für Neukunden.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-slate-700 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Ob in Freising, Bayern oder deutschlandweit: Ich baue moderne Webseiten, die bei Google & KI-Suchen auf Platz 1 stehen und planbar Anfragen generieren. Flexibel im Abo oder als günstige Einmalzahlung ab 299€.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <motion.button
              onClick={onOpenContact}
              aria-label="Kostenloser Entwurf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-colors relative overflow-hidden shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kostenloser Entwurf
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
              className="group w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
            >
              Jetzt per WhatsApp anfragen
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
            </motion.a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-3 sm:mt-2">
            <div className="flex -space-x-2.5">
              {[
                "https://s1.directupload.eu/images/260324/b4ic9qjm.webp",
                "https://s1.directupload.eu/images/260324/25ibmjz4.webp",
                "https://s1.directupload.eu/images/260324/do2yh9ju.webp"
              ].map((src, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                  className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden cursor-pointer shadow-xs"
                >
                  <img src={src} alt="Kundenreferenz" width="36" height="36" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
            <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 text-xs sm:text-xs font-medium text-slate-700">
              <span className="font-semibold text-slate-900">40+ zufriedene Kunden</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-700 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span><strong className="font-semibold text-slate-950">2 freie Plätze</strong> im August</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

