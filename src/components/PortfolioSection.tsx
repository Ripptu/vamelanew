import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Target, Lightbulb, TrendingUp } from 'lucide-react';

const PROJECTS = [
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
  }
];

export function PortfolioSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section className="py-20 bg-white text-slate-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          Unsere Projekte
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 h-[600px]"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className={`relative rounded-3xl overflow-hidden cursor-pointer focus-visible:ring-4 focus-visible:ring-primary focus-visible:outline-none ${expandedId === project.id ? 'flex-[3]' : 'flex-1'}`}
              onMouseEnter={() => setExpandedId(project.id)}
              onMouseLeave={() => setExpandedId(null)}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Projekt ${project.title} ansehen`}
              initial={false}
              animate={{ flex: expandedId === project.id ? 3 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                width="400"
                height="300"
                loading="lazy"
                className="w-full h-full object-cover"
                animate={{ filter: expandedId === project.id ? 'grayscale(0%)' : 'grayscale(100%)' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
              
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0 } }}
                    className="absolute bottom-0 left-0 p-8 text-white w-full max-w-[300px] overflow-hidden"
                  >
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full mb-2 inline-block whitespace-nowrap">{project.category}</span>
                    <h3 className="text-3xl font-bold mb-2 whitespace-nowrap">{project.title}</h3>
                    <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-sm font-bold mb-3">
                      <TrendingUp className="w-4 h-4" />
                      {project.metric}
                    </div>
                    <p className="text-slate-200 mb-4">{project.description}</p>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-2 rounded-full font-medium inline-block hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Website besuchen
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
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
              className="bg-white rounded-[2rem] p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden"
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
