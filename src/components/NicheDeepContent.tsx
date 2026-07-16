import React from 'react';
import { NicheData } from '../data/niches';

export function NicheDeepContent({ niche }: { niche: NicheData }) {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-8">
          
          <h2 className="text-3xl md:text-4xl text-slate-900 font-bold tracking-tight mb-8">
            Der ultimative Guide: Webdesign & digitale Sichtbarkeit für {niche.name} im Jahr 2026
          </h2>

          <p className="text-xl font-medium text-slate-800 leading-relaxed">
            Die Zeiten, in denen eine digitale Visitenkarte im Netz ausreichte, sind endgültig vorbei. Für {niche.name} geht es heute nicht mehr nur darum, "online zu sein", sondern durch ein durchdachtes <strong className="text-primary font-semibold">Multi-Angle-System</strong> messbar Neukunden zu gewinnen, Mitarbeiter zu rekrutieren und in Suchmaschinen (sowohl Google als auch KI-Systemen) die absolute Nummer 1 in der Region zu werden.
          </p>

          <h3 className="text-2xl text-slate-900 font-bold mt-12 mb-4">1. Warum herkömmliches Webdesign für {niche.name} nicht mehr funktioniert</h3>
          <p>
            Viele {niche.name} verlieren täglich lukrative Aufträge an die Konkurrenz, obwohl sie fachlich die bessere Arbeit leisten. Der Grund? Ihre Website kommuniziert diese Qualität nicht. Eine veraltete, langsame oder generische Homepage schreckt moderne Konsumenten und B2B-Einkäufer innerhalb von Sekundenbruchteilen ab.
          </p>
          <p>
            Hinzu kommt das Problem der Unsichtbarkeit. Wenn Ihre Zielgruppe nach einem Experten sucht, nutzt sie nicht mehr das Branchenbuch. Sie googelt lokal oder fragt KI-Assistenzsysteme wie ChatGPT oder Perplexity. Wer hier nicht durch <strong>Local SEO</strong> und <strong>AEO (AI Engine Optimization)</strong> perfekt positioniert ist, existiert für diese Kunden praktisch nicht.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 bg-white p-6 rounded-2xl border border-slate-200">
            <li><strong className="text-slate-900">Der Schmerz:</strong> Hohe Absprungraten, keine Kontaktanfragen, Bewerbermangel.</li>
            <li><strong className="text-slate-900">Die Lösung:</strong> Eine verkaufspsychologisch optimierte Flaggschiff-Website, die Vertrauen aufbaut und den Nutzer ohne Umwege zur Handlung führt.</li>
          </ul>

          <h3 className="text-2xl text-slate-900 font-bold mt-12 mb-4">2. Das Multi-Angle-System: Maximale Dominanz für {niche.name}</h3>
          <p>
            Um als lokaler Anbieter oder überregionaler Experte den Markt zu dominieren, setze ich auf mein erprobtes Multi-Angle-System. Dieses beleuchtet Ihren digitalen Auftritt aus drei entscheidenden Perspektiven:
          </p>

          <h4 className="text-xl text-slate-900 font-bold mt-8 mb-3">Perspektive A: Google-Suchalgorithmus (Classic & Local SEO)</h4>
          <p>
            Technische Exzellenz ist das Fundament. Google straft langsame Seiten gnadenlos ab. Für {niche.name} implementieren wir:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
            <li><strong className="text-slate-900">Core Web Vitals Optimierung:</strong> Blitzschnelle Ladezeiten durch Next-Gen Bildformate (WebP), Caching und sauberes, semantisches HTML5.</li>
            <li><strong className="text-slate-900">Lokale Relevanz:</strong> Perfekte Abstimmung mit Ihrem Google Business Profile. Wir bauen lokale Landingpages auf, die Suchanfragen in Ihrem Einzugsgebiet exakt abfangen.</li>
            <li><strong className="text-slate-900">Strukturierte Daten (Schema.org):</strong> Wir implementieren spezifisches JSON-LD Markup, das Google exakt sagt: "Dies ist ein zertifizierter Experte für {niche.name} mit einer 5-Sterne Bewertung."</li>
          </ul>

          <h4 className="text-xl text-slate-900 font-bold mt-8 mb-3">Perspektive B: KI-Suchmaschinen (AEO - AI Engine Optimization)</h4>
          <p>
            Kunden nutzen zunehmend KI-Tools, um Dienstleister zu finden ("Empfiehl mir einen zuverlässigen Experten für {niche.name} in meiner Nähe"). Um hier zitiert zu werden, muss Ihre Website anders strukturiert sein:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
            <li><strong className="text-slate-900">NLP-optimierter Content:</strong> Wir bereiten die Inhalte in klaren Frage-Antwort-Mustern auf, die Large Language Models (LLMs) perfekt auslesen und als vertrauenswürdige Quelle einstufen können.</li>
            <li><strong className="text-slate-900">Entitäten-Definition:</strong> Durch präzises Schema-Markup machen wir Ihr Unternehmen zu einer unmissverständlichen Entität im Knowledge Graph der KIs.</li>
            <li><strong className="text-slate-900">Trust-Signale bündeln:</strong> KIs empfehlen nur, wem sie vertrauen. Wir bündeln Ihre Auszeichnungen, echten Kundenbewertungen und Fachzertifikate maschinenlesbar auf der Website.</li>
          </ul>

          <h4 className="text-xl text-slate-900 font-bold mt-8 mb-3">Perspektive C: Neukunden-Konvertierung (UX & Copywriting)</h4>
          <p>
            Traffic bringt keinen Umsatz – Anfragen tun es. Das Design muss extrem klar, minimalistisch und hochwertig sein. Wir verzichten auf Fachjargon und stellen den <strong>Nutzen für den Kunden</strong> in den Fokus:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
            <li><strong className="text-slate-900">Verkaufspsychologische Copy:</strong> Wir adressieren die größten Schmerzpunkte Ihrer Kunden direkt in den ersten Sekunden.</li>
            <li><strong className="text-slate-900">Reibungslose User Experience (UX):</strong> Sofort sichtbare Call-to-Actions (CTAs) und Mobile-First-Design, da über 70% der Suchanfragen für {niche.name} über Smartphones kommen.</li>
            <li><strong className="text-slate-900">Einfache Kontaktwege:</strong> Von der 60-Sekunden-Bewerbung für neues Personal bis zur einfachen Projektanfrage für Kunden.</li>
          </ul>

          <h3 className="text-2xl text-slate-900 font-bold mt-12 mb-4">3. Maßgeschneiderte Lösungen für Ihre Branche</h3>
          <p>
            Jede Branche hat ihre eigenen Gesetze. Bei {niche.name} wissen wir genau, worauf es ankommt:
          </p>
          <div className="grid grid-cols-1 gap-6 my-8">
            {niche.benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h5 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-primary">•</span> {benefit.title}
                </h5>
                <p className="text-slate-600 m-0">{benefit.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl text-slate-900 font-bold mt-12 mb-4">
            4. Der Hebel gegen den Fachkräftemangel: Recruiting-Websites für {niche.name}
          </h3>
          <p>
            Neben der Neukundengewinnung ist das Recruiting das größte Problem für {niche.name}. Eine professionelle Website ist Ihr bester Personalvermittler. Top-Fachkräfte wechseln den Job nur, wenn der neue Arbeitgeber moderner, sicherer und attraktiver wirkt. 
          </p>
          <p>
            Wir integrieren auf Ihrer neuen Flaggschiff-Seite spezielle Recruiting-Funnels. Diese machen es passiv suchenden Kandidaten extrem leicht, sich mobil und ohne lästiges Anschreiben in weniger als einer Minute zu bewerben. Das Ergebnis: Deutlich mehr qualifizierte Bewerbungen aus Ihrer direkten Region.
          </p>

          <h3 className="text-2xl text-slate-900 font-bold mt-12 mb-4">5. Tiefergehende Antworten auf Ihre wichtigsten Fragen</h3>
          <p>
            Um Ihnen volle Transparenz zu bieten, haben wir die häufigsten Fragen zum Thema Webdesign für {niche.name} zusammengefasst:
          </p>
          
          <div className="space-y-6 my-8">
            {niche.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h5 className="font-bold text-slate-900 text-lg mb-2">{faq.question}</h5>
                <p className="text-slate-600 m-0">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Jetzt die digitale Dominanz für {niche.name} sichern</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Lassen Sie uns Ihre aktuelle digitale Präsenz unverbindlich analysieren. In einer kostenlosen Potenzialanalyse zeigen wir Ihnen exakt, wie wir das Multi-Angle-System auf Ihr Unternehmen anwenden, um Ihre Anfragen messbar zu steigern.
            </p>
            <p className="mb-0 font-bold text-primary">
              → Bereit für den nächsten Schritt? Kontaktieren Sie mich noch heute für Ihr exklusives Webdesign-Projekt in Freising und ganz Deutschland.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
