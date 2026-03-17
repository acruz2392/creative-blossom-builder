import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "El Club Alumni me ha permitido mantener viva la conexión con CÁMARA FP y acceder a oportunidades que han marcado un antes y un después en mi carrera.",
    name: "Carlos Martínez",
    promo: "Promoción 2020",
  },
  {
    quote:
      "Ser Embajador de Marca no solo me ha permitido ayudar a otros a descubrir CÁMARA FP, sino que gracias a los descuentos pude cursar un postgrado que ha impulsado mi especialización.",
    name: "Laura Sánchez",
    promo: "Promoción 2022",
  },
  {
    quote:
      "Los eventos de networking y las Alumni Talks me han conectado con profesionales increíbles. Hoy trabajo en una empresa que conocí en uno de estos eventos.",
    name: "María González",
    promo: "Promoción 2021",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="label-mono">Testimonios</span>
          <h2 className="heading-section text-foreground">
            Impacto Real en Nuestra Comunidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card card-elevated flex flex-col"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.promo}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
