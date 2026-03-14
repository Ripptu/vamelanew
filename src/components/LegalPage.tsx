import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function LegalPage({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <a href="/" className="text-primary hover:underline mb-8 inline-block focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1">&larr; Zurück zur Startseite</a>
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-slate max-w-none">
          {content}
        </div>
      </main>
      <Footer />
    </div>
  );
}
