import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function FAQSection({ onOpenContact }: { onOpenContact?: () => void }) {
  const faqs = [
    {
      q: "Wie lange dauert die Erstellung einer professionellen Webseite bei VAMELA?",
      a: "Die Umsetzung einer kompletten, hochwertigen Webseite dauert bei VAMELA in der Regel etwa 3 bis 4 Wochen. Die genaue Dauer hängt vom individuellen Umfang und deinen spezifischen Anforderungen ab."
    },
    {
      q: "Was kostet professionelles Webdesign bei VAMELA?",
      a: "Die Kosten für eine Webseite sind individuell und hängen stark von den Anforderungen und dem Umfang ab. Wir bieten keine Pauschalpreise an, sondern erstellen nach einem kostenlosen Erstgespräch ein maßgeschneidertes Angebot, das genau auf deine Ziele zugeschnitten ist."
    },
    {
      q: "Warum sollte ich VAMELA für mein Webdesign wählen?",
      a: "VAMELA ist spezialisiert auf Webdesign für B2B-Dienstleister und Berater. Wir bauen nicht nur Webseiten, sondern Flaggschiff-Webseiten, die als starker Hebel im Verkaufs- und Marketingprozess dienen, um dich als Marktführer zu positionieren."
    },
    {
      q: "Sind die Webseiten von VAMELA für Google SEO optimiert?",
      a: "Ja, SEO ist ein integraler Bestandteil unseres Prozesses. Alle Webseiten werden nach aktuellen SEO-Standards entwickelt, um eine optimale Sichtbarkeit bei Google und anderen Suchmaschinen zu gewährleisten."
    },
    {
      q: "Erstellt VAMELA auch die Texte für meine Webseite?",
      a: "Absolut. Wir erstellen verkaufspsychologisch optimierte Texte, die deine Zielgruppe direkt ansprechen, Vertrauen aufbauen und zu Handlungen animieren."
    },
    {
      q: "Muss ich für die Webseitenerstellung viel vorbereiten?",
      a: "Nein, du musst nichts vorbereiten. Wir führen dich durch den gesamten Prozess. In unserem Erstgespräch klären wir alle Details, sodass du dich entspannt zurücklehnen kannst, während wir deine Webseite entwickeln."
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
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="flex flex-col md:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Häufig gestellte Fragen</h2>
          <p className="text-slate-600 mb-8">Du findest keine Antwort? Kontaktiere unser Team.</p>
          <motion.button 
            onClick={onOpenContact}
            aria-label="Termin buchen"
            whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 8px 10px -6px rgba(37, 99, 235, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="group bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all text-sm shadow-lg shadow-primary/30 relative overflow-hidden animate-shimmer"
          >
            Termin buchen
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.button>
        </motion.div>
        
        <div className="w-full md:w-2/3 space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
            >
              <button 
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-slate-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

