import { MapPin, Clock, Building2, ExternalLink, Bookmark } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    company: "Accenture",
    location: "Madrid · Híbrido",
    type: "Jornada Completa",
    posted: "Hace 2 días",
    tags: ["React", "Node.js", "TypeScript"],
    description: "Buscamos desarrolladores con experiencia en tecnologías web modernas para unirse a nuestro equipo de transformación digital.",
  },
  {
    id: 2,
    title: "Analista de Ciberseguridad",
    company: "Indra",
    location: "Valencia · Presencial",
    type: "Jornada Completa",
    posted: "Hace 3 días",
    tags: ["Seguridad", "SIEM", "Networking"],
    description: "Oportunidad para profesionales con certificaciones en seguridad informática y ganas de proteger infraestructuras críticas.",
  },
  {
    id: 3,
    title: "Administrador de Sistemas Cloud",
    company: "Everis (NTT Data)",
    location: "Barcelona · Remoto",
    type: "Jornada Completa",
    posted: "Hace 5 días",
    tags: ["AWS", "Docker", "Kubernetes"],
    description: "Gestión y mantenimiento de infraestructuras cloud en entornos de alta disponibilidad para clientes internacionales.",
  },
  {
    id: 4,
    title: "Desarrollador Mobile",
    company: "Telefónica Tech",
    location: "Madrid · Híbrido",
    type: "Prácticas",
    posted: "Hace 1 semana",
    tags: ["Flutter", "iOS", "Android"],
    description: "Programa de prácticas remuneradas para alumnos recién titulados en desarrollo de aplicaciones multiplataforma.",
  },
];

const JobsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Bolsa de Empleo</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Ofertas exclusivas para alumni de CÁMARA FP
          </p>
        </div>
        <button className="btn-primary text-sm">Publicar Oferta</button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["Todas", "Jornada Completa", "Prácticas", "Remoto", "Híbrido"].map((f) => (
          <button
            key={f}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              f === "Todas"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Jobs list */}
      <div className="space-y-3">
        {jobs.map((job) => (
          <div key={job.id} className="card-interactive p-5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <span className="badge-teal">{job.type}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Building2 size={12} /> {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {job.posted}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="badge-navy">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 ml-4 shrink-0">
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                  <Bookmark size={18} />
                </button>
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
