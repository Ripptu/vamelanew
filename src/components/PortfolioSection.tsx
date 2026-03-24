import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Target, Lightbulb, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';

const PROJECTS = [
// ... (keep existing projects)

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
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section className="bg-white text-slate-900 py-20 md:py-32 relative overflow-hidden" id="referenzen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-32 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight mb-4 md:mb-6"
          >
            Ausgewählte Arbeiten.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-2xl text-slate-500 font-light leading-relaxed"
          >
            Minimalistisch im Design, maximal in der Wirkung. Entdecken Sie Projekte, die Marken transformieren und messbare Ergebnisse liefern.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: isEven ? 0 : 0.2 }}
                className={`group cursor-pointer flex flex-col gap-4 md:gap-6 ${!isEven ? 'md:mt-32' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] sm:aspect-[4/5] md:aspect-[3/4]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Hover overlay with button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                    <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">{project.category}</span>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg line-clamp-2">{project.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {PROJECTS.length > 4 && (
          <motion.div 
            ref={buttonRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-32 flex justify-center"
          >
            <button
              onClick={handleToggleShowAll}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 hover:border-slate-900 text-slate-900 font-medium transition-all hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
            >
              {showAll ? 'Weniger anzeigen' : 'Mehr anzeigen'}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal for project details */}
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
              className="bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-8 max-w-5xl w-full flex flex-col md:flex-row gap-6 md:gap-12 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-3 right-3 md:top-6 md:right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none bg-white/90 backdrop-blur-sm shadow-sm"
                aria-label="Projekt Details schließen"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden bg-slate-100 aspect-video md:aspect-auto">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1 relative pt-2 md:pt-8 flex flex-col">
                <div className="mb-6 md:mb-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight pr-10">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="text-slate-600 font-medium bg-slate-100 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                      {selectedProject.metric}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6 md:space-y-8 flex-1">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-1.5 md:mb-2 uppercase tracking-wider text-xs md:text-sm">
                      <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" /> Challenge
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-1.5 md:mb-2 uppercase tracking-wider text-xs md:text-sm">
                      <Lightbulb className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" /> Solution
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-1.5 md:mb-2 uppercase tracking-wider text-xs md:text-sm">
                      <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" /> Result
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{selectedProject.result}</p>
                  </div>
                </div>
                
                <motion.a 
                  href={selectedProject.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 md:mt-12 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium w-full transition-colors shadow-lg shadow-slate-900/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none text-sm md:text-base"
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
