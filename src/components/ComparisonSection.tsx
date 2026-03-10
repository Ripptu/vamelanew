import { Check, X, Minus } from 'lucide-react';
import { motion } from 'motion/react';

export function ComparisonSection() {
  const criteria = [
    { name: "Marktführer Design-Level", k: "x", kr: "m", m: "x", s: "c" },
    { name: "Conversion-Optimierte Texte", k: "x", kr: "x", m: "c", s: "c" },
    { name: "Kombination aus Marketing & Design", k: "m", kr: "x", m: "x", s: "c" },
    { name: "Umsetzung in Wochen", k: "x", kr: "x", m: "m", s: "c" },
    { name: "Minimaler Aufwand für den Kunden", k: "x", kr: "x", m: "m", s: "c" },
    { name: "Neueste Software", k: "x", kr: "x", m: "m", s: "c" },
  ];

  const renderIcon = (type: string) => {
    if (type === 'c') return (
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Check className="w-6 h-6 text-green-600 bg-green-100 rounded-full p-1" />
      </motion.div>
    );
    if (type === 'x') return <X className="w-5 h-5 text-slate-300" />;
    if (type === 'm') return <Minus className="w-5 h-5 text-slate-400" />;
    return null;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Endlich der <span className="font-serif italic text-primary font-normal">richtige Partner</span>
        </h2>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-[1fr_repeat(4,minmax(100px,1fr))] bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-800 text-center min-w-[600px]">
            <div className="p-6 text-left border-r border-slate-200"></div>
            <div className="p-6 border-r border-slate-200 flex items-center justify-center">Klassische Webagenturen</div>
            <div className="p-6 border-r border-slate-200 flex items-center justify-center">Kreativagenturen</div>
            <div className="p-6 border-r border-slate-200 flex items-center justify-center">Marketingagenturen</div>
            <div className="p-6 bg-indigo-50 text-indigo-900 flex items-center justify-center gap-2 text-sm">
              <img src="https://s1.directupload.eu/images/260310/oe9nbm82.png" alt="VAMELA Logo" className="h-8 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          {criteria.map((row, i) => (
            <div key={i} className="grid grid-cols-[1fr_repeat(4,minmax(100px,1fr))] border-b border-slate-100 last:border-0 text-sm min-w-[600px]">
              <div className="p-6 font-medium text-slate-800 border-r border-slate-100 flex items-center">{row.name}</div>
              <div className="p-6 border-r border-slate-100 flex items-center justify-center bg-slate-50/30">{renderIcon(row.k)}</div>
              <div className="p-6 border-r border-slate-100 flex items-center justify-center">{renderIcon(row.kr)}</div>
              <div className="p-6 border-r border-slate-100 flex items-center justify-center bg-slate-50/30">{renderIcon(row.m)}</div>
              <div className="p-6 bg-indigo-50/30 flex items-center justify-center">{renderIcon(row.s)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

