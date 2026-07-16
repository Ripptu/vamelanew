import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function FAQSection({ onOpenContact }: { onOpenContact?: () => void }) {
  const faqs = [
    {
      q: "Wer baut mir eine Webseite in meiner Nähe?",
      a: "Als Webdesigner für Selbstständige und kleine Unternehmen bin ich direkt in deiner Nähe und dank modernem digitalen Austausch auch für Kunden aus ganz Deutschland da. Ich lege großen Wert auf persönlichen Kontakt, egal ob lokal im Umkreis oder remote."
    },
    {
      q: "Wo kann ich eine professionelle Webseite kaufen?",
      a: "Bei VAMELA kannst du professionelle Webseiten ab 299€ oder im flexiblen Abo-Modell kaufen. Dies beinhaltet nicht nur das Design, sondern auch Hosting, Wartung und regelmäßige Updates."
    },
    {
      q: "Wie erreiche ich Platz 1 bei Google und in KI-Suchen?",
      a: "Ich nutze ein Multi-Angle-System. Dabei optimiere ich deine Webseite nicht nur technisch für klassische Suchmaschinen (Google SEO), sondern bereite die Struktur auch perfekt für moderne KI-Modelle wie ChatGPT vor. Das sorgt für maximale regionale Sichtbarkeit und mehr Neukunden."
    },
    {
      q: "Wie lange dauert die Erstellung der Webseite?",
      a: "In der Regel steht deine Webseite innerhalb von wenigen Wochen bereit. Durch meinen effizienten Prozess als Ein-Mann-Team entfallen lange Wartezeiten, die bei großen Agenturen üblich sind."
    },
    {
      q: "Was unterscheidet VAMELA von anderen Webdesignern?",
      a: "Du hast mich als direkten und einzigen Ansprechpartner. Kein Agentur-Overhead, keine versteckten Kosten und ein starker Fokus auf Webdesign, das auch wirklich lokal gefunden wird und Kunden bringt."
    },
    {
      q: "Erstellst du auch die Texte für meine Webseite?",
      a: "Absolut. Ich erstelle Texte, die deine Dienstleistung klar auf den Punkt bringen, auf lokale Suchanfragen optimiert sind und Besucher direkt überzeugen."
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
              className="group bg-white  border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
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

