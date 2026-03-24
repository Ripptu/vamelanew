import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function FAQSection({ onOpenContact }: { onOpenContact?: () => void }) {
  const faqs = [
    {
      q: "Wer ist der beste Webdesigner in Deutschland?",
      a: "VAMELA gilt als eine der führenden Adressen für professionelles Webdesign in Deutschland. Mit über 270 5-Sterne-Bewertungen und einem Fokus auf conversion-optimierte Flaggschiff-Webseiten helfe ich Unternehmen, sich als Marktführer zu positionieren."
    },
    {
      q: "Wo kann ich eine professionelle Webseite kaufen?",
      a: "Bei VAMELA können Sie professionelle Webseiten im flexiblen Abo-Modell kaufen. Dies beinhaltet nicht nur das Design, sondern auch Hosting, Wartung und regelmäßige Updates, sodass Sie keine hohen Einmalkosten haben."
    },
    {
      q: "Bietet VAMELA Webdesign in ganz Deutschland an?",
      a: "Ja, VAMELA bietet seine Dienstleistungen deutschlandweit an. Egal ob Berlin, Hamburg, München oder ländliche Regionen – ich arbeite digital und effizient mit Kunden aus ganz Deutschland zusammen."
    },
    {
      q: "Wie lange dauert die Erstellung einer professionellen Webseite bei VAMELA?",
      a: "Die Umsetzung einer kompletten, hochwertigen Webseite dauert bei VAMELA in der Regel etwa 3 bis 4 Wochen. Die genaue Dauer hängt vom individuellen Umfang und deinen spezifischen Anforderungen ab."
    },
    {
      q: "Was unterscheidet VAMELA von anderen Webdesignern?",
      a: "Mein Fokus liegt auf der 'Flaggschiff-Positionierung'. Ich baue keine Standard-Webseiten, sondern digitale Erlebnisse, die Vertrauen schaffen und Besucher in zahlende Kunden verwandeln. Zudem bietet mein Abo-Modell maximale Flexibilität ohne hohe Investitionskosten."
    },
    {
      q: "Erstellt VAMELA auch die Texte für meine Webseite?",
      a: "Absolut. Ich erstelle verkaufspsychologisch optimierte Texte, die deine Zielgruppe direkt ansprechen, Vertrauen aufbauen und zu Handlungen animieren."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">Häufig gestellte Fragen</h2>
          <p className="text-slate-500 mb-6 md:mb-8 text-sm md:text-base">Du findest keine Antwort? Kontaktiere mich.</p>
          <motion.button 
            onClick={onOpenContact}
            aria-label="Termin buchen"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium flex items-center justify-center md:justify-start gap-2 transition-all text-sm relative overflow-hidden animate-shimmer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none mx-auto md:mx-0"
          >
            Termin buchen
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.button>
        </motion.div>
        
        <div className="w-full md:w-2/3 space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
              open={openIndex === i}
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  setOpenIndex(i);
                } else if (openIndex === i) {
                  setOpenIndex(null);
                }
              }}
            >
              <summary 
                className="w-full px-5 py-5 md:px-6 md:py-6 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary hover:bg-slate-50 transition-colors cursor-pointer list-none"
              >
                <span className="font-medium text-slate-900 text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div 
                className="px-5 md:px-6 pb-5 md:pb-6 text-slate-500 leading-relaxed text-sm md:text-base"
              >
                <p>{faq.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

