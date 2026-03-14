import { motion } from 'motion/react';
import { Check, Zap, Calendar, Crown } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="zahlung" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Flexibilität, die zu dir passt</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Egal ob einmaliges Projekt oder kontinuierliches Wachstum – wähle das Modell, das dein Unternehmen voranbringt.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* One-time */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Einmaliges Projekt</h3>
            </div>
            <p className="text-slate-600 mb-8">Perfekt für den Start oder klar definierte Anforderungen. Volle Kontrolle, einmalige Investition.</p>
            <ul className="space-y-4 mb-8">
              {['Klarer Projektumfang', 'Fester Preis', 'Schnelle Umsetzung', 'Keine Folgekosten'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subscription */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <Crown className="w-8 h-8 text-amber-400" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Monats-Abo</h3>
            </div>
            <p className="text-slate-300 mb-8">Kontinuierliche Weiterentwicklung und Support zu einem günstigeren Preis. Monatlich kündbar – maximale Freiheit.</p>
            <ul className="space-y-4 mb-8">
              {['Kontinuierliche Optimierung', 'Bevorzugter Support', 'Günstigerer Monatspreis', 'Monatlich kündbar'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-blue-400" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
