import { useState } from "react";

const testimonials = [
  {
    quote: "Die Zusammenarbeit war extrem unkompliziert. Ich brauchte ohne Technik-Stress eine Seite, die Kunden direkt überzeugt. Nach nur 12 Tagen war alles live – und wir bekommen wöchentlich qualifizierte Anfragen.",
    name: "Thomas R.",
    role: "Inhaber, Handwerksbetrieb • München",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Thomas&backgroundColor=60a5fa",
  },
  {
    quote: "Vorher hatte ich eine veraltete Seite und null Zeit mich darum zu kümmern. Christian hat Design, Texte und Technik komplett übernommen. Meine Kundinnen loben das neue Design ständig!",
    name: "Sarah K.",
    role: "Inhaberin, Kosmetikstudio • Bayern",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=f472b6",
  },
  {
    quote: "Endlich ein Partner auf Augenhöhe. Kein Fachchinesisch, transparente Festpreise und schnelle Erreichbarkeit per WhatsApp. Änderungen werden meist am selben Tag direkt umgesetzt.",
    name: "Michael B.",
    role: "Selbstständiger Berater • Freising",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Michael&backgroundColor=facc15",
  },
  {
    quote: "Wir hatten Sorge wegen Datenschutz und Aufwand. Christian hat alles schlüsselfertig eingerichtet. Über das neue Online-Kontaktformular buchen Patienten jetzt direkt Erstgespräche.",
    name: "Laura S.",
    role: "Praxisinhaberin • Erding",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Laura&backgroundColor=4ade80",
  },
  {
    quote: "Die beste Investition fürs Jahr. Unsere alte Seite war langsam und brachte kaum Sichtbarkeit. Jetzt lädt die Website blitzschnell und wir werden regional deutlich besser gefunden.",
    name: "Johannes M.",
    role: "Geschäftsführer, Dienstleistung • München",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Johannes&backgroundColor=fb923c",
  },
  {
    quote: "Der kostenlose Vorab-Entwurf hat mich sofort überzeugt. Man sieht direkt die Liebe zum Detail. Ein hochprofessioneller Auftritt, der sich bei uns schon mehrfach bezahlt gemacht hat.",
    name: "Elena V.",
    role: "Architekturbüro • Dachau",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Elena&backgroundColor=c084fc",
  },
  {
    quote: "Perfekter Rundum-Service. Ich muss mich um keine Updates, kein Hosting und keine Sicherheitszertifikate kümmern. Ich konzentriere mich auf meine Arbeit, Christian auf die Website.",
    name: "Markus W.",
    role: "Elektro-Meisterbetrieb • Moosburg",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Markus&backgroundColor=2dd4bf",
  },
  {
    quote: "Ich war erstaunt, wie schnell die Abstimmung lief. Ein paar Kurznachrichten auf WhatsApp und der Entwurf stand. Wer eine moderne, schnelle Website sucht, ist hier genau richtig.",
    name: "Julia H.",
    role: "Fotostudio & Event-Design • Freising",
    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Julia&backgroundColor=f87171",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-transparent px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto">
        {/* Quote */}
        <div className="relative min-h-[180px] sm:min-h-[140px] md:min-h-[120px] mb-16 md:mb-20 flex items-center justify-center px-4 sm:px-8">
          {testimonials.map((t, i) => (
            <p
              key={i}
              className={`
                absolute inset-x-0 top-0 text-lg sm:text-xl md:text-2xl font-serif font-normal leading-relaxed text-slate-900 text-center
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  active === i
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-3 blur-sm pointer-events-none"
                }
              `}
            >
              "{t.quote}"
            </p>
          ))}
        </div>

        {/* Author Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-slate-200/80 max-w-xl mx-auto">
          {/* Colorful Cartoon Avatars */}
          <div className="flex -space-x-2 flex-wrap justify-center py-1 shrink-0">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={t.name}
                className={`
                  relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white bg-white shadow-xs
                  transition-all duration-300 ease-out cursor-pointer shrink-0
                  ${active === i ? "z-10 scale-110 ring-[#c9974a]" : "hover:scale-105 opacity-90 hover:opacity-100"}
                `}
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover bg-white" />
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-px bg-slate-200 shrink-0" />

          {/* Active Author Info */}
          <div className="relative min-w-[220px] sm:min-w-[260px] min-h-[48px] text-center sm:text-left shrink-0">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`
                  absolute inset-0 flex flex-col justify-center items-center sm:items-start whitespace-normal sm:whitespace-nowrap
                  transition-all duration-400 ease-out
                  ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
                `}
              >
                <span className="text-sm font-semibold text-slate-950 font-sans tracking-tight">{t.name}</span>
                <span className="text-xs text-slate-600 font-sans font-medium mt-0.5">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
