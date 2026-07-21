import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { niches } from '../data/niches';
import { FlowersContainer } from './Flowers';

export const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-background pt-24 px-4 sm:px-6 lg:px-8 pb-4 md:pb-8 pb-safe">
      <div className="max-w-7xl mx-auto">
        {/* SEO Niche Links */}
        <div className="mb-16 border-t border-border pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Branchenlösungen</h3>
              <div className="grid grid-cols-2 gap-4">
                {niches.map((niche) => (
                  <Link 
                    key={niche.slug} 
                    to={`/branchen/${niche.slug}`}
                    className="text-sm text-body hover:text-primary transition-colors"
                  >
                    Webdesign für {niche.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-8 lg:border-l border-border">
              <h3 className="text-lg font-bold text-foreground mb-6">Lokales Webdesign & AEO</h3>
              <p className="text-sm text-body leading-relaxed mb-4">
                Als lokaler <strong>Webdesigner in Freising</strong> (München Umgebung) bin ich darauf spezialisiert, Webseiten zu erstellen, die nicht nur hervorragend aussehen, sondern auch bei Google auf Platz 1 ranken und in KI-Suchmaschinen (AEO) wie ChatGPT oder Perplexity gefunden werden. 
              </p>
              <p className="text-sm text-body leading-relaxed">
                Ich biete professionelles <strong>Webdesign in ganz Deutschland</strong> für Selbstständige, Handwerker und kleine Unternehmen. Ob du lokal in Freising, Landshut oder überregional Kunden gewinnen möchtest – ich sorge für deine maximale Sichtbarkeit.
              </p>
            </div>
          </div>
        </div>

        {/* The new Footer Block */}
        <div className="mt-16 md:mt-24 relative">
          
          {/* Header texts above block */}
          <div className="flex justify-between items-end px-4 md:px-8 mb-[-1rem] relative z-10 pointer-events-none">
            <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:block">
              Lokal in Freising, Bayern
            </span>
            <div className="flex-1 pointer-events-auto">
              <FlowersContainer />
            </div>
            <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:block text-right">
              Viele Webseiten, kein Ende in Sicht
            </span>
          </div>

          {/* Blue rounded block */}
          <div className="bg-gradient-to-b from-primary to-white rounded-t-[2rem] md:rounded-[3rem] pt-16 md:pt-24 pb-12 px-6 flex flex-col items-center relative overflow-hidden">
            
            {/* Links and Socials */}
            <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-6 md:gap-10 text-white/90 font-medium text-sm md:text-base z-10 mb-20 md:mb-32 w-full">
              <div className="flex items-center gap-6">
                <a href="https://wa.me/4917624200179" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <MessageCircle size={18} />
                  <span className="hidden md:inline">WhatsApp</span>
                </a>
                <a href="https://www.instagram.com/vamela.info" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram size={18} />
                  <span className="hidden md:inline">Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@vamela.info" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <TikTokIcon className="w-[18px] h-[18px]" />
                  <span className="hidden md:inline">TikTok</span>
                </a>
              </div>

              <div className="w-1 h-1 rounded-full bg-white/30 hidden md:block"></div>
              
              <div className="flex items-center gap-6">
                <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
              </div>

              <div className="w-1 h-1 rounded-full bg-white/30 hidden md:block"></div>
              
              <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer mt-4 md:mt-0">
                <ArrowUp size={18} />
                <span>Nach oben</span>
              </button>
            </div>

            {/* Giant Faded Text at the bottom */}
            <div className="w-full absolute bottom-0 md:-bottom-[5%] left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
              <span 
                className="text-[25vw] md:text-[18rem] font-black tracking-tighter leading-none select-none text-transparent"
                style={{ 
                  WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                  backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                VAMELA
              </span>
            </div>

            <div className="w-full text-center mt-auto relative z-10 pt-10 text-white/50 text-xs">
              © {new Date().getFullYear()} VAMELA. Alle Rechte vorbehalten.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
