import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../routes';

export function LegalPage({
  title,
  description,
  path,
  content,
}: {
  title: string;
  description: string;
  path: string;
  content: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background font-sans text-body">
      <Helmet>
        <title>{`${title} | VAMELA`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}${path}`} />
      </Helmet>
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm px-1">&larr; Zurück zur Startseite</Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-heading">{title}</h1>
        <div className="prose prose-slate max-w-none text-body">
          {content}
        </div>
      </main>
    </div>
  );
}
