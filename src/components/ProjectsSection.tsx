import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Ausgewählte <span className="font-serif italic text-primary font-normal">Projekte</span>
        </h2>
        <p className="text-slate-500 text-lg">
          Überzeuge dich selbst von unserem Handwerk
        </p>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar items-center">
          
          {/* Project Card 1 (Partial left) */}
          <div className="min-w-[80vw] md:min-w-[800px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm snap-center flex flex-col md:flex-row gap-8 items-center opacity-40 scale-95 transition-all">
            <div className="flex-1">
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Trading / Finanz</div>
              <h3 className="text-3xl font-bold mb-4">MK Börsenhandel</h3>
              <p className="text-slate-500 mb-8">
                Rebranding und Premium Onlinepräsenz, die zu einer der am besten bewiesenen Trading-Schulen passt.
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Rebranding</span>
                <span className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Webflow-Launch</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                <img src="https://picsum.photos/seed/project1/800/600" alt="Project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          {/* Project Card 2 (Center) */}
          <div className="min-w-[80vw] md:min-w-[800px] bg-white rounded-3xl p-8 border border-slate-100 shadow-md snap-center flex flex-col md:flex-row gap-8 items-center z-10 scale-100 transition-all">
             <div className="flex-1">
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">SAAS / KI</div>
              <h3 className="text-3xl font-bold mb-4">Zenith AI</h3>
              <p className="text-slate-500 mb-8">
                Für Zenith AI haben wir eine Agenturseite gebaut, die Handwerkern zeigt, wie KI ihre Angebotserstellung automatisiert.
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-medium text-primary">Startup</span>
                <span className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-medium text-primary">Premium Auftritt</span>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
              <div className="aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 p-4 relative z-10 flex items-center justify-center">
                {/* Mockup of Zenith AI site */}
                <div className="w-full h-full bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                  <div className="h-6 bg-slate-50 border-b border-slate-100 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-16 h-4 bg-slate-200 rounded"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-2 bg-slate-100 rounded"></div>
                        <div className="w-8 h-2 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                    <div className="text-center mb-6">
                      <div className="h-4 bg-slate-800 rounded w-3/4 mx-auto mb-2"></div>
                      <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto mb-4"></div>
                      <div className="h-6 bg-primary rounded-full w-24 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
                      <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
                      <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3 (Partial right) */}
          <div className="min-w-[80vw] md:min-w-[800px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm snap-center flex flex-col md:flex-row gap-8 items-center opacity-40 scale-95 transition-all">
             <div className="flex-1">
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Performance</div>
              <h3 className="text-3xl font-bold mb-4">AdRise</h3>
              <p className="text-slate-500 mb-8">
                Komplette Markenentwicklung und visuelles Erscheinungsbild.
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Markenaufbau</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                <img src="https://picsum.photos/seed/project3/800/600" alt="Project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-8 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all">
            Kostenloses Design Konzept
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

