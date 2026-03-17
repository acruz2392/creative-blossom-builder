import { motion } from "framer-motion";
import { Mic, Users, Globe, GraduationCap } from "lucide-react";

const activities = [
  {
    icon: Mic,
    title: "Ponencias de Profesionales",
    description:
      "Sesiones inspiradoras con líderes de la industria que comparten sus experiencias, tendencias del sector y claves del éxito profesional.",
  },
  {
    icon: Users,
    title: "Networking y Team Building",
    description:
      "Escape rooms temáticos, juegos de estrategia y dinámicas de grupo que fortalecen habilidades blandas mientras conectas con otros alumni.",
  },
  {
    icon: Globe,
    title: "Congresos Especializados",
    description:
      "Acceso preferente a congresos en internacionalización, sostenibilidad, emprendimiento y tecnologías de la información.",
  },
  {
    icon: GraduationCap,
    title: "Alumni Talks",
    description:
      "Conviértete en mentor y referente para los alumnos actuales, compartiendo tu experiencia profesional y los retos superados.",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="actividades" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="label-mono">Actividades</span>
          <h2 className="heading-section text-foreground">
            Experiencias Que Transforman
          </h2>
          <p className="text-body-lg">
            Un programa diverso que combina desarrollo profesional, networking y experiencias únicas
            pensadas para aportar valor real a tu carrera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-8 rounded-xl bg-card card-elevated flex gap-5"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-teal-light flex items-center justify-center text-primary">
                <activity.icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
