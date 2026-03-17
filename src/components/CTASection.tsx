import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="unete" className="section-padding section-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-6"
        >
          <span className="label-mono">El Momento es Ahora</span>
          <h2 className="heading-section text-hero-foreground">
            Tu Comunidad Te Espera
          </h2>
          <p className="text-lg leading-relaxed text-hero-foreground/60">
            Regístrate en la plataforma, completa tu perfil y comienza a disfrutar de todos los
            beneficios que hemos diseñado pensando en ti.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="mailto:alumni@camarafp.es"
              className="h-12 px-8 inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:brightness-110 active:scale-95"
            >
              Únete al Club Alumni <ArrowRight size={18} />
            </a>
          </div>
          <p className="text-sm text-hero-foreground/40 pt-4">
            Contacto:{" "}
            <a href="mailto:alumni@camarafp.es" className="underline hover:text-primary">
              alumni@camarafp.es
            </a>{" "}
            · Plataforma:{" "}
            <a href="https://portal.alumni-camarafp.es" className="underline hover:text-primary">
              portal.alumni-camarafp.es
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
