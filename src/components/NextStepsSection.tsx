import { ArrowRight, PhoneCall, Settings, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export function NextStepsSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Du wünschst dir eine<br/><span className="font-serif italic text-primary font-normal">neue Webseite?</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg mb-10 md:mb-16">Das sind deine nächsten Schritte!</p>
      </motion.div>

      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 relative mb-10 md:mb-12">
        {/* Dashed line connecting steps */}
        <div className="absolute top-20 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-200 hidden lg:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10">
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3 text-slate-900">Kostenloses Design-Konzept</h3>
            <p className="text-sm text-slate-500">In einem gemeinsamen Erstgespräch lerne ich dich und dein Angebot kennen, um ein grobes Design-Konzept auszuarbeiten.</p>
          </motion.article>
          
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3 text-slate-900">Einzelheiten besprechen</h3>
            <p className="text-sm text-slate-500">Gemeinsam besprechen wir alle relevanten Details: Preise, Umfang, Dauer und alles, was du sonst noch wissen musst.</p>
          </motion.article>
          
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3 text-slate-900">Lehn dich entspannt zurück!</h3>
            <p className="text-sm text-slate-500">Ich beginne mit meiner Arbeit, du erhältst regelmäßige Updates und hast nach Ø 3 Wochen deine fertige Flaggschiff-Webseite.</p>
          </motion.article>
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
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all relative overflow-hidden animate-shimmer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          Design Konzept anfragen
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </section>
  );
}

