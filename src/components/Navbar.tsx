import { ArrowRight, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Navbar({ onOpenContact }: { onOpenContact?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="flex justify-between items-center px-4 py-4 md:px-8 md:py-6 bg-transparent backdrop-blur-none md:bg-transparent md:backdrop-blur-none max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 shadow-sm absolute left-1/2 -translate-x-1/2">
          <a href="/#home" className="text-slate-900">Home</a>
          <a href="/#leistungen" className="hover:text-slate-900 transition-colors">Leistungen</a>
          <a href="/#referenzen" className="hover:text-slate-900 transition-colors">Referenzen</a>
          <a href="/#prozess" className="hover:text-slate-900 transition-colors">Prozess</a>
        </div>

        <div className="flex items-center">
          <motion.button
            onClick={onOpenContact}
            whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 8px 10px -6px rgba(37, 99, 235, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="group hidden md:flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium text-sm items-center gap-2 transition-all shadow-lg shadow-primary/30 relative overflow-hidden animate-shimmer"
          >
            Kostenloses Design-Konzept
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <button 
            className="md:hidden p-2 text-slate-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-lg"
        >
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
            <a href="/#home" onClick={() => setIsMenuOpen(false)} className="text-slate-900 py-2">Home</a>
            <a href="/#leistungen" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-900 py-2">Leistungen</a>
            <a href="/#referenzen" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-900 py-2">Referenzen</a>
            <a href="/#prozess" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-900 py-2">Prozess</a>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact?.();
              }}
              className="bg-primary text-white px-5 py-3 rounded-full font-medium text-sm mt-2"
            >
              Kostenloses Design-Konzept
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
