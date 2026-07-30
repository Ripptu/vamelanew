# Entrümpelungs-Website (Entwurf)

Eigener Vite-Einstieg neben der Vamela-Seite. Lokal unter
`http://localhost:5173/entruempelung.html`, im Build als `dist/entruempelung.html`.
Die Vamela-Seite bleibt davon unberührt.

## Design Read

Lokale Dienstleister-Landingpage (Entrümpelung, Umzug, Wohnungs- und
Firmenauflösung) für Privatkunden unter Zeitdruck sowie Hausverwaltungen.
Sprache: klar, ruhig, vertrauensbildend. Grundlage ist die Notion-Designvorlage,
adaptiert für einen Handwerksbetrieb.

Dials: `DESIGN_VARIANCE 6` (asymmetrischer 7/5-Split statt Center-Hero),
`MOTION_INTENSITY 4` (einmaliger Eintritt, Zustandswechsel der Kopfzeile,
taktiles Button-Feedback), `VISUAL_DENSITY 3`.

## Festlegungen

- **Ein Akzent:** Purple `#5645d4` für jede primäre Aktion, auf jeder Sektion.
  Kein zweiter Akzent, keine Statusfarben zur Dekoration.
- **Ein Radien-System:** Buttons 8px, Karten und Bilder 12px.
- **Eine CTA-Sprache:** "Festpreis anfragen" ist das einzige Label für die
  Anfrage, in Navigation, Hero und später im Footer identisch.
- **Typografie:** Inter (die Vorlage nennt "Notion Sans, Inter-based"; Notion
  Sans ist nicht lizenzierbar). Display mit `-0.03em` Laufweite.
- **Hell/Dunkel:** Das Hero-Band ist in beiden Modi navy. Die hellen Sektionen
  darunter kippen über `prefers-color-scheme`, Tokens liegen in `styles.css`.

## Offen

- Rufnummer, Firmenname und Einzugsgebiet in `site.ts` sind Platzhalter.
- Die Hero-Bilder liegen noch auf der Generierungs-CDN. Vor dem Livegang nach
  `public/entruempelung/` kopieren, als WebP/AVIF ausspielen und die beiden
  Konstanten in `components/Hero.tsx` umstellen.
- Sektionen unterhalb des Heros (Leistungen, Ablauf, Preise, Kontakt) fehlen
  noch, die Navigationsanker zeigen bereits darauf.
- SEO (Titel, Description, LocalBusiness-Markup, `noindex` entfernen) kommt
  laut Absprache zum Schluss.
