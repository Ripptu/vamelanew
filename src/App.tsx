/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Import components directly
import { StrategyWorkshopPage } from './components/StrategyWorkshopPage';
import { FacilityManagementPage } from './components/FacilityManagementPage';
import { NichePage } from './components/NichePage';
import { LogoCloud } from './components/LogoCloud';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FounderSection } from './components/FounderSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { FreeDraftSection } from './components/FreeDraftSection';
import { NextStepsSection } from './components/NextStepsSection';
import { FAQSection } from './components/FAQSection';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { ContactPopup } from './components/ContactPopup';
import { ExitIntentPopup } from './components/ExitIntentPopup';

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
      <Routes>
        <Route path="/" element={<HomePage onOpenContact={onOpenContact} />} />
        <Route path="/leistungen" element={<ServicesPage onOpenContact={onOpenContact} />} />
        <Route path="/agentur" element={<AgencyPage onOpenContact={onOpenContact} />} />
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
      <Footer />
    </>
  );
}

import { Helmet } from 'react-helmet-async';

function HomePage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>VAMELA | Webdesign Agentur für mehr Anfragen</title>
        <meta name="description" content="Wir bauen hochkonvertierende Websites für Dienstleister und Handwerker. Mehr Anfragen, mehr Umsatz, weniger Stress." />
        <link rel="canonical" href="https://vamela.info/" />
      </Helmet>
      <main>
        <div id="home"><Hero onOpenContact={onOpenContact} /></div>
        <LogoCloud />
        <ProblemSection />
        <SolutionSection onOpenContact={onOpenContact} limit={3} showLinkToPage={true} />
        <ProcessSection limit={2} showLinkToPage={true} />
        <div id="referenzen"><PortfolioSection limit={4} showLinkToPage={true} /></div>
        <TestimonialsSection />
        <FreeDraftSection />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
    </div>
  );
}

function ServicesPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-slate-900 selection:bg-primary/20 selection:text-primary pt-24">
      <Helmet>
        <title>Leistungen & Preise | VAMELA</title>
        <meta name="description" content="Unsere Webdesign-Leistungen und Preise im Überblick." />
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

function AgencyPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-slate-900 selection:bg-primary/20 selection:text-primary pt-24">
      <Helmet>
        <title>Agentur & Prozess | VAMELA</title>
        <meta name="description" content="Lerne uns und unseren bewährten Prozess kennen." />
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
    <div className="min-h-screen bg-[#ffffff] font-sans text-slate-900 selection:bg-primary/20 selection:text-primary pt-24">
      <Helmet>
        <title>Referenzen | VAMELA</title>
        <meta name="description" content="Unsere erfolgreichen Webdesign-Projekte." />
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
    <Router>
      <ScrollToTop />
      <AppContent onOpenContact={openPopup} />
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
      <ExitIntentPopup onOpenContact={openPopup} />
    </Router>
  );
}
