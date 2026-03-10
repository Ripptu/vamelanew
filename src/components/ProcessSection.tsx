import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      num: "1",
      title: "Positionierung und Branding",
      desc: "Hier entsteht die Basis einer starken Marktführer-Marke",
      bullets: ["Strategische Marktpositionierung", "Visuelle Identität & CI-Entwicklung", "Zielgruppen & Konkurrenzanalyse"],
      animation: "https://cdn.prod.website-files.com/69a30d3de5292c55dfacc6d2/69ac8f038978863631a0e9c9_Frame%202147239722.avif"
    },
    {
      num: "2",
      title: "Strategie und Copywriting",
      desc: "Sorgen für eine Webseite, die wirklich Anfragen generiert",
      bullets: ["Verkaufspsychologischer Aufbau", "Conversionoptimierte Texte", "Zielführende Nutzerführung"],
      animation: "https://cdn.prod.website-files.com/69a30d3de5292c55dfacc6d2/69ac912b04959af6636f00a3_aa.avif"
    },
    {
      num: "3",
      title: "High-End Webdesign",
      desc: "Baut Vertrauen auf und macht dich unvergleichbar",
      bullets: ["Weltklasse Visualisierungen", "Ein Gesamtbild das sofort Eindruck hinterlässt", "Designed um Kunden zu gewinnen"],
      animation: "https://cdn.prod.website-files.com/69a30d3de5292c55dfacc6d2/69ac91443954ec50f27ee307_ssss.avif"
    },
    {
      num: "4",
      title: "Webflow Entwicklung & Launch",
      desc: "Deine Webseite läuft auf der Nr. 1 Webseiten-Plattform",
      bullets: ["Blitzschnelle Ladezeiten", "Perfekt um auf Google gefunden zu werden", "Atemberaubende Animationen"],
      animation: "https://cdn.prod.website-files.com/69a30d3de5292c55dfacc6d2/69ac91a15d07945e1fea4711_Frame%202147239858.avif"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          In 4 Schritten zur<br/><span className="font-serif italic text-primary font-normal">Marktführer Positionierung</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Unser einzigartiger Prozess, um Tag für Tag neue Marktführer Marken mit hochkonvertierenden Online Auftritten zu erschaffen
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-2 bg-slate-100 rounded-full">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-primary rounded-full"
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          ></motion.div>
        </div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="relative pl-20"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0.3 }}
              viewport={{ amount: 0.5, margin: "-50% 0px -50% 0px" }}
            >
              {/* Dot */}
              <div className="absolute left-3.5 top-2 w-7 h-7 rounded-full border-4 border-white shadow-sm bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="text-6xl font-bold text-slate-200 mb-2 font-serif">{step.num}</div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-500 mb-6 text-sm">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                {step.animation && (
                  <div className="hidden md:block flex-1">
                    <img src={step.animation} alt={step.title} className="w-full h-auto rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

