import { motion, useTransform, MotionValue } from 'motion/react';

interface CircularGalleryProps {
  items: any[];
  radius: number;
  onItemClick: (item: any) => void;
  scrollYProgress: MotionValue<number>;
}

export function CircularGallery({ items, radius, onItemClick, scrollYProgress }: CircularGalleryProps) {
  // Rotate the entire gallery based on scroll progress
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div 
        className="relative flex items-center justify-center"
        style={{ rotate: rotation }}
      >
        {items.map((item, index) => {
          const angle = (index / items.length) * 360;
          const radian = (angle * Math.PI) / 180;
          const x = Math.sin(radian) * radius;
          const y = -Math.cos(radian) * radius;

          return (
            <motion.div
              key={item.id}
              className="absolute cursor-pointer group"
              style={{
                x,
                y,
                rotate: angle, // Rotate each item so it faces outward
              }}
              onClick={() => onItemClick(item)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-800/50 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-primary text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
