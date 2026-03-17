import { motion } from "framer-motion";
import { Calendar, MessageSquare, Briefcase, Percent } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Calendario de Actividades",
    description:
      "Accede a eventos exclusivos, masterclasses con profesionales destacados y actividades de networking.",
  },
  {
    icon: MessageSquare,
    title: "Foro de Comunicación",
    description:
      "Mantén el contacto directo con el centro, comparte experiencias con otros alumni y participa en conversaciones.",
  },
  {
    icon: Briefcase,
    title: "Bolsa de Empleo y Talento",
    description:
      "Acceso prioritario a la bolsa de empleo de CÁMARA FP, conectando tu talento con empresas de alto rendimiento.",
  },
  {
    icon: Percent,
    title: "Descuentos Exclusivos",
    description:
      "Condiciones especiales en formación continua, servicios del centro y actividades exclusivas para miembros.",
  },
];

const PlatformSection = () => {
  return (
    <section id="plataforma" className="section-padding section-dark">
      <div className="section-container">
        <div className="space-y-4 max-w-2xl mb-16">
          <span className="label-mono">Plataforma Digital</span>
          <h2 className="heading-section text-hero-foreground">
            Tu Hub Digital de Oportunidades
          </h2>
          <p className="text-lg leading-relaxed text-hero-foreground/60">
            Una plataforma interactiva diseñada específicamente para mantener tu conexión con
            CÁMARA FP y acceder a beneficios exclusivos que impulsan tu carrera profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10 transition-all duration-150 hover:bg-hero-foreground/8 hover:border-hero-foreground/15"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-4">
                <feature.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-hero-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
