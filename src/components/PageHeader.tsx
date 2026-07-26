import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

/**
 * Page-level H1 block for the sub-pages. These routes previously rendered no
 * h1 at all, which left them without a primary heading for both search engines
 * and screen readers.
 */
export function PageHeader({
  badge,
  title,
  titleAccent,
  lead,
}: {
  badge?: string;
  title: string;
  titleAccent?: string;
  lead?: string;
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-4 md:pt-12 md:pb-8">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          {title}
          {titleAccent && (
            <>
              {' '}
              <span className="font-serif italic text-primary font-normal">{titleAccent}</span>
            </>
          )}
        </h1>
        {lead && (
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">{lead}</p>
        )}
      </motion.header>
    </section>
  );
}
