import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  Briefcase,
  Calendar,
  MessageSquare,
  Users,
  User,
  Bell,
  Search,
  Percent,
  Mic,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-camara-fp.png";

const navItems = [
  { to: "/", icon: Home, label: "Inicio" },
  { to: "/empleo", icon: Briefcase, label: "Bolsa de Empleo" },
  { to: "/eventos", icon: Calendar, label: "Eventos" },
  { to: "/foro", icon: MessageSquare, label: "Foro" },
  { to: "/directorio", icon: Users, label: "Directorio" },
  { to: "/alumni-talks", icon: Mic, label: "Alumni Talks" },
  { to: "/descuentos", icon: Percent, label: "Descuentos" },
  { to: "/perfil", icon: User, label: "Mi Perfil" },
];

const AppLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-sidebar fixed inset-y-0 left-0 z-40 sidebar-scroll overflow-y-auto">
        <div className="p-5 flex items-center gap-3 border-b border-sidebar-border">
          <img src={logo} alt="Cámara FP" className="h-9 w-auto" />
          <div>
            <div className="text-sm font-semibold text-sidebar-primary-foreground">Club Alumni</div>
            <div className="text-xs text-sidebar-foreground/60">CÁMARA FP</div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-foreground text-sm font-semibold">
              CM
            </div>
            <div>
              <div className="text-sm font-medium text-sidebar-primary-foreground">Carlos M.</div>
              <div className="text-xs text-sidebar-foreground/60">Promoción 2022</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-foreground/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transform transition-transform duration-200 sidebar-scroll overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex items-center justify-between border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Cámara FP" className="h-8 w-auto" />
            <span className="text-sm font-semibold text-sidebar-primary-foreground">Club Alumni</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-sidebar-foreground">
            <X size={20} />
          </button>
        </div>
        <nav className="p-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-14 bg-card border-b border-border flex items-center px-4 gap-4">
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar alumni, empleos, eventos..."
                className="input-field pl-9 h-9 text-sm"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold lg:hidden">
              CM
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
