import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-networking.jpg";

const HeroSection = () => {
  return (
    <section className="section-dark relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Evento de networking profesional"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/90 via-hero/80 to-hero/60" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <span className="label-mono text-teal">Club Alumni</span>
          <h1 className="heading-display text-hero-foreground">
            Conectando Talento, Creando Futuro
          </h1>
          <p className="text-lg leading-relaxed text-hero-foreground/70 max-w-lg">
            Una comunidad exclusiva diseñada para mantener vivo el vínculo con tu centro de
            formación y potenciar tu desarrollo profesional más allá del aula.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#unete"
              className="h-12 px-8 inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:brightness-110 active:scale-95"
            >
              Únete al Club <ArrowRight size={18} />
            </a>
            <a
              href="#plataforma"
              className="h-12 px-8 inline-flex items-center rounded-lg border border-hero-foreground/20 text-hero-foreground font-medium transition-all hover:bg-hero-foreground/10"
            >
              Descubre la Plataforma
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:grid grid-cols-2 gap-4"
        >
          {[
            { number: "500+", label: "Alumni activos" },
            { number: "50+", label: "Empresas colaboradoras" },
            { number: "120+", label: "Eventos anuales" },
            { number: "95%", label: "Tasa de empleabilidad" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="p-6 rounded-xl bg-hero-foreground/5 backdrop-blur-sm border border-hero-foreground/10"
            >
              <div className="text-3xl font-bold text-primary tabular-nums">{stat.number}</div>
              <div className="text-sm text-hero-foreground/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
