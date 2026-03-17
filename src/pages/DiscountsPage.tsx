import { Tag, ExternalLink, GraduationCap, Plane, BookOpen } from "lucide-react";

const discounts = [
  {
    id: 1,
    title: "20% en Formación de Postgrado",
    provider: "CÁMARA FP",
    icon: GraduationCap,
    category: "Formación",
    description: "Descuento exclusivo en todos los programas de postgrado y especialización del centro.",
    code: "ALUMNI2026",
  },
  {
    id: 2,
    title: "15% en Programa de Movilidad Internacional",
    provider: "Study Abroad Agency",
    icon: Plane,
    category: "Internacional",
    description: "Condiciones especiales para cursar el bachelor en Europa con nuestra agencia de movilidad asociada.",
    code: "CAMARAFP-INT",
  },
  {
    id: 3,
    title: "Formación Gratuita Prioritaria",
    provider: "CÁMARA FP",
    icon: BookOpen,
    category: "Formación",
    description: "Acceso preferente a todas las actividades formativas gratuitas organizadas por el área de formación.",
    code: "ACCESO DIRECTO",
  },
  {
    id: 4,
    title: "10% en Certificaciones Oficiales",
    provider: "Pearson VUE",
    icon: Tag,
    category: "Certificaciones",
    description: "Descuento en exámenes de certificación oficial de Microsoft, AWS, Cisco y CompTIA.",
    code: "ALUMNI-CERT",
  },
];

const DiscountsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Descuentos Exclusivos</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Beneficios especiales por ser miembro del Club Alumni
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {discounts.map((d) => (
          <div key={d.id} className="card-interactive p-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-teal-light flex items-center justify-center text-teal-dark shrink-0">
                <d.icon size={20} />
              </div>
              <div className="flex-1">
                <span className="badge-teal text-[10px] mb-2 inline-block">{d.category}</span>
                <h3 className="font-semibold text-foreground mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{d.description}</p>
                <div className="flex items-center justify-between">
                  <code className="text-xs font-mono bg-secondary px-2.5 py-1 rounded text-foreground">
                    {d.code}
                  </code>
                  <span className="text-xs text-muted-foreground">{d.provider}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ambassador program */}
      <div className="card-base p-6 mt-8 bg-navy text-primary-foreground">
        <h3 className="text-lg font-semibold mb-2">🎯 Programa Embajadores de Marca</h3>
        <p className="text-sm opacity-80 mb-4">
          Conviértete en prescriptor oficial de CÁMARA FP. Recomienda, y cuando se matriculen
          mencionando tu nombre, acumula descuentos progresivos en formación de postgrado.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { step: "Recomienda", desc: "Comparte tu experiencia" },
            { step: "Inscripción", desc: "Se activa tu beneficio" },
            { step: "Recompensa", desc: "Descuentos progresivos" },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="text-sm font-semibold">{s.step}</div>
              <div className="text-xs opacity-60">{s.desc}</div>
            </div>
          ))}
        </div>
        <button className="btn-primary text-sm bg-teal-dark">
          <ExternalLink size={14} /> Quiero ser Embajador
        </button>
      </div>
    </div>
  );
};

export default DiscountsPage;
