import { 
  Building2, Hammer, Calculator, Scale, Home, Stethoscope, Activity, Heart, 
  Briefcase, Monitor, PieChart, Ruler, Users, Truck, Sparkles, Trees, 
  Wrench, Calendar, Camera, Dumbbell, Utensils, ShieldCheck, Search, PenTool,
  TrendingUp, Target, Zap, Award, Clock, Smartphone
} from 'lucide-react';

export interface NicheData {
  slug: string;
  name: string;
  icon: any;
  badgeText: string;
  h1: string;
  h1Highlight: string;
  heroSub: string;
  schemaDescription: string;
  trustText: string;
  trustLogos: string[];
  benefits: {
    icon: any;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const niches: NicheData[] = [
  {
    slug: 'facility-management',
    name: 'Facility Management',
    icon: Building2,
    badgeText: 'Exklusiv für Gebäudedienstleister',
    h1: 'Mehr lukrative Aufträge im Facility Management durch eine Website,',
    h1Highlight: 'die Vertrauen schafft.',
    heroSub: 'Schluss mit Preiskämpfen und unqualifizierten Anfragen. Wir bauen digitale Aushängeschilder für Hausmeisterservices und Facility Manager, die Premium-Kunden anziehen.',
    schemaDescription: 'Professionelles Webdesign, SEO und Logo-Erstellung speziell für Facility Management Unternehmen, Gebäudedienstleister und Hausmeisterservices.',
    trustText: 'Diesen Facility-Management-Unternehmen helfen wir bereits beim Wachstum',
    trustLogos: ['Crank-Facility-Management', 'FM A&A', 'Thomas Rott FM'],
    benefits: [
      { icon: ShieldCheck, title: 'Modernes Webdesign', description: 'Eine B2B-taugliche, blitzschnelle Website, die Vertrauen ausstrahlt und deine Expertise im Facility Management perfekt in Szene setzt.' },
      { icon: Search, title: 'Lokale SEO-Sichtbarkeit', description: 'Werde bei Google genau dann gefunden, wenn Hausverwaltungen oder Unternehmen in deiner Region nach zuverlässigen Gebäudedienstleistern suchen.' },
      { icon: PenTool, title: 'Professionelles Logo & Branding', description: 'Ein starkes, einprägsames Logo und ein durchgängiges Corporate Design, das dich von den typischen "08/15"-Hausmeisterservices abhebt.' }
    ],
    faqs: [
      { question: 'Warum braucht mein Hausmeisterservice eine professionelle Website?', answer: 'Hausverwaltungen und gewerbliche Auftraggeber recherchieren heute fast ausschließlich online. Eine professionelle Website fungiert als digitaler Vertriebsmitarbeiter: Sie baut erstes Vertrauen auf, zeigt Ihre Referenzen und hebt Sie von unprofessionellen Anbietern ab.' },
      { question: 'Wie hilft mir lokale SEO dabei, mehr Aufträge in meiner Region zu gewinnen?', answer: 'Facility Management ist ein stark lokales Geschäft. Durch gezielte lokale Suchmaschinenoptimierung (Local SEO) stellen wir sicher, dass Ihr Unternehmen bei Suchanfragen wie "Gebäudereinigung [Stadt]" ganz oben auf Google erscheint.' },
      { question: 'Ich habe wenig Zeit. Wie viel Aufwand bedeutet die neue Website für mich?', answer: 'Unser Prozess ist "Done-for-You". Nach einem kurzen Strategiegespräch übernehmen wir Konzeption, Design, Texterstellung und technische Umsetzung komplett. Sie müssen lediglich die Entwürfe freigeben.' },
      { question: 'Können wir auch Mitarbeitergewinnung (Recruiting) über die Website abbilden?', answer: 'Absolut. Der Fachkräftemangel ist im Facility Management eine der größten Herausforderungen. Wir integrieren auf Wunsch optimierte Karriere-Seiten und einfache, mobile Bewerbungsprozesse.' }
    ]
  },
  {
    slug: 'handwerker',
    name: 'Handwerker',
    icon: Hammer,
    badgeText: 'Exklusiv für Handwerksbetriebe',
    h1: 'Mehr Premium-Aufträge und Top-Mitarbeiter im Handwerk durch eine Website,',
    h1Highlight: 'die überzeugt.',
    heroSub: 'Raus aus der Vergleichbarkeit. Wir entwickeln Webseiten für Handwerker, die Ihre handwerkliche Qualität digital sichtbar machen und die richtigen Kunden anziehen.',
    schemaDescription: 'Webdesign und SEO für Handwerker, Dachdecker, Elektriker, SHK und Maler. Mehr Aufträge und Mitarbeitergewinnung.',
    trustText: 'Diese Handwerksbetriebe vertrauen auf unsere Expertise',
    trustLogos: ['Müller SHK', 'Elektro Schmidt', 'Dachdeckerei Weber'],
    benefits: [
      { icon: Smartphone, title: 'Mobile-First Design', description: 'Ihre Kunden suchen oft vom Smartphone aus nach Handwerkern. Wir optimieren Ihre Seite für perfekte mobile Darstellung und schnelle Ladezeiten.' },
      { icon: Search, title: 'Regionale Dominanz', description: 'Werden Sie die unangefochtene Nummer 1 in Ihrer Region, wenn jemand nach Ihren handwerklichen Dienstleistungen sucht.' },
      { icon: Users, title: 'Automatisierte Mitarbeitergewinnung', description: 'Integrierte Karriere-Seiten mit 60-Sekunden-Bewerbungsprozess, um dem Fachkräftemangel im Handwerk aktiv entgegenzuwirken.' }
    ],
    faqs: [
      { question: 'Reicht nicht eine einfache Facebook-Seite für meinen Handwerksbetrieb?', answer: 'Nein. Eine Facebook-Seite gehört Ihnen nicht und wird bei Google bei konkreten Suchanfragen (z.B. "Heizungsbauer Notdienst") kaum gefunden. Eine eigene Website ist Ihr digitales Eigentum und strahlt deutlich mehr Professionalität aus.' },
      { question: 'Wie gewinnen wir über die neue Website Fachkräfte?', answer: 'Wir bauen spezielle Landingpages für Bewerber, die die Vorteile Ihres Betriebs (Benefits, Team-Kultur) hervorheben. Ein extrem vereinfachter Bewerbungsprozess (ohne langes Anschreiben) senkt die Hürde für wechselwillige Gesellen.' },
      { question: 'Schreiben Sie auch die Texte für meine Handwerker-Website?', answer: 'Ja, unsere Copywriter erstellen verkaufspsychologisch optimierte Texte, die Ihre handwerkliche Expertise in den Vordergrund stellen und den Kunden den Mehrwert einer Zusammenarbeit mit Ihnen aufzeigen.' }
    ]
  },
  {
    slug: 'steuerberater',
    name: 'Steuerberater',
    icon: Calculator,
    badgeText: 'Exklusiv für Steuerkanzleien',
    h1: 'Digitale Mandantengewinnung für Steuerberater durch eine Kanzlei-Website,',
    h1Highlight: 'die Expertise ausstrahlt.',
    heroSub: 'Gewinnen Sie lukrative Wunschmandanten und qualifizierte Fachkräfte. Wir positionieren Ihre Kanzlei als modernen, digitalen Vorreiter in Ihrer Region.',
    schemaDescription: 'Premium Webdesign und SEO für Steuerberater und Wirtschaftsprüfer. Spezialisiert auf Mandantengewinnung und Recruiting.',
    trustText: 'Erfolgreiche Kanzleien, die mit uns wachsen',
    trustLogos: ['Kanzlei Schmidt & Partner', 'TaxConsult München', 'Steuerbüro Weber'],
    benefits: [
      { icon: ShieldCheck, title: 'Vertrauensbildendes Design', description: 'Ein seriöses, modernes Design, das die hohe Qualität und Zuverlässigkeit Ihrer steuerlichen Beratung widerspiegelt.' },
      { icon: Target, title: 'Fokus auf Wunschmandanten', description: 'Wir optimieren Ihre Seite so, dass Sie genau die Mandanten anziehen (z.B. mittelständische GmbHs, E-Commerce), die Sie wirklich betreuen möchten.' },
      { icon: Users, title: 'Recruiting-Hub für Steuerfachangestellte', description: 'Heben Sie sich im Kampf um Talente ab. Mit einer modernen Karriereseite, die Ihre Kanzlei als attraktiven Arbeitgeber präsentiert.' }
    ],
    faqs: [
      { question: 'Dürfen Steuerberater überhaupt aktiv online werben?', answer: 'Ja, das anwaltliche und steuerberaterliche Werbeverbot wurde stark gelockert. Sachliche, berufsbezogene Informationen und eine professionelle Website zur Mandantengewinnung sind absolut zulässig und heute Standard.' },
      { question: 'Wie heben wir uns von anderen Kanzleien ab?', answer: 'Die meisten Kanzlei-Websites sehen identisch aus (Bilder von Aktenordnern, Taschenrechnern). Wir setzen auf authentische Team-Fotos, klare Spezialisierungen und eine moderne Bildsprache, die Ihre Kanzlei menschlich und digital-affin zeigt.' },
      { question: 'Können Mandanten-Portale (z.B. DATEV Unternehmen online) integriert werden?', answer: 'Selbstverständlich. Wir binden Login-Bereiche für DATEV oder andere Mandanten-Portale nahtlos und sicher in Ihre neue Website ein.' }
    ]
  },
  {
    slug: 'rechtsanwaelte',
    name: 'Rechtsanwälte',
    icon: Scale,
    badgeText: 'Exklusiv für Anwaltskanzleien',
    h1: 'Mehr lukrative Mandate für Rechtsanwälte durch eine Kanzlei-Website,',
    h1Highlight: 'die Autorität beweist.',
    heroSub: 'Positionieren Sie sich als führender Experte in Ihrem Rechtsgebiet. Wir entwickeln Webseiten, die Vertrauen aufbauen und aus Website-Besuchern zahlende Mandanten machen.',
    schemaDescription: 'Webdesign und Suchmaschinenoptimierung für Rechtsanwälte und Kanzleien. Mehr Mandate durch digitale Sichtbarkeit.',
    trustText: 'Diese Kanzleien vertrauen auf unsere digitale Expertise',
    trustLogos: ['Kanzlei Dr. Müller', 'Legal Partners', 'Rechtsanwälte Schmidt'],
    benefits: [
      { icon: Award, title: 'Experten-Positionierung', description: 'Wir rücken Ihre Fachanwaltstitel, Publikationen und Erfolge in den Fokus, um sofortige Autorität aufzubauen.' },
      { icon: Search, title: 'Gezielte Mandantengewinnung', description: 'SEO-Optimierung für Ihre spezifischen Rechtsgebiete (z.B. "Fachanwalt Arbeitsrecht München"), damit Sie bei akuten Rechtsproblemen gefunden werden.' },
      { icon: Zap, title: 'Hohe Conversion-Rate', description: 'Klare Handlungsaufforderungen (CTAs) und einfache Kontaktmöglichkeiten, um die Hemmschwelle für eine Erstberatung zu senken.' }
    ],
    faqs: [
      { question: 'Wie stellen Sie sicher, dass die Website seriös wirkt?', answer: 'Wir verzichten auf reißerische Elemente und setzen auf ein klares, strukturiertes Design, hochwertige Typografie und eine Farbpsychologie, die Vertrauen, Diskretion und Kompetenz vermittelt.' },
      { question: 'Berücksichtigen Sie das anwaltliche Berufsrecht?', answer: 'Ja, wir achten bei der Gestaltung und Strukturierung strikt auf die Einhaltung berufsrechtlicher Vorgaben (z.B. Impressumspflichten, korrekte Bezeichnung von Fachanwaltschaften).' },
      { question: 'Können wir einen Blog für rechtliche Updates integrieren?', answer: 'Ein Rechts-Blog ist ein hervorragendes SEO-Tool. Wir integrieren ein einfach zu bedienendes CMS, mit dem Sie aktuelle Urteile und Ratgeber-Artikel veröffentlichen können, um Ihre Expertise zu unterstreichen.' }
    ]
  },
  {
    slug: 'immobilienmakler',
    name: 'Immobilienmakler',
    icon: Home,
    badgeText: 'Exklusiv für Immobilienmakler',
    h1: 'Mehr Alleinaufträge und qualifizierte Leads durch eine Makler-Website,',
    h1Highlight: 'die Eigentümer überzeugt.',
    heroSub: 'Werden Sie der Platzhirsch in Ihrer Region. Wir bauen Webseiten für Immobilienmakler, die Vertrauen bei Verkäufern schaffen und den Objekt-Einkauf automatisieren.',
    schemaDescription: 'Webdesign für Immobilienmakler. Spezialisiert auf Objekt-Einkauf, Lead-Generierung und regionale SEO.',
    trustText: 'Erfolgreiche Makler, die mit uns den Markt dominieren',
    trustLogos: ['Premium Immobilien', 'City Makler', 'ImmoExperts'],
    benefits: [
      { icon: Target, title: 'Fokus auf Objekt-Einkauf', description: 'Spezielle Landingpages und Lead-Magneten (z.B. Online-Immobilienbewertung), um gezielt Eigentümer anzusprechen, die verkaufen möchten.' },
      { icon: Sparkles, title: 'Hochwertige Objektpräsentation', description: 'Ihre Immobilien werden in einem modernen, großzügigen Layout präsentiert, das den Wert der Objekte unterstreicht.' },
      { icon: Search, title: 'Lokale Marktdominanz', description: 'Durch gezielte SEO-Strategien werden Sie bei Suchanfragen wie "Haus verkaufen [Stadt]" als erster Ansprechpartner gefunden.' }
    ],
    faqs: [
      { question: 'Können Sie unsere Maklersoftware (z.B. onOffice, FlowFact) anbinden?', answer: 'Ja, wir integrieren Ihre bestehende Maklersoftware über API-Schnittstellen, sodass Ihre Immobilienangebote automatisch auf der Website synchronisiert und aktualisiert werden.' },
      { question: 'Wie generieren wir mehr Leads von Verkäufern?', answer: 'Wir implementieren interaktive Tools wie Online-Wertermittlungen oder Ratgeber-Downloads. Eigentümer erhalten eine erste Einschätzung und Sie erhalten im Gegenzug qualifizierte Kontaktdaten für die Akquise.' },
      { question: 'Warum reicht ein Profil auf ImmobilienScout24 nicht aus?', answer: 'Auf Portalen sind Sie nur einer von vielen und zahlen hohe Gebühren. Eine eigene, starke Website baut Ihre eigene Marke auf, macht Sie unabhängig von Portalen und generiert exklusive Alleinaufträge ohne direkte Konkurrenz.' }
    ]
  },
  {
    slug: 'zahnaerzte',
    name: 'Zahnärzte',
    icon: Stethoscope,
    badgeText: 'Exklusiv für Zahnarztpraxen',
    h1: 'Mehr Privatpatienten und lukrative Behandlungen durch eine Praxis-Website,',
    h1Highlight: 'die Angst nimmt und Vertrauen schafft.',
    heroSub: 'Von der Prophylaxe bis zur Implantologie: Wir positionieren Ihre Zahnarztpraxis als moderne Wohlfühl-Klinik und ziehen genau die Patienten an, die Sie behandeln möchten.',
    schemaDescription: 'Webdesign und lokales SEO für Zahnärzte, Kieferorthopäden und Implantologen. Mehr Neupatienten gewinnen.',
    trustText: 'Diese Praxen vertrauen auf unsere digitalen Lösungen',
    trustLogos: ['Zahnmedizin am Park', 'Praxis Dr. Weiß', 'Dental Clinic'],
    benefits: [
      { icon: Heart, title: 'Angstfreie Patientenansprache', description: 'Ein helles, freundliches Design und empathische Texte, die besonders Angstpatienten ein sicheres Gefühl vermitteln.' },
      { icon: TrendingUp, title: 'Fokus auf Premium-Leistungen', description: 'Gezielte Hervorhebung lukrativer Leistungen wie Implantologie, Ästhetische Zahnheilkunde oder Aligner-Therapien.' },
      { icon: Clock, title: 'Online-Terminbuchung', description: 'Nahtlose Integration von Buchungssystemen (z.B. Doctolib, Jameda), um Ihr Praxisteam zu entlasten und die Terminvergabe zu digitalisieren.' }
    ],
    faqs: [
      { question: 'Wie heben wir uns von anderen Zahnärzten in der Stadt ab?', answer: 'Wir rücken Ihr Team, Ihre modernen Räumlichkeiten und Ihre Spezialisierungen in den Fokus. Authentische Bilder und Patientenstimmen schaffen einen emotionalen Bezug, den Standard-Webseiten nicht bieten.' },
      { question: 'Ist die Website für mobile Geräte optimiert?', answer: 'Absolut. Über 70% der Patienten suchen auf dem Smartphone nach einem Zahnarzt. Ihre neue Website wird "Mobile-First" entwickelt, lädt blitzschnell und bietet eine perfekte Nutzererfahrung auf allen Geräten.' },
      { question: 'Können Sie uns auch bei der Suche nach ZFA (Zahnmedizinischen Fachangestellten) helfen?', answer: 'Ja, wir integrieren eine moderne Karriereseite, die Ihre Praxis als Top-Arbeitgeber präsentiert und den Bewerbungsprozess für ZFAs und ZMPs extrem vereinfacht.' }
    ]
  },
  {
    slug: 'physiotherapeuten',
    name: 'Physiotherapeuten',
    icon: Activity,
    badgeText: 'Exklusiv für Physiotherapie-Praxen',
    h1: 'Volle Terminkalender und Selbstzahler-Patienten durch eine Praxis-Website,',
    h1Highlight: 'die Ihre Expertise zeigt.',
    heroSub: 'Präsentieren Sie Ihre Behandlungsmethoden professionell. Wir bauen Webseiten für Physiotherapeuten, die Vertrauen aufbauen und die Terminvereinbarung kinderleicht machen.',
    schemaDescription: 'Webdesign für Physiotherapeuten und Osteopathen. Optimiert für lokale Sichtbarkeit und Patientengewinnung.',
    trustText: 'Erfolgreiche Praxen, die mit uns digital durchstarten',
    trustLogos: ['Physio Aktiv', 'Therapiezentrum Mitte', 'Gesundheitswerkstatt'],
    benefits: [
      { icon: Target, title: 'Selbstzahler-Fokus', description: 'Gezielte Präsentation von Privatleistungen und präventiven Angeboten, um sich unabhängiger von Kassenrezepten zu machen.' },
      { icon: Search, title: 'Lokale Auffindbarkeit', description: 'Top-Rankings bei Google für Suchanfragen wie "Physiotherapie [Stadt]" oder spezifische Beschwerden (z.B. "Rückenschmerzen Behandlung").' },
      { icon: Smartphone, title: 'Digitale Patientenaufnahme', description: 'Integration von digitalen Anamnesebögen und Online-Terminbuchungen zur massiven Entlastung Ihrer Rezeption.' }
    ],
    faqs: [
      { question: 'Warum ist eine professionelle Website für Physios heute so wichtig?', answer: 'Patienten vergleichen Praxen online, bevor sie anrufen. Eine moderne Website vermittelt Kompetenz, zeigt Ihre Spezialisierungen (z.B. Manuelle Therapie, Bobath) und überzeugt Patienten, genau zu Ihnen zu kommen.' },
      { question: 'Können wir unsere Kursangebote (z.B. Yoga, Pilates) integrieren?', answer: 'Ja, wir können übersichtliche Kurspläne, Beschreibungen und direkte Online-Anmeldemöglichkeiten für Ihre Präventions- und Selbstzahlerkurse integrieren.' },
      { question: 'Wie aufwendig ist die Pflege der Website für uns?', answer: 'Sehr gering. Wir nutzen ein benutzerfreundliches System. Sie können Teammitglieder, Öffnungszeiten oder neue Leistungen ganz einfach selbst anpassen – oder Sie nutzen unseren Wartungsservice.' }
    ]
  },
  {
    slug: 'pflegedienste',
    name: 'Pflegedienste',
    icon: Heart,
    badgeText: 'Exklusiv für ambulante Pflegedienste',
    h1: 'Mehr Pflegekräfte und neue Klienten durch eine Website,',
    h1Highlight: 'die Menschlichkeit ausstrahlt.',
    heroSub: 'Zeigen Sie, dass bei Ihnen der Mensch im Mittelpunkt steht. Wir entwickeln Webseiten für Pflegedienste, die Vertrauen bei Angehörigen schaffen und Pflegekräfte magnetisch anziehen.',
    schemaDescription: 'Webdesign und Recruiting-Lösungen für ambulante Pflegedienste und Tagespflegen.',
    trustText: 'Pflegedienste, die mit uns wachsen und rekrutieren',
    trustLogos: ['Pflege mit Herz', 'Ambulanter Dienst Meier', 'Seniorenbetreuung Plus'],
    benefits: [
      { icon: Users, title: 'Recruiting-Fokus', description: 'Spezielle Landingpages, die Ihre Benefits (z.B. Dienstwagen, flexible Zeiten) hervorheben und Bewerbungen in unter 60 Sekunden ermöglichen.' },
      { icon: ShieldCheck, title: 'Vertrauen für Angehörige', description: 'Eine warme, professionelle Bildsprache und klare Informationen zu Pflegegraden und Leistungen, die Angehörigen Sicherheit geben.' },
      { icon: Search, title: 'Lokale Präsenz', description: 'Sichtbarkeit genau dort, wo Angehörige nach Unterstützung suchen – in Ihrer direkten Umgebung.' }
    ],
    faqs: [
      { question: 'Wie hilft die Website konkret beim Recruiting von Pflegekräften?', answer: 'Pflegekräfte sind extrem umkämpft. Ihre Website muss sofort zeigen, warum es toll ist, bei Ihnen zu arbeiten. Wir kombinieren emotionale Mitarbeiter-Videos, klare Benefits und ein Formular, das ohne Lebenslauf in 1 Minute ausfüllbar ist.' },
      { question: 'Ist die Website auch für ältere Menschen gut bedienbar?', answer: 'Ja, wir achten auf Barrierefreiheit, große Schriften, hohe Kontraste und eine extrem einfache Navigation, damit sowohl Senioren als auch deren Angehörige sich mühelos zurechtfinden.' },
      { question: 'Können wir Beratungsangebote digitalisieren?', answer: 'Wir können Formulare für Erstgespräche oder Checklisten zur Pflegegrad-Beantragung integrieren, was Ihnen Zeit spart und den Angehörigen sofortigen Mehrwert bietet.' }
    ]
  },
  {
    slug: 'unternehmensberater',
    name: 'Unternehmensberater',
    icon: Briefcase,
    badgeText: 'Exklusiv für Consulting & Beratung',
    h1: 'Gewinnen Sie hochkarätige B2B-Kunden durch eine Consulting-Website,',
    h1Highlight: 'die Ihre Expertise belegt.',
    heroSub: 'Verwandeln Sie Ihre Methodik in messbare Anfragen. Wir bauen Webseiten für Unternehmensberater, die komplexe Dienstleistungen verständlich machen und C-Level-Entscheider überzeugen.',
    schemaDescription: 'Premium Webdesign für Unternehmensberater, Coaches und Consulting-Agenturen. Fokus auf B2B Lead-Generierung.',
    trustText: 'Beratungsunternehmen, die mit uns skalieren',
    trustLogos: ['Consulting Group', 'Strategy Partners', 'Innovate Consulting'],
    benefits: [
      { icon: Award, title: 'Premium-Positionierung', description: 'Ein High-End-Design, das Ihre Tagessätze rechtfertigt und Sie als absolute Autorität in Ihrer Nische etabliert.' },
      { icon: Target, title: 'Lead-Generierung', description: 'Strategische Platzierung von Whitepapern, Case Studies und Erstgesprächs-Funnels, um anonyme Besucher in qualifizierte Leads zu verwandeln.' },
      { icon: PenTool, title: 'Komplexes einfach erklärt', description: 'Wir übersetzen Ihre komplexen Beratungsmethoden in klare, nutzenorientierte Copy (Texte), die Ihre Zielgruppe sofort versteht.' }
    ],
    faqs: [
      { question: 'Wie generieren wir über die Website Termine mit Geschäftsführern?', answer: 'Entscheider suchen nach Lösungen, nicht nach Beratern. Wir strukturieren Ihre Website um die spezifischen Schmerzpunkte (Pain Points) Ihrer Zielgruppe und bieten niedrigschwellige Einstiege wie Potenzialanalysen oder Strategie-Calls an.' },
      { question: 'Können wir unsere Case Studies professionell einbinden?', answer: 'Ja, Case Studies sind Ihr stärkstes Verkaufsinstrument. Wir entwickeln ein spezielles Portfolio-Layout, das die Ausgangssituation, Ihre Lösung und die messbaren Ergebnisse (ROI) für vergangene Klienten eindrucksvoll präsentiert.' },
      { question: 'Bieten Sie auch Unterstützung bei LinkedIn-Kampagnen an?', answer: 'Ihre neue Website ist die perfekte Zielseite (Landingpage) für Ihre LinkedIn-Aktivitäten. Wir optimieren die Seite so, dass der Traffic aus Ihren LinkedIn-Posts optimal konvertiert.' }
    ]
  },
  {
    slug: 'it-dienstleister',
    name: 'IT-Dienstleister',
    icon: Monitor,
    badgeText: 'Exklusiv für Systemhäuser & IT-Consulting',
    h1: 'Mehr Managed-Services-Verträge durch eine IT-Website,',
    h1Highlight: 'die Innovation und Sicherheit ausstrahlt.',
    heroSub: 'Schluss mit technischem Fachjargon. Wir übersetzen Ihre IT-Dienstleistungen in klare Geschäftsvorteile und generieren qualifizierte B2B-Leads für Ihr Systemhaus.',
    schemaDescription: 'Webdesign und Lead-Generierung für IT-Systemhäuser, Softwareentwickler und Managed Service Provider (MSP).',
    trustText: 'IT-Unternehmen, deren digitalen Vertrieb wir optimiert haben',
    trustLogos: ['TechSolutions', 'SecureIT', 'CloudSystems GmbH'],
    benefits: [
      { icon: Zap, title: 'Nutzen statt Features', description: 'Wir kommunizieren nicht über Server-Spezifikationen, sondern über Ausfallsicherheit, Produktivität und Kosteneinsparungen für Ihre Kunden.' },
      { icon: ShieldCheck, title: 'Fokus auf Managed Services', description: 'Gezielte Landingpages, um Kunden von reaktivem Break/Fix-Support zu lukrativen, wiederkehrenden Managed-Services-Verträgen zu konvertieren.' },
      { icon: Users, title: 'IT-Recruiting', description: 'Entwickler und Admins sind schwer zu finden. Wir bauen Karriereseiten, die Ihre Tech-Stack, Ihre Kultur und Ihre Benefits perfekt präsentieren.' }
    ],
    faqs: [
      { question: 'Warum verstehen unsere Kunden unsere aktuelle Website nicht?', answer: 'Viele IT-Websites sind von Technikern für Techniker geschrieben. Geschäftsführer (Ihre Käufer) wollen aber wissen, wie Sie ihr Geschäft sicherer und effizienter machen. Wir übersetzen "Tech-Speak" in "Business-Value".' },
      { question: 'Können wir unsere Partner-Logos (Microsoft, Cisco etc.) einbinden?', answer: 'Selbstverständlich. Zertifizierungen und Partnerschaften sind wichtige Trust-Elemente im IT-Sektor. Wir binden diese prominent und optisch ansprechend ein.' },
      { question: 'Wie helfen Sie uns bei der Lead-Generierung?', answer: 'Wir implementieren z.B. IT-Sicherheits-Checks oder Cloud-Readiness-Assessments als Lead-Magneten. Interessenten erhalten einen ersten Mehrwert, und Ihr Vertrieb erhält qualifizierte Kontaktdaten.' }
    ]
  },
  {
    slug: 'finanzberater',
    name: 'Finanzberater',
    icon: PieChart,
    badgeText: 'Exklusiv für Finanz- & Vermögensberater',
    h1: 'Gewinnen Sie vermögende Mandanten durch eine Website,',
    h1Highlight: 'die absolute Seriosität vermittelt.',
    heroSub: 'In der Finanzbranche ist Vertrauen die härteste Währung. Wir bauen digitale Präsenzen, die Ihre Expertise unterstreichen und qualifizierte Anfragen für Beratungstermine generieren.',
    schemaDescription: 'Webdesign für Finanzberater, Vermögensverwalter und Versicherungsmakler. Fokus auf Vertrauensaufbau und Lead-Generierung.',
    trustText: 'Finanzexperten, die mit uns digital wachsen',
    trustLogos: ['Finance Partners', 'Wealth Management', 'Capital Advisors'],
    benefits: [
      { icon: ShieldCheck, title: 'Maximales Vertrauen', description: 'Ein Premium-Design, das Diskretion, Sicherheit und langjährige Erfahrung ausstrahlt – essenziell für die Vermögensberatung.' },
      { icon: Target, title: 'Qualifizierte Leads', description: 'Intelligente Kontaktformulare, die Anfragen vorqualifizieren (z.B. nach Anlagevolumen), damit Sie nur mit passenden Interessenten sprechen.' },
      { icon: PenTool, title: 'Compliance-konform', description: 'Wir berücksichtigen alle rechtlichen Vorgaben (BaFin, Erstinformationen, Impressumspflichten) für Finanzdienstleister.' }
    ],
    faqs: [
      { question: 'Wie schaffen wir es, dass Interessenten uns ihre Finanzen anvertrauen?', answer: 'Vertrauen entsteht durch Transparenz und Autorität. Wir rücken Ihre Qualifikationen, Kundenstimmen und Ihre persönliche Philosophie in den Vordergrund. Ein professionelles, ruhiges Design tut sein Übriges.' },
      { question: 'Können wir Terminbuchungstools wie Calendly integrieren?', answer: 'Ja, die direkte Buchung eines kostenlosen Erstgesprächs (Discovery Call) ist der effektivste Weg zur Mandantengewinnung. Wir binden diese Tools nahtlos in die Website ein.' },
      { question: 'Wie können wir komplexe Finanzprodukte einfach erklären?', answer: 'Wir nutzen klare Infografiken, strukturierte Leistungsseiten und nutzenorientierte Texte, um Themen wie ETF-Portfolios, Baufinanzierungen oder Altersvorsorge für Laien verständlich zu machen.' }
    ]
  },
  {
    slug: 'architekten',
    name: 'Architekten',
    icon: Ruler,
    badgeText: 'Exklusiv für Architekturbüros',
    h1: 'Präsentieren Sie Ihre Visionen mit einer Architekten-Website,',
    h1Highlight: 'die so ästhetisch ist wie Ihre Entwürfe.',
    heroSub: 'Lassen Sie Ihre Referenzen für sich sprechen. Wir entwickeln minimalistische, bildgewaltige Webseiten, die Bauherren und Investoren von Ihrer architektonischen Handschrift überzeugen.',
    schemaDescription: 'Minimalistisches Premium-Webdesign für Architekten, Innenarchitekten und Planungsbüros. Fokus auf Portfolio-Präsentation.',
    trustText: 'Architekturbüros, deren Visionen wir digitalisieren',
    trustLogos: ['Studio Architektur', 'Planungsbüro Nord', 'Design & Build'],
    benefits: [
      { icon: Camera, title: 'Bildgewaltiges Portfolio', description: 'Ihre Projekte stehen im Mittelpunkt. Wir nutzen großflächige Bilder, sanfte Animationen und ein klares Grid-System für maximale visuelle Wirkung.' },
      { icon: Sparkles, title: 'Minimalistisches Design', description: 'Die Website tritt in den Hintergrund, um Ihrer Architektur die Bühne zu überlassen. Weniger ist hier mehr.' },
      { icon: Target, title: 'Gezielte Bauherren-Ansprache', description: 'Egal ob private Bauherren, Gewerbebau oder öffentliche Hand – wir strukturieren die Seite so, dass Ihre Wunsch-Zielgruppe direkt angesprochen wird.' }
    ],
    faqs: [
      { question: 'Unsere Projekte leben von großen Bildern. Macht das die Website nicht langsam?', answer: 'Nein. Wir nutzen modernste Bildkomprimierung (WebP), Lazy-Loading und ein globales Content Delivery Network (CDN), damit Ihre hochauflösenden Renderings und Fotos blitzschnell laden.' },
      { question: 'Wie können wir unsere Philosophie und Arbeitsweise vermitteln?', answer: 'Neben dem Portfolio integrieren wir eine starke "Über uns"-Sektion, die Ihren Designansatz, Ihr Team und Ihre Methodik (z.B. BIM, nachhaltiges Bauen) authentisch transportiert.' },
      { question: 'Gewinnen wir über die Website auch neue Mitarbeiter?', answer: 'Ja, gute Architekten und Bauzeichner achten extrem auf die digitale Präsenz ihres zukünftigen Arbeitgebers. Eine ästhetische Website ist Ihr bestes Recruiting-Tool.' }
    ]
  },
  {
    slug: 'personalvermittler',
    name: 'Personalvermittler',
    icon: Users,
    badgeText: 'Exklusiv für Recruiting & Headhunting',
    h1: 'Gewinnen Sie Top-Kandidaten und neue Mandate durch eine Website,',
    h1Highlight: 'die verbindet.',
    heroSub: 'Der Markt für Fachkräfte ist umkämpft. Wir bauen Webseiten für Personalberater, die das Vertrauen von passiv suchenden Kandidaten und suchenden Unternehmen gleichermaßen gewinnen.',
    schemaDescription: 'Webdesign für Personalvermittler, Headhunter und Zeitarbeitsfirmen. Optimiert für Kandidatengewinnung und B2B-Lead-Gen.',
    trustText: 'Recruiting-Agenturen, die mit uns den Markt erobern',
    trustLogos: ['Talent Connect', 'Executive Search', 'HR Partners'],
    benefits: [
      { icon: Target, title: 'Dualer Funnel', description: 'Perfekte Nutzerführung für zwei Zielgruppen: Unternehmen auf der Suche nach Personal und Kandidaten auf der Suche nach dem nächsten Karriereschritt.' },
      { icon: Zap, title: 'Nahtlose Jobbörsen-Integration', description: 'Wir binden Ihre ATS-Software (z.B. Personio, Softgarden) ein, sodass Ihre Stellenanzeigen automatisch auf der Website erscheinen und bewerbbar sind.' },
      { icon: ShieldCheck, title: 'Diskretion & Vertrauen', description: 'Ein Design, das Seriosität ausstrahlt – besonders wichtig im Executive Search und bei der Direktansprache von Führungskräften.' }
    ],
    faqs: [
      { question: 'Wie senken wir die Abbruchquote bei Bewerbungen?', answer: 'Wir implementieren "One-Click-Bewerbungen" oder kurze Chatbot-Funnels. Kandidaten können sich mobil in unter 60 Sekunden bewerben, z.B. durch einfachen Upload des LinkedIn-Profils.' },
      { question: 'Wie generieren wir Leads von Unternehmen, die Personal suchen?', answer: 'Wir positionieren Sie als Branchenexperten (z.B. durch Gehaltsstudien oder Whitepaper als Download) und integrieren klare Call-to-Actions für ein unverbindliches Bedarfsgespräch.' },
      { question: 'Können wir uns auf bestimmte Branchen (z.B. IT, Pflege) spezialisieren?', answer: 'Unbedingt. Eine spitze Positionierung konvertiert am besten. Wir gestalten die Bildsprache und Texte exakt passend zu Ihrer Zielbranche.' }
    ]
  },
  {
    slug: 'logistikunternehmen',
    name: 'Logistikunternehmen',
    icon: Truck,
    badgeText: 'Exklusiv für Speditionen & Logistik',
    h1: 'Mehr Frachtaufträge und qualifizierte Kraftfahrer durch eine Website,',
    h1Highlight: 'die bewegt.',
    heroSub: 'Zeigen Sie Ihre Leistungsfähigkeit. Wir entwickeln Webseiten für Speditionen, die internationale Kunden überzeugen und dem Fahrermangel aktiv entgegenwirken.',
    schemaDescription: 'Webdesign für Speditionen, Logistikunternehmen und Kurierdienste. Fokus auf B2B-Kunden und Fahrer-Recruiting.',
    trustText: 'Logistikunternehmen, die mit uns auf der Überholspur sind',
    trustLogos: ['TransLogistics', 'Global Freight', 'Express Kurier'],
    benefits: [
      { icon: Users, title: 'Fahrer-Recruiting', description: 'Der Fahrermangel ist das größte Problem der Branche. Wir bauen Landingpages, die Ihre Benefits (z.B. pünktliche Bezahlung, moderner Fuhrpark) zeigen und mobile Bewerbungen ermöglichen.' },
      { icon: ShieldCheck, title: 'Internationale B2B-Kunden', description: 'Eine mehrsprachige, professionelle Präsentation Ihrer Flotte, Lagerkapazitäten und Zertifizierungen (z.B. ISO, IFS), um Großkunden zu gewinnen.' },
      { icon: Zap, title: 'Digitale Prozesse', description: 'Integration von Frachtanfrage-Formularen, Sendungsverfolgung (Tracking) oder Kundenportalen direkt auf Ihrer Website.' }
    ],
    faqs: [
      { question: 'Wie überzeugen wir LKW-Fahrer, sich bei uns zu bewerben?', answer: 'Fahrer sind viel unterwegs und nutzen fast nur das Smartphone. Ihre Karriereseite muss mobil perfekt funktionieren. Wir nutzen authentische Bilder Ihres Fuhrparks und ein Bewerbungsformular, das in 1 Minute ohne Lebenslauf ausfüllbar ist.' },
      { question: 'Macht eine mehrsprachige Website Sinn?', answer: 'Wenn Sie im internationalen Fernverkehr tätig sind oder internationale Kunden haben: Ja. Wir setzen mehrsprachige Websites (z.B. DE/EN/PL) SEO-optimiert und benutzerfreundlich um.' },
      { question: 'Können wir unsere Zertifikate und Sicherheitsstandards hervorheben?', answer: 'Das ist sogar essenziell für B2B-Auftraggeber. Wir platzieren Ihre Zertifizierungen (TAPA, GDP, ISO) prominent als Trust-Elemente auf der Startseite.' }
    ]
  },
  {
    slug: 'reinigungsfirmen',
    name: 'Reinigungsfirmen',
    icon: Sparkles,
    badgeText: 'Exklusiv für Gebäudereinigung',
    h1: 'Gewinnen Sie lukrative Gewerbekunden durch eine Website,',
    h1Highlight: 'die glänzt.',
    heroSub: 'Raus aus dem Preiskampf bei Privatkunden. Wir positionieren Ihre Reinigungsfirma als zuverlässigen Partner für Büros, Praxen und Industrieanlagen.',
    schemaDescription: 'Webdesign und lokales SEO für Gebäudereinigungen und Reinigungsfirmen. Fokus auf Gewerbekunden (B2B).',
    trustText: 'Reinigungsunternehmen, die mit uns wachsen',
    trustLogos: ['Glanz & Sauber', 'ProClean Gebäudeservice', 'Meister-Reinigung'],
    benefits: [
      { icon: Target, title: 'B2B-Fokus', description: 'Wir richten Ihre Website gezielt auf lukrative Unterhaltsreinigungen für Gewerbe, Industrie und medizinische Einrichtungen aus.' },
      { icon: Search, title: 'Lokale Sichtbarkeit', description: 'Werden Sie bei Google gefunden, wenn Unternehmen in Ihrer Stadt nach "Büroreinigung" oder "Gebäudereinigung" suchen.' },
      { icon: Users, title: 'Personal finden', description: 'Zuverlässiges Reinigungspersonal ist schwer zu finden. Wir integrieren einfache, mehrsprachige Bewerbungsformulare für neue Mitarbeiter.' }
    ],
    faqs: [
      { question: 'Wie kommen wir an mehr gewerbliche Aufträge?', answer: 'Gewerbekunden suchen online nach Zuverlässigkeit und Professionalität. Wir heben Ihre Qualitätsstandards, Zertifikate und Referenzen hervor und integrieren ein Formular für eine schnelle, unverbindliche Objektbesichtigung.' },
      { question: 'Warum reicht meine aktuelle Baukasten-Website nicht?', answer: 'Baukasten-Websites wirken oft unprofessionell und ranken schlecht bei Google. Um an lukrative B2B-Aufträge zu kommen, muss Ihr digitaler Auftritt genauso professionell sein wie Ihre Reinigungsleistung.' },
      { question: 'Können wir Spezialreinigungen (z.B. Solar, Fassade) extra bewerben?', answer: 'Ja, wir erstellen für jede Ihrer Spezialleistungen eigene, SEO-optimierte Unterseiten. So werden Sie auch für Nischen-Suchanfragen regional gefunden.' }
    ]
  },
  {
    slug: 'garten-landschaftsbau',
    name: 'Garten- und Landschaftsbau',
    icon: Trees,
    badgeText: 'Exklusiv für GaLaBau-Betriebe',
    h1: 'Mehr Premium-Gartenprojekte durch eine Website,',
    h1Highlight: 'die Ihre Handwerkskunst aufblühen lässt.',
    heroSub: 'Vom Vorgarten bis zur Großanlage: Wir bauen Webseiten für den GaLaBau, die Ihre schönsten Projekte präsentieren und kaufkräftige Kunden anziehen.',
    schemaDescription: 'Webdesign und SEO für Garten- und Landschaftsbau (GaLaBau). Mehr Premium-Aufträge und Mitarbeitergewinnung.',
    trustText: 'GaLaBau-Betriebe, die mit uns digital wachsen',
    trustLogos: ['Grünanlagen Schmidt', 'NaturGarten Design', 'Baumpflege Weber'],
    benefits: [
      { icon: Camera, title: 'Visuelle Projektpräsentation', description: 'Vorher-Nachher-Bilder und hochauflösende Galerien Ihrer besten Gärten, Terrassen und Poolanlagen als stärkstes Verkaufsargument.' },
      { icon: Target, title: 'Fokus auf Premium-Aufträge', description: 'Wir positionieren Sie weg vom reinen "Rasenmäher" hin zum Experten für hochwertige Gartengestaltung und Komplettumbauten.' },
      { icon: Users, title: 'Fachkräfte-Recruiting', description: 'Gewinnen Sie Vorarbeiter und Landschaftsgärtner durch eine moderne Karriereseite, die Ihre Maschinen, Ihr Team und Ihre Projekte zeigt.' }
    ],
    faqs: [
      { question: 'Wie zeigen wir unsere Vielseitigkeit (Pflasterarbeiten, Pflanzen, Pools)?', answer: 'Wir strukturieren Ihre Leistungen übersichtlich in eigene Kategorien. So findet der Kunde, der einen Pool sucht, genauso schnell die richtigen Informationen wie der Kunde für Pflasterarbeiten.' },
      { question: 'Können Kunden direkt online Anfragen stellen?', answer: 'Ja, wir integrieren intelligente Projekt-Anfrageformulare. Kunden können direkt angeben, was sie planen (z.B. Neuanlage, Budgetrahmen) und Fotos ihres aktuellen Gartens hochladen.' },
      { question: 'Wie werden wir in unserer Region besser gefunden?', answer: 'Durch gezielte lokale Suchmaschinenoptimierung (Local SEO) für Begriffe wie "Gartengestaltung [Stadt]" oder "Terrassenbau [Region]" sorgen wir dafür, dass Sie bei Google dominieren.' }
    ]
  },
  {
    slug: 'kfz-werkstaetten',
    name: 'KFZ-Werkstätten',
    icon: Wrench,
    badgeText: 'Exklusiv für freie KFZ-Werkstätten',
    h1: 'Volle Hebebühnen und treue Stammkunden durch eine Werkstatt-Website,',
    h1Highlight: 'die Vertrauen schafft.',
    heroSub: 'Machen Sie sich unabhängig von Werkstatt-Portalen. Wir bauen digitale Präsenzen für freie KFZ-Werkstätten, die lokale Sichtbarkeit garantieren und die Terminvereinbarung digitalisieren.',
    schemaDescription: 'Webdesign und lokales SEO für KFZ-Werkstätten, Karosseriebauer und Autohäuser. Mehr Termine und lokale Sichtbarkeit.',
    trustText: 'Werkstätten, die mit uns auf der Überholspur sind',
    trustLogos: ['Auto Service Müller', 'KFZ Meisterbetrieb', 'Karosserie Schmidt'],
    benefits: [
      { icon: Calendar, title: 'Online-Terminbuchung', description: 'Kunden können Reifenwechsel, Inspektionen oder Reparaturen rund um die Uhr online anfragen – das entlastet Ihr Telefon massiv.' },
      { icon: Search, title: 'Lokale Google-Dominanz', description: 'Werden Sie die Nummer 1 in Ihrer Stadt, wenn jemand nach "Autowerkstatt", "TÜV" oder "Unfallinstandsetzung" sucht.' },
      { icon: ShieldCheck, title: 'Vertrauen & Transparenz', description: 'Wir präsentieren Ihr Meister-Team, Ihre moderne Werkstattausrüstung und echte Kundenbewertungen, um Vertrauen aufzubauen.' }
    ],
    faqs: [
      { question: 'Warum sollte ich online Termine anbieten?', answer: 'Viele Kunden denken erst abends nach Feierabend an den Reifenwechsel oder die Inspektion. Wenn sie bei Ihnen direkt online einen Termin anfragen können, haben Sie den Auftrag sicher, bevor die Konkurrenz am nächsten Morgen öffnet.' },
      { question: 'Können wir spezielle Leistungen (z.B. E-Auto Service, Smart Repair) hervorheben?', answer: 'Unbedingt. Spezialisierungen sind Ihr größter Wettbewerbsvorteil. Wir erstellen dafür eigene Landingpages, damit Sie genau für diese lukrativen Suchanfragen bei Google gefunden werden.' },
      { question: 'Helfen Sie uns auch bei der Suche nach Mechatronikern?', answer: 'Ja, der Fachkräftemangel trifft Werkstätten hart. Wir integrieren eine Karriereseite mit einfacher mobiler Bewerbung, um wechselwillige KFZ-Mechatroniker in Ihrer Region anzusprechen.' }
    ]
  },
  {
    slug: 'eventagenturen',
    name: 'Eventagenturen',
    icon: Calendar,
    badgeText: 'Exklusiv für Event- & Live-Kommunikation',
    h1: 'Gewinnen Sie hochkarätige Corporate Events durch eine Agentur-Website,',
    h1Highlight: 'die Emotionen weckt.',
    heroSub: 'Ihre Events sind spektakulär – Ihre Website sollte es auch sein. Wir kreieren digitale Erlebnisse für Eventagenturen, die B2B-Entscheider und Marken restlos überzeugen.',
    schemaDescription: 'Premium Webdesign für Eventagenturen, Messebauer und Hochzeitsplaner. Fokus auf Portfolio und B2B-Kunden.',
    trustText: 'Agenturen, deren digitale Bühne wir gebaut haben',
    trustLogos: ['Live Experiences', 'Event Creators', 'Corporate Moments'],
    benefits: [
      { icon: Sparkles, title: 'Immersives Portfolio', description: 'Wir nutzen Video-Header, fließende Animationen und großflächige Galerien, um die Emotionen Ihrer vergangenen Events digital erlebbar zu machen.' },
      { icon: Target, title: 'B2B-Leadgenerierung', description: 'Gezielte Ansprache von Marketingleitern und Geschäftsführern, die nach zuverlässigen Partnern für Jubiläen, Messen oder Produktlaunches suchen.' },
      { icon: PenTool, title: 'Kreatives Branding', description: 'Ein Design, das aus der Masse heraussticht und Ihre kreative Kompetenz als Agentur auf den ersten Blick unterstreicht.' }
    ],
    faqs: [
      { question: 'Wie präsentieren wir unsere Case Studies am besten?', answer: 'Wir strukturieren Ihre Case Studies als spannende Storys: Ausgangslage des Kunden, Ihre kreative Leitidee und das emotionale (und messbare) Ergebnis – untermauert mit starken Bildern und Aftermovies.' },
      { question: 'Ist eine so bildlastige Website nicht schlecht für SEO?', answer: 'Nicht, wenn sie richtig programmiert ist. Wir optimieren alle Medien, nutzen saubere semantische HTML-Strukturen und integrieren SEO-Texte so, dass sie das Design nicht stören, aber von Google perfekt gelesen werden.' },
      { question: 'Können wir auch unsere eigenen Event-Formate oder Tickets vermarkten?', answer: 'Ja, wir können nahtlos Ticketing-Systeme (wie Eventbrite oder eigene Lösungen) integrieren, um Ihre Eigenveranstaltungen direkt über die Website zu verkaufen.' }
    ]
  },
  {
    slug: 'fotografen',
    name: 'Fotografen & Videografen',
    icon: Camera,
    badgeText: 'Exklusiv für Foto- & Filmproduktion',
    h1: 'Mehr Premium-Bookings durch ein digitales Portfolio,',
    h1Highlight: 'das Ihre visuelle Qualität widerspiegelt.',
    heroSub: 'Ihre Bilder sind Kunstwerke. Wir bauen den perfekten digitalen Rahmen dafür. Minimalistisch, blitzschnell und optimiert, um aus Betrachtern zahlende Kunden zu machen.',
    schemaDescription: 'Minimalistisches Webdesign für Fotografen und Videografen. Optimiert für Portfolio-Präsentation und Buchungsanfragen.',
    trustText: 'Kreative, die ihre Kunst mit uns digital präsentieren',
    trustLogos: ['Visual Arts Studio', 'Wedding Films', 'Corporate Media'],
    benefits: [
      { icon: Camera, title: 'Fokus auf Ihr Werk', description: 'Ein extrem reduziertes, ästhetisches Design (Dark oder Light Mode), das nicht von Ihren Fotos und Videos ablenkt.' },
      { icon: Zap, title: 'Blitzschnelle Ladezeiten', description: 'Trotz vieler hochauflösender Bilder lädt Ihre Seite durch moderne Komprimierung und Lazy-Loading in Millisekunden.' },
      { icon: Target, title: 'Gezielte Kundenansprache', description: 'Egal ob B2B-Werbefotografie oder Hochzeitsvideografie – wir strukturieren die Seite so, dass Ihre Wunschzielgruppe direkt konvertiert.' }
    ],
    faqs: [
      { question: 'Wie schützen Sie meine Bilder vor Diebstahl?', answer: 'Wir können Rechtsklick-Sperren und unsichtbare Wasserzeichen integrieren. Wichtiger ist jedoch die technische Optimierung, sodass Bilder in Web-Auflösung geladen werden, die für den Druck unbrauchbar ist.' },
      { question: 'Können Kunden direkt Termine oder Pakete buchen?', answer: 'Ja, wir können Buchungssysteme für Shootings (z.B. Bewerbungsfotos, Mini-Shootings) integrieren, inklusive Kalendersynchronisation und Online-Bezahlung.' },
      { question: 'Wie werde ich für bestimmte Fotografie-Arten bei Google gefunden?', answer: 'Wir erstellen für Ihre Schwerpunkte (z.B. "Hochzeitsfotograf München" oder "Businessfotografie Berlin") eigene, SEO-optimierte Landingpages, die regional Top-Rankings erzielen.' }
    ]
  },
  {
    slug: 'fitnessstudios',
    name: 'Fitnessstudios & Personal Trainer',
    icon: Dumbbell,
    badgeText: 'Exklusiv für Fitness & Gesundheit',
    h1: 'Mehr Probetrainings und Premium-Mitglieder durch eine Website,',
    h1Highlight: 'die motiviert.',
    heroSub: 'Verwandeln Sie Website-Besucher in loyale Mitglieder. Wir bauen digitale Präsenzen für Boutique-Studios, Personal Trainer und CrossFit-Boxen, die Ihre Community wachsen lassen.',
    schemaDescription: 'Webdesign und Lead-Generierung für Fitnessstudios, Personal Trainer und Yoga-Studios.',
    trustText: 'Fitness-Brands, die mit uns wachsen',
    trustLogos: ['CrossFit Elite', 'Premium Fitness', 'Personal Training Club'],
    benefits: [
      { icon: Target, title: 'Lead-Generierung', description: 'Hochkonvertierende Formulare für Probetrainings oder Erstgespräche, die die Hemmschwelle für Interessenten massiv senken.' },
      { icon: Calendar, title: 'Kursplan-Integration', description: 'Nahtlose Einbindung Ihrer Buchungssoftware (z.B. Eversports, Mindbody), damit Mitglieder Kurse direkt online buchen können.' },
      { icon: Heart, title: 'Community Building', description: 'Wir präsentieren Ihre Trainer, Ihre Räumlichkeiten und echte Erfolgsgeschichten (Transformationen), um eine emotionale Bindung aufzubauen.' }
    ],
    faqs: [
      { question: 'Wie heben wir uns von den großen Billig-Ketten ab?', answer: 'Indem wir den Fokus auf Ihre Betreuungsqualität, die Community und die Atmosphäre legen. Wir nutzen hochwertige Bilder und Videos, die das "Gefühl" in Ihrem Studio transportieren – etwas, das Discounter nicht bieten können.' },
      { question: 'Können wir Online-Mitgliedschaften verkaufen?', answer: 'Ja, wir können den kompletten Anmeldeprozess digitalisieren. Interessenten können Verträge online abschließen, was die Hürde senkt und Ihr Personal am Empfang entlastet.' },
      { question: 'Wie gewinnen wir Personal Training Klienten?', answer: 'Für High-Ticket-Angebote wie Personal Training setzen wir auf Vertrauensaufbau durch Experten-Positionierung, Kunden-Testimonials und ein Bewerbungs-Formular für ein kostenloses Erstgespräch.' }
    ]
  },
  {
    slug: 'gastronomie',
    name: 'Gastronomie & Catering',
    icon: Utensils,
    badgeText: 'Exklusiv für Restaurants & Caterer',
    h1: 'Volle Tische und lukrative Catering-Aufträge durch eine Website,',
    h1Highlight: 'die Appetit macht.',
    heroSub: 'Das Auge isst auch digital mit. Wir entwickeln Webseiten für Restaurants und Caterer, die das Ambiente einfangen, Reservierungen steigern und Events verkaufen.',
    schemaDescription: 'Webdesign für Restaurants, Cafés und Catering-Unternehmen. Fokus auf Tischreservierungen und Event-Anfragen.',
    trustText: 'Gastronomen, deren Tische wir digital füllen',
    trustLogos: ['Ristorante Bella', 'Premium Catering', 'Café & Bar Lounge'],
    benefits: [
      { icon: Calendar, title: 'Online-Reservierungen', description: 'Integration von Systemen wie OpenTable oder Quandoo für automatische Tischreservierungen rund um die Uhr.' },
      { icon: Sparkles, title: 'Visuelle Verführung', description: 'Großflächige, professionelle Food-Fotografie und ein Design, das die Atmosphäre Ihres Lokals perfekt ins Digitale überträgt.' },
      { icon: Target, title: 'Event- & Catering-Fokus', description: 'Spezielle Landingpages für Hochzeiten, Firmenfeiern und Catering, um diese besonders lukrativen Aufträge gezielt zu generieren.' }
    ],
    faqs: [
      { question: 'Können wir unsere Speisekarte einfach selbst aktualisieren?', answer: 'Ja, wir integrieren ein extrem einfaches System, mit dem Sie Tageskarten, Preise oder saisonale Gerichte in Sekunden vom Smartphone aus ändern können – ohne PDF-Uploads.' },
      { question: 'Wie werden wir von Touristen oder neuen Gästen besser gefunden?', answer: 'Wir optimieren Ihre Website für lokale Suchanfragen (z.B. "Italiener [Stadtmitte]") und verknüpfen sie perfekt mit Ihrem Google Business Profil, um in den lokalen Suchergebnissen ganz oben zu stehen.' },
      { question: 'Helfen Sie auch bei der Mitarbeitersuche (Service/Küche)?', answer: 'Der Personalmangel in der Gastro ist enorm. Wir bauen eine Karriereseite, die Ihre Vorteile als Arbeitgeber zeigt und eine Bewerbung per Smartphone in unter einer Minute ermöglicht.' }
    ]
  }
];
