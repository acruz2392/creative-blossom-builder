import { Mic, Users, ArrowRight, Clock } from "lucide-react";

const talks = [
  {
    id: 1,
    title: "De Junior a Tech Lead en 4 Años",
    speaker: "Javier López",
    promo: "Promoción 2019 · DAW",
    date: "28 Mar 2026",
    time: "17:00",
    format: "Presencial + Online",
    attendees: 35,
    description: "Javier compartirá su trayectoria desde su primer empleo como junior hasta liderar un equipo de 12 personas en Minsait.",
  },
  {
    id: 2,
    title: "Emprendimiento Tech: Mi Startup desde Cero",
    speaker: "Elena Vega",
    promo: "Promoción 2023 · DAM",
    date: "10 Abr 2026",
    time: "18:00",
    format: "Online",
    attendees: 52,
    description: "Cómo lancé mi primera app al mercado en 6 meses y lo que aprendí sobre producto, financiación y equipo.",
  },
  {
    id: 3,
    title: "Ciberseguridad en Infraestructuras Críticas",
    speaker: "Carlos Martínez",
    promo: "Promoción 2020 · ASIR",
    date: "22 Abr 2026",
    time: "17:30",
    format: "Presencial",
    attendees: 28,
    description: "Un vistazo al día a día de un profesional de ciberseguridad protegiendo sistemas de empresas del sector energético.",
  },
];

const AlumniTalksPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Alumni Talks</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Tu voz inspira. Comparte tu experiencia o aprende de otros alumni.
          </p>
        </div>
        <button className="btn-primary text-sm">
          <Mic size={16} /> Quiero ser Ponente
        </button>
      </div>

      {/* How it works */}
      <div className="card-base p-6 mb-6">
        <h3 className="font-semibold text-foreground mb-4">¿Cómo funciona?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Inscripción", desc: "Regístrate indicando disponibilidad y temática" },
            { step: "2", title: "Preparación", desc: "Nuestro equipo te ayuda a estructurar la charla" },
            { step: "3", title: "Sesión", desc: "Comparte tu historia en formato presencial u online" },
            { step: "4", title: "Mentoring", desc: "Mantén contacto con alumnos de tu sector" },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-2">
                {s.step}
              </div>
              <div className="text-sm font-semibold text-foreground">{s.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming talks */}
      <div className="space-y-4">
        {talks.map((talk) => (
          <div key={talk.id} className="card-interactive p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mic size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{talk.title}</h3>
                <div className="text-sm text-muted-foreground mb-2">{talk.description}</div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{talk.speaker}</span>
                  <span>{talk.promo}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {talk.date} · {talk.time}</span>
                  <span className="badge-teal">{talk.format}</span>
                  <span className="flex items-center gap-1"><Users size={11} /> {talk.attendees} inscritos</span>
                </div>
              </div>
              <button className="btn-primary text-xs h-9 shrink-0">
                Inscribirme <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniTalksPage;
