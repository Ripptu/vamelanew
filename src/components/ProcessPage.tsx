import { ProcessSection } from './ProcessSection';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { FooterCTA } from './FooterCTA';

export function ProcessPage({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenContact={onOpenContact} />
      <main className="pt-24">
        <ProcessSection />
        <FooterCTA onOpenContact={onOpenContact} />
      </main>
      <Footer />
    </div>
  );
}
