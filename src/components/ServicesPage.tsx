import { ComparisonSection } from './ComparisonSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { FooterCTA } from './FooterCTA';

export function ServicesPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar onOpenContact={onOpenContact} />
      <main className="pt-24">
        <ComparisonSection />
        <PricingSection />
        <FAQSection onOpenContact={onOpenContact} />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
      <Footer />
    </div>
  );
}
