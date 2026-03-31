import { PortfolioSection } from './PortfolioSection';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { FooterCTA } from './FooterCTA';

export function PortfolioPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar onOpenContact={onOpenContact} />
      <main className="pt-24">
        <PortfolioSection />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
      <Footer />
    </div>
  );
}
