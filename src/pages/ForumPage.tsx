import { MessageCircle, ThumbsUp, Pin, Clock } from "lucide-react";

const threads = [
  {
    id: 1,
    title: "¿Alguien ha trabajado con microservicios en Spring Boot?",
    author: "Pablo Ruiz",
    initials: "PR",
    category: "Tecnología",
    replies: 15,
    likes: 8,
    time: "Hace 3 horas",
    pinned: false,
    preview: "Estoy migrando una aplicación monolítica y me gustaría saber vuestra experiencia con la arquitectura de microservicios...",
  },
  {
    id: 2,
    title: "📢 Encuesta: ¿Qué formato preferís para los Alumni Talks?",
    author: "Club Alumni",
    initials: "CA",
    category: "Comunidad",
    replies: 32,
    likes: 21,
    time: "Hace 1 día",
    pinned: true,
    preview: "Queremos adaptar los Alumni Talks a vuestras preferencias. ¿Preferís formato presencial, online o híbrido?",
  },
  {
    id: 3,
    title: "Consejos para preparar la certificación Azure AZ-900",
    author: "Ana Torres",
    initials: "AT",
    category: "Formación",
    replies: 9,
    likes: 14,
    time: "Hace 2 días",
    pinned: false,
    preview: "Hace poco aprobé la certificación y quería compartir los recursos que más me ayudaron en la preparación...",
  },
  {
    id: 4,
    title: "Experiencia en el programa de movilidad internacional",
    author: "Diego Fernández",
    initials: "DF",
    category: "Internacional",
    replies: 7,
    likes: 19,
    time: "Hace 3 días",
    pinned: false,
    preview: "Acabo de volver de mi bachelor en Alemania y quería contaros cómo fue la experiencia y los pasos que seguí...",
  },
];

const categories = ["Todos", "Tecnología", "Formación", "Comunidad", "Internacional", "Empleo"];

const ForumPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Foro de Comunidad</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Comparte experiencias, pregunta y conecta con otros alumni
          </p>
        </div>
        <button className="btn-primary text-sm">Nuevo Tema</button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              c === "Todos"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {threads.map((thread) => (
          <div key={thread.id} className="card-interactive p-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold shrink-0">
                {thread.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  {thread.pinned && <Pin size={12} className="text-primary shrink-0" />}
                  <h3 className="font-semibold text-sm text-foreground truncate">{thread.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{thread.preview}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{thread.author}</span>
                  <span className="badge-teal text-[10px]">{thread.category}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={11} /> {thread.replies}</span>
                  <span className="flex items-center gap-1"><ThumbsUp size={11} /> {thread.likes}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {thread.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
