import { motion } from "framer-motion";
import { Heart, Award, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Sentimiento de Pertenencia",
    description:
      "Construimos una comunidad sólida donde los contactos se convierten en oportunidades reales de crecimiento personal y profesional.",
  },
  {
    icon: Award,
    title: "Posicionamiento de Excelencia",
    description:
      "Demostramos que la formación de alto rendimiento va más allá del currículo oficial, apostando por tu desarrollo integral.",
  },
  {
    icon: Lightbulb,
    title: "Oportunidades Continuas",
    description:
      "Creamos espacios colaborativos donde alumnos y empresas comparten necesidades, experiencias y evolución profesional.",
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="label-mono">Nuestra Visión</span>
          <h2 className="heading-section text-foreground">
            Más Que un Centro: Una Comunidad de Alto Rendimiento
          </h2>
          <p className="text-body-lg">
            CÁMARA FP no es solo un lugar donde estudias; es el ecosistema donde tu talento florece
            y se transforma. Nuestro Club Alumni representa el compromiso continuo con tu éxito
            profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card card-elevated"
            >
              <div className="w-11 h-11 bg-teal-light rounded-lg mb-5 flex items-center justify-center text-primary">
                <pillar.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
