import { motion } from 'motion/react';

export function LogoCloud() {
  const baseLogos = [
    "https://i.postimg.cc/VLVz13zy/nur-logo.png",
    "https://i.postimg.cc/pTPCtyfc/Logo-neu.png",
    "https://s1.directupload.eu/images/260324/tf5v78j7.webp",
    "https://s1.directupload.eu/images/260224/kgemdfqa.png",
    "https://s1.directupload.eu/images/260324/3y7e3s67.webp"
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
      className="py-16 bg-transparent overflow-hidden"
    >
      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="animate-marquee flex w-max">
          {/* First Half */}
          <div className="flex items-center">
            {logos.map((logo, i) => (
              <div key={`first-${i}`} className="select-none flex-shrink-0 w-40 flex justify-center">
                <img src={logo} alt="Logo" loading="lazy" className="h-12 w-auto max-w-[120px] object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </div>
            ))}
          </div>
          {/* Second Half (Identical) */}
          <div className="flex items-center">
            {logos.map((logo, i) => (
              <div key={`second-${i}`} className="select-none flex-shrink-0 w-40 flex justify-center">
                <img src={logo} alt="Logo" loading="lazy" className="h-12 w-auto max-w-[120px] object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
