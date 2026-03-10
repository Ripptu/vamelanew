import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function SolutionSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Was unsere <span className="font-serif italic text-primary font-normal">Flaggschiff Webseiten</span><br/>anders machen
        </h2>
        <p className="text-slate-500 text-lg">
          Deine Webseite sollte nicht nur deine Visitenkarte sein, sondern der stärkste Hebel im gesamten Verkaufs- und Marketingprozess. Wir machen sie dazu.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm overflow-hidden relative">
          <div className="text-center mb-10 relative z-10">
            <h3 className="text-xl font-bold mb-2">Marktführer Branding</h3>
            <p className="text-slate-500 text-sm">Von einer weiteren Option zur absoluten #1</p>
          </div>
          <div className="relative h-48 flex justify-center items-end">
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-t-xl shadow-lg relative flex flex-col items-center pt-8">
              <div className="absolute -top-6 w-12 h-12 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center text-primary font-bold italic z-10">S</div>
              
              {/* Lines connecting to S */}
              <div className="absolute top-0 w-full h-12 flex justify-center">
                <div className="w-3/4 border-t-2 border-l-2 border-r-2 border-slate-200 rounded-t-xl h-full -mt-3"></div>
              </div>

              <div className="flex gap-4 w-full px-4">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-3 opacity-50">
                  <div className="h-2 bg-slate-200 rounded w-1/2 mb-2"></div>
                  <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-16 bg-slate-200 rounded w-full"></div>
                </div>
                <div className="flex-1 bg-white border border-primary/20 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div>
                    <div className="text-[8px] font-bold">Zenith AI</div>
                  </div>
                  <div className="text-xs font-bold mb-1">Baustelle fertig?</div>
                  <div className="text-xs font-bold mb-2">Das Büro auch.</div>
                  <div className="flex gap-1">
                    <div className="h-3 bg-primary rounded w-1/2"></div>
                    <div className="h-3 bg-slate-800 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm overflow-hidden relative">
          <div className="text-center mb-10 relative z-10">
            <h3 className="text-xl font-bold mb-2">Conversion Optimiert</h3>
            <p className="text-slate-500 text-sm">Entwickelt um Besucher in heiße Anfragen zu verwandeln</p>
          </div>
          <div className="relative h-48 flex justify-center items-end">
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="text-sm font-bold">Conversions Rate</div>
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">+75%</div>
              </div>
              
              <div className="flex items-end gap-2 h-24 relative z-10">
                {[40, 60, 45, 80, 100, 70, 55].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-md relative ${i === 4 ? 'bg-gradient-to-t from-primary to-blue-400 shadow-[0_0_15px_rgba(79,70,229,0.5)]' : 'bg-slate-200'}`} style={{ height: `${h}%` }}>
                    {i === 4 && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-sm"></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Dashed line */}
              <div className="absolute top-[60%] left-0 right-0 border-t-2 border-dashed border-primary/30 z-0"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
          <div className="h-40 flex items-center justify-center mb-6 relative z-10">
            {/* Orbit graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-slate-200 absolute"></div>
              <div className="w-32 h-32 rounded-full border border-slate-200 absolute"></div>
              <div className="w-16 h-16 rounded-full border border-slate-200 absolute"></div>
              
              {/* Orbiting items */}
              <div className="absolute top-4 left-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] text-primary shadow-sm">📊</div>
              <div className="absolute bottom-12 left-8 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] text-primary shadow-sm">🖌️</div>
              <div className="absolute top-1/2 right-4 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] text-primary shadow-sm">&lt;/&gt;</div>
            </div>
            <div className="w-12 h-12 bg-slate-900 rounded-full shadow-md flex items-center justify-center z-10 text-white font-bold italic">
              S
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2 relative z-10">A-Player Team</h3>
          <p className="text-slate-500 text-xs relative z-10">Ein Experten-Team in allen wichtigen Bereichen</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
          <div className="h-40 flex items-center justify-center mb-6 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-primary rounded-2xl rotate-12 flex items-center justify-center shadow-lg shadow-primary/20">
              <div className="text-4xl text-white -rotate-12">⚡</div>
            </div>
            {/* Speed lines */}
            <div className="absolute top-4 left-1/4 w-0.5 h-8 bg-blue-200 rounded-full"></div>
            <div className="absolute top-12 right-1/4 w-0.5 h-6 bg-blue-200 rounded-full"></div>
            <div className="absolute bottom-8 left-1/3 w-0.5 h-4 bg-blue-200 rounded-full"></div>
          </div>
          <h3 className="text-lg font-bold mb-2 relative z-10">Blitzschnell</h3>
          <p className="text-slate-500 text-xs relative z-10">Optimierte Ladezeiten für maximale Performance</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
          <div className="h-40 flex items-center justify-center mb-6 relative z-10">
            <div className="w-24 h-24 rounded-full border-4 border-blue-100 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-blue-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-primary/30">
                  W
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2 relative z-10">Webflow Development</h3>
          <p className="text-slate-500 text-xs relative z-10">Webflow bietet grenzenlose Möglichkeiten</p>
        </div>
      </div>

      <div className="flex justify-center">
        <motion.button
          onClick={onOpenContact}
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all relative overflow-hidden animate-shimmer"
        >
          Projektanfrage
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
