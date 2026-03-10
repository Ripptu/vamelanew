import { motion } from 'motion/react';
export function TestimonialsSection() {
  const TESTIMONIAL_IMAGE = "https://cdn.prod.website-files.com/69a30d3de5292c55dfacc6d2/69ad0cc1420ea818c8df60a3_69875ccc2c5c028e7ff18ff0_DSC08708.jpg%202.avif";

  return (
    <section className="py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Was unsere Partner sagen</h2>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="flex gap-1 text-primary mb-6">
              {[1,2,3,4,5].map(i => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, color: "#EAB308" }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-slate-800">
              "Die Zusammenarbeit mit VAMELA war ein echter Wendepunkt für uns. Wir hatten lange das Problem, dass unsere Webseite nicht unsere tatsächliche Qualität widerspiegelte. Christian und sein Team haben nicht nur ein wunderschönes Design geliefert, sondern wirklich verstanden, wie wir unsere Kunden emotional abholen. Das Ergebnis ist nicht nur eine Webseite, sondern ein echtes Werkzeug für unser Wachstum."
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-lg">Thomas Rott</div>
                <div className="text-slate-500 text-sm">Geschäftsführer, Thomas Rott Facility Management</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-2xl overflow-hidden relative flex items-center justify-center">
              <img src={TESTIMONIAL_IMAGE} alt="Thomas Rott" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Grid Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Barnekow",
              role: "Inhaber",
              text: "VAMELA hat es geschafft, unsere Vision in ein digitales Erlebnis zu übersetzen, das genau unsere Zielgruppe anspricht. Die Kommunikation war immer auf Augenhöhe, menschlich und absolut lösungsorientiert. Man merkt, dass hier echte Leidenschaft für Design und Strategie dahintersteckt.",
            },
            {
              name: "Coremis",
              role: "Management",
              text: "Was ich an der Zusammenarbeit besonders schätze, ist die Kombination aus technischer Expertise und echtem Verständnis für unsere unternehmerischen Ziele. Wir haben uns zu jeder Zeit verstanden gefühlt, und das Endergebnis hat unsere Erwartungen bei weitem übertroffen.",
            },
            {
              name: "HanseTool",
              role: "Geschäftsführung",
              text: "Die Zusammenarbeit war unkompliziert, schnell und sehr professionell. VAMELA hat uns geholfen, unsere komplexe Produktwelt so zu strukturieren, dass unsere Kunden sich sofort zurechtfinden. Ein Partner, den man gerne weiterempfiehlt.",
            }
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex gap-1 mb-4 text-sm">
                {[1,2,3,4,5].map(j => (
                  <motion.span 
                    key={j} 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, color: "#EAB308" }}
                    transition={{ delay: j * 0.1, type: "spring" }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-8 flex-1 text-slate-700">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

