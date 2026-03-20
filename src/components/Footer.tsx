import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';
import { niches } from '../data/niches';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 md:pb-12 px-4 sm:px-6 lg:px-8 pb-safe">
      <div className="max-w-7xl mx-auto">
        {/* Large Gradient Text */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[18vw] md:text-[12rem] font-black tracking-tighter leading-none text-border select-none"
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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors p-2 md:p-0">
              <Instagram className="w-7 h-7 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
