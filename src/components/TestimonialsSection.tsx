import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-slate-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Was unsere Partner sagen</h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm mb-8 transition-shadow hover:shadow-xl"
        >
          <div className="flex gap-1 mb-6">
            {[1,2,3,4,5].map(i => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
          <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-slate-800">
            "Die Zusammenarbeit mit VAMELA war ein echter Wendepunkt für uns. Wir hatten lange das Problem, dass unsere Webseite nicht unsere tatsächliche Qualität widerspiegelte. Christian und sein Team haben nicht nur ein wunderschönes Design geliefert, sondern wirklich verstanden, wie wir unsere Kunden emotional abholen. Das Ergebnis ist nicht nur eine Webseite, sondern ein echtes Werkzeug für unser Wachstum."
          </p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-lg">Thomas Rott</div>
              <div className="text-slate-600 text-sm">Geschäftsführer, Thomas Rott Facility Management</div>
            </div>
          </div>
        </motion.div>

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
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col transition-shadow hover:shadow-xl"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(j => (
                  <motion.div 
                    key={j} 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-8 flex-1 text-slate-700">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-600 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

