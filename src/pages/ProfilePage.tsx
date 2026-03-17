import { MapPin, Briefcase, Calendar, Mail, Linkedin, Edit, GraduationCap } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Profile header */}
      <div className="card-base overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-navy to-teal-dark" />
        <div className="px-6 pb-6 -mt-10">
          <div className="flex items-end gap-4 mb-4">
            <div className="w-20 h-20 rounded-xl bg-card border-4 border-card flex items-center justify-center text-primary text-2xl font-bold shrink-0">
              CM
            </div>
            <div className="flex-1 pt-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Carlos Martínez</h1>
                  <p className="text-sm text-muted-foreground">SysAdmin Cloud · NTT Data</p>
                </div>
                <button className="btn-outline text-xs h-8 gap-1.5">
                  <Edit size={13} /> Editar Perfil
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin size={13} /> Barcelona</span>
            <span className="flex items-center gap-1"><Briefcase size={13} /> NTT Data (Everis)</span>
            <span className="flex items-center gap-1"><GraduationCap size={13} /> ASIR · Promoción 2020</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> Miembro desde 2020</span>
          </div>

          <div className="flex gap-2 mt-4">
            <span className="badge-teal">Cloud</span>
            <span className="badge-teal">AWS</span>
            <span className="badge-teal">Docker</span>
            <span className="badge-teal">Kubernetes</span>
            <span className="badge-navy">Ciberseguridad</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div className="md:col-span-2 space-y-6">
          <div className="card-base p-5">
            <h3 className="font-semibold text-foreground mb-3">Sobre mí</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Administrador de sistemas cloud con más de 5 años de experiencia en entornos AWS y Azure.
              Apasionado por la automatización de infraestructuras y la ciberseguridad. Alumni orgulloso
              de CÁMARA FP, donde descubrí mi vocación por la tecnología de infraestructuras.
            </p>
          </div>

          <div className="card-base p-5">
            <h3 className="font-semibold text-foreground mb-3">Experiencia</h3>
            <div className="space-y-4">
              {[
                { role: "Cloud Systems Administrator", company: "NTT Data", period: "2022 - Presente", desc: "Gestión de infraestructuras cloud AWS para clientes del sector bancario." },
                { role: "Junior SysAdmin", company: "Indra", period: "2020 - 2022", desc: "Mantenimiento de servidores Linux y Windows en entornos de producción." },
              ].map((exp) => (
                <div key={exp.role} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-foreground">{exp.role}</div>
                    <div className="text-xs text-muted-foreground">{exp.company} · {exp.period}</div>
                    <p className="text-xs text-muted-foreground mt-1">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar info */}
        <div className="space-y-4">
          <div className="card-base p-5">
            <h3 className="font-semibold text-sm text-foreground mb-3">Contacto</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} /> carlos.m@email.com
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="card-base p-5">
            <h3 className="font-semibold text-sm text-foreground mb-3">Actividad</h3>
            <div className="space-y-2">
              {[
                { label: "Posts publicados", num: "12" },
                { label: "Eventos asistidos", num: "8" },
                { label: "Conexiones", num: "47" },
                { label: "Alumni Talks", num: "1" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-semibold text-foreground tabular-nums">{s.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
