import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroller() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let animationFrameId: number;

    const initLenis = () => {
      if (lenis) return;
      
      // Initialize Lenis for a "heavy" and "professional" scroll feel
      lenis = new Lenis({
        duration: 1.5, // Longer duration for a heavier feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth Expo Out
        smoothWheel: true,
        wheelMultiplier: 0.8, // Slightly slower wheel scroll
      });

      function raf(time: number) {
        lenis?.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    const destroyLenis = () => {
      if (!lenis) return;
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenis = null;
    };

    // Only enable on desktop (>= 1024px)
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        destroyLenis();
      } else {
        initLenis();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Handle anchor links smoothly via Lenis on desktop
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        anchor && 
        anchor.hash && 
        anchor.hash.startsWith('#') && 
        anchor.origin === window.location.origin
      ) {
        if (lenis && window.innerWidth >= 1024) {
          e.preventDefault();
          lenis.scrollTo(anchor.hash, { offset: 0 });
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClick);
      destroyLenis();
    };
  }, []);

  return null;
}
