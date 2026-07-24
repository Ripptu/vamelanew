import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
  useEffect(() => {
    // Disable smooth wheel on mobile to keep native performance
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    function raf(time: number) {
      // Offload React render cycles triggered by scroll to concurrent mode
      import('react').then(({ startTransition }) => {
        startTransition(() => {
          lenis.raf(time);
        });
      });
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
