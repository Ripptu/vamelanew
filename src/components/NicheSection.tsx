import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { niches } from '../data/niches';
import { ArrowRight } from 'lucide-react';

export function NicheSection() {
  const featuredNiches = niches.slice(0, 8); // Take first 8 niches

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Maßgeschneidertes Webdesign <span className="text-primary italic font-serif">für deine Branche</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Jede Branche tickt anders. Deshalb erhältst du keine Standard-Vorlage, sondern 
            eine strategisch durchdachte Lösung, die perfekt auf deine Zielgruppe abgestimmt ist.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredNiches.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <motion.div
                key={niche.slug}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/branchen/${niche.slug}`}
                  className="group flex flex-col items-center justify-center p-6 text-center bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all h-full"
                >
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-4 text-slate-600 group-hover:text-primary group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{niche.name}</h3>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mt-2">
                    Lösung ansehen <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            to="/branchen"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 hover:border-slate-900 text-slate-900 font-medium transition-all hover:bg-warm-100/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none bg-white"
          >
            Alle {niches.length} Branchen ansehen
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
