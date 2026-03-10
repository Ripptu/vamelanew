export function LogoCloud() {
  const logos = Array.from({ length: 10 }, (_, i) => `Logo ${i + 1}`);

  return (
    <section id="logos" className="py-16 border-y border-slate-100 bg-white overflow-hidden">
      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="text-2xl font-bold text-slate-400 select-none">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
