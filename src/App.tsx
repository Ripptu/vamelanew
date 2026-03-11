/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FounderSection } from './components/FounderSection';
import { ComparisonSection } from './components/ComparisonSection';
import { NextStepsSection } from './components/NextStepsSection';
import { FAQSection } from './components/FAQSection';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { ContactPopup } from './components/ContactPopup';

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Navbar onOpenContact={openPopup} />
      <main>
        <div id="home"><Hero onOpenContact={openPopup} /></div>
        <LogoCloud />
        <ProblemSection />
        <SolutionSection onOpenContact={openPopup} />
        <div id="referenzen"><PortfolioSection /></div>
        <div id="prozess"><ProcessSection /></div>
        <TestimonialsSection />
        <FounderSection />
        <div id="leistungen"><ComparisonSection /></div>
        <NextStepsSection onOpenContact={openPopup} />
        <FAQSection onOpenContact={openPopup} />
        <FooterCTA onOpenContact={openPopup} />
      </main>
      <Footer />
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<LegalPage title="Impressum" content={
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold">Angaben gemäß § 5 TMG</h2>
              <p>Christian Stockmeier<br/>Vamela<br/>In der Leiten 10<br/>85410 Haag an der Amper</p>
            </section>
            <section>
              <h2 className="text-xl font-bold">Kontakt</h2>
              <p>Telefon: +49 176 24200179<br/>E-Mail: info@vamela.info</p>
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
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br/>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
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
    </Router>
  );
}
