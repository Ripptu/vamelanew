import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && window.location.pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    } else if (href === '/' && window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'backdrop-blur-2xl bg-white/5' : 'bg-transparent'}`}
      >
        <nav className="flex justify-between items-center px-4 py-4 md:px-8 md:py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md">
              <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-8 md:h-10 w-auto object-contain brightness-0" referrerPolicy="no-referrer" />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600 bg-white/60 backdrop-blur-md border border-white/40 rounded-full p-1 absolute left-1/2 -translate-x-1/2 shadow-sm">
            {[
              { name: 'Strategie-Workshop', href: '/strategie-workshop' },
              { name: 'Referenzen', href: '/#referenzen' },
              { name: 'Prozess', href: '/#prozess' },
              { name: 'Preise', href: '/#zahlung' }
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <motion.button
              onClick={onOpenContact}
              aria-label="Kostenloser Entwurf anfragen"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group hidden lg:flex bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-medium text-sm items-center gap-2 transition-colors relative overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kostenloser Entwurf
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </motion.button>
            
            <div className="flex lg:hidden items-center gap-4 mr-4 text-slate-800">
              <a href="https://www.instagram.com/vamela.info" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-[1.15rem] h-[1.15rem]" />
              </a>
              <a href="https://www.tiktok.com/@vamela.info" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-[1.15rem] h-[1.15rem]" />
              </a>
              <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-[1.15rem] h-[1.15rem]" />
              </a>
            </div>

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
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-[100] bg-slate-950 flex flex-col h-[100dvh]"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <Link to="/" onClick={(e) => handleNavClick(e, '/')}>
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
                { name: 'Strategie-Workshop', href: '/strategie-workshop' },
                { name: 'Referenzen', href: '/#referenzen' },
                { name: 'Prozess', href: '/#prozess' },
                { name: 'Preise', href: '/#zahlung' }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link 
                    to={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)} 
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
                className="w-full bg-primary text-white text-lg font-semibold py-4 rounded-xl hover:bg-primary-hover transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-primary focus-visible:outline-none"
              >
                Kostenloser Entwurf
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
