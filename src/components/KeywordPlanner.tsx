import React, { useState } from 'react';
import { Search, TrendingUp, BarChart3, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const KEYWORD_DATA = {
  "Therapeuten": [
    { keyword: "Website für Therapeuten erstellen lassen", volume: "1.2K", difficulty: "Medium", intent: "Commercial" },
    { keyword: "SEO für Psychotherapie Praxis", volume: "850", difficulty: "Low", intent: "Informational" },
    { keyword: "Patientengewinnung online", volume: "2.1K", difficulty: "High", intent: "Commercial" },
    { keyword: "Therapie Website Relaunch", volume: "320", difficulty: "Low", intent: "Transactional" }
  ],
  "Baufirmen": [
    { keyword: "Webdesign für Handwerker", volume: "3.4K", difficulty: "High", intent: "Commercial" },
    { keyword: "Baufirma Website erstellen", volume: "1.8K", difficulty: "Medium", intent: "Commercial" },
    { keyword: "Lokales SEO für Bauunternehmen", volume: "950", difficulty: "Medium", intent: "Informational" },
    { keyword: "Handwerker Website Abo", volume: "450", difficulty: "Low", intent: "Transactional" }
  ],
  "Beauty-Studios": [
    { keyword: "Kosmetikstudio Website Design", volume: "2.2K", difficulty: "Medium", intent: "Commercial" },
    { keyword: "Online Terminbuchung Beauty Salon", volume: "4.1K", difficulty: "High", intent: "Transactional" },
    { keyword: "SEO für Kosmetikstudios", volume: "1.1K", difficulty: "Low", intent: "Informational" },
    { keyword: "Beauty Website Relaunch", volume: "600", difficulty: "Medium", intent: "Commercial" }
  ],
  "B2B": [
    { keyword: "B2B Webdesign Agentur", volume: "5.5K", difficulty: "High", intent: "Commercial" },
    { keyword: "PHP Datenbank Update B2B", volume: "800", difficulty: "Medium", intent: "Transactional" },
    { keyword: "Leadgenerierung B2B Website", volume: "3.2K", difficulty: "High", intent: "Informational" },
    { keyword: "Performance Optimierung B2B", volume: "1.5K", difficulty: "Medium", intent: "Commercial" }
  ]
};

export default function KeywordPlanner() {
  const [activeNiche, setActiveNiche] = useState<keyof typeof KEYWORD_DATA>("Therapeuten");

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-4">
          Keyword Strategy
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          High-intent keywords tailored for Vamela's target audiences. Use these to structure your blog content and capture qualified leads.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        {Object.keys(KEYWORD_DATA).map((niche) => (
          <button
            key={niche}
            onClick={() => setActiveNiche(niche as keyof typeof KEYWORD_DATA)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeNiche === niche 
                ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]" 
                : "bg-[#121212] text-gray-400 border border-[#262626] hover:bg-[#1a1a1a] hover:text-gray-200"
            }`}
          >
            {niche}
          </button>
        ))}
      </div>

      <div className="bg-[#121212] rounded-2xl border border-[#262626] overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#262626] bg-[#0a0a0a]/50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <div className="col-span-5 flex items-center gap-2">
            <Search className="w-4 h-4" /> Keyword
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" /> Volume
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Difficulty
          </div>
          <div className="col-span-3">Intent</div>
        </div>

        <div className="divide-y divide-[#262626]">
          {KEYWORD_DATA[activeNiche].map((item, idx) => (
            <motion.div 
              key={item.keyword}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="grid grid-cols-12 gap-4 p-5 items-center hover:bg-[#1a1a1a] transition-colors group cursor-pointer"
            >
              <div className="col-span-5 text-gray-200 font-medium flex items-center gap-3">
                {item.keyword}
                <ArrowUpRight className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="col-span-2 text-gray-400 font-mono text-sm">
                {item.volume}
              </div>
              <div className="col-span-2">
                <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                  item.difficulty === 'Low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  item.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                  'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {item.difficulty}
                </span>
              </div>
              <div className="col-span-3">
                <span className="text-gray-400 text-sm">{item.intent}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-purple-900/10 border border-purple-500/20 flex items-start gap-4">
        <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 shrink-0">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Strategy Insight</h3>
          <p className="text-gray-400 leading-relaxed">
            For the <strong>{activeNiche}</strong> niche, focus on "Commercial" and "Transactional" intent keywords to drive immediate leads for the 1.000 € projects. Use "Informational" keywords to build trust and pitch the 99 €/month subscription model as a low-barrier entry point.
          </p>
        </div>
      </div>
    </div>
  );
}
