import { motion } from 'motion/react';
import { ArrowRight, Check, Gauge, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const processSteps = [
  {
    title: 'Positionierung & Branding',
    text: 'Bevor eine einzige Zeile Code entsteht, klären wir, wofür du stehst: Marktposition, Zielgruppe, Wettbewerb und eine visuelle Identität, die zu dir passt.',
  },
  {
    title: 'Strategie & Copywriting',
    text: 'Die Seitenstruktur folgt einer Verkaufslogik, nicht dem Zufall. Ich schreibe Texte, die den Nutzen für deinen Kunden in den ersten Sekunden auf den Punkt bringen.',
  },
  {
    title: 'High-End Webdesign',
    text: 'Modern UI/UX Design auf Basis eines festen 8px-Rasters, einer sauberen Typo-Skala und WCAG-AA-Kontrasten – damit dein Auftritt hochwertig wirkt und für alle bedienbar bleibt.',
  },
  {
    title: 'Entwicklung & Launch',
    text: 'Umsetzung als individuell entwickelte Website – kein Baukasten, kein aufgeblähtes Template. Danach gehen wir live und richten Domain, Hosting und Tracking ein.',
  },
  {
    title: 'All-Inclusive Betreuung',
    text: 'Hosting, Sicherheits-Updates und kleine Änderungen auf Zuruf. Du konzentrierst dich auf dein Geschäft, ich kümmere mich um deine Website.',
  },
];

const trustPoints = [
  {
    icon: MessageCircle,
    title: 'Ein Ansprechpartner, kein Agentur-Overhead',
    text: 'Du sprichst immer direkt mit mir – auch per WhatsApp. Keine Projektmanager-Kette, keine wochenlangen Abstimmungsschleifen.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparente Festpreise',
    text: 'Einmalig ab 299 € oder im Abo ab 99 € im Monat. Was drin ist, steht vorher fest – keine versteckten Nachträge.',
  },
  {
    icon: Sparkles,
    title: 'Kostenloser Entwurf vorab',
    text: 'Du siehst dein neues Design, bevor du dich entscheidest. Erst wenn dir gefällt, was du siehst, reden wir über die Zusammenarbeit.',
  },
  {
    icon: Gauge,
    title: 'Messbare Ergebnisse statt Bauchgefühl',
    text: 'Ladezeit, Sichtbarkeit und Anfragen sind messbar. Genau daran lasse ich meine Arbeit bewerten.',
  },
];

export function WhyVamelaArticle({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <article className="max-w-3xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Webdesign aus Freising
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Webdesign, das nicht nur gut aussieht,{' '}
            <span className="font-serif italic text-primary font-normal">sondern Kunden bringt.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Eine Website ist kein digitales Poster, sondern dein bestbezahlter Vertriebsmitarbeiter – wenn sie richtig
            gebaut ist. Genau darum geht es bei <strong className="text-slate-900 font-semibold">High-Converting Website Design</strong>:
            um Seiten, die Besucher zu Anfragen machen, statt nur Eindruck zu schinden. Auf dieser Seite erfährst du, wie
            ich arbeite, warum der Prozess funktioniert und woran du erkennst, dass du es mit einem verlässlichen Partner
            zu tun hast.
          </p>
        </motion.header>

        <div className="space-y-12 md:space-y-16 text-slate-600 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Warum High-Converting Website Design tatsächlich Ergebnisse liefert
            </h3>
            <p className="mb-4">
              Die meisten Webseiten scheitern nicht am Geschmack, sondern an der Führung. Besucher landen auf der Seite,
              finden nicht sofort, was sie suchen, und sind wieder weg. Deshalb beginnt jedes Projekt bei mir nicht mit
              Farben, sondern mit einer Frage: Was soll der Besucher tun – und was hält ihn gerade davon ab?
            </p>
            <p className="mb-6">
              Aus dieser Antwort entsteht die Struktur. Jede Überschrift, jeder Absatz und jeder Button hat eine Aufgabe
              im Entscheidungsprozess deines Kunden. Das ist der Unterschied zwischen einer Seite, die „online ist", und
              einer Seite, die planbar Anfragen erzeugt.
            </p>
            <ul className="space-y-3 bg-white rounded-2xl border border-slate-200 p-6">
              {[
                'Klare Nutzenkommunikation in den ersten Sekunden statt Selbstdarstellung',
                'Ein eindeutiger nächster Schritt auf jedem Seitenabschnitt – kein Suchen nach dem Kontakt',
                'Vertrauenssignale genau dort, wo Zweifel entstehen: Referenzen, Garantie, echte Ansprechperson',
                'Kurze Kontaktwege inklusive WhatsApp, weil viele Kunden lieber schreiben als Formulare ausfüllen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Modern UI/UX Design und eine Premium Digital Brand Identity
            </h3>
            <p className="mb-4">
              Vertrauen entsteht schneller, als der erste Satz gelesen ist. Wirkt ein Auftritt zusammengewürfelt,
              überträgt sich dieser Eindruck auf die Leistung dahinter – so unfair das ist. Deshalb behandle ich
              <strong className="text-slate-900 font-semibold"> Modern UI/UX Design</strong> nicht als Dekoration, sondern
              als Handwerk mit festen Regeln.
            </p>
            <p className="mb-4">
              Abstände folgen einem durchgehenden 8px-Raster, Schriftgrößen einer definierten Skala, Farben einem
              abgestimmten System aus Blau- und Neutraltönen. Kontraste erfüllen die WCAG-AA-Vorgaben, Fokuszustände sind
              sichtbar, die Bedienung funktioniert auch per Tastatur. Das Ergebnis wirkt ruhig und teuer – weil nichts
              zufällig platziert ist.
            </p>
            <p>
              Darauf baut deine <strong className="text-slate-900 font-semibold">Premium Digital Brand Identity</strong> auf:
              eine visuelle Identität, die über Logo, Farbwelt, Typografie und Bildsprache hinweg zusammenpasst. Nicht,
              damit es hübsch ist – sondern damit dein Unternehmen größer und verlässlicher wirkt, als es die Konkurrenz
              in deinem Umkreis tut.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Ein Prozess, der sich in der Praxis bewährt hat
            </h3>
            <p className="mb-6">
              Die meisten Website-Projekte scheitern nicht an Design oder Technik, sondern an fehlender Struktur:
              unklare Zuständigkeiten, endlose Korrekturschleifen, ein Ergebnis, das niemand mehr wirklich wollte. Mein
              Ablauf ist bewusst in fünf klar abgegrenzte Schritte unterteilt. Du weißt jederzeit, wo dein Projekt steht
              und was als Nächstes von dir gebraucht wird.
            </p>
            <ol className="space-y-4">
              {processSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 bg-white rounded-2xl border border-slate-200 p-5 md:p-6"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5 text-base md:text-lg">{step.title}</h4>
                    <p className="text-sm md:text-base m-0">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              Weil ich als direkter Ansprechpartner arbeite, entfallen die Abstimmungswege großer Agenturen. Die meisten
              Projekte stehen deshalb innerhalb weniger Wochen live – nicht nach einem halben Jahr.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Custom React Website Design statt Baukasten von der Stange
            </h3>
            <p className="mb-4">
              Baukastensysteme sind schnell aufgesetzt und danach schwer zu retten: aufgeblähter Code, träge Ladezeiten,
              kaum Kontrolle über die technische Basis. Ich setze stattdessen auf
              <strong className="text-slate-900 font-semibold"> Custom React Website Design</strong> – jede Seite wird als
              eigenständige Anwendung entwickelt, mit sauberer Komponentenstruktur und ohne Ballast, den du nicht
              brauchst.
            </p>
            <p className="mb-4">
              Das zahlt direkt auf <strong className="text-slate-900 font-semibold">SEO-optimierte Webentwicklung</strong> ein.
              Semantisches HTML gibt Suchmaschinen eine klare Gliederung, strukturierte Daten nach Schema.org erklären
              maschinenlesbar, wer du bist, wo du sitzt und was du anbietest. Meta-Angaben, Sitemap und interne
              Verlinkung sind kein nachträglicher Anbau, sondern Teil der Umsetzung.
            </p>
            <p>
              Dazu kommt die zweite Suchebene: Immer mehr Menschen fragen nicht Google, sondern ChatGPT oder Perplexity
              nach einem Dienstleister in ihrer Nähe. Diese Systeme lesen Inhalte anders – sie bevorzugen klare
              Frage-Antwort-Strukturen und eindeutig definierte Entitäten. Genau darauf bereite ich deine Inhalte mit vor,
              damit du auch dann empfohlen wirst, wenn niemand mehr eine klassische Ergebnisliste durchklickt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Fast Loading Responsive Websites: Tempo ist kein Luxus
            </h3>
            <p className="mb-4">
              Ladezeit ist der unterschätzteste Umsatzfaktor im Web. Jede zusätzliche Sekunde kostet Besucher – und
              Google bewertet Geschwindigkeit über die Core Web Vitals direkt als Rankingsignal. Deshalb sind
              <strong className="text-slate-900 font-semibold"> Fast Loading Responsive Websites</strong> bei mir kein
              Zusatzpaket, sondern Standard.
            </p>
            <p className="mb-6">
              Technisch heißt das: moderne Bildformate wie WebP, Bilder werden erst geladen, wenn sie gebraucht werden,
              Code wird in kleine Pakete aufgeteilt, und alles läuft über Hosting mit Komprimierung und Edge-Caching.
              Aufwendige Effekte werden auf Mobilgeräten bewusst reduziert, damit die Seite auch bei mittelmäßigem
              Empfang sofort reagiert.
            </p>
            <p>
              Genauso wichtig: Der Großteil der lokalen Suchanfragen kommt vom Smartphone. Ich entwickle deshalb
              mobile-first – die Seite wird zuerst für den kleinen Bildschirm gedacht und dann nach oben skaliert, statt
              eine Desktop-Seite mühsam zusammenzuschieben.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Redesign für lokale Unternehmen in Freising, München und Umgebung
            </h3>
            <p className="mb-4">
              Sehr oft ist das Problem keine fehlende Website, sondern eine veraltete. Sie stammt aus einer Zeit, in der
              Smartphones eine Randerscheinung waren, lädt langsam und lässt sich nicht mehr sinnvoll pflegen. Ein
              gezieltes <strong className="text-slate-900 font-semibold">Redesign für lokale Unternehmen</strong> ist
              deshalb meist der schnellste Hebel: Substanz und Inhalte sind da, nur die Verpackung und die technische
              Basis arbeiten gegen dich.
            </p>
            <p className="mb-4">
              Ich arbeite regelmäßig mit Betrieben aus Freising, München, Landshut, Erding, Moosburg und dem gesamten
              Umland – unter anderem mit Handwerksbetrieben, Facility-Management-Dienstleistern, Steuerberatern,
              Rechtsanwälten, Immobilienmaklern, Zahnarzt- und Physiotherapiepraxen, Pflegediensten und Gastronomie.
              Jede dieser Branchen hat eigene Fragen, eigene Bedenken und eigene Suchbegriffe. Entsprechend bekommst du
              keine Standardvorlage, sondern eine auf deine Zielgruppe abgestimmte Lösung.
            </p>
            <p>
              Der Einstieg ist bewusst risikofrei: Du erhältst vorab einen kostenlosen Entwurf für deinen neuen Auftritt.
              Erst wenn du siehst, wie deine Seite aussehen könnte, entscheidest du, ob wir zusammenarbeiten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Warum du VAMELA vertrauen kannst
            </h3>
            <p className="mb-6">
              Hinter VAMELA steht kein anonymes Team, sondern Christian Stockmeier aus Haag an der Amper. Du weißt von
              Anfang an, wer dein Projekt umsetzt, wer ans Telefon geht und wer verantwortlich ist, wenn etwas nicht
              passt. Das ist der wichtigste Unterschied zu einer Agentur, bei der du nach dem Vertragsabschluss an die
              nächste Ebene weitergereicht wirst.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {trustPoints.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1.5 text-base">{title}</h4>
                  <p className="text-sm m-0">{text}</p>
                </div>
              ))}
            </div>
            <p>
              Dazu kommen Projekte, die du dir ansehen kannst – vom Traditionsbiergarten Schlossallee in Haag an der
              Amper über Barnekow Recycling bis zu Coremis und Crank Facility Management. Referenzen, die live im Netz
              stehen, sagen mehr über Verlässlichkeit aus als jedes Versprechen auf einer Startseite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 border border-primary/20 rounded-3xl p-6 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Sieh dir deinen neuen Auftritt an – kostenlos und unverbindlich
            </h3>
            <p className="mb-6 text-slate-700">
              Du musst mir nicht glauben, dass ein durchdachter Auftritt einen Unterschied macht. Sieh es dir einfach an:
              Ich erstelle dir vorab einen kostenlosen Entwurf für deine neue Website. Ohne Vorkasse, ohne Verpflichtung
              und ohne Fachchinesisch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#gratis-entwurf"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-full font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Kostenlosen Entwurf sichern
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              {onOpenContact && (
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-900 text-slate-900 px-6 py-3.5 rounded-full font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
                >
                  Unverbindlich Kontakt aufnehmen
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </article>
    </section>
  );
}
