import { motion } from 'motion/react';

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
          Warum klassisches Webdesign <span className="font-serif italic text-primary font-normal">oft frustrierend ist</span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg">
          Eine professionelle Webseite ist wichtig, aber der Weg dorthin ist oft steinig. Das sind die drei größten Probleme bei traditionellen Webdesignern:
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
        >
          <div className="h-44 md:h-52 bg-slate-50/80 rounded-2xl mb-6 md:mb-8 border border-slate-200/80 p-4 relative overflow-hidden flex items-center justify-center">
            {/* Dots background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#c9974a 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
            
            {/* Animated Browser Window Mockup */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[210px] bg-white rounded-t-xl border border-slate-200/90 h-full translate-y-3 relative z-10 p-3.5 shadow-sm group-hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1.5 mb-3 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-red-400/80" />
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>
              <div className="space-y-2.5">
                <motion.div 
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="h-2.5 bg-slate-200 rounded-full w-3/4" 
                />
                <div className="h-16 bg-slate-100 rounded-lg w-full flex items-center justify-center border border-slate-200/50 relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  />
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="h-2 bg-slate-200 rounded-full w-1/2" />
              </div>
            </motion.div>

            {/* Floating Floating Question Marks */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [-12, -6, -12] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl font-serif text-[#c9974a] font-bold opacity-30 absolute bottom-3 left-4 pointer-events-none select-none"
            >
              €
            </motion.div>
            <motion.div 
              animate={{ y: [0, 8, 0], rotate: [12, 18, 12] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-3xl font-serif text-slate-400 font-bold opacity-25 absolute top-6 right-6 pointer-events-none select-none"
            >
              ?
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2.5 text-slate-950">Hohe Einmalkosten</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Professionelle Webseiten kosten oft hunderte bis tausende Euro auf einen Schlag. Ein großes finanzielles Risiko, besonders für wachsende Unternehmen.
            </p>
          </div>
        </motion.article>

        {/* Card 2 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
        >
          <div className="h-44 md:h-52 bg-slate-50/80 rounded-2xl mb-6 md:mb-8 border border-slate-200/80 p-4 relative overflow-hidden flex items-center justify-center gap-3">
            {/* Dots background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#c9974a 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
            
            {/* Card "Deine Webseite" - Animated Elevating */}
            <motion.div 
              animate={{ y: [-2, 4, -2] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-36 bg-white rounded-xl border border-slate-200/90 relative z-10 -rotate-3 p-2.5 shadow-md group-hover:border-[#c9974a]/60 transition-colors"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1c1712] text-white text-[9px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap z-20 shadow-xs flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                <span>Deine Seite</span>
              </div>
              <div className="h-2 bg-slate-200 rounded w-3/4 mb-2 mt-2" />
              <div className="h-12 bg-slate-100 rounded-md w-full mb-2 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                Platz #1
              </div>
              <div className="h-2 bg-emerald-500/80 rounded w-full mb-1" />
              <div className="h-2 bg-slate-200 rounded w-2/3" />
            </motion.div>

            {/* Card "Andere Webseiten" */}
            <motion.div 
              animate={{ y: [4, -2, 4] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-36 bg-slate-100/90 rounded-xl border border-slate-200/70 relative z-0 rotate-6 p-2.5 opacity-60 group-hover:opacity-40 transition-opacity"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-500 text-white text-[9px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap z-20">
                Andere
              </div>
              <div className="h-2 bg-slate-200 rounded w-3/4 mb-2 mt-2" />
              <div className="h-12 bg-slate-200/60 rounded-md w-full mb-2" />
              <div className="h-2 bg-slate-200 rounded w-full mb-1" />
              <div className="h-2 bg-slate-200 rounded w-2/3" />
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2.5 text-slate-950">Keine lokale Sichtbarkeit</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Viele Webseiten sehen zwar okay aus, werden aber bei Google und in neuen KI-Suchen (wie ChatGPT) nicht gefunden. Du verlierst Neukunden an die Konkurrenz.
            </p>
          </div>
        </motion.article>

        {/* Card 3 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
        >
          <div className="h-44 md:h-52 bg-slate-50/80 rounded-2xl mb-6 md:mb-8 border border-slate-200/80 p-4 relative overflow-hidden flex items-center justify-center gap-3">
            {/* Dots background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#c9974a 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
            
            {/* Connecting line with animated pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-slate-200 z-0">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-0.5 bg-[#c9974a]"
              />
            </div>

            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center z-10"
            >
              <span className="w-8 h-8 rounded-xl bg-[#1c1712] flex items-center justify-center text-white font-serif italic text-base">V</span>
            </motion.div>
            
            <div className="w-7 h-7 rounded-full bg-slate-200/80 text-slate-700 flex items-center justify-center font-bold z-10 text-xs shadow-xs">
              ≠
            </div>
            
            <motion.div 
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center z-10"
            >
              <div className="w-6 h-6 bg-slate-100 rounded-md rotate-45 flex items-center justify-center border border-slate-200">
                <div className="w-2 h-2 bg-slate-400 rounded-full" />
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2.5 text-slate-950">Versteckter Aufwand</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hosting, Updates, kleine Textänderungen – alles kostet Zeit und Nerven. Du bist ständig selbst gefragt, anstatt dich auf dein Kerngeschäft zu konzentrieren.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

