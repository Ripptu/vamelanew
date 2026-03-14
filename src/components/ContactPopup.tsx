import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, MessageCircle, ArrowRight, Phone } from 'lucide-react';
import { GamifiedWhatsAppForm } from './GamifiedWhatsAppForm';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 perspective-[2000px]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 cursor-pointer"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40, rotateX: 15, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.8, y: 40, rotateX: -15, filter: 'blur(10px)' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-lg relative z-10"
          >
            {/* Glow effect behind the modal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-indigo-400 to-blue-400 rounded-[2.5rem] blur-xl opacity-30 animate-pulse"></div>
            
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-100">
              {/* Decorative background elements */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Close Button - Made larger and more accessible */}
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-20 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Schließen"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 pr-12">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Lass uns sprechen</h2>
                    <p className="text-slate-500 font-medium text-sm sm:text-base">Christian antwortet meist in wenigen Stunden.</p>
                  </div>
                </div>
                
                <GamifiedWhatsAppForm onClose={onClose} />
                
                <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
                  <p className="text-sm text-slate-400 text-center">Oder direkt kontaktieren:</p>
                  <a href="mailto:kontakt@vamela.info" className="flex items-center justify-center gap-2 text-primary font-medium hover:underline">
                    <Mail className="w-4 h-4" /> kontakt@vamela.info
                  </a>
                  <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-emerald-600 font-medium hover:underline">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
