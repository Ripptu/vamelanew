import { ArrowRight, CheckCircle2, ShieldCheck, Search, PenTool, Building2, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function FacilityManagementPage({ onOpenContact }: { onOpenContact?: () => void }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Webdesign für Facility Management & Hausmeisterservices",
    "provider": {
      "@type": "Organization",
      "name": "VAMELA",
      "url": "https://vamela.info"
    },
    "description": "Professionelles Webdesign, SEO und Logo-Erstellung speziell für Facility Management Unternehmen, Gebäudedienstleister und Hausmeisterservices.",
    "serviceType": "WebDesign",
    "areaServed": "DE"
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Helmet>
        <title>Webdesign für Facility Management | VAMELA Agentur</title>
        <meta name="description" content="Professionelles Webdesign, SEO und Logo-Erstellung speziell für Facility Management Unternehmen, Gebäudedienstleister und Hausmeisterservices." />
        <meta property="og:title" content="Webdesign für Facility Management | VAMELA" />
        <meta property="og:description" content="Professionelles Webdesign, SEO und Logo-Erstellung speziell für Facility Management Unternehmen, Gebäudedienstleister und Hausmeisterservices." />
        <link rel="canonical" href="https://vamela.info/branchen/facility-management" />
      </Helmet>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 md:mb-8 shadow-sm">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-slate-700">Exklusiv für Gebäudedienstleister</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 md:mb-8 leading-tight">
            Mehr lukrative Aufträge im Facility Management durch eine Website, <span className="font-serif italic text-primary font-normal">die Vertrauen schafft.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schluss mit Preiskämpfen und unqualifizierten Anfragen. Wir bauen digitale Aushängeschilder für Hausmeisterservices und Facility Manager, die Premium-Kunden anziehen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none shadow-lg shadow-primary/20"
            >
              Kostenlose Potenzialanalyse
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Diesen Facility-Management-Unternehmen helfen wir bereits beim Wachstum
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Placeholders for references */}
            <div className="text-xl md:text-2xl font-bold font-serif">Crank-Facility-Management</div>
            <div className="text-xl md:text-2xl font-bold font-sans">FM A&A</div>
            <div className="text-xl md:text-2xl font-bold font-mono tracking-tighter">Thomas Rott FM</div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Unsere Leistungen für deine Branche
          </h2>
          <p className="text-lg text-slate-600">
            Maßgeschneiderte Lösungen, damit dein Gebäudeservice online genau so professionell auftritt wie vor Ort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Modernes Webdesign</h3>
            <p className="text-slate-600 leading-relaxed">
              Eine B2B-taugliche, blitzschnelle Website, die Vertrauen ausstrahlt und deine Expertise im Facility Management perfekt in Szene setzt. Optimiert für Smartphones und Tablets.
            </p>
          </article>

          <article className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-primary">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lokale SEO-Sichtbarkeit</h3>
            <p className="text-slate-600 leading-relaxed">
              Werde bei Google genau dann gefunden, wenn Hausverwaltungen oder Unternehmen in deiner Region nach zuverlässigen Gebäudedienstleistern suchen.
            </p>
          </article>

          <article className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-primary">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Professionelles Logo & Branding</h3>
            <p className="text-slate-600 leading-relaxed">
              Ein starkes, einprägsames Logo und ein durchgängiges Corporate Design, das dich von den typischen "08/15"-Hausmeisterservices abhebt.
            </p>
          </article>
        </div>
      </section>

      {/* GEO-optimiertes FAQ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Häufige Fragen von Facility-Managern
            </h2>
            <p className="text-lg text-slate-600">
              Antworten auf die wichtigsten Fragen rund um deinen neuen digitalen Auftritt.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                Warum braucht mein Hausmeisterservice eine professionelle Website?
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Hausverwaltungen und gewerbliche Auftraggeber recherchieren heute fast ausschließlich online. Eine professionelle Website fungiert als digitaler Vertriebsmitarbeiter: Sie baut erstes Vertrauen auf, zeigt Ihre Referenzen und Zertifizierungen und hebt Sie von unprofessionellen Anbietern ab. Ohne starke Website verlieren Sie lukrative Aufträge an die Konkurrenz, noch bevor Sie überhaupt ein Angebot abgeben konnten.
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                Wie hilft mir lokale SEO dabei, mehr Aufträge in meiner Region zu gewinnen?
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Facility Management ist ein stark lokales Geschäft. Durch gezielte lokale Suchmaschinenoptimierung (Local SEO) stellen wir sicher, dass Ihr Unternehmen bei Suchanfragen wie "Gebäudereinigung [Ihre Stadt]" oder "Hausmeisterservice [Ihre Region]" ganz oben auf Google erscheint. Das bringt Ihnen kontinuierlich warme Anfragen von Kunden, die genau jetzt Ihren Service in Ihrer Nähe benötigen.
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                Ich habe wenig Zeit. Wie viel Aufwand bedeutet die neue Website für mich?
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Wir wissen, dass Sie im Tagesgeschäft eingespannt sind. Unser Prozess ist "Done-for-You". Nach einem kurzen Strategiegespräch übernehmen wir Konzeption, Design, Texterstellung und technische Umsetzung komplett. Sie müssen lediglich die Entwürfe freigeben. So erhalten Sie eine hochprofessionelle Website mit minimalem eigenen Zeitaufwand.
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                Können wir auch Mitarbeitergewinnung (Recruiting) über die Website abbilden?
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Absolut. Der Fachkräftemangel ist im Facility Management eine der größten Herausforderungen. Wir integrieren auf Wunsch optimierte Karriere-Seiten und einfache, mobile Bewerbungsprozesse (z.B. 60-Sekunden-Bewerbung ohne Anschreiben), um Ihre Website nicht nur zur Kunden-, sondern auch zur Mitarbeiter-Gewinnungsmaschine zu machen.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
