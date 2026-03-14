import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppBanner() {
  const whatsappUrl = "https://wa.me/4917624200179?text=Hallo%20VAMELA,%20ich%20habe%20eine%20Frage%20zur%20Website.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="block w-full bg-slate-50 border-y border-slate-100 py-6 px-4 text-center hover:bg-slate-100 transition-colors"
    >
      <div className="flex items-center justify-center gap-3 text-slate-800 font-medium">
        <MessageCircle className="w-5 h-5 text-[#25D366]" />
        <span>Fragen zur Website? Schreib uns einfach kurz auf WhatsApp.</span>
      </div>
    </motion.a>
  );
}
