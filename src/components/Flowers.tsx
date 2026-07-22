import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

const Plant1 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 48V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 32C9 32 5 27 5 20C9 20 16 25 16 32Z" fill="currentColor" />
    <path d="M16 26C23 26 27 21 27 14C23 14 16 19 16 26Z" fill="currentColor" />
    <circle cx="16" cy="12" r="5.5" fill="currentColor" />
    <circle cx="11.5" cy="7.5" r="4.5" fill="currentColor" />
    <circle cx="20.5" cy="7.5" r="4.5" fill="currentColor" />
    <circle cx="11.5" cy="16.5" r="4.5" fill="currentColor" />
    <circle cx="20.5" cy="16.5" r="4.5" fill="currentColor" />
    <circle cx="16" cy="12" r="2" fill="var(--color-bg-white, #fff)" />
  </svg>
);

const Plant2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 36V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 25C7 25 3 21 3 16C7 16 12 21 12 25Z" fill="currentColor" />
    <path d="M12 21C17 21 21 17 21 12C17 12 12 17 12 21Z" fill="currentColor" />
    <path d="M12 2C8 2 5 5 5 9C5 13 12 14 12 14C12 14 19 13 19 9C19 5 16 2 12 2Z" fill="currentColor" />
  </svg>
);

const Plant3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 36C13 36 8 30 8 23C14 23 20 29 20 36Z" fill="currentColor" />
    <path d="M20 42C27 42 32 36 32 29C26 29 20 35 20 42Z" fill="currentColor" />
    <path d="M20 22V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="20" cy="8" r="4.5" fill="currentColor" />
    <circle cx="14" cy="11" r="3.5" fill="currentColor" />
    <circle cx="26" cy="11" r="3.5" fill="currentColor" />
    <circle cx="19" cy="15" r="3.5" fill="currentColor" />
    <circle cx="19" cy="4" r="3.5" fill="currentColor" />
  </svg>
);

function AnimatedFlower({
  mouseX,
  containerRef,
  children
}: {
  mouseX: any;
  containerRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const flowerX = useMotionValue(0);

  useEffect(() => {
    const updatePosition = () => {
      if (itemRef.current && containerRef.current) {
        const flowerRect = itemRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const center = flowerRect.left - containerRect.left + flowerRect.width / 2;
        flowerX.set(center);
      }
    };
    
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  const rotation = useTransform(mouseX, (val: number) => {
    if (val === -1000) return 0;
    const dist = val - flowerX.get();
    
    // max bend distance
    const range = 100;
    // max bend angle
    const maxAngle = 35;

    if (dist > -range && dist < 0) {
      return ((dist + range) / range) * maxAngle;
    }
    if (dist > 0 && dist < range) {
      return (1 - dist / range) * -maxAngle;
    }
    return 0;
  });

  const smoothRotation = useSpring(rotation, { stiffness: 150, damping: 15, mass: 0.5 });

  return (
    <motion.div
      ref={itemRef}
      style={{
        rotate: smoothRotation,
        transformOrigin: "bottom center",
      }}
      className="inline-flex cursor-pointer relative z-10"
    >
      {children}
    </motion.div>
  );
}

export function FlowersContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
  };

  const plants = [
    { id: 1, type: Plant1, className: "text-primary h-8 md:h-12 w-auto", y: 4 },
    { id: 2, type: Plant2, className: "text-primary h-6 md:h-9 w-auto", y: 2 },
    { id: 3, type: Plant3, className: "text-primary h-10 md:h-14 w-auto", y: 0 },
    { id: 4, type: Plant1, className: "text-primary h-7 md:h-10 w-auto scale-x-[-1]", y: 6 },
    { id: 5, type: Plant2, className: "text-primary h-5 md:h-8 w-auto", y: 1 },
    { id: 6, type: Plant3, className: "text-primary h-8 md:h-12 w-auto scale-x-[-1]", y: 3 },
    { id: 7, type: Plant1, className: "text-primary h-8 md:h-12 w-auto", y: 5 },
  ];

  return (
    <div 
      ref={containerRef}
      onPointerMove={(e) => { if (e.pointerType === "mouse") handleMouseMove(e); }}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-end justify-center gap-1 sm:gap-2 md:gap-4 px-10 pt-10 pb-0 overflow-visible h-20 md:h-24"
    >
      {plants.map((plant) => (
        <AnimatedFlower key={plant.id} mouseX={mouseX} containerRef={containerRef}>
          <div>
            <plant.type className={plant.className} />
          </div>
        </AnimatedFlower>
      ))}
    </div>
  );
}
