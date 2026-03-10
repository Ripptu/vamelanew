import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      q: "Wie lange dauert eine Webseite?",
      a: "In der Regel dauert die Umsetzung einer kompletten Webseite ca. 3-4 Wochen, abhängig vom Umfang und deinen individuellen Anforderungen."
    },
    {
      q: "Wie viel kostet eine Webseite?",
      a: "Die Kosten variieren je nach Umfang und Anforderungen. In einem kostenlosen Erstgespräch klären wir deine Bedürfnisse und erstellen dir ein individuelles Angebot."
    },
    {
      q: "Wann macht eine Zusammenarbeit Sinn?",
      a: "Wenn du bereit bist, in einen professionellen Online-Auftritt zu investieren, der dir messbar mehr Kunden und Umsatz bringt."
    },
    {
      q: "Sind die Webseiten SEO optimiert?",
      a: "Ja, alle unsere Webseiten werden nach den neuesten SEO-Standards entwickelt, um eine optimale Sichtbarkeit bei Google zu gewährleisten."
    },
    {
      q: "Beinhaltet eine Webseite auch die entsprechenden Werbe-& Marketing Texte?",
      a: "Ja, wir erstellen verkaufspsychologisch optimierte Texte, die deine Zielgruppe überzeugen und zu Handlungen animieren."
    },
    {
      q: "Was muss ich vorbereiten oder mitbringen?",
      a: "Du musst nichts vorbereiten. In unserem Erstgespräch klären wir alle Details und führen dich durch den gesamten Prozess."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Häufig gestellte Fragen</h2>
          <p className="text-slate-500 mb-8">Du findest keine Antwort? Kontaktiere unser Team.</p>
          <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all text-sm shadow-lg shadow-primary/30">
            Termin buchen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
        
        <div className="w-full md:w-2/3 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200">
              <button 
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-slate-800">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

