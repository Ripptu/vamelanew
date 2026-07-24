import { useEffect } from 'react';

export default function PrefetchManager() {
  useEffect(() => {
    const prefetchCache = new Set<string>();

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target?.href) return;
      
      const href = target.href;
      const isInternal = href.startsWith(window.location.origin) || href.startsWith('/');
      
      if (isInternal && !prefetchCache.has(href)) {
        prefetchCache.add(href);
        
        // requestIdleCallback prevents main thread blocking during scroll/interaction
        const schedulePrefetch = window.requestIdleCallback || setTimeout;
        schedulePrefetch(() => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = href;
          link.as = 'document';
          document.head.appendChild(link);
        });
      }
    };

    // Only run hover prefetching on desktop/devices with a precise pointer
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return null;
}
