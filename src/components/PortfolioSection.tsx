import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, ArrowDown } from 'lucide-react';
import { sanitizeAlt } from '../lib/security';

const PROJECTS = [
  {
    id: 1,
    title: "Thomas Rott",
    category: "Webdesign & Strategie",
    image: "https://s1.directupload.eu/images/260724/68a7abrm.webp",
    url: "https://thomasrott.de",
    description: "Exklusive digitale Positionierung & Strategie für vertrauensbildende Kundenansprache.",
    challenge: "Komplexe Dienstleistungen einfach und überzeugend darstellen.",
    solution: "Klares Design-System und strukturierte Informationsarchitektur.",
    result: "Höhere Vertrauensbildung bei potenziellen Kunden.",
    metric: "Ladezeit 0.8s"
  },
  {
    id: 2,
    title: "Schlossallee Haag",
    category: "Gastronomie & Erlebnis",
    image: "https://s1.directupload.eu/images/260724/g5azivcd.webp",
    url: "https://schlossalleehaag.de",
    description: "Zeitloser Auftritt für den Traditionsbiergarten in Haag an der Amper.",
    challenge: "Digitale Präsenz modernisieren und mehr Gäste für den Biergarten anziehen.",
    solution: "Einladendes Design mit klarem Fokus auf das Erlebnis und einfache Kontaktaufnahme.",
    result: "Deutlich mehr Gäste und ein frischer, authentischer Markenauftritt.",
    metric: "High Conversion"
  },
  {
    id: 3,
    title: "Barber Moosburg",
    category: "Beauty & Lifestyle",
    image: "https://s1.directupload.eu/images/260724/8qnz7vjs.webp",
    url: "https://barbermoosburg.netlify.app",
    description: "Maskuline Ästhetik trifft auf automatisierte, idiotensichere Terminbuchung.",
    challenge: "Das analoge Erlebnis digitalisieren und den manuellen Buchungsaufwand drastisch reduzieren.",
    solution: "Ein stilvolles Design mit nahtlos integrierter Online-Terminbuchung.",
    result: "Dauerhaft ausgebuchter Kalender und massive Zeitersparnis.",
    metric: "100% Automatisierung"
  },
  {
    id: 4,
    title: "Glanzlicht",
    category: "Fahrzeugpflege & Detailing",
    image: "https://s1.directupload.eu/images/260724/kjfafi6d.webp",
    url: "https://glanzlicht.netlify.app",
    description: "High-End Fahrzeugpflege & Veredelung im exklusiven Markenauftritt.",
    challenge: "Anspruchsvolle Kunden gewinnen und die hohe Detailqualität erlebbar machen.",
    solution: "Minimalistisches, edles UI mit Vorher-Nachher Fokus und schnellen Anfrage-Wegen.",
    result: "Kontinuierlicher Zufluss von hochkarätigen Fahrzeug-Projekten.",
    metric: "Premium Anfragen"
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
    <section className="bg-transparent text-slate-900 py-16 md:py-28 relative overflow-hidden" id="referenzen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-400 mb-3 block">
              Portfolio & Ergebnisse
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-slate-950">
              Ausgewählte <span className="font-serif italic font-normal text-primary">Arbeiten</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Durchdachtes Design, kompromisslose Performance und messbarer Geschäftserfolg. Keine Vorlagen, sondern maßgeschneiderte Lösungen.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col space-y-20 md:space-y-32">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            const projectNum = String(index + 1).padStart(2, '0');

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="w-full border-b border-slate-200/80 pb-16 md:pb-24 last:border-b-0 last:pb-0"
              >
                {/* Full-width Split Section Layout */}
                <div className={`flex flex-col ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8 lg:gap-16 w-full`}>
                  
                  {/* Portrait Website Frame - Full-Width Responsive Canvas with Lightened Layer that clears on hover */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full lg:w-[58%] flex flex-col rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-xs hover:shadow-2xl hover:border-slate-400 transition-all duration-700 shrink-0 select-none"
                  >
                    {/* Clean Browser Bar without URL */}
                    <div className="bg-slate-100/90 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs font-mono font-normal text-slate-500">
                        <span>LIVE PREVIEW</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                      </div>
                    </div>

                    {/* Portrait Frame (3:4 Ratio) with Lightened Overlay fading to clear on hover */}
                    <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] bg-slate-100 overflow-hidden">
                      <img 
                        loading="lazy"  
                        decoding="async"
                        src={project.image} 
                        alt={sanitizeAlt(project.title)} 
                        className="block w-full h-full object-cover object-top transition-[object-position] duration-[18s] ease-in-out group-hover:object-bottom cursor-pointer"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Lightened overlay on rest state -> dissolves completely on hover/active */}
                      <div className="absolute inset-0 bg-white/35 group-hover:bg-transparent group-active:bg-transparent transition-colors duration-700 pointer-events-none" />

                      {/* Floating Indicator */}
                      <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-normal px-3 py-1.5 rounded-full border border-white/10 opacity-90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none flex items-center gap-2 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Hover für Vollansicht</span>
                      </div>
                    </div>
                  </a>

                  {/* Editorial Text Content (No bold, no gold, clean typography) */}
                  <div className="w-full lg:w-[42%] flex flex-col justify-between py-2">
                    <div>
                      {/* Number & Category */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs tracking-widest text-slate-400 font-normal">
                          {projectNum}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs uppercase tracking-widest font-normal text-slate-500">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-950 mb-4 font-serif">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Metric Tag - Minimalist */}
                      {project.metric && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-normal mb-6 border border-slate-200/80">
                          <span className="text-slate-400">✦</span>
                          <span>{project.metric}</span>
                        </div>
                      )}

                      {/* Challenge & Result Breakdown */}
                      <div className="space-y-4 py-5 border-y border-slate-200/80 mb-8 text-sm">
                        <div>
                          <span className="text-slate-400 font-normal uppercase text-[11px] tracking-wider block mb-1">Fokus & Herausforderung</span>
                          <span className="text-slate-700 font-normal leading-relaxed block">{project.challenge}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-normal uppercase text-[11px] tracking-wider block mb-1">Ergebnis</span>
                          <span className="text-slate-900 font-normal leading-relaxed block">{project.result}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-sm sm:text-base font-normal text-slate-900 hover:text-slate-600 transition-colors group/link"
                      >
                        <span>Website Live ansehen</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 text-slate-400 group-hover/link:text-slate-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {showLinkToPage ? (
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <Link
              to="/referenzen"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-900 text-slate-900 font-medium text-sm transition-all hover:bg-slate-900 hover:text-white shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
            >
              <span>Alle Referenzen ansehen</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ) : PROJECTS.length > (limit || 4) && (
          <motion.div 
            ref={buttonRef}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <button
              onClick={handleToggleShowAll}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-900 text-slate-900 font-medium text-sm transition-all hover:bg-slate-900 hover:text-white shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
            >
              <span>{showAll ? 'Weniger anzeigen' : 'Mehr Referenzen laden'}</span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
