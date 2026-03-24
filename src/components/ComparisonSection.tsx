import { Check, X, Minus } from 'lucide-react';
import { motion } from 'motion/react';

export function ComparisonSection() {
  const criteria = [
    { name: "Premium Design-Level", k: "x", kr: "m", m: "x", s: "c" },
    { name: "Conversion-Optimierte Texte", k: "x", kr: "x", m: "c", s: "c" },
    { name: "Keine hohen Einmalkosten", k: "x", kr: "x", m: "x", s: "c" },
    { name: "All-Inclusive (Hosting, Updates)", k: "x", kr: "x", m: "x", s: "c" },
    { name: "Minimaler Aufwand für den Kunden", k: "x", kr: "x", m: "m", s: "c" },
    { name: "Monatlich kündbar", k: "x", kr: "x", m: "x", s: "c" },
  ];

  const renderIcon = (type: string) => {
    if (type === 'c') return (
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20"
      >
        <Check className="w-5 h-5 text-primary stroke-[3]" />
      </motion.div>
    );
    if (type === 'x') return <X className="w-5 h-5 text-slate-300 stroke-[2.5]" />;
    if (type === 'm') return <Minus className="w-5 h-5 text-slate-300 stroke-[2.5]" />;
    return null;
  };

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4 md:gap-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Endlich der <span className="font-serif italic text-primary font-normal">richtige Partner</span>
        </h2>
      </motion.div>

      <div className="mt-8 md:mt-10">
        {/* Mobile View (Cards) */}
        <div className="md:hidden flex flex-col gap-6">
          {[
            { id: 's', name: 'VAMELA', isPrimary: true, logo: "https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" },
            { id: 'k', name: 'Klassische Webdesigner', isPrimary: false },
            { id: 'kr', name: 'Kreativagenturen', isPrimary: false },
            { id: 'm', name: 'Marketingagenturen', isPrimary: false },
          ].map((agency, idx) => (
            <motion.article 
              key={agency.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-2xl border ${agency.isPrimary ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-200 bg-white'} overflow-hidden`}
            >
              <div className={`p-4 border-b ${agency.isPrimary ? 'border-primary/20 bg-primary/10' : 'border-slate-200 bg-slate-50'} font-bold text-center flex items-center justify-center min-h-[64px]`}>
                {agency.logo ? (
                  <img src={agency.logo} alt="VAMELA" className="h-8 object-contain brightness-0" referrerPolicy="no-referrer" />
                ) : (
                  <span className="text-slate-800">{agency.name}</span>
                )}
              </div>
              <div className="p-5 space-y-5">
                {criteria.map((c, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <span className="text-slate-600 pr-4 font-medium leading-tight">{c.name}</span>
                    <span className="flex-shrink-0">{renderIcon(c[agency.id as keyof typeof c])}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Desktop View (Table) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block bg-white rounded-3xl border border-slate-200 overflow-hidden relative"
        >
          <div className="overflow-x-auto hide-scrollbar">
            <div className="grid grid-cols-[1.5fr_repeat(4,minmax(120px,1fr))] bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-900 text-center min-w-[700px]">
              <div className="p-6 text-left border-r border-slate-200 sticky left-0 bg-slate-50 z-20"></div>
              <div className="p-6 border-r border-slate-200 flex items-center justify-center leading-tight">Klassische Webdesigner</div>
              <div className="p-6 border-r border-slate-200 flex items-center justify-center leading-tight">Kreativagenturen</div>
              <div className="p-6 border-r border-slate-200 flex items-center justify-center leading-tight">Marketingagenturen</div>
              <div className="p-6 bg-primary/10 text-primary flex items-center justify-center gap-2 text-sm">
                <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-8 object-contain brightness-0" referrerPolicy="no-referrer" />
              </div>
            </div>
            
            {criteria.map((row, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                className="grid grid-cols-[1.5fr_repeat(4,minmax(120px,1fr))] border-b border-slate-200 last:border-0 text-sm min-w-[700px] transition-colors"
              >
                <div className="p-6 font-medium text-slate-500 border-r border-slate-200 flex items-center sticky left-0 bg-white z-20">{row.name}</div>
                <div className="p-6 border-r border-slate-200 flex items-center justify-center bg-slate-50/30">{renderIcon(row.k)}</div>
                <div className="p-6 border-r border-slate-200 flex items-center justify-center">{renderIcon(row.kr)}</div>
                <div className="p-6 border-r border-slate-200 flex items-center justify-center bg-slate-50/30">{renderIcon(row.m)}</div>
                <div className="p-6 bg-primary/5 flex items-center justify-center">{renderIcon(row.s)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

