import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';
import { niches } from '../data/niches';

export const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 md:pb-12 px-4 sm:px-6 lg:px-8 pb-safe">
      <div className="max-w-7xl mx-auto">
        {/* Large Gradient Text */}
        <div className="text-center mb-16 md:mb-24 relative flex justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[20vw] md:text-[14rem] font-black tracking-tighter leading-none select-none bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-600 to-transparent [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
          >
            VAMELA
          </motion.h2>
        </div>

        {/* SEO Niche Links */}
        <div className="mb-16 border-t border-border pt-12">
          <h3 className="text-lg font-bold text-foreground mb-6">Branchenlösungen</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {niches.map((niche) => (
              <Link 
                key={niche.slug} 
                to={`/branchen/${niche.slug}`}
                className="text-sm text-body hover:text-primary transition-colors"
              >
                Webdesign für {niche.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-8 border-t border-border pt-10 md:pt-12">
          <div className="text-sm text-body text-center md:text-left order-3 md:order-1">
            © {new Date().getFullYear()} VAMELA. Alle Rechte vorbehalten.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-body font-medium order-1 md:order-2">
            <Link to="/impressum" className="hover:text-primary transition-colors py-2 md:py-0">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors py-2 md:py-0">Datenschutz</Link>
            <Link to="/agb" className="hover:text-primary transition-colors py-2 md:py-0">AGB</Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 md:gap-6 order-2 md:order-3">
            <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors p-2 md:p-0">
              <MessageCircle className="w-7 h-7 md:w-6 md:h-6" />
            </a>
            <a href="https://www.instagram.com/vamela.info" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors p-2 md:p-0">
              <Instagram className="w-7 h-7 md:w-6 md:h-6" />
            </a>
            <a href="https://www.tiktok.com/@vamela.info" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors p-2 md:p-0">
              <TikTokIcon className="w-7 h-7 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
