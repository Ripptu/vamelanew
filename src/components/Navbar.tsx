import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar({ onOpenContact }: { onOpenContact?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex justify-between items-center px-4 py-4 md:px-8 md:py-6 bg-transparent backdrop-blur-none md:bg-transparent md:backdrop-blur-none max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 shadow-sm absolute left-1/2 -translate-x-1/2">
          <a href="/#home" aria-label="Zur Startseite" className="text-slate-900 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-2 py-1">Home</a>
          <a href="/#leistungen" aria-label="Zu den Leistungen" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-2 py-1">Leistungen</a>
          <a href="/#referenzen" aria-label="Zu den Referenzen" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-2 py-1">Referenzen</a>
          <a href="/#prozess" aria-label="Zum Prozess" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-2 py-1">Prozess</a>
        </div>

        <div className="flex items-center">
          <motion.button
            onClick={onOpenContact}
            aria-label="Kostenloses Design-Konzept anfragen"
            whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 8px 10px -6px rgba(37, 99, 235, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="group hidden lg:flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium text-sm items-center gap-2 transition-all shadow-lg shadow-primary/30 relative overflow-hidden animate-shimmer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            Kostenloses Design-Konzept
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <button 
            className="lg:hidden p-2 text-slate-900 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menü umschalten"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-[100] bg-black flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-white p-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md"
                aria-label="Menü schließen"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              <a href="/#home" onClick={() => setIsMenuOpen(false)} className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md">Home</a>
              <a href="/#leistungen" onClick={() => setIsMenuOpen(false)} className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md">Leistungen</a>
              <a href="/#referenzen" onClick={() => setIsMenuOpen(false)} className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md">Referenzen</a>
              <a href="/#prozess" onClick={() => setIsMenuOpen(false)} className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md">Prozess</a>
            </div>
            
            <div className="p-8 mt-auto mb-8">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact?.();
                }}
                className="w-full bg-primary text-white text-xl font-bold uppercase tracking-wider py-6 border-4 border-primary hover:bg-transparent hover:text-primary transition-colors focus-visible:ring-4 focus-visible:ring-offset-4 focus-visible:ring-primary focus-visible:outline-none"
              >
                Projekt anfragen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
