import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-6 w-auto" referrerPolicy="no-referrer" />
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://wa.me/4917624200179" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] font-medium hover:text-[#1da851] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            +49 176 24200179
          </a>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/impressum" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1">Datenschutz</Link>
            <Link to="/agb" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1">AGB</Link>
          </div>
        </div>
        
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} VAMELA. Alle Rechte vorbehalten.
        </div>
      </div>
    </motion.footer>
  );
}
