import { Heart, MessageCircle, Share2, MoreHorizontal, Image, Send } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Laura Sánchez",
    initials: "LS",
    promo: "Promoción 2022 · DAM",
    time: "Hace 2 horas",
    content:
      "Acabo de terminar el curso de AWS Cloud Practitioner que encontré gracias al Club Alumni. ¡Muy recomendable para los que estéis en desarrollo! 🚀",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: "María González",
    initials: "MG",
    promo: "Promoción 2021 · DAW",
    time: "Hace 5 horas",
    content:
      "¿Alguien va al evento de networking del próximo jueves en la Cámara? Sería genial vernos allí y compartir experiencias del sector tech.",
    likes: 15,
    comments: 12,
  },
  {
    id: 3,
    author: "CÁMARA FP Alumni",
    initials: "CF",
    promo: "Administrador",
    time: "Hace 1 día",
    content:
      "📢 ¡Nuevas ofertas de empleo disponibles en la bolsa de talento! Empresas como Accenture, Indra y Everis están buscando perfiles de nuestros alumni. Consulta la sección de Empleo para más detalles.",
    likes: 56,
    comments: 22,
  },
];

const events = [
  { title: "Networking Afterwork", date: "20 Mar", tag: "Presencial" },
  { title: "Alumni Talk: IA en Empresa", date: "25 Mar", tag: "Online" },
  { title: "Congreso Sostenibilidad", date: "2 Abr", tag: "Presencial" },
];

const FeedPage = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main feed */}
      <div className="lg:col-span-2 space-y-4">
        {/* Compose */}
        <div className="card-base p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold shrink-0">
              CM
            </div>
            <input
              type="text"
              placeholder="¿Qué quieres compartir con la comunidad?"
              className="input-field"
            />
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <div className="flex gap-2">
              <button className="btn-outline h-8 px-3 text-xs gap-1.5">
                <Image size={14} /> Foto
              </button>
            </div>
            <button className="btn-primary h-8 px-4 text-xs">
              <Send size={14} /> Publicar
            </button>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div key={post.id} className="card-base p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold shrink-0">
                  {post.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{post.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {post.promo} · {post.time}
                  </div>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">{post.content}</p>
            <div className="flex items-center gap-6 pt-3 border-t border-border">
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <Heart size={16} /> {post.likes}
              </button>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle size={16} /> {post.comments}
              </button>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <Share2 size={16} /> Compartir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Upcoming events */}
        <div className="card-base p-5">
          <h3 className="font-semibold text-sm text-foreground mb-4">Próximos Eventos</h3>
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-light flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-teal-dark leading-none">{event.date.split(" ")[0]}</span>
                  <span className="text-[9px] text-teal-dark/70">{event.date.split(" ")[1]}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{event.title}</div>
                  <span className="badge-teal text-[10px]">{event.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <div className="card-base p-5">
          <h3 className="font-semibold text-sm text-foreground mb-4">Tu Actividad</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "12", label: "Conexiones" },
              { num: "3", label: "Eventos asistidos" },
              { num: "5", label: "Posts publicados" },
              { num: "2", label: "Ofertas guardadas" },
            ].map((s) => (
              <div key={s.label} className="text-center p-3 rounded-lg bg-secondary">
                <div className="text-lg font-bold text-primary tabular-nums">{s.num}</div>
                <div className="text-[10px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
