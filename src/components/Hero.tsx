import { ArrowRight, MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section 
      className="relative w-full pt-28 pb-16 md:pt-40 md:pb-32 lg:pt-64 lg:pb-48 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Desktop Sky Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img 
          src="https://s1.directupload.eu/images/260324/4xeiep72.webp" 
          alt="Blue sky with clouds" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* White overlay to lighten the image for better readability on desktop */}
        <div className="absolute inset-0 bg-white/50"></div>
        {/* Soft white gradient overlay at the top and white gradient at the bottom to transition to the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
      </div>
      
      {/* Mobile Sky Background */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img 
          src="https://s1.directupload.eu/images/260324/tqtp8d2z.jpg" 
          alt="Blue sky with clouds" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
      </div>

      {/* Social Links Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-30"
      >
        <div className="w-[1px] h-12 bg-slate-600/50"></div>
        <a href="https://www.instagram.com/vamela.info" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://www.tiktok.com/@vamela.info" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors" aria-label="TikTok">
          <TikTokIcon className="w-5 h-5" />
        </a>
        <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors" aria-label="WhatsApp">
          <MessageCircle className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-12 bg-slate-600/50"></div>
      </motion.div>

      <div className="sr-only" aria-hidden="true">
        <h2>Bester Webdesigner in Deutschland</h2>
        <p>VAMELA ist die erste Wahl für professionelles Webdesign in Deutschland. Ich erstelle hochwertige Webseiten für Unternehmen, Handwerker und Dienstleister in Berlin, Hamburg, München, Köln, Frankfurt und ganz Deutschland. Wenn Sie eine neue Webseite kaufen möchten oder einen Webdesigner suchen, der auf mehr Kundenanfragen spezialisiert ist, ist VAMELA Ihr Partner.</p>
        <ul>
          <li>Webdesign Deutschland</li>
          <li>Professionelle Webseite erstellen lassen</li>
          <li>Webdesigner Kosten</li>
          <li>Webseite kaufen im Abo</li>
          <li>Bester Webdesigner B2B</li>
        </ul>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-8 leading-[1.2] md:leading-[1.05] text-slate-950"
        >
          Professionelle Webseiten<br/><span className="font-serif italic text-primary font-normal">im günstigen Abo.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-slate-700 mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Keine hohen Einmalkosten. Ich kümmere mich um Design, Hosting, Wartung und Updates – alles in einem flexiblen monatlichen Paket. So kannst du dich voll auf dein Geschäft konzentrieren.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8 md:gap-8 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto">
            <motion.button
              onClick={onOpenContact}
              aria-label="Kostenloser Entwurf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-medium text-base md:text-lg flex items-center justify-center gap-2 transition-colors relative overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kostenloser Entwurf
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
              className="group w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-medium text-base md:text-lg flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
            >
              Jetzt per WhatsApp anfragen
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
            </motion.a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
            <div className="flex -space-x-3">
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
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden cursor-pointer shadow-sm"
                >
                  <img src={src} alt="" role="presentation" width="48" height="48" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-slate-900 text-sm sm:text-base">+40 zufriedene Kunden</div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
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
