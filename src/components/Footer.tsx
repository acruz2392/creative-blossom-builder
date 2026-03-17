const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span className="font-semibold text-primary">CÁMARA FP</span>{" "}
          <span className="text-foreground">Alumni</span> · © {new Date().getFullYear()}
        </div>
        <div className="flex gap-6">
          <a href="mailto:alumni@camarafp.es" className="hover:text-primary transition-colors">
            alumni@camarafp.es
          </a>
          <a href="https://portal.alumni-camarafp.es" className="hover:text-primary transition-colors">
            Plataforma Alumni
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
