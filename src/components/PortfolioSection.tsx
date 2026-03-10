import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Target, Lightbulb, TrendingUp } from 'lucide-react';

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
    result: "Signifikante Steigerung der qualifizierten Anfragen."
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
    result: "Höhere Vertrauensbildung bei potenziellen Kunden."
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
    result: "Verbesserte Markenwahrnehmung und Nutzererfahrung."
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
    result: "Deutlich messbare Verbesserung der Lead-Qualität."
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
    result: "Effizientere Kundenberatung durch digitale Unterstützung."
  }
];

export function PortfolioSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section className="py-20 bg-white text-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Unsere Projekte</h2>
        
        <div className="flex flex-col md:flex-row gap-4 h-[600px]">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className={`relative rounded-3xl overflow-hidden cursor-pointer ${expandedId === project.id ? 'flex-[3]' : 'flex-1'}`}
              onMouseEnter={() => setExpandedId(project.id)}
              onMouseLeave={() => setExpandedId(null)}
              onClick={() => setSelectedProject(project)}
              initial={false}
              animate={{ flex: expandedId === project.id ? 3 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
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
                    <p className="text-slate-200 mb-4">{project.description}</p>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-2 rounded-full font-medium inline-block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Website besuchen
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full md:w-1/2 rounded-2xl object-cover" referrerPolicy="no-referrer" />
              <div className="flex-1 relative">
                <button onClick={() => setSelectedProject(null)} className="absolute top-0 right-0 text-slate-900"><X /></button>
                <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                <span className="text-primary font-medium mb-6 block">{selectedProject.category}</span>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Target className="text-primary" />
                    <div>
                      <h4 className="font-bold">Challenge</h4>
                      <p className="text-slate-600 text-sm">{selectedProject.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lightbulb className="text-primary" />
                    <div>
                      <h4 className="font-bold">Solution</h4>
                      <p className="text-slate-600 text-sm">{selectedProject.solution}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <TrendingUp className="text-primary" />
                    <div>
                      <h4 className="font-bold text-green-600">Result</h4>
                      <p className="text-slate-600 text-sm">{selectedProject.result}</p>
                    </div>
                  </div>
                </div>
                
                <a href={selectedProject.url} className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium">
                  Live Webseite ansehen <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
