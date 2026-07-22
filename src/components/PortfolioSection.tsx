import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, ArrowDown } from 'lucide-react';
import { sanitizeAlt } from '../lib/security';

const PROJECTS = [
// ... (keep existing projects)

  {
    id: 1,
    title: "Schlossallee Haag an der Amper",
    category: "Gastronomie",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260429_063505_6973451c-4c4e-4bc2-b643-ebfa0ea89241.png&w=1280&q=85",
    url: "https://schlossalleehaag.de",
    description: "Moderner digitaler Auftritt für den Traditionsbiergarten in Haag an der Amper.",
    challenge: "Digitale Präsenz modernisieren und mehr Gäste für den Biergarten anziehen.",
    solution: "Einladendes Design mit klarem Fokus auf das Erlebnis und einfache Kontaktaufnahme.",
    result: "Deutlich mehr Gäste und ein frischer, authentischer Markenauftritt.",
    metric: "Mehr Gäste"
  },
  {
    id: 2,
    title: "Thomas Rott",
    category: "Webdesign & Strategie",
    image: "https://i.postimg.cc/vTSJGqW9/hf-20260131-093208-fa0f1ac6-5829-4c3b-9fc1-0b801232456c.png",
    url: "https://thomasrott.de",
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
    url: "https://barnekow.netlify.app",
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
    url: "https://coremis.ch",
    description: "Performance-orientierte Web-Lösung für nachhaltiges Wachstum.",
    challenge: "Optimierung der Anfragenquote.",
    solution: "Fokus auf User-Experience und klare Call-to-Actions.",
    result: "Deutlich messbare Verbesserung der Anfragen-Qualität.",
    metric: "-60% Bounce-Rate"
  },
  {
    id: 5,
    title: "HanseTool",
    category: "Webdesign & Strategie",
    image: "https://i.postimg.cc/jSyF1dkF/modernes-webdesign-agentur-freising-hansetool-jpg.webp",
    url: "https://hansetool.de",
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
    metric: "+120% mehr Anfragen"
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
    metric: "Premium Kunden"
  }
];

export function PortfolioSection({ limit, showLinkToPage }: { limit?: number, showLinkToPage?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const displayedProjects = limit && !showAll ? PROJECTS.slice(0, limit) : (showAll ? PROJECTS : PROJECTS.slice(0, 4));

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
    <section className="bg-transparent text-slate-900 py-20 md:py-32 relative overflow-hidden" id="referenzen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight mb-4 md:mb-6"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.a 
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: isEven ? 0 : 0.15 }}
                className={`group block cursor-pointer flex flex-col gap-4 ${!isEven ? 'md:mt-10 lg:mt-16' : ''}`}
              >
                {/* Clean 16:9 Website Hero Preview Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-slate-300 transition-all duration-300 aspect-video w-full">
                  <img 
                    loading="lazy"  
                    decoding="async"
                    src={project.image} 
                    alt={sanitizeAlt(project.title)} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Live Website Viewport */}
                  <iframe
                    src={project.url}
                    title={sanitizeAlt(project.title)}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300 bg-white"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/15 transition-colors duration-300 pointer-events-none" />
                  
                  {/* Live Indicator Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-900 px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-sm flex items-center gap-1.5 z-10 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <div className="bg-slate-900 text-white px-4 py-2 rounded-full font-medium text-xs sm:text-sm flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      Website öffnen <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 gap-1 sm:gap-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                    </h3>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{project.category}</span>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base line-clamp-2">{project.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {showLinkToPage ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 flex justify-center"
          >
            <a
              href="/referenzen"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 hover:border-slate-900 text-slate-900 font-medium transition-all hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
            >
              Alle Referenzen ansehen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        ) : PROJECTS.length > (limit || 4) && (
          <motion.div 
            ref={buttonRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 flex justify-center"
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
    </section>
  );
}
