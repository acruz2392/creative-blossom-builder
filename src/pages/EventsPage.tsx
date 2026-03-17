import { MapPin, Clock, Users as UsersIcon, CalendarDays } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Networking Afterwork — Primavera 2026",
    date: "20 Mar 2026",
    time: "18:30 - 21:00",
    location: "Sede CÁMARA FP, Madrid",
    type: "Presencial",
    attendees: 45,
    maxAttendees: 80,
    description: "Evento informal para conectar con compañeros de promoción y alumnos actuales en un ambiente relajado y profesional.",
  },
  {
    id: 2,
    title: "Alumni Talk: IA Aplicada a la Empresa",
    date: "25 Mar 2026",
    time: "17:00 - 18:30",
    location: "Online — Zoom",
    type: "Online",
    attendees: 78,
    maxAttendees: 200,
    description: "Ponencia con un experto en inteligencia artificial sobre casos reales de implementación en empresas del sector.",
  },
  {
    id: 3,
    title: "Congreso de Sostenibilidad Empresarial",
    date: "2 Abr 2026",
    time: "09:00 - 17:00",
    location: "Cámara de Comercio, Valencia",
    type: "Presencial",
    attendees: 120,
    maxAttendees: 250,
    description: "Acceso preferente al congreso sobre economía circular, certificaciones verdes y proyectos de impacto social.",
  },
  {
    id: 4,
    title: "Visita a Google España",
    date: "15 Abr 2026",
    time: "10:00 - 13:00",
    location: "Google Campus, Madrid",
    type: "Presencial",
    attendees: 20,
    maxAttendees: 25,
    description: "Visita exclusiva a las oficinas de Google en Madrid. Conoce de primera mano cómo operan y descubre oportunidades laborales.",
  },
];

const EventsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Calendario de Eventos</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Actividades exclusivas para miembros del Club Alumni
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["Todos", "Presencial", "Online", "Congresos", "Visitas"].map((f) => (
          <button
            key={f}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              f === "Todos"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <div key={event.id} className="card-interactive p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="badge-teal">{event.type}</span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <UsersIcon size={12} />
                {event.attendees}/{event.maxAttendees}
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{event.description}</p>
            <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <CalendarDays size={13} /> {event.date} · {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} /> {event.location}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn-primary flex-1 text-xs h-9">Inscribirme</button>
              <button className="btn-outline text-xs h-9 px-3">
                <Clock size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
