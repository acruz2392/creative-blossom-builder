import { Search, MapPin, Linkedin } from "lucide-react";

const members = [
  { name: "Laura Sánchez", initials: "LS", promo: "2022", area: "DAM", role: "Frontend Developer", company: "Accenture", location: "Madrid" },
  { name: "María González", initials: "MG", promo: "2021", area: "DAW", role: "Full Stack Developer", company: "Indra", location: "Valencia" },
  { name: "Carlos Martínez", initials: "CM", promo: "2020", area: "ASIR", role: "SysAdmin Cloud", company: "NTT Data", location: "Barcelona" },
  { name: "Ana Torres", initials: "AT", promo: "2022", area: "DAM", role: "Mobile Developer", company: "Telefónica", location: "Madrid" },
  { name: "Pablo Ruiz", initials: "PR", promo: "2021", area: "DAW", role: "Backend Developer", company: "Capgemini", location: "Bilbao" },
  { name: "Diego Fernández", initials: "DF", promo: "2020", area: "ASIR", role: "DevOps Engineer", company: "AWS", location: "Remoto" },
  { name: "Elena Vega", initials: "EV", promo: "2023", area: "DAM", role: "Junior Developer", company: "Deloitte", location: "Sevilla" },
  { name: "Javier López", initials: "JL", promo: "2019", area: "DAW", role: "Tech Lead", company: "Minsait", location: "Madrid" },
];

const DirectoryPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Directorio Alumni</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Conecta con alumni de todas las promociones
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar por nombre, empresa o habilidad..."
            className="input-field pl-9"
          />
        </div>
        <select className="input-field w-auto">
          <option>Todas las promociones</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
        <select className="input-field w-auto">
          <option>Todos los ciclos</option>
          <option>DAM</option>
          <option>DAW</option>
          <option>ASIR</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.name} className="card-interactive p-5 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-semibold mx-auto mb-3">
              {m.initials}
            </div>
            <h3 className="font-semibold text-foreground">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role}</p>
            <p className="text-xs text-muted-foreground">{m.company}</p>
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-1">
              <MapPin size={11} /> {m.location}
            </div>
            <div className="flex gap-1.5 justify-center mt-3">
              <span className="badge-teal">{m.area}</span>
              <span className="badge-navy">{m.promo}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="btn-primary flex-1 text-xs h-8">Conectar</button>
              <button className="btn-outline h-8 px-2">
                <Linkedin size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectoryPage;
