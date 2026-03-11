import { motion } from 'motion/react';

export function ProblemSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Das Problem mit <span className="font-serif italic text-primary font-normal">normalen Webseiten</span>
        </h2>
        <p className="text-slate-500 text-lg">
          In 2026 wird jedes Unternehmen geprüft und verglichen, bevor es eine Chance bekommt. Deine Webseite ist das Erste, was sie sehen — <span className="italic">Make it count.</span>
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-shadow hover:shadow-xl"
        >
          <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-8 border border-indigo-100/50 p-4 relative overflow-hidden flex items-center justify-center">
            {/* Dots background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
            
            <div className="w-full max-w-[200px] bg-white rounded-t-xl border border-slate-200 shadow-sm h-full translate-y-4 relative z-10 p-3">
              <div className="flex gap-1 mb-3 border-b border-slate-100 pb-2">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-3 opacity-50">
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                <div className="h-16 bg-slate-200 rounded w-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent flex items-end justify-center pb-4 z-20">
              <div className="text-6xl font-serif text-slate-300 font-bold opacity-50 absolute bottom-4 left-4 -rotate-12">?</div>
              <div className="text-4xl font-serif text-slate-400 font-bold opacity-30 absolute top-8 right-8 rotate-12">?</div>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">Fehlendes Vertrauen</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            In einer Zeit in der jeder ein Unternehmen starten kann, ist Vertrauen die wertvollste Währung. Eine unseriöse Webseite ist der Vertrauens-Killer Nr. 1.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-shadow hover:shadow-xl"
        >
          <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-8 border border-indigo-100/50 p-4 relative overflow-hidden flex items-center justify-center gap-2">
            {/* Dots background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
            
            <div className="w-28 h-36 bg-white rounded-lg border border-slate-200 shadow-md relative z-10 -rotate-6 translate-y-2 p-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] px-2 py-0.5 rounded-full whitespace-nowrap z-20">Deine Webseite</div>
              <div className="h-2 bg-slate-200 rounded w-3/4 mb-2 mt-2"></div>
              <div className="h-12 bg-slate-100 rounded w-full mb-2"></div>
              <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-slate-200 rounded w-2/3"></div>
            </div>
            <div className="w-28 h-36 bg-white rounded-lg border border-slate-200 shadow-sm relative z-0 rotate-6 -translate-y-2 p-2 opacity-80">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-[8px] px-2 py-0.5 rounded-full whitespace-nowrap z-20">Andere Webseiten</div>
              <div className="h-2 bg-slate-200 rounded w-3/4 mb-2 mt-2"></div>
              <div className="h-12 bg-slate-100 rounded w-full mb-2"></div>
              <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-slate-200 rounded w-2/3"></div>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">Du bist vergleichbar</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            0815 Baukasten-Seiten lassen dich wie "einer von vielen" wirken. Dadurch wird dein Vertrieb unnötig erschwert und du gewinnst weniger Kunden.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-shadow hover:shadow-xl"
        >
          <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-8 border border-indigo-100/50 p-4 relative overflow-hidden flex items-center justify-center gap-4">
            {/* Dots background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
            
            <div className="w-16 h-16 rounded-xl bg-white border-2 border-primary flex items-center justify-center z-10 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-serif italic text-lg">Y</div>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold z-10 shadow-sm text-sm">≠</div>
            
            <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
              <div className="w-6 h-6 bg-slate-200 rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Connecting line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-slate-300 z-0"></div>
          </div>
          <h3 className="text-xl font-bold mb-3">Kein Premium Branding</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Durchschnittliche Webseiten sorgen für durchschnittliche Wahrnehmung. Premium-Preise abzurufen wird so quasi unmöglich.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
