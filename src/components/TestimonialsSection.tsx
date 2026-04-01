import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">Was meine Partner sagen</h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.article 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-slate-200 mb-8 transition-transform"
        >
          <div className="flex gap-1 mb-4 md:mb-6">
            {[1,2,3,4,5].map(i => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <Star className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
          <p className="text-sm md:text-xl font-medium leading-relaxed mb-6 md:mb-8 text-slate-500">
            "Die Zusammenarbeit mit Christian war ein echter Glücksgriff für mich. Ich brauchte einfach jemanden, der mir schnell und unkompliziert eine moderne Webseite baut, ohne dass ich mich um Technik oder Hosting kümmern muss. Christian hat sofort verstanden, worauf es ankommt. Das Ergebnis sieht super aus und ich bekomme regelmäßig Komplimente von meinen Kunden."
          </p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-base md:text-lg">Thomas R.</div>
              <div className="text-slate-500 text-xs md:text-sm">Inhaber, Handwerksbetrieb</div>
            </div>
          </div>
        </motion.article>

        {/* Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Michael B.",
              role: "Selbstständiger Berater",
              text: "Christian hat mir eine Webseite gebaut, die genau zu mir passt. Keine versteckten Kosten, direkter Kontakt über WhatsApp und schnelle Umsetzung. Genau das, was ich als Einzelunternehmer gesucht habe.",
            },
            {
              name: "Sarah K.",
              role: "Inhaberin",
              text: "Als kleines Unternehmen brauchte ich jemanden, der sich um alles kümmert. Christian war genau der Richtige. Er hat nicht nur das Design gemacht, sondern kümmert sich jetzt auch um die Wartung.",
            },
            {
              name: "Johannes M.",
              role: "Dienstleister",
              text: "Endlich ein Webdesigner, der hält, was er verspricht. Die Kommunikation war immer auf Augenhöhe und absolut lösungsorientiert. Ein zuverlässiger Partner, den ich gerne weiterempfehle.",
            }
          ].map((t, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-200 flex flex-col transition-transform"
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
              <p className="text-sm leading-relaxed mb-8 flex-1 text-slate-500">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

