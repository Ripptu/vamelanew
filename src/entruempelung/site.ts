/**
 * Zentrale Stammdaten der Website.
 * TODO: Rufnummer, Adresse und Einzugsgebiet vor dem Livegang durch die
 * echten Daten des Betriebs ersetzen.
 */
export const site = {
  name: 'Hartinger',
  descriptor: 'Entrümpelung & Umzüge',
  region: 'München und Umgebung',
  phoneDisplay: '089 452 17 30',
  phoneHref: 'tel:+498945217 30'.replace(/\s/g, ''),
  ctaLabel: 'Festpreis anfragen',
} as const;

export const navItems = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Preise', href: '#preise' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;
