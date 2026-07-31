# Build-Prompt: Landingpage Entrümpelung, Umzüge, Wohnungs- und Firmenauflösungen

Dieser Prompt ist vollständig. Er lässt sich ohne weiteren Kontext in eine neue
Session einfügen. Er setzt den Anti-Slop-Frontend-Skill und die
Notion-Designvorlage als bereits gelesen voraus und trifft alle Entscheidungen,
die diese beiden Dokumente offen lassen.

---

## 1. Auftrag

Baue die Landingpage eines lokalen Entrümpelungsbetriebs. Leistungen:
Entrümpelung, Umzüge, Wohnungsauflösung, Firmenauflösung, Haushaltsauflösung,
Messiwohnung, besenreine Übergabe.

Ziel der Seite ist genau eine Handlung: die unverbindliche Anfrage einer
kostenlosen Besichtigung mit Festpreisangebot. Alles auf der Seite zahlt darauf
ein oder fliegt raus.

Die Seite wird abschnittsweise gebaut. Liefere pro Runde die angeforderten
Sektionen fertig, nicht die ganze Seite auf einmal.

**SEO kommt zuletzt.** Keine Keyword-Dichte, keine strukturierten Daten, keine
Meta-Optimierung in dieser Phase. Semantisch korrektes HTML und sinnvolle
Überschriftenhierarchie sind trotzdem Pflicht, weil sie später die Grundlage
sind.

---

## 2. Design Read (fixiert, nicht neu herleiten)

> Lokale Dienstleister-Landingpage für Privatkunden unter Zeitdruck und für
> Hausverwaltungen, mit klarer, ruhiger, vertrauensbildender Sprache, umgesetzt
> auf dem Notion-Token-System (Navy-Band, ein einziger Akzent, 8px-Buttons,
> 12px-Karten) mit Tailwind v4 und Motion.

### Zielgruppen und ihr Zustand

1. **Angehörige nach einem Todesfall.** Emotional belastet, unter Zeitdruck
   durch die Kündigungsfrist des Mietvertrags. Wollen Diskretion, keine
   Verhandlung, keine Überraschung auf der Rechnung.
2. **Umziehende Privathaushalte.** Termin steht, Übergabe steht, es fehlen
   Hände und ein Transporter.
3. **Hausverwaltungen und Firmen.** Wollen Termintreue, Nachweise,
   Rechnungsstellung, einen Ansprechpartner. Kaufen wiederholt.

Was diese drei gemeinsam brauchen: **Preissicherheit vor dem Auftrag,
Termintreue, Entsorgungsnachweis.** Diese drei Punkte sind das inhaltliche
Rückgrat der Seite. Jede Sektion beantwortet einen Einwand, nicht mehr.

### Tonalität

Sachlich, ruhig, in der Sprache des Kunden. Handwerk, keine Agentur. Kein
Pathos, keine Superlative, keine Emotionalisierung eines Todesfalls. Kurze
Hauptsätze. Du-Ansprache vermeiden, Sie-Ansprache verwenden (Zielgruppe ist
überwiegend 45 plus und teils gewerblich).

---

## 3. Dials

```
DESIGN_VARIANCE: 6    asymmetrische Splits, keine Center-Heros, aber ruhige Raster
MOTION_INTENSITY: 4   Eintritt, Zustandswechsel, Feedback. Kein Scroll-Hijack, kein Pinning.
VISUAL_DENSITY: 3     luftig, py-20 bis py-28 pro Sektion, viel Weißraum
```

Diese Werte sind gesetzt. Nicht anheben, weil eine Sektion "langweilig" wirkt.
Wirkt eine Sektion langweilig, fehlt ihr Inhalt oder ein Bild, nicht Bewegung.

---

## 4. Technik

- **Stack:** Vite, React 19, TypeScript, Tailwind v4, Motion (`motion/react`).
- **Icons:** ausschließlich Phosphor über `react-icons/pi`. Eine Familie,
  einheitliche Strichstärke. Keine handgezeichneten SVG-Pfade.
- **Bilder:** `<picture>` mit Art Direction, `width` und `height` immer gesetzt,
  Hero-Bild `loading="eager"` und `fetchPriority="high"`, alles andere
  `loading="lazy"`.
- **Struktur:** eine Datei pro Sektion unter `components/`, Stammdaten zentral
  in `site.ts`. Keine Sektion importiert eine andere Sektion.
- **Vor jedem Import einer Bibliothek `package.json` prüfen.** Fehlt sie, erst
  den Installationsbefehl ausgeben.

---

## 5. Design-Tokens

Aus der Notion-Vorlage übernommen und für einen Handwerksbetrieb reduziert. Die
Pastellkarten-Palette der Vorlage wird **nicht** übernommen, sie passt nicht zum
Gewerk. Übernommen werden Navy-Band, Purple-Akzent, Neutralskala, Radien,
Schatten und Typo-Hierarchie.

### Farbe

| Rolle | Wert | Einsatz |
|---|---|---|
| `primary` | `#5645d4` | jede primäre Aktion, ausnahmslos |
| `primary-pressed` | `#4534b3` | Hover und Aktivzustand |
| `navy` | `#0a1530` | Hero-Band, Footer |
| `navy-deep` | `#070f24` | oberer Verlauf im Band, Scrim |
| `navy-mid` | `#1a2a52` | unterer Verlauf im Band |
| `canvas` | `#ffffff` | Standardfläche hell |
| `surface` | `#f6f5f4` | ruhige Sektionswechsel |
| `hairline` | `#e5e3df` | 1px-Trennlinien |
| `hairline-strong` | `#c8c4be` | Rahmen von Eingabefeldern |
| `ink` | `#1a1a1a` | Fließtext und Überschriften hell |
| `slate` | `#5d5b54` | Sekundärtext |
| `steel` | `#787671` | Tertiärtext, Fußzeilenlinks |
| `on-dark` | `#ffffff` | Text auf Navy |
| `on-dark-muted` | `#a4a097` | Sekundärtext auf Navy |
| `success` | `#1aae39` | ausschließlich Formularbestätigung |
| `error` | `#e03131` | ausschließlich Formularfehler |

### Typografie

Inter. Die Vorlage nennt "Notion Sans, Inter-based"; Notion Sans ist nicht
lizenzierbar, Inter ist die ehrliche Umsetzung. Gewichte 400, 500, 600. Mehr
nicht.

| Ebene | Größe mobil / Desktop | Gewicht | Laufweite |
|---|---|---|---|
| Hero | 32px / 48px | 600 | -0.03em |
| Sektionsüberschrift | 28px / 36px | 600 | -0.02em |
| Kartentitel | 20px / 22px | 600 | 0 |
| Fließtext groß | 16px / 18px | 400 | 0, Zeilenhöhe 1.6 |
| Fließtext | 15px / 16px | 400 | 0, Zeilenhöhe 1.55 |
| Button | 16px | 500 bis 600 | 0 |

### Form und Raum

- Radien: **Buttons und Eingabefelder 8px, Karten und Bilder 12px.** Keine
  dritte Größe, keine Pillen außer echten Statusbadges.
- Container: `max-w-[1280px]`, Innenabstand `px-5 sm:px-6 lg:px-8`.
- Sektionsrhythmus: `py-20 lg:py-28`. Zwei aufeinanderfolgende Sektionen
  bekommen nie denselben Hintergrund.
- Schatten: nur zwei. Karten `0 4px 12px rgb(15 15 15 / 0.08)`, Hero-Bild
  `0 24px 48px -8px rgb(15 15 15 / 0.45)`. Kein Glow, kein reines Schwarz.

---

## 6. Gestaltungsgesetze (verbindliche Locks)

1. **Farb-Lock.** Purple ist der einzige Akzent auf der gesamten Seite. Kein
   blauer Link, kein grünes Häkchen als Dekoration, kein oranges Badge. Grün und
   Rot existieren nur als Formularzustand.
2. **Radien-Lock.** 8px interaktiv, 12px Fläche. Überall.
3. **CTA-Lock.** Es gibt genau ein Label für die Anfrage: **"Festpreis
   anfragen"**. In Navigation, Hero, Sektionsabschlüssen, Formular und Footer
   identisch. Keine Variante wie "Jetzt anfragen", "Kontakt aufnehmen",
   "Angebot einholen". Die Telefonnummer ist kein zweiter CTA, sondern ein
   zweiter Kanal, und wird immer als Nummer ausgeschrieben, nie als Wort.
4. **Theme-Lock.** Die Seite ist hell. Navy-Band im Hero und im Footer sind
   gesetzte Klammern, keine Themenwechsel. Dazwischen kippt nichts. Dunkelmodus
   über `prefers-color-scheme` mit denselben Kontrastverhältnissen.
5. **Layout-Lock.** Jede Layout-Familie kommt genau einmal vor. Maximal zwei
   Bild-Text-Splits hintereinander, danach zwingend eine andere Familie.
6. **Eyebrow-Budget.** Maximal ein Kleinlabel über einer Überschrift pro drei
   Sektionen. Bei neun Sektionen also höchstens drei auf der ganzen Seite. Im
   Zweifel weglassen, die Überschrift trägt allein.

---

## 7. Seitenarchitektur

Neun Sektionen, jede mit eigener Layout-Familie und genau einer Aufgabe.

| # | Sektion | Layout-Familie | Aufgabe | Abschluss |
|---|---|---|---|---|
| 1 | Hero | asymmetrischer 7/5-Split auf Navy | Versprechen und Ergebnis zeigen | primärer CTA plus Telefon |
| 2 | Vertrauensleiste | vierspaltige Textzeile ohne Karten, auf `surface` | Preissicherheit, Termin, Nachweis, Versicherung in je drei Wörtern | keiner |
| 3 | Leistungen | Bento mit exakt fünf Zellen, zwei davon mit Foto | zeigen, was gebucht werden kann | Textlink pro Zelle |
| 4 | Ablauf | horizontale Zeitleiste mit drei Schritten, volle Breite | Angst vor dem Unbekannten nehmen | primärer CTA |
| 5 | Festpreis | zweispaltig, links Erklärung, rechts Beispielrechnung | Preiseinwand auflösen | primärer CTA |
| 6 | Referenzen | Zitat-Karussell mit drei Stimmen, je maximal drei Zeilen | soziale Bestätigung | keiner |
| 7 | Vorher-Nachher | Bildpaar mit Schieberegler, volle Breite | Ergebnis beweisen | keiner |
| 8 | FAQ | Akkordeon, sechs Fragen, einspaltig, `max-w-[70ch]` | Resteinwände räumen | primärer CTA |
| 9 | Anfrage und Footer | Formular auf Navy, darunter Fußzeile | Konversion | Formular |

### Regeln pro Sektion

- **Überschrift maximal acht Wörter. Fließtext darunter maximal 25 Wörter.**
  Reicht das nicht, hat die Sektion zwei Aufgaben und muss geteilt werden.
- Sektion 2 hat **keine Karten**. Vier Textblöcke, getrennt durch Weißraum, auf
  Mobil zweispaltig.
- Sektion 3 hat exakt fünf Zellen für fünf Leistungen. Keine leere Zelle, kein
  Auffüllen. Zwei Zellen tragen ein echtes Foto, drei tragen Text mit Icon.
- Sektion 4 nennt die Schritte bei ihrem Namen: "Besichtigung", "Festpreis",
  "Räumung". Keine Nummerierung, keine "Schritt 1"-Etiketten.
- Sektion 5 zeigt eine echte Beispielrechnung mit nachvollziehbaren Positionen,
  klar als Beispiel markiert. Keine erfundene Präzision wie "durchschnittlich
  4,2 Stunden".
- Sektion 8: sechs Fragen, die wirklich gestellt werden. Vorschlag: Was kostet
  eine Entrümpelung? Wie schnell habe ich einen Termin? Muss ich anwesend sein?
  Was passiert mit verwertbaren Gegenständen? Übernehmen Sie auch
  Messiwohnungen? Bekomme ich einen Entsorgungsnachweis?

---

## 8. Hero-Spezifikation

Der Hero entscheidet über die Seite. Er wird zuerst gebaut und ist die einzige
Sektion mit einer detaillierten Vorgabe.

### Aufbau

Navy-Band über die volle Breite, `min-h-[100dvh]`, Inhalt vertikal zentriert.
Innen ein 12-spaltiges Raster: links `col-span-7` Copy, rechts `col-span-5`
Bildkarte. Unter 1024px stapelt sich alles einspaltig, Bild unter den Buttons.

Hintergrund: ein ruhiger vertikaler Verlauf `#070f24` nach `#0a1530` nach
`#0d1a38`. Keine Streupunkte, keine Gitterlinien, kein Rauschen, kein Glow.

### Textbausteine (maximal vier, mehr ist ein Fehler)

1. **Überschrift**, zwei Zeilen auf Desktop, Zeilenumbruch manuell gesetzt.
   Vorlage: *"Heute vollgestellt. Übermorgen besenrein."*
   Alternativen in gleicher Länge: *"Wir räumen. Sie übergeben."* oder
   *"Vollgeräumt am Montag. Besenrein am Mittwoch."*
   Prüfe die längere der beiden Zeilen gegen die Spaltenbreite. Passt sie nicht,
   verkleinere die Schrift, nicht die Aussage. Drei Zeilen auf Desktop sind ein
   Schriftgrößenfehler.
2. **Untertext**, maximal 20 Wörter, maximal vier Zeilen. Er nennt die drei
   Leistungen, das Gebiet und die zwei Sicherheiten.
   Vorlage: *"Entrümpelung, Umzüge und Wohnungsauflösungen in [ORT]. Festpreis
   nach kostenloser Besichtigung, Entsorgungsnachweis inklusive."*
3. **CTA-Paar.** Primär: gefüllter Purple-Button, 52px hoch, `px-7`, Label
   "Festpreis anfragen", Text 16px in 600. Sekundär: weiß umrandeter Button
   gleicher Höhe mit Telefon-Icon und ausgeschriebener Nummer. Auf Mobil
   untereinander, volle Breite.
4. Ein viertes Element ist nicht vorgesehen.

**Verboten im Hero:** Logoleiste, Bewertungssterne, Zähler, Zertifikatsbadges,
Zusatzzeile unter den Buttons, Scroll-Hinweis, Kategorielabel, Ortsangabe mit
Uhrzeit oder Wetter. Vertrauenselemente gehören in Sektion 2, direkt darunter.

### Bild

Ein echtes Foto, kein Illustrationsersatz, kein aus Divs gebauter Fake-Screen.
Motiv: **das Ergebnis, nicht die Arbeit.** Ein leergeräumtes Zimmer, Licht durch
nackte Fenster, Parkett, an der Wand die hellen Stellen der abgebauten Möbel,
eine Person in Arbeitskleidung von hinten mit dem letzten Karton.

Zwei Zuschnitte über `<picture>`: hochkant 4:5 ab 1024px, quer 16:10 darunter.
Rahmen `border border-white/10`, Radius 12px, tiefer Schatten.

Nicht verwenden: gestellte Stockfotos mit lächelnden Teams vor einem
Transporter, Daumen hoch, Handschlag, Umzugskartons mit Herz drauf.

### Kontrast des CTA

Der primäre Button ist die farbigste Fläche im ersten Viewport. Purple auf Navy
trägt über Sättigung, nicht über Helligkeit. Deshalb gilt: Buttonhöhe mindestens
52px, Label in 600, ausreichend Abstand zum sekundären Button, und links davon
darf keine weitere farbige Fläche liegen. Weißer Text auf Purple erfüllt WCAG AA
mit Reserve, das ist vor Auslieferung nachzurechnen.

### Kopfzeile

Einzeilig, 72px hoch, fixiert. Über dem Band transparent, ab 24px Scrollweg
deckend in Navy mit 1px Trennlinie. Links Wortmarke plus Zusatz "Entrümpelung
und Umzüge", rechts vier Links, Telefonnummer und der primäre Button. Unter
1024px Burger-Menü mit abdunkelndem Hintergrund, Escape-Taste, gesperrtem
Seitenscroll und beiden Aktionen am Fuß des Panels.

---

## 9. Sprache und Inhalt

- Jeder sichtbare String wird vor der Auslieferung noch einmal gelesen. Sätze,
  die nur klug klingen, werden durch schlichte funktionale Sätze ersetzt.
- **Keine Füllverben:** optimieren, revolutionieren, nahtlos, ganzheitlich,
  Rundum-sorglos, stressfrei, professionell.
- **Keine erfundenen Zahlen.** Kein "über 2.000 Aufträge", keine
  Durchschnittswerte, keine Bewertungssumme, solange keine echten Daten
  vorliegen. Fehlen sie, wird die Aussage weggelassen, nicht geschätzt.
- **Referenzen:** Vorname mit abgekürztem Nachnamen und Rolle oder Ort, zum
  Beispiel "Renate H., Wohnungsauflösung in Moosburg". Keine
  Fantasie-Vollnamen, keine Porträtfotos ohne Freigabe, keine erfundenen
  Firmenlogos.
- **Bindestrich statt Gedankenstrich.** Der Gedankenstrich ist auf der gesamten
  Seite verboten, auch im Fließtext, in Zitaten und in Bildunterschriften.

---

## 10. Bewegung

Erlaubt sind genau vier Bewegungen auf der ganzen Seite:

1. Gestaffelter Eintritt der Hero-Elemente in Lesereihenfolge, einmalig.
2. Sanftes Einblenden von Sektionsinhalten beim Scrollen, `whileInView`,
   `once: true`, Versatz 18px, Dauer 0.55s, `ease [0.16, 1, 0.3, 1]`.
3. Zustandswechsel der Kopfzeile und Öffnen des Akkordeons.
4. Taktiles Feedback auf Buttons, `active:translate-y-px`.

Verboten: Endlosschleifen, Parallax, Scroll-Hijack, gepinnte Sektionen,
Laufschriften, Zahlen-Hochzähler, Cursor-Effekte,
`window.addEventListener('scroll')`.

Alles oben Genannte kollabiert unter `prefers-reduced-motion` auf sofortige
Darstellung. `useReducedMotion()` ist Pflicht, nicht optional.

---

## 11. Barrierefreiheit und Performance

- Kontrast: Fließtext mindestens 4.5:1, große Schrift mindestens 3:1. Auch
  Platzhalter, Hilfetexte und Fehlermeldungen im Formular.
- Formular: Label **über** dem Feld, niemals Platzhalter als Label.
  Fehlermeldung unter dem Feld. Feldhöhe 44px. Alle drei Zustände bauen: leer,
  sendend, gesendet, plus Fehlerfall.
- Sichtbarer Fokusring auf allem Interaktiven, auf Navy in Weiß, auf Hell in
  Purple.
- Touchziele mindestens 44px.
- `min-h-[100dvh]` statt `h-screen`.
- Hero-Bild vorgeladen, alles andere lazy. Layoutsprünge durch feste
  Bildmaße verhindern.

---

## 12. Harte Verbote

Verstoß gegen einen dieser Punkte bedeutet: nicht ausliefern, sondern
korrigieren.

- Gedankenstriche jeder Art im sichtbaren Text.
- Aus Divs gebaute Produkt- oder Screenshot-Attrappen.
- Handgezeichnete dekorative SVGs, gezeichnete Icons, gemalte Logos.
- Drei gleich große Feature-Karten nebeneinander.
- Kleinlabel über jeder Sektionsüberschrift.
- Sektionsnummern wie "01 / Leistungen".
- Farbige Punkte vor Listenpunkten, Navigationslinks oder Badges.
- Fortschrittsbalken mit gefüllter Hintergrundspur als Vergleichsgrafik.
- Laufschriften, Ortsleisten, Uhrzeiten, Scroll-Hinweise, Versionsnummern.
- Zwei CTAs mit derselben Absicht und unterschiedlichem Wortlaut.
- Umbrechende Button-Beschriftungen auf Desktop.
- Ein Abschnitt, der mitten in der hellen Seite auf Dunkelmodus umschaltet.
- Emojis in Oberflächentexten.

---

## 13. Pre-Flight vor jeder Auslieferung

Mechanisch abarbeiten. Ein nicht ehrlich abhakbarer Punkt bedeutet, dass die
Arbeit nicht fertig ist.

- [ ] Null Gedankenstriche im gesamten sichtbaren Text.
- [ ] Hero passt in den ersten Viewport, Überschrift maximal zwei Zeilen auf
      Desktop, beide CTAs ohne Scrollen sichtbar.
- [ ] Hero enthält höchstens vier Textelemente.
- [ ] Kleinlabel gezählt, höchstens ein Drittel der Sektionsanzahl.
- [ ] Ein Akzent, ein Radiensystem, ein CTA-Label, ein Theme auf der ganzen
      Seite.
- [ ] Keine zwei Sektionen mit derselben Layout-Familie, keine drei
      Bild-Text-Splits hintereinander.
- [ ] Bento-Zellen exakt so viele wie Inhalte, keine leere Zelle.
- [ ] Jede Zahl auf der Seite ist entweder belegt oder als Beispiel markiert.
- [ ] Jedes Bild ist ein echtes Bild mit `width`, `height` und aussagekräftigem
      Alternativtext.
- [ ] Jede Animation lässt sich in einem Satz begründen, sonst raus.
- [ ] `prefers-reduced-motion` und `prefers-color-scheme` getestet.
- [ ] Formular in allen vier Zuständen gebaut und kontrastgeprüft.
- [ ] Navigation einzeilig auf Desktop, höchstens 80px hoch.
- [ ] Mobil bei 390px Breite geprüft, kein horizontales Scrollen.
- [ ] Typecheck und Build laufen fehlerfrei.

---

## 14. Platzhalter, die vor dem Livegang ersetzt werden

Zentral in `site.ts` halten, nirgends hart in Komponenten schreiben.

```
FIRMENNAME          [...]
ZUSATZ              Entrümpelung und Umzüge
ORT / EINZUGSGEBIET [...]
TELEFON             [...]
E-MAIL              [...]
ANSCHRIFT           [...]
```

Solange echte Bewertungen, Referenzen und Zahlen fehlen, bleiben die
entsprechenden Bausteine leer statt erfunden.

---

## 15. Arbeitsweise

1. Vor Code eine Zeile ausgeben: was gebaut wird und welche Layout-Familie die
   Sektion belegt.
2. Sektion bauen, Typecheck, Build, Screenshot bei 1440px, 834px und 390px.
3. Pre-Flight abarbeiten und Abweichungen benennen, nicht verschweigen.
4. Erst dann die nächste Sektion.

Reihenfolge: Hero und Kopfzeile, dann Vertrauensleiste, Leistungen, Ablauf,
Festpreis, Referenzen, Vorher-Nachher, FAQ, Anfrage und Footer. Zum Schluss
SEO in einer eigenen Runde.
