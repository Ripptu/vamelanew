import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { niches } from '../data/niches';
import { PageHeader } from './PageHeader';

/**
 * Hub page for the 21 industry landing pages. Before this existed the only
 * route into that cluster was the global footer, which left them effectively
 * orphaned in the internal link graph.
 */
export function BranchenPage({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <main className="min-h-screen bg-transparent pt-24 pb-16">
      <Helmet>
        <title>Webdesign nach Branche – 21 Spezialisierungen | VAMELA</title>
        <meta
          name="description"
          content="Webdesign speziell für Handwerker, Steuerberater, Zahnärzte, Facility Management und 17 weitere Branchen. Jede Branche mit eigener Strategie statt Standard-Vorlage."
        />
        <link rel="canonical" href="https://vamela.info/branchen" />
      </Helmet>

      <PageHeader
        badge="Branchenlösungen"
        title="Jede Branche tickt anders."
        titleAccent="Deine Webseite auch."
        lead="Andere Kunden, andere Einwände, andere Suchbegriffe. Deshalb gibt es hier keine Standard-Vorlage, sondern eine auf deine Branche abgestimmte Lösung."
      />

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-8 md:mt-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {niches.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <motion.li
                key={niche.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
              >
                <Link
                  to={`/branchen/${niche.slug}`}
                  className="group h-full flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 transition-all hover:border-primary/40 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-slate-900 text-sm leading-tight">
                      Webdesign für {niche.name}
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mt-16 md:mt-24">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 md:p-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            Deine Branche ist nicht dabei?
          </h2>
          <p className="text-slate-700 mb-6">
            Kein Problem. Die Herangehensweise bleibt dieselbe – erzähl mir einfach, was du machst und wen du erreichen willst.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/#gratis-entwurf"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-full font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Kostenlosen Entwurf sichern
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-900 text-slate-900 px-6 py-3.5 rounded-full font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:outline-none"
              >
                Unverbindlich anfragen
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
