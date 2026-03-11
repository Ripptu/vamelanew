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
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          In 4 Schritten zur<br/><span className="font-serif italic text-primary font-normal">Marktführer Positionierung</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Unser einzigartiger Prozess, um Tag für Tag neue Marktführer Marken mit hochkonvertierenden Online Auftritten zu erschaffen
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line Track */}
        <div className="absolute left-[25px] top-8 bottom-8 w-1.5 bg-slate-100 rounded-full">
          {/* Animated Gradient Beam */}
          <motion.div 
            className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-indigo-300 via-primary to-primary"
            style={{ 
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              boxShadow: "0 0 20px 2px rgba(37, 99, 235, 0.3)"
            }}
          >
            {/* Leading Spark/Comet */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-t from-white to-transparent rounded-full blur-[3px] opacity-80"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-6 bg-white rounded-full shadow-[0_0_15px_5px_rgba(96,165,250,0.9)]"></div>
          </motion.div>
        </div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="relative pl-20"
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: { opacity: 0.3, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
            >
              {/* Dot */}
              <div className="absolute left-[13px] top-2 w-8 h-8 rounded-full border-4 border-white shadow-sm bg-white flex items-center justify-center z-10">
                <motion.div 
                  variants={{
                    hidden: { backgroundColor: "#e2e8f0", scale: 0.8, boxShadow: "0 0 0px 0px rgba(37, 99, 235, 0)" },
                    visible: { 
                      backgroundColor: "#2563EB", 
                      scale: [1, 1.2, 1], 
                      boxShadow: ["0 0 0px 0px rgba(37, 99, 235, 0.4)", "0 0 15px 6px rgba(37, 99, 235, 0.3)", "0 0 0px 0px rgba(37, 99, 235, 0.4)"]
                    }
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-3 h-3 rounded-full relative"
                >
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.5 },
                      visible: { opacity: [0.8, 0], scale: [1, 3] }
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                </motion.div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="text-6xl font-bold text-slate-200 mb-2 font-serif">{step.num}</div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-500 mb-6 text-sm">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.bullets.map((bullet, j) => (
                      <motion.li 
                        key={j} 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                {step.animation && (
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="hidden md:block flex-1 relative group"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img src={step.animation} alt={step.title} className="w-full h-auto rounded-2xl shadow-lg border border-slate-100 relative z-10" referrerPolicy="no-referrer" loading="lazy" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

