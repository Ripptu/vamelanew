import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Check, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

const AUDIENCES = [
  "Therapeuten & Praxen",
  "Baufirmen & Handwerk",
  "Beauty-Studios",
  "B2B-Unternehmen",
  "Allgemeine KMU"
];

const TOPICS = [
  "Warum eine veraltete Website Kunden kostet",
  "SEO-Optimierung für lokale Sichtbarkeit",
  "Performance-Boost: Warum Ladezeit Umsatz bedeutet",
  "PHP-Datenbank-Fixes: Sicherheit & Stabilität",
  "Website Relaunch: Der Weg zum digitalen Aushängeschild"
];

export default function ContentGenerator() {
  const [audience, setAudience] = useState(AUDIENCES[0]);
  const [topic, setTopic] = useState(TOPICS[0]);
  const [customTopic, setCustomTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError('');
    setGeneratedContent('');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetAudience: audience,
          topic: customTopic || topic,
          tone: 'professionell, lösungsorientiert, strategisch und kreativ'
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate content');
      }

      setGeneratedContent(data.content);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-6rem)]">
      {/* Configuration Panel */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold font-display text-white mb-2">Content Generator</h2>
          <p className="text-gray-400 text-sm">Create SEO-optimized articles tailored to your target audience.</p>
        </div>

        <div className="space-y-5 bg-[#121212] p-6 rounded-2xl border border-[#262626]">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Target Audience</label>
            <select 
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
            >
              {AUDIENCES.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Core Topic</label>
            <select 
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                setCustomTopic('');
              }}
              className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
            >
              {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
              <option value="custom">Custom Topic...</option>
            </select>
          </div>

          {topic === 'custom' && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Custom Topic</label>
              <input 
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="e.g. The importance of mobile-first design"
                className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={isGenerating || (topic === 'custom' && !customTopic)}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-all"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Article
              </>
            )}
          </button>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Preview Panel */}
      <div className="w-full lg:w-2/3 flex flex-col bg-[#121212] rounded-2xl border border-[#262626] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[#262626] bg-[#0a0a0a]/50">
          <h3 className="font-medium text-gray-300">Generated Content</h3>
          {generatedContent && (
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-[#262626] hover:bg-[#333] text-gray-300 rounded-md transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Markdown'}
            </button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          {generatedContent ? (
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{generatedContent}</ReactMarkdown>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#262626] flex items-center justify-center">
                <PenTool className="w-8 h-8 text-gray-400" />
              </div>
              <p>Select your parameters and generate an SEO-optimized article.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
