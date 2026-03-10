import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, MessageCircle } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
              <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-6">Kontakt aufnehmen</h2>
              <div className="space-y-4">
                <a href="mailto:ripptoprivat@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="font-medium">ripptoprivat@gmail.com</span>
                </a>
                <a href="https://wa.me/4915254583196" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span className="font-medium">WhatsApp Nachricht</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
