import { ArrowRight, PhoneCall, Settings, Rocket } from 'lucide-react';

export function NextStepsSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Du wünschst dir eine<br/><span className="font-serif italic text-primary font-normal">neue Webseite?</span>
      </h2>
      <p className="text-slate-500 text-lg mb-16">Das sind deine nächsten Schritte!</p>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative mb-12">
        {/* Dashed line connecting steps */}
        <div className="absolute top-20 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-200 hidden md:block"></div>
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3">Kostenloses Design-Konzept</h3>
            <p className="text-sm text-slate-500">In einem gemeinsamen Erstgespräch lernen wir dich und dein Angebot kennen, um ein grobes Design-Konzept auszuarbeiten.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3">Einzelheiten besprechen</h3>
            <p className="text-sm text-slate-500">Gemeinsam besprechen wir alle relevanten Details: Preise, Umfang, Dauer und alles, was du sonst noch wissen musst.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-3">Lehn dich entspannt zurück!</h3>
            <p className="text-sm text-slate-500">Wir beginnen mit unserer Arbeit, du erhältst regelmäßige Updates und hast nach Ø 3 Wochen deine fertige Flaggschiff-Webseite.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all">
          Design Konzept anfragen
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

