import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar({ onOpenContact }: { onOpenContact?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      
      // Add background when scrolled
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'backdrop-blur-2xl bg-white/5' : 'bg-transparent'}`}
      >
        <nav className="flex justify-between items-center px-4 py-4 md:px-8 md:py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md">
              <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-8 md:h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600 bg-slate-50/80 backdrop-blur-md border border-slate-200/60 rounded-full p-1 shadow-sm absolute left-1/2 -translate-x-1/2">
            {[
              { name: 'Home', href: '/' },
              { name: 'Strategie-Workshop', href: '/strategie-workshop' },
              { name: 'Leistungen', href: '/#leistungen' },
              { name: 'Referenzen', href: '/#referenzen' },
              { name: 'Prozess', href: '/#prozess' },
              { name: 'Bezahlung', href: '/#zahlung' }
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.href} 
                className="px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <motion.button
              onClick={onOpenContact}
              aria-label="Kostenloses Design-Konzept anfragen"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group hidden lg:flex bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-medium text-sm items-center gap-2 transition-colors shadow-md shadow-primary/20 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kostenloses Design-Konzept
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </motion.button>
            <button 
              className="lg:hidden p-2 -mr-2 text-slate-900 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md transition-colors hover:bg-slate-100" 
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
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-[100] bg-slate-950 flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-8 w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer" />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-white p-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md hover:bg-white/10 transition-colors"
                aria-label="Menü schließen"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {[
                { name: 'Home', href: '/' },
                { name: 'Strategie-Workshop', href: '/strategie-workshop' },
                { name: 'Leistungen', href: '/#leistungen' },
                { name: 'Referenzen', href: '/#referenzen' },
                { name: 'Prozess', href: '/#prozess' },
                { name: 'Bezahlung', href: '/#zahlung' }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link 
                    to={item.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-4xl sm:text-5xl font-bold text-white tracking-tight hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="p-8 mt-auto mb-8">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact?.();
                }}
                className="w-full bg-primary text-white text-lg font-semibold py-4 rounded-xl hover:bg-primary-hover transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-primary focus-visible:outline-none shadow-lg shadow-primary/20"
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
