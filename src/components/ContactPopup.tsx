import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, MessageCircle, ArrowRight, Phone } from 'lucide-react';

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
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-20 group"
                aria-label="Schließen"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 pr-12">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img src="https://i.postimg.cc/cZPmBdCM/4995ad88-01bd-465e-9b20-c3178ee83d1e.png" alt="Christian Stockmeier" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-white rounded-full shadow-sm"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Lass uns sprechen</h2>
                    <p className="text-slate-500 font-medium text-sm sm:text-base">Christian antwortet meist in wenigen Stunden.</p>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <motion.a 
                    href="https://wa.me/4917624200179" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 hover:from-[#25D366]/20 hover:to-[#25D366]/10 border border-[#25D366]/20 transition-all cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-[#1da851] font-bold mb-0.5 uppercase tracking-wider">Schnellste Antwort</div>
                        <div className="font-semibold text-slate-900 text-base sm:text-lg">WhatsApp Chat</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] group-hover:translate-x-1 transition-transform relative z-10" />
                  </motion.a>

                  <motion.a 
                    href="mailto:info@vamela.info" 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-primary/5 border border-slate-100 hover:border-primary/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-slate-500 font-medium mb-0.5">E-Mail schreiben</div>
                        <div className="font-semibold text-slate-900 text-sm sm:text-base">info@vamela.info</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a 
                    href="tel:+4917624200179" 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-slate-500 font-medium mb-0.5">Anrufen</div>
                        <div className="font-semibold text-slate-900 text-sm sm:text-base">+49 176 24200179</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
