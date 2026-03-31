import React from 'react';
import { Target, Zap, Users, Euro, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const STRATEGY_PILLARS = [
  {
    title: "Target Audiences",
    icon: Users,
    items: ["Therapeuten & Praxen", "Baufirmen & Handwerk", "Beauty-Studios", "B2B-Unternehmen"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    title: "Core Services",
    icon: Zap,
    items: ["Neue Websites (Relaunch)", "SEO-Optimierung", "Performance-Boosts", "PHP-Datenbank-Fixes"],
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    title: "Pricing Models",
    icon: Euro,
    items: ["Projektbasiert: ab 1.000 €", "Abo-Modell: 99 € / Monat", "Transparente Kosten", "Skalierbare Lösungen"],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  },
  {
    title: "Brand Voice",
    icon: Target,
    items: ["Professionell", "Lösungsorientiert", "Strategisch", "Kreativ"],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-4">
          SEO Strategy Overview
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          The core foundation for Vamela's organic growth. This dashboard outlines our target demographics, service offerings, and the strategic positioning used to generate qualified leads.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STRATEGY_PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border bg-[#121212] ${pillar.border}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${pillar.bg} ${pillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold text-white font-display">{pillar.title}</h2>
              </div>
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${pillar.color}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <section className="mt-12 p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Target className="w-48 h-48 text-purple-500" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white font-display mb-4">Content Strategy Goal</h2>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-6">
            Our primary objective is to build organic traffic through highly targeted, SEO-optimized blog articles. Each piece of content is designed to address specific pain points of our target audiences (e.g., outdated PHP systems for B2B, or lack of visibility for therapists) and seamlessly transition them into our €1,000 project or €99/month subscription models.
          </p>
          <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
            Start Generating Content
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
