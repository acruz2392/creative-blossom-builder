import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Visión", href: "#vision" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Actividades", href: "#actividades" },
  { label: "Testimonios", href: "#testimonios" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-semibold text-lg tracking-tight">
          <span className="text-primary">CÁMARA FP</span>{" "}
          <span className={scrolled ? "text-foreground" : "text-hero-foreground"}>Alumni</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-hero-foreground/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#unete"
            className="h-9 px-5 inline-flex items-center rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:brightness-110 active:scale-95"
          >
            Únete Ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-hero-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#unete"
            className="block text-center h-9 px-5 leading-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            Únete Ahora
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
