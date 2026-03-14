import { ArrowRight, PhoneCall, Settings, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export function NextStepsSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Du wünschst dir eine<br/><span className="font-serif italic text-primary font-normal">neue Webseite?</span>
        </h2>
        <p className="text-slate-500 text-lg mb-16">Das sind deine nächsten Schritte!</p>
      </motion.div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative mb-12">
        {/* Dashed line connecting steps */}
        <div className="absolute top-20 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-200 hidden md:block"></div>
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3">Kostenloses Design-Konzept</h3>
            <p className="text-sm text-slate-500">In einem gemeinsamen Erstgespräch lernen wir dich und dein Angebot kennen, um ein grobes Design-Konzept auszuarbeiten.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3">Einzelheiten besprechen</h3>
            <p className="text-sm text-slate-500">Gemeinsam besprechen wir alle relevanten Details: Preise, Umfang, Dauer und alles, was du sonst noch wissen musst.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3">Lehn dich entspannt zurück!</h3>
            <p className="text-sm text-slate-500">Wir beginnen mit unserer Arbeit, du erhältst regelmäßige Updates und hast nach Ø 3 Wochen deine fertige Flaggschiff-Webseite.</p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center"
      >
        <motion.button 
          onClick={onOpenContact}
          aria-label="Design Konzept anfragen"
          whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgba(15, 23, 42, 0.4), 0 8px 10px -6px rgba(15, 23, 42, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all relative overflow-hidden animate-shimmer shadow-lg shadow-slate-900/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
        >
          Design Konzept anfragen
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </section>
  );
}

