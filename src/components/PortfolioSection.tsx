import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { CardStack } from './ui/card-stack';

const PROJECTS = [
// ... (keep existing projects)
// (I will need to keep the full PROJECTS array, let me re-read the file to make sure I don't delete it)

  {
    id: 1,
    title: "Vamela",
    category: "Webdesign & Strategie",
    image: "https://i.postimg.cc/Y2xzGLL0/hf-20260131-102458-7dbca7c3-0d46-45fc-87db-c75ff3479c84.jpg",
    url: "http://vamela.info",
    description: "Modernste B2B-Webseite mit Fokus auf Conversion und Markenautorität.",
    challenge: "Etablierung als Marktführer durch ein Premium-Design.",
    solution: "Entwicklung einer Flaggschiff-Webseite mit verkaufspsychologischer Copy.",
    result: "Signifikante Steigerung der qualifizierten Anfragen.",
    metric: "+45% Conversion-Rate"
  },
  {
    id: 2,
    title: "Thomas Rott",
    category: "Webdesign & Strategie",
    image: "https://i.postimg.cc/vTSJGqW9/hf-20260131-093208-fa0f1ac6-5829-4c3b-9fc1-0b801232456c.png",
    url: "http://thomasrott.de",
    description: "Professionelle Präsenz für Experten-Positionierung.",
    challenge: "Komplexe Dienstleistungen einfach und überzeugend darstellen.",
    solution: "Klares Design-System und strukturierte Informationsarchitektur.",
    result: "Höhere Vertrauensbildung bei potenziellen Kunden.",
    metric: "Ladezeit 4s → 0.8s"
  },
  {
    id: 3,
    title: "Barnekow",
    category: "Webdesign & Strategie",
    image: "https://i.postimg.cc/GhhJk3vG/hf-20260131-102337-33acfd6c-14c7-4fc7-b0f6-c1094684ea64.png",
    url: "http://barnekow.netlify.app",
    description: "Ästhetisches und funktionales Webdesign für maximale Wirkung.",
    challenge: "Modernisierung des Markenauftritts.",
    solution: "Implementierung eines zeitgemäßen, minimalistischen Designs.",
    result: "Verbesserte Markenwahrnehmung und Nutzererfahrung.",
    metric: "+120% mehr Anfragen"
  },
  {
    id: 4,
    title: "Coremis",
    category: "Webdesign & Strategie",
    image: "https://i.postimg.cc/2yXsCc4n/hf-20260131-093913-af8f4bc9-28b7-4f75-9907-cd0653e7ca30.png",
    url: "http://coremis.ch",
    description: "Performance-orientierte Web-Lösung für nachhaltiges Wachstum.",
    challenge: "Optimierung der Conversion-Rate.",
    solution: "Fokus auf User-Experience und klare Call-to-Actions.",
    result: "Deutlich messbare Verbesserung der Lead-Qualität.",
    metric: "-60% Bounce-Rate"
  },
  {
    id: 5,
    title: "HanseTool",
    category: "Webdesign & Strategie",
    image: "https://i.postimg.cc/jSyF1dkF/modernes-webdesign-agentur-freising-hansetool-jpg.webp",
    url: "http://hansetool.de",
    description: "Technisch exzellente Webseite für industrielle Anforderungen.",
    challenge: "Komplexe Produktpalette übersichtlich präsentieren.",
    solution: "Intuitive Navigation und performante technische Umsetzung.",
    result: "Effizientere Kundenberatung durch digitale Unterstützung.",
    metric: "+85% Sichtbarkeit"
  },
  {
    id: 6,
    title: "CasaDellaPizzaAlma",
    category: "Gastronomie",
    image: "https://s1.directupload.eu/images/260318/86dpqpo3.webp",
    url: "https://CasaDellaPizzaAlma.netlify.app",
    description: "Ein digitaler Auftritt, der Appetit macht. Authentische italienische Handwerkskunst trifft auf moderne User Experience.",
    challenge: "Lokale Sichtbarkeit in einem stark umkämpften Markt aufbauen und den Bestellprozess vereinfachen.",
    solution: "Verkaufspsychologisch optimiertes Design mit nahtlos integrierter Speisekarte und One-Click-Kontakt.",
    result: "Spürbarer Anstieg der Tischreservierungen und eine Verdopplung der Online-Sichtbarkeit.",
    metric: "+85% Reservierungen"
  },
  {
    id: 7,
    title: "MGO Köln",
    category: "Entertainment",
    image: "https://s1.directupload.eu/images/260318/xjmlo6ep.webp",
    url: "https://mgokoeln.netlify.app",
    description: "Die digitale Wiederbelebung eines Retro-Kino-Klassikers. Ein nostalgisches Erlebnis, übersetzt in modernes Webdesign.",
    challenge: "Den einzigartigen Vintage-Charme bewahren, ohne Kompromisse bei der Performance einzugehen.",
    solution: "Ein immersives UI-Design, das Emotionen weckt und die Ticketbuchung extrem vereinfacht.",
    result: "Ausverkaufte Vorstellungen und eine stark wachsende, loyale Community.",
    metric: "Kult-Status erreicht"
  },
  {
    id: 8,
    title: "CareMatch",
    category: "Vermittlungsplattform",
    image: "https://s1.directupload.eu/images/260318/bcot8hg3.webp",
    url: "https://wirsindfuersieda.netlify.app/",
    description: "Eine Plattform mit Herz und Verstand. Die smarte Verbindung zwischen engagierten Studenten und pflegebedürftigen Senioren.",
    challenge: "Maximales Vertrauen bei zwei völlig unterschiedlichen demografischen Zielgruppen aufbauen.",
    solution: "Ein barrierefreies, empathisches Design mit einem reibungslosen, intuitiven Onboarding-Prozess.",
    result: "Hunderte erfolgreiche Vermittlungen und herausragendes Nutzer-Feedback.",
    metric: "Hoher Social Impact"
  },
  {
    id: 9,
    title: "Crank Facility",
    category: "Dienstleistung",
    image: "https://s1.directupload.eu/images/260318/yw9fb88s.webp",
    url: "https://crank-facility-management.de/",
    description: "Kompromisslose Professionalität im Facility Management. Ein Webauftritt, der sofortige Zuverlässigkeit ausstrahlt.",
    challenge: "Komplexe Dienstleistungen für B2B- und B2C-Kunden übersichtlich und überzeugend darstellen.",
    solution: "Klare Informationsarchitektur, starke Trust-Elemente und extrem kurze Wege zur Kontaktaufnahme.",
    result: "Ein kontinuierlicher, automatisierter Strom an hochqualifizierten Kundenanfragen.",
    metric: "+120% Lead-Volumen"
  },
  {
    id: 10,
    title: "Private Power Files",
    category: "Personal Branding",
    image: "https://s1.directupload.eu/images/260318/zenn9xiv.webp",
    url: "https://privatepowerfiles.com/",
    description: "Die ultimative digitale Visitenkarte für Creator. Ein Premium-Portfolio für YouTuber und Podcaster.",
    challenge: "Vielschichtige Content-Formate und Persönlichkeiten in einem zentralen Hub bündeln.",
    solution: "Ein dynamisches, medienzentriertes Layout, das die Personal Brand ins absolute Zentrum rückt.",
    result: "Professionelleres Auftreten gegenüber Sponsoren und lukrativere Brand-Deals.",
    metric: "Creator Growth"
  },
  {
    id: 11,
    title: "KryptoKompass",
    category: "E-Learning",
    image: "https://s1.directupload.eu/images/260318/kb6ul26n.webp",
    url: "https://kkompass.netlify.app/",
    description: "Der sichere Hafen im Web3. Eine interaktive E-Learning-Plattform, die Krypto-Wissen seriös und verständlich macht.",
    challenge: "Komplexe, oft misstrauisch beäugte Finanzthemen absolut vertrauenswürdig vermitteln.",
    solution: "Ein cleanes, autoritäres UI-Design kombiniert mit didaktisch perfekt strukturierten Lernpfaden.",
    result: "Exponentiell wachsende Nutzerzahlen und eine extrem hohe Kurs-Abschlussrate.",
    metric: "Marktführerschaft"
  },
  {
    id: 12,
    title: "Barbershop",
    category: "Beauty & Lifestyle",
    image: "https://s1.directupload.eu/images/260318/52tsr8ur.webp",
    url: "https://barbermoosburg.netlify.app/",
    description: "Maskuline Eleganz trifft auf digitale Effizienz. Ein Webauftritt, der den Vibe des Barbershops perfekt einfängt.",
    challenge: "Das analoge Erlebnis digitalisieren und den manuellen Buchungsaufwand drastisch reduzieren.",
    solution: "Ein dunkles, stilvolles Design mit einer nahtlos integrierten, idiotensicheren Online-Terminbuchung.",
    result: "Ein dauerhaft ausgebuchter Kalender und massive Zeitersparnis durch weniger Anrufe.",
    metric: "100% Automatisierung"
  },
  {
    id: 13,
    title: "LDR Racing",
    category: "Sport & Action",
    image: "https://s1.directupload.eu/images/260318/eswpef6m.webp",
    url: "https://lucasdonato.netlify.app/",
    description: "Pures Adrenalin in Pixeln. Eine High-Performance-Website für ein professionelles Go-Kart Racing Team.",
    challenge: "Die Geschwindigkeit, Leidenschaft und Professionalität des Teams visuell spürbar machen.",
    solution: "Ein dynamisches Layout mit starken Kontrasten, schnellen Animationen und packendem Storytelling.",
    result: "Deutlich gesteigertes Interesse von Sponsoren und ein massiver Boost im Fan-Engagement.",
    metric: "High Performance"
  },
  {
    id: 14,
    title: "Kleeberger",
    category: "Handwerk",
    image: "https://s1.directupload.eu/images/260318/xwtxsaxj.webp",
    url: "https://kleeb.netlify.app/",
    description: "Handwerkliche Meisterleistung, digital übersetzt. Ein Sanierungsunternehmen positioniert sich als Premium-Anbieter.",
    challenge: "Sich vom Wettbewerb abheben und die hohe Qualität der Arbeit digital beweisen.",
    solution: "Ein vertrauensbildendes Design mit beeindruckenden Vorher-Nachher-Galerien und klarem Fokus auf Expertise.",
    result: "Weniger Preiskämpfe und deutlich mehr Anfragen für lukrative Großprojekte.",
    metric: "Premium Leads"
  }
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section className="bg-slate-50 text-slate-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Unsere Projekte
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Eine Auswahl unserer Arbeiten. Klick auf ein Projekt für Details.
          </p>
        </div>
        <div className="mx-auto w-full max-w-5xl flex justify-center mt-12">
          <CardStack
            items={PROJECTS.map(p => ({
              id: p.id,
              title: p.title,
              description: p.description,
              imageSrc: p.image,
              href: p.url,
              project: p
            }))}
            initialIndex={0}
            autoAdvance
            intervalMs={2500}
            pauseOnHover
            showDots
            renderCard={(item, { active }) => (
              <div className="relative h-full w-full group">
                <div className="absolute inset-0">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <div className="truncate text-2xl font-bold text-white mb-1">
                    {item.title}
                  </div>
                  <div className="mt-1 line-clamp-2 text-sm text-white/80 mb-4">
                    {item.description}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(item.project);
                    }}
                    className={`bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full text-sm font-medium w-fit transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                  >
                    Details ansehen
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2rem] p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Projekt Details schließen"
              >
                <X className="w-5 h-5" />
              </button>

              <img src={selectedProject.image} alt={selectedProject.title} width="800" height="600" className="w-full md:w-1/2 rounded-2xl object-cover shadow-sm" referrerPolicy="no-referrer" />
              <div className="flex-1 relative pt-4 md:pt-0">
                <h2 className="text-4xl font-bold mb-2 tracking-tight">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-primary font-medium bg-primary/5 px-3 py-1 rounded-full text-sm">{selectedProject.category}</span>
                  <span className="text-green-600 font-bold bg-green-50 border border-green-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {selectedProject.metric}
                  </span>
                </div>
                
                <div className="space-y-6">
                  <motion.div whileHover={{ x: 5 }} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-transform">
                    <Target className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Challenge</h4>
                      <p className="text-slate-600 text-sm">{selectedProject.challenge}</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-transform">
                    <Lightbulb className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Solution</h4>
                      <p className="text-slate-600 text-sm">{selectedProject.solution}</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20 transition-transform">
                    <TrendingUp className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-hover">Result</h4>
                      <p className="text-primary-hover text-sm">{selectedProject.result}</p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.a 
                  href={selectedProject.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium w-full transition-colors shadow-lg shadow-primary/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  Live Webseite ansehen <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
