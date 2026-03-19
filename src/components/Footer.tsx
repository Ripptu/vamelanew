import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Large Gradient Text */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15vw] md:text-[12rem] font-black tracking-tighter leading-none text-border select-none"
          >
            VAMELA
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border pt-12">
          <div className="text-sm text-body">
            © {new Date().getFullYear()} VAMELA. Alle Rechte vorbehalten.
          </div>
          
          <div className="flex gap-8 text-sm text-body font-medium">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-primary transition-colors">AGB</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
