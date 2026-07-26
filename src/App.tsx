/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load subpages and heavy standalone pages
const StrategyWorkshopPage = lazy(() => import('./components/StrategyWorkshopPage').then(m => ({ default: m.StrategyWorkshopPage })));
const FacilityManagementPage = lazy(() => import('./components/FacilityManagementPage').then(m => ({ default: m.FacilityManagementPage })));
const NichePage = lazy(() => import('./components/NichePage').then(m => ({ default: m.NichePage })));
const LegalPage = lazy(() => import('./components/LegalPage').then(m => ({ default: m.LegalPage })));

import { LogoCloud } from './components/LogoCloud';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { NicheSection } from './components/NicheSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FounderSection } from './components/FounderSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { FreeDraftSection } from './components/FreeDraftSection';
import { WhyVamelaArticle } from './components/WhyVamelaArticle';
import { NextStepsSection } from './components/NextStepsSection';
import { FAQSection } from './components/FAQSection';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
const ContactPopup = lazy(() => import('./components/ContactPopup').then(module => ({ default: module.ContactPopup })));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup').then(module => ({ default: module.ExitIntentPopup })));
import { MobileStickyCTA } from './components/MobileStickyCTA';
import PrefetchManager from './components/PrefetchManager';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <>
      <Navbar onOpenContact={onOpenContact} />
      <Suspense fallback={<div className="min-h-screen bg-warm-50" />}>
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={onOpenContact} />} />
          <Route path="/leistungen" element={<ServicesPage onOpenContact={onOpenContact} />} />
          <Route path="/ueber-mich" element={<AboutPage onOpenContact={onOpenContact} />} />
          <Route path="/referenzen" element={<PortfolioPage onOpenContact={onOpenContact} />} />
          <Route path="/strategie-workshop" element={<StrategyWorkshopPage onOpenContact={onOpenContact} />} />
          <Route path="/branchen/facility-management" element={<FacilityManagementPage onOpenContact={onOpenContact} />} />
          <Route path="/branchen/:slug" element={<NichePage onOpenContact={onOpenContact} />} />
          <Route path="/impressum" element={<LegalPage title="Impressum" content={
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold">Angaben gemäß § 5 TMG</h2>
                <p>Christian Stockmeier<br/>Vamela<br/>In der Leiten 10<br/>85410 Haag an der Amper</p>
              </section>
              <section>
                <h2 className="text-xl font-bold">Kontakt</h2>
                <p>Telefon: +49 176 24200179<br/>E-Mail: kontakt@vamela.info</p>
              </section>
              <section>
                <h2 className="text-xl font-bold">Umsatzsteuer-ID</h2>
                <p>Steuernummer: 115/278/10061</p>
              </section>
              <section>
                <h2 className="text-xl font-bold">Verantwortlich für den Inhalt</h2>
                <p>Christian Stockmeier<br/>In der Leiten 10<br/>85410 Haag an der Amper</p>
              </section>
              <section>
                <h2 className="text-xl font-bold">EU-Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1">https://ec.europa.eu/consumers/odr/</a>.<br/>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </section>
            </div>
          } />} />
          <Route path="/agb" element={<LegalPage title="Allgemeine Geschäftsbedingungen" content={
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold">§ 1 Geltungsbereich</h2>
                <p>Für die Geschäftsbeziehung zwischen dem Anbieter und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold">§ 2 Vertragsschluss</h2>
                <p>Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar.</p>
              </section>
            </div>
          } />} />
          <Route path="/datenschutz" element={<LegalPage title="Datenschutzerklärung" content={
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-bold">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="font-bold">Datenschutz</h3>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              </section>
            </div>
          } />} />
        </Routes>
      </Suspense>
      <Footer />
      <MobileStickyCTA onOpenContact={onOpenContact} />
    </>
  );
}

import { Helmet } from 'react-helmet-async';

function HomePage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-warm-50 font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>Webdesigner in der Nähe & ganz Deutschland | VAMELA</title>
        <meta name="description" content="Professioneller Webdesigner für Selbstständige & kleine Unternehmen. Webseiten, die bei Google & KI auf Platz 1 stehen und Neukunden bringen." />
        <link rel="canonical" href="https://vamela.info/" />
        <script type="application/ld+json">

          {`

            {

              "@context": "https://schema.org",

              "@type": "LocalBusiness",

              "name": "Vamela Webdesign",

              "image": "https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png",

              "description": "Professionelles Webdesign und KI-optimierte Websites für Selbstständige und kleine Unternehmen in Freising, München und deutschlandweit.",

              "address": {

                "@type": "PostalAddress",

                "streetAddress": "In der Leiten 10",

                "addressLocality": "Haag an der Amper",

                "postalCode": "85410",

                "addressCountry": "DE"

              },

              "geo": {

                "@type": "GeoCoordinates",

                "latitude": 48.4578,

                "longitude": 11.8262

              },

              "url": "https://vamela.info",

              "telephone": "+4917624200179",

              "priceRange": "€€"

            }

          `}

        </script>
      </Helmet>
      <main>
        <div id="home"><Hero onOpenContact={onOpenContact} /></div>
        <LogoCloud />
        <ProblemSection />
        <SolutionSection onOpenContact={onOpenContact} limit={3} showLinkToPage={true} />
        <div id="referenzen"><PortfolioSection limit={4} showLinkToPage={true} /></div>
        <div id="preise"><PricingSection /></div>
        <TestimonialsSection />
        <WhyVamelaArticle onOpenContact={onOpenContact} />
        <FreeDraftSection />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
    </div>
  );
}

function ServicesPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-warm-50 font-sans text-slate-900 selection:bg-primary/20 selection:text-primary pt-24">
      <Helmet>
        <title>Leistungen & Preise | VAMELA</title>
        <meta name="description" content="Meine Webdesign-Leistungen und Preise im Überblick." />
      </Helmet>
      <main>
        <SolutionSection onOpenContact={onOpenContact} />
        <ComparisonSection />
        <PricingSection />
        <FAQSection onOpenContact={onOpenContact} />
        <NextStepsSection onOpenContact={onOpenContact} />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
    </div>
  );
}

function AboutPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-warm-50 font-sans text-slate-900 selection:bg-primary/20 selection:text-primary pt-24">
      <Helmet>
        <title>Über mich & Prozess | VAMELA</title>
        <meta name="description" content="Lerne mich und meinen bewährten Prozess kennen." />
      </Helmet>
      <main>
        <FounderSection />
        <ProcessSection />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
    </div>
  );
}

function PortfolioPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-warm-50 font-sans text-slate-900 selection:bg-primary/20 selection:text-primary pt-24">
      <Helmet>
        <title>Referenzen | VAMELA</title>
        <meta name="description" content="Meine erfolgreichen Webdesign-Projekte." />
      </Helmet>
      <main>
        <PortfolioSection />
        <TestimonialsSection />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
    </div>
  );
}

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <Router>
        <PrefetchManager />
        <ScrollToTop />
        <div className="relative min-h-screen w-full">
          <AppContent onOpenContact={openPopup} />
          <Suspense fallback={null}><ContactPopup isOpen={isPopupOpen} onClose={closePopup} /></Suspense>
          <Suspense fallback={null}><ExitIntentPopup onOpenContact={openPopup} /></Suspense>
        </div>
      </Router>
    </MotionConfig>
  );
}
