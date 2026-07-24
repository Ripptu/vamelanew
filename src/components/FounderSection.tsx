import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12"
        >
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] md:rounded-[2.5rem] -z-10 transform -rotate-3"></div>
            
            <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative border border-slate-200">
              <img 
                loading="eager"
                decoding="async"
                // @ts-expect-error fetchpriority attribute
                fetchpriority="high"
                src="https://i.postimg.cc/cZPmBdCM/4995ad88-01bd-465e-9b20-c3178ee83d1e.png" 
                alt="Christian" 
                className="w-full aspect-[4/5] object-cover" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20  border border-white/30 text-[10px] md:text-xs font-medium mb-3 md:mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  Dein Ansprechpartner
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-0.5 md:mb-1">Christian</h3>
                <p className="text-slate-300 font-medium text-sm md:text-base">Gründer & Webdesigner</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <Quote className="w-10 h-10 md:w-16 md:h-16 text-primary/20 mb-6 md:mb-8" />
          
          <div className="space-y-4 md:space-y-6 text-base md:text-xl text-slate-500 leading-relaxed">
            <p>
              Oft ist es schwer, einen zuverlässigen Webdesigner zu finden. Große Agenturen sind für kleine Unternehmen meist zu teuer und unpersönlich. Und viele Freelancer tauchen nach Projektabschluss einfach ab.
            </p>
            <p>
              Genau deshalb habe ich VAMELA gegründet. Ich möchte Selbstständigen und kleinen Unternehmen eine professionelle Webseite bieten, ohne dass sie sich um Technik, Hosting oder Updates kümmern müssen.
            </p>
            <p className="text-xl md:text-3xl font-serif italic text-slate-900 font-medium my-6 md:my-8">
              Mein Ansatz: <span className="text-primary">Alles aus einer Hand.</span>
            </p>
            <p>
              Ich kombiniere modernes Design, klare Texte und aktuelle Technik. Als dein direkter Ansprechpartner kümmere ich mich persönlich um dein Projekt – von der ersten Idee bis zur laufenden Betreuung.
            </p>
          </div>
          
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-200 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-slate-900">100%</span>
              <span className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wider">Fokus auf Ergebnisse</span>
            </div>
            <div className="w-px h-10 md:h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-slate-900">Premium</span>
              <span className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wider">Design & Entwicklung</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
