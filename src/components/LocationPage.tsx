import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { locations, locationBySlug } from '../data/locations';
import { niches } from '../data/niches';
import { SITE_URL } from '../routes';
import { PageHeader } from './PageHeader';

export function LocationPage({ onOpenContact }: { onOpenContact?: () => void }) {
  const { stadt } = useParams<{ stadt: string }>();
  const location = locationBySlug(stadt);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [stadt]);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const pageUrl = `${SITE_URL}/webdesign/${location.slug}`;
  const focusNiches = location.focusNiches
    .map((slug) => niches.find((n) => n.slug === slug))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));
  const nearby = location.nearby
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  // Service + FAQ for this city, both resolving against the single
  // Organization node declared in index.html.
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `Webdesign ${location.city}`,
        provider: { '@id': `${SITE_URL}/#organization` },
        description: location.metaDescription,
        serviceType: 'Webdesign, lokales SEO',
        areaServed: {
          '@type': 'City',
          name: location.city,
          address: {
            '@type': 'PostalAddress',
            addressLocality: location.city,
            addressRegion: location.region,
            addressCountry: 'DE',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: location.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-transparent pt-24 pb-16">
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHeader
        badge={location.badge}
        title={location.h1}
        titleAccent={location.h1Accent}
        lead={location.lead}
      />

      <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mt-4 flex justify-center">
        <span className="inline-flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="w-4 h-4 text-primary" />
          Persönliche Betreuung {location.cityIn} und Umgebung
        </span>
      </div>

      <article className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mt-14 md:mt-20 text-slate-600 leading-relaxed space-y-12 md:space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {location.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            {location.situation.title}
          </h2>
          <div className="space-y-4">
            {location.situation.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Häufige Branchen {location.cityIn}
          </h2>
          <p className="mb-6">
            Für diese Bereiche habe ich eigene Seiten mit branchenspezifischen Inhalten – dort findest du,
            worauf es in deinem Feld konkret ankommt:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {focusNiches.map((niche) => {
              const Icon = niche.icon;
              return (
                <li key={niche.slug}>
                  <Link
                    to={`/branchen/${niche.slug}`}
                    className="group flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-4 transition-all hover:border-primary/40 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <span className="font-bold text-slate-900 text-sm leading-tight flex-1">
                      Webdesign für {niche.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
            Häufige Fragen zu Webdesign {location.cityIn}
          </h2>
          <div className="space-y-3">
            {location.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="w-full px-5 py-5 text-left flex justify-between items-center gap-4 cursor-pointer list-none hover:bg-warm-100 transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary">
                  <h3 className="font-medium text-slate-900 text-sm md:text-base">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 text-sm md:text-base">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-primary/5 border border-primary/20 rounded-3xl p-6 md:p-10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            Kostenloser Entwurf für dein Projekt {location.cityIn}
          </h2>
          <p className="text-slate-700 mb-6">
            Du bekommst vorab einen Entwurf deiner neuen Startseite – ohne Vorkasse und ohne Verpflichtung.
            Erst wenn dir gefällt, was du siehst, sprechen wir über die Zusammenarbeit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
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
        </motion.section>

        <section className="border-t border-slate-200 pt-10">
          <h2 className="text-base font-bold text-slate-900 mb-4">Webdesign in der Umgebung</h2>
          <ul className="flex flex-wrap gap-2">
            {nearby.map((other) => (
              <li key={other.slug}>
                <Link
                  to={`/webdesign/${other.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Webdesign {other.city}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
