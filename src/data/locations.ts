/**
 * Location landing pages.
 *
 * One page per city so that a query like "Webdesign München" hits a page that
 * actually answers it, instead of competing against the homepage.
 *
 * The copy below is deliberately written per city — shared boilerplate with the
 * city name swapped in would read as doorway/duplicate content and is worth
 * less than nothing for local rankings.
 */

export interface LocationData {
  slug: string;
  /** City name in nominative, e.g. "München". */
  city: string;
  /** Locative form used in prose, e.g. "in München", "in Freising". */
  cityIn: string;
  /** Postal region label for the schema areaServed. */
  region: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1: string;
  h1Accent: string;
  lead: string;
  /** Body copy, one <p> per entry. */
  intro: string[];
  situation: {
    title: string;
    paragraphs: string[];
  };
  /** Slugs from src/data/niches.ts that are especially relevant locally. */
  focusNiches: string[];
  faqs: { question: string; answer: string }[];
  /** Slugs of other locations to cross-link. */
  nearby: string[];
}

export const locations: LocationData[] = [
  {
    slug: 'freising',
    city: 'Freising',
    cityIn: 'in Freising',
    region: 'Bayern',
    metaTitle: 'Webdesign Freising – Webdesigner für lokale Betriebe | VAMELA',
    metaDescription:
      'Webdesigner in Freising für Handwerk, Praxen und Dienstleister. Webseiten, die lokal bei Google gefunden werden und Anfragen bringen – einmalig ab 299 € oder im Abo.',
    badge: 'Webdesign Freising',
    h1: 'Webdesign Freising –',
    h1Accent: 'für Betriebe, die lokal gefunden werden wollen.',
    lead:
      'Ich sitze im Landkreis Freising, nicht in einem Großstadtbüro mit Kundennummer. Persönliche Betreuung, transparente Festpreise und Webseiten, die in der Region tatsächlich Anfragen erzeugen.',
    intro: [
      'Freising ist ein Standort mit ungewöhnlich gemischter Wirtschaft: gewachsene Handwerksbetriebe, Praxen und Kanzleien in der Innenstadt, dazu ein technologisch geprägtes Umfeld rund um Weihenstephan und den Flughafen. Für die meisten dieser Betriebe entscheidet sich der erste Kundenkontakt längst nicht mehr am Schaufenster, sondern in den Google-Ergebnissen für die eigene Dienstleistung plus „Freising".',
      'Genau dort setze ich an. Ich baue keine Webseiten, die nur gut aussehen, sondern Seiten, die für lokale Suchanfragen strukturiert sind: klare Leistungsbeschreibungen, saubere technische Basis, eine Verzahnung mit deinem Google-Business-Profil und Inhalte, die auch KI-Suchsysteme wie ChatGPT als Antwort verwenden können.',
    ],
    situation: {
      title: 'Was lokale Sichtbarkeit in Freising konkret bedeutet',
      paragraphs: [
        'Der Wettbewerb um „Webdesign Freising" oder „Handwerker Freising" ist deutlich dünner als in München — das ist der große Vorteil eines Standorts wie diesem. Wer hier eine technisch saubere, inhaltlich klar auf den Ort ausgerichtete Seite hat, steht realistisch weit oben. Wer eine veraltete Seite ohne lokale Signale betreibt, taucht dagegen selbst bei der eigenen Firmensuche kaum auf.',
        'Entscheidend sind drei Dinge: eine Seite, die auf dem Smartphone in unter zwei Sekunden steht, konsistente Firmendaten zwischen Website und Google-Business-Profil, und Texte, die die Fragen deiner Kunden beantworten statt Floskeln zu wiederholen. Das ist unspektakulär, aber es ist genau das, was in der Region den Unterschied macht.',
      ],
    },
    focusNiches: ['handwerker', 'zahnaerzte', 'steuerberater', 'gastronomie'],
    faqs: [
      {
        question: 'Was kostet eine Webseite in Freising?',
        answer:
          'Eine professionelle Basispräsenz startet bei 299 € einmalig, ein vollständiger Auftritt mit lokaler SEO-Optimierung liegt bei 999 €. Alternativ gibt es das Abo-Modell ab 99 € im Monat, bei dem Hosting, Wartung und Updates enthalten sind. Die Preise sind Festpreise – was drin ist, steht vorher fest.',
      },
      {
        question: 'Treffen wir uns persönlich?',
        answer:
          'Gerne. Ich bin im Landkreis Freising ansässig, ein Termin vor Ort ist also unkompliziert möglich. Vieles lässt sich aber auch per WhatsApp und Videocall klären – die meisten Kunden bevorzugen inzwischen den kurzen Weg per Nachricht.',
      },
      {
        question: 'Wie lange dauert es, bis meine Seite online ist?',
        answer:
          'In der Regel wenige Wochen. Da du direkt mit mir arbeitest und keine Agenturschleifen durchläufst, entfallen die Wartezeiten, die Projekte sonst in die Länge ziehen. Den ersten Entwurf siehst du schon vorab – kostenlos und unverbindlich.',
      },
    ],
    nearby: ['moosburg', 'erding', 'muenchen'],
  },
  {
    slug: 'muenchen',
    city: 'München',
    cityIn: 'in München',
    region: 'Bayern',
    metaTitle: 'Webdesign München – persönlicher Webdesigner statt Agentur | VAMELA',
    metaDescription:
      'Webdesign für Münchner Selbstständige und kleine Unternehmen: ein fester Ansprechpartner, transparente Festpreise ab 299 € und Webseiten, die Anfragen bringen.',
    badge: 'Webdesign München',
    h1: 'Webdesign München –',
    h1Accent: 'ohne Agenturpreise und Kundennummer.',
    lead:
      'In München bekommst du Webdesign entweder sehr teuer von einer Agentur oder sehr unzuverlässig vom günstigsten Anbieter. Ich biete den dritten Weg: einen festen Ansprechpartner mit Agenturqualität zu kalkulierbaren Preisen.',
    intro: [
      'München ist der dichteste Agenturmarkt Bayerns. Das klingt gut für Auftraggeber, führt in der Praxis aber zu zwei unangenehmen Extremen: etablierte Agenturen, deren Projektbudgets für kleine Unternehmen schlicht nicht darstellbar sind, und Billiganbieter, bei denen nach dem Launch niemand mehr erreichbar ist.',
      'Für Selbstständige, Praxen, Kanzleien und kleine Betriebe passt beides selten. Was dort gebraucht wird, ist ein professioneller Auftritt zu einem Preis, der sich rechnet – und jemand, der auch ein Jahr später noch ans Telefon geht, wenn eine Änderung ansteht. Genau diese Lücke fülle ich.',
      'Ich arbeite deutschlandweit remote und bin gleichzeitig nah genug an München, um bei Bedarf persönlich vorbeizukommen. Die Abstimmung läuft überwiegend per WhatsApp – kurze Nachricht statt Ticketsystem.',
    ],
    situation: {
      title: 'Ehrlich zum Wettbewerb: was in München realistisch ist',
      paragraphs: [
        'Ich verspreche dir nicht Platz 1 für „Webdesign München" – wer das tut, verkauft dir etwas. Für die hart umkämpften Generalbegriffe einer Großstadt braucht es jahrelang aufgebaute Domain-Autorität, Backlinks und Bewertungen. Das ist kein Projekt von sechs Wochen.',
        'Was dagegen sehr wohl erreichbar ist: Sichtbarkeit für die Suchanfragen, die dich tatsächlich betreffen. Also nicht „Webdesign München", sondern „Steuerberater Schwabing", „Physiotherapie München Ost" oder dein Firmenname plus Leistung. Diese Suchanfragen haben weniger Volumen, aber ungleich höhere Kaufabsicht – und dort ist der Wettbewerb schlagbar.',
        'Dazu kommt die zweite Ebene, die gerade erst entsteht: Immer mehr Menschen fragen ChatGPT oder Perplexity nach einem Dienstleister statt Google. Diese Systeme bevorzugen klar strukturierte, eindeutig zugeordnete Inhalte. Wer dort früh sauber aufgestellt ist, hat einen Vorsprung, den die großen Agenturen für ihre Kunden oft noch gar nicht adressieren.',
      ],
    },
    focusNiches: ['steuerberater', 'rechtsanwaelte', 'unternehmensberater', 'physiotherapeuten'],
    faqs: [
      {
        question: 'Warum bist du günstiger als eine Münchner Agentur?',
        answer:
          'Weil bei mir kein Agentur-Overhead anfällt: keine Projektmanager-Ebene, kein Büro in der Innenstadt, kein Vertriebsteam. Du bezahlst die Arbeit an deiner Webseite, nicht die Struktur drumherum. Qualität und Anspruch bleiben davon unberührt.',
      },
      {
        question: 'Arbeitest du auch mit Kunden direkt in der Stadt?',
        answer:
          'Ja. Ein großer Teil meiner Kunden sitzt in München und im Umland. Die Zusammenarbeit läuft meist digital ab, ein persönliches Treffen ist bei größeren Projekten aber problemlos möglich.',
      },
      {
        question: 'Kann ich später auf ein größeres Paket wechseln?',
        answer:
          'Jederzeit. Viele starten mit einer kompakten Seite und erweitern später um Unterseiten, Branchen-Landingpages oder Blog-Pflege. Beim Abo-Modell ist der Wechsel zum nächsten Monat möglich, bei der Einmalzahlung rechne ich die Erweiterung separat ab.',
      },
    ],
    nearby: ['freising', 'erding', 'landshut'],
  },
  {
    slug: 'landshut',
    city: 'Landshut',
    cityIn: 'in Landshut',
    region: 'Bayern',
    metaTitle: 'Webdesign Landshut – Webseiten für Betriebe der Region | VAMELA',
    metaDescription:
      'Webdesigner für Landshut und Niederbayern: moderne, schnelle Webseiten mit lokaler SEO-Optimierung. Festpreise ab 299 €, persönliche Betreuung statt Agentur.',
    badge: 'Webdesign Landshut',
    h1: 'Webdesign Landshut –',
    h1Accent: 'moderner Auftritt für gewachsene Betriebe.',
    lead:
      'Viele Landshuter Unternehmen haben einen ausgezeichneten Ruf in der Region – und eine Webseite, die davon nichts erkennen lässt. Genau diese Lücke schließe ich.',
    intro: [
      'Landshut ist von mittelständischen, oft familiengeführten Betrieben geprägt, die ihre Kunden über Jahrzehnte durch Weiterempfehlung gewonnen haben. Das funktioniert weiterhin – aber es funktioniert immer schlechter allein. Wer heute empfohlen wird, sucht den Betrieb anschließend online. Was er dort findet, entscheidet darüber, ob aus der Empfehlung eine Anfrage wird.',
      'Wenn die Seite dann aus 2014 stammt, auf dem Handy nicht funktioniert oder gar nicht erst auftaucht, verpufft die Empfehlung. Ein Redesign ist in solchen Fällen der schnellste Hebel überhaupt: Substanz, Referenzen und Reputation sind längst da – nur die digitale Verpackung arbeitet gegen den Betrieb.',
    ],
    situation: {
      title: 'Warum sich ein Redesign in Landshut besonders schnell rechnet',
      paragraphs: [
        'Der lokale Wettbewerb im Netz ist hier deutlich moderater als im Münchner Raum. Das heißt: Eine technisch saubere Seite mit klaren lokalen Signalen kann in Landshut vergleichsweise schnell weit oben stehen. Der Aufwand, der in München für Platz 8 nötig wäre, reicht in Niederbayern oft für die vordersten Plätze.',
        'Hinzu kommt der Recruiting-Effekt, der gerade im Mittelstand unterschätzt wird. Fachkräfte prüfen den möglichen Arbeitgeber online, bevor sie sich bewerben. Ein moderner, gepflegter Auftritt wirkt dabei genauso auf Bewerber wie auf Kunden – bei vielen meiner Projekte war das am Ende der größere Nutzen.',
      ],
    },
    focusNiches: ['handwerker', 'logistikunternehmen', 'kfz-werkstaetten', 'garten-landschaftsbau'],
    faqs: [
      {
        question: 'Betreust du Kunden in Landshut auch vor Ort?',
        answer:
          'Landshut liegt in gut erreichbarer Entfernung zu meinem Standort im Landkreis Freising, ein Termin vor Ort ist also möglich. Der Großteil der Abstimmung läuft in der Praxis aber digital – das spart beiden Seiten Zeit.',
      },
      {
        question: 'Meine bestehende Seite ist alt. Muss alles neu?',
        answer:
          'Meistens ja, was die technische Basis angeht – aber nicht, was die Inhalte betrifft. Texte, Referenzen und Bilder aus dem bestehenden Auftritt fließen ein, sofern sie noch stimmen. Du fängst also nicht bei null an.',
      },
      {
        question: 'Kümmerst du dich auch um das Google-Business-Profil?',
        answer:
          'Ja, im Paket „Lokal-Dominanz" ist die Anbindung an dein Google-Business-Profil enthalten. Gerade lokal ist das mindestens so wichtig wie die Webseite selbst, weil es direkt über die Sichtbarkeit in der Kartenansicht entscheidet.',
      },
    ],
    nearby: ['moosburg', 'freising', 'erding'],
  },
  {
    slug: 'erding',
    city: 'Erding',
    cityIn: 'in Erding',
    region: 'Bayern',
    metaTitle: 'Webdesign Erding – Webseiten, die Anfragen bringen | VAMELA',
    metaDescription:
      'Webdesigner für Erding und Umgebung: schnelle, mobile Webseiten mit lokaler SEO für Handwerk, Praxen und Dienstleister. Festpreise ab 299 €.',
    badge: 'Webdesign Erding',
    h1: 'Webdesign Erding –',
    h1Accent: 'sichtbar im eigenen Einzugsgebiet.',
    lead:
      'Erding profitiert von der Nähe zu München und zum Flughafen – und steht damit im Wettbewerb mit Anbietern aus beiden Richtungen. Umso wichtiger ist ein Auftritt, der die eigene Region klar besetzt.',
    intro: [
      'Wer in Erding eine Dienstleistung sucht, bekommt in den Suchergebnissen regelmäßig auch Anbieter aus München und dem Umland angezeigt. Für lokale Betriebe heißt das: Es reicht nicht, überhaupt eine Webseite zu haben. Sie muss unmissverständlich signalisieren, dass du hier vor Ort bist und hier arbeitest.',
      'Das erreicht man nicht durch das Wort „Erding" im Footer, sondern durch eine durchgängig lokale Struktur: Ortsbezug in Überschriften und Texten, saubere strukturierte Daten mit korrekter Adresse, ein gepflegtes Google-Business-Profil und Inhalte, die die typischen Fragen deiner Kunden aus der Region beantworten.',
    ],
    situation: {
      title: 'Gegen die Konkurrenz aus der Großstadt bestehen',
      paragraphs: [
        'Der Vorteil lokaler Anbieter ist real und wird von Google auch honoriert: Bei Suchanfragen mit lokaler Absicht bevorzugt der Algorithmus Anbieter in der Nähe des Suchenden. Dieser Vorteil greift aber nur, wenn deine Standortsignale eindeutig sind. Sind sie widersprüchlich oder fehlen ganz, verschenkst du genau den Bonus, der dich gegen einen Münchner Wettbewerber verteidigt.',
        'In der Praxis sind es oft simple Dinge, die das verhindern: eine Adresse, die auf der Webseite anders geschrieben ist als im Google-Profil, fehlende Öffnungszeiten, oder eine Seite, die auf dem Smartphone so langsam lädt, dass Besucher vorher abspringen.',
      ],
    },
    focusNiches: ['handwerker', 'physiotherapeuten', 'immobilienmakler', 'fitnessstudios'],
    faqs: [
      {
        question: 'Lohnt sich lokale SEO für einen kleinen Betrieb überhaupt?',
        answer:
          'Gerade dann. Bei lokalen Suchanfragen konkurrierst du nicht mit dem ganzen Internet, sondern mit einer Handvoll Anbietern in deinem Umkreis. Das ist ein Wettbewerb, den auch ein Einzelunternehmen gewinnen kann – anders als bei überregionalen Themen.',
      },
      {
        question: 'Was passiert nach dem Launch?',
        answer:
          'Beim Abo-Modell übernehme ich Hosting, Sicherheits-Updates und kleinere Änderungen laufend. Bei der Einmalzahlung ist das erste Jahr Hosting enthalten; danach kannst du die Betreuung separat dazubuchen oder die Seite selbst weiterführen.',
      },
      {
        question: 'Bekomme ich vorher einen Entwurf zu sehen?',
        answer:
          'Ja, das ist der Standardweg bei mir. Du bekommst vorab einen kostenlosen Entwurf deiner neuen Startseite. Erst wenn dir gefällt, was du siehst, sprechen wir über eine Zusammenarbeit.',
      },
    ],
    nearby: ['freising', 'muenchen', 'moosburg'],
  },
  {
    slug: 'moosburg',
    city: 'Moosburg an der Isar',
    cityIn: 'in Moosburg',
    region: 'Bayern',
    metaTitle: 'Webdesign Moosburg an der Isar – Webdesigner vor Ort | VAMELA',
    metaDescription:
      'Webdesigner für Moosburg an der Isar und den Landkreis Freising. Persönliche Betreuung, schnelle Webseiten mit lokaler SEO, Festpreise ab 299 €.',
    badge: 'Webdesign Moosburg',
    h1: 'Webdesign Moosburg –',
    h1Accent: 'kurze Wege, klare Ergebnisse.',
    lead:
      'Moosburg liegt praktisch vor meiner Haustür. Kürzer und persönlicher wird die Zusammenarbeit mit einem Webdesigner kaum – und genau davon profitieren kleine Betriebe am meisten.',
    intro: [
      'Für Betriebe in Moosburg und dem umliegenden Landkreis Freising ist die Ausgangslage besonders günstig: überschaubarer lokaler Wettbewerb im Netz, klar abgegrenztes Einzugsgebiet und eine Kundschaft, die ihre Dienstleister bewusst in der Nähe sucht. Wer hier online sauber aufgestellt ist, wird schnell zur naheliegenden Wahl.',
      'Der häufigste Fehler ist nicht die fehlende Webseite, sondern eine, die nie zu Ende gedacht wurde: ein Baukasten-Auftritt ohne Ortsbezug, ohne erkennbaren nächsten Schritt für den Besucher und ohne Verbindung zum Google-Business-Profil. Solche Seiten kosten Geld und bringen keine Anfragen.',
    ],
    situation: {
      title: 'Der Vorteil eines Webdesigners aus der direkten Umgebung',
      paragraphs: [
        'Ich sitze selbst in Haag an der Amper, also im Landkreis Freising. Abstimmungen sind entsprechend unkompliziert, ein Treffen vor Ort ist kurzfristig machbar, und ich kenne die Region, in der deine Kunden suchen. Das klingt nach einer Kleinigkeit, macht in der Praxis aber den Unterschied zwischen einem Projekt, das läuft, und einem, das sich zieht.',
        'Dazu kommt Verlässlichkeit nach dem Launch: Wenn in einem halben Jahr eine Preisliste geändert werden muss oder ein neues Team-Mitglied dazukommt, schreibst du mir eine Nachricht – und es wird gemacht. Kein Ticketsystem, keine Wartezeit von zwei Wochen.',
      ],
    },
    focusNiches: ['handwerker', 'gastronomie', 'kfz-werkstaetten', 'reinigungsfirmen'],
    faqs: [
      {
        question: 'Wie schnell bist du erreichbar?',
        answer:
          'In der Regel am selben Tag. Der bevorzugte Weg ist WhatsApp – die meisten Anliegen lassen sich mit ein paar Nachrichten klären, ohne dass ein Termin nötig wird.',
      },
      {
        question: 'Ich habe noch gar keine Webseite. Wo fange ich an?',
        answer:
          'Am besten mit dem kostenlosen Entwurf. Du erzählst mir kurz, was du machst und wen du erreichen willst – ich erstelle daraus einen Vorschlag für deine Startseite. Daran lässt sich viel konkreter besprechen als an einer abstrakten Anforderungsliste.',
      },
      {
        question: 'Übernimmst du auch die Texte?',
        answer:
          'Ja. Texte sind Teil der Leistung, nicht ein Zusatz. Ich formuliere sie so, dass sie deine Leistung klar auf den Punkt bringen und gleichzeitig zu den Begriffen passen, nach denen in der Region tatsächlich gesucht wird.',
      },
    ],
    nearby: ['freising', 'landshut', 'erding'],
  },
];

export const locationBySlug = (slug?: string) =>
  locations.find((l) => l.slug === slug);
