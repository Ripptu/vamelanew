import { CheckCircle2, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
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
    },
    {
      num: "5",
      title: "All-Inclusive Betreuung",
      desc: "Wir kümmern uns um alles, damit du dich auf dein Geschäft konzentrieren kannst",
      bullets: ["Premium Hosting inklusive", "Regelmäßige Sicherheits-Updates", "Kleine Anpassungen auf Zuruf"],
      animation: "https://s1.directupload.eu/images/260320/mgj4ozbw.webp"
    }
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
          In 4 Schritten zum<br/><span className="font-serif italic text-primary font-normal">perfekten digitalen Auftritt</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          Unser bewährter Prozess, um Tag für Tag beeindruckende Marken mit hochkonvertierenden Online-Auftritten zu erschaffen.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line Track */}
        <div className="absolute left-[19px] md:left-[25px] top-8 bottom-8 w-1.5 bg-slate-100 rounded-full overflow-visible">
          {/* Outer Glow (Wider) */}
          <motion.div 
            className="absolute top-0 left-[-4px] w-[calc(100%+8px)] rounded-full bg-primary/20 blur-[6px]"
            style={{ 
              height: useTransform(smoothProgress, [0, 1], ["0%", "100%"])
            }}
          />

          {/* Animated Gradient Beam */}
          <motion.div 
            className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-primary/40 via-primary to-primary shadow-[0_0_20px_rgba(59,130,246,0.6)] z-10"
            style={{ 
              height: useTransform(smoothProgress, [0, 1], ["0%", "100%"])
            }}
          >
            {/* Leading Spark/Comet - Premium Glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-8 h-32 bg-gradient-to-t from-primary via-primary/30 to-transparent rounded-full blur-[12px] opacity-70"></div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-t from-white via-primary to-transparent rounded-full blur-[4px]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff] z-20">
              {/* Extra Sparkle Icon at the tip */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -left-1 text-white opacity-80"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            </div>
            
            {/* Pulsing Glow Effect */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-white blur-[2px] opacity-20 rounded-full"
            />
          </motion.div>

          {/* Subtle Particles following the head */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 w-1 h-1 bg-primary rounded-full blur-[1px] z-0"
              style={{
                top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                x: "-50%",
              }}
              animate={{
                y: [0, 20 + i * 10],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                x: ["-50%", `${(i - 1) * 15}%`]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <motion.article 
              key={i} 
              className="relative pl-14 md:pl-20"
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
              <div className="absolute left-[7px] md:left-[13px] top-2 w-8 h-8 rounded-full border-4 border-white bg-white flex items-center justify-center z-10">
                <motion.div 
                  variants={{
                    hidden: { backgroundColor: "#e2e8f0", scale: 0.8 },
                    visible: { 
                      backgroundColor: "#3B82F6", 
                      scale: [1, 1.2, 1]
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
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                <div className="flex-1">
                  <div className="text-5xl md:text-6xl font-bold text-slate-200 mb-1 md:mb-2 font-serif leading-none">{step.num}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-500 mb-4 md:mb-6 text-sm">{step.desc}</p>
                  <ul className="space-y-2 md:space-y-3">
                    {step.bullets.map((bullet, j) => (
                      <motion.li 
                        key={j} 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm font-medium text-slate-500"
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
                    className="flex-1 relative group mt-6 md:mt-0 w-full"
                  >
                    <img src={step.animation} alt={step.title} width="600" height="400" className="w-full h-auto rounded-2xl border border-slate-200 relative z-10" referrerPolicy="no-referrer" loading="lazy" />
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

