import { motion } from 'motion/react';

export function LogoCloud() {
  const baseLogos = [
    "https://www.svgrepo.com/show/508752/photoshop.svg",
    "https://www.svgrepo.com/show/508753/premiere.svg",
    "https://www.svgrepo.com/show/532271/figma.svg",
    "https://www.svgrepo.com/show/409983/webflow.svg",
    "https://www.svgrepo.com/show/521303/react-16.svg",
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/affinity-studio-icon.png",
    "https://www.svgrepo.com/show/331444/ionos.svg",
    "https://images.seeklogo.com/logo-png/66/1/higgsfield-logo-png_seeklogo-660244.png?v=1964531789390079920",
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/netlify-icon.png"
  ];

  // Duplicate a few times so one half is wider than most screens
  const logos = Array(4).fill(baseLogos).flat();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="logos" 
      className="py-16 border-y border-slate-100 bg-white overflow-hidden"
    >
      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="animate-marquee flex w-max">
          {/* First Half */}
          <div className="flex items-center">
            {logos.map((logo, i) => (
              <div key={`first-${i}`} className="select-none flex-shrink-0 w-40 flex justify-center">
                <img src={logo} alt="Logo" width="40" height="40" loading="lazy" className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          {/* Second Half (Identical) */}
          <div className="flex items-center">
            {logos.map((logo, i) => (
              <div key={`second-${i}`} className="select-none flex-shrink-0 w-40 flex justify-center">
                <img src={logo} alt="Logo" width="40" height="40" loading="lazy" className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
