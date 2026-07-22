import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function MobileStickyCTA({ onOpenContact }: { onOpenContact: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-[60] flex gap-2"
        >
          <button
            onClick={onOpenContact}
            className="flex-1 bg-slate-900 text-white py-3.5 px-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-95 transition-transform"
          >
            Kostenloser Entwurf
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://wa.me/4917624200179?text=Hallo%20VAMELA,%20ich%20hätte%20gerne%20eine%20kurze%20Einschätzung%20zu%20meiner%20Website."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-[#25D366] text-white p-3.5 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(37,211,102,0.2)] active:scale-95 transition-transform shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
