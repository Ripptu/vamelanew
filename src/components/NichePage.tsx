import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { niches } from '../data/niches';

export function NichePage({ onOpenContact }: { onOpenContact?: () => void }) {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  const niche = niches.find(n => n.slug === slug);

  if (!niche) {
    return <Navigate to="/" replace />;
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Webdesign für ${niche.name}`,
    "provider": {
      "@type": "Organization",
      "name": "VAMELA",
      "url": "https://vamela.info"
    },
    "description": niche.schemaDescription,
    "serviceType": "WebDesign",
    "areaServed": "DE"
  };

  const Icon = niche.icon;

  return (
    <main className="min-h-screen bg-transparent pt-24 pb-16">
      <Helmet>
        <title>Webdesign für {niche.name} | VAMELA</title>
        <meta name="description" content={niche.schemaDescription} />
        <meta property="og:title" content={`Webdesign für ${niche.name} | VAMELA`} />
        <meta property="og:description" content={niche.schemaDescription} />
        <link rel="canonical" href={`https://vamela.info/branchen/${niche.slug}`} />
      </Helmet>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 mb-6 md:mb-8 shadow-sm">
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-slate-700">{niche.badgeText}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 md:mb-8 leading-tight">
            {niche.h1} <span className="font-serif italic text-primary font-normal">{niche.h1Highlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {niche.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none shadow-lg shadow-primary/20"
            >
              Kostenlose Potenzialanalyse
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white/80 backdrop-blur-md border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            {niche.trustText}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {niche.trustLogos.map((logo, index) => (
              <div key={index} className={`text-xl md:text-2xl font-bold ${index % 2 === 0 ? 'font-serif' : 'font-sans'}`}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Unsere Leistungen für deine Branche
          </h2>
          <p className="text-lg text-slate-600">
            Maßgeschneiderte Lösungen, damit dein Unternehmen online genau so professionell auftritt wie vor Ort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {niche.benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <article key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <BenefitIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* GEO-optimiertes FAQ */}
      <section className="py-20 bg-white/80 backdrop-blur-md border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Häufige Fragen aus deiner Branche
            </h2>
            <p className="text-lg text-slate-600">
              Antworten auf die wichtigsten Fragen rund um deinen neuen digitalen Auftritt.
            </p>
          </div>

          <div className="space-y-4">
            {niche.faqs.map((faq, index) => (
              <details key={index} className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
