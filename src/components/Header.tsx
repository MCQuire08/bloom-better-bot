import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Catálogo General" },
  {
    label: "Ramos",
    items: [
      { to: "/categoria/ramos-grandes", label: "Ramos Grandes" },
      { to: "/categoria/ramos-pequenos", label: "Ramos pequeños" },
      { to: "/categoria/cajas-y-jarrones", label: "Cajas y Jarrones" },
      { to: "/categoria/boda", label: "Boda" },
    ]
  },
  {
    label: "Regalos",
    items: [
      { to: "/categoria/dulces", label: "Dulces" },
      { to: "/categoria/peluches", label: "Peluches" },
    ]
  },
  {
    label: "Perfumes",
    items: [
      { to: "/categoria/hombres", label: "Hombres" },
      { to: "/categoria/mujeres", label: "Mujeres" },
    ]
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            item.to ? (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <div key={item.label} className="relative group cursor-pointer">
                <span className="flex items-center gap-1 text-sm tracking-wide uppercase text-foreground/80 transition-colors group-hover:text-primary">
                  {item.label} <ChevronDown size={14} />
                </span>
                <div className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                  <div className="bg-background border border-border shadow-soft min-w-[200px] py-2 flex flex-col">
                    {item.items?.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        className={({ isActive }) =>
                          `px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-secondary hover:text-primary ${
                            isActive ? "text-primary bg-secondary/50" : "text-foreground/80"
                          }`
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/suscripcion"
            className="text-xs tracking-[0.2em] uppercase border border-primary text-primary px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Miembro Golden
          </Link>
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative p-2 text-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative p-2 text-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              item.to ? (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base tracking-wide uppercase py-2 ${isActive ? "text-primary" : "text-foreground/80"}`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <div key={item.label} className="flex flex-col gap-2 py-2">
                  <span className="text-base tracking-wide uppercase text-foreground/50">
                    {item.label}
                  </span>
                  <div className="flex flex-col gap-3 pl-4 border-l border-border">
                    {item.items?.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `text-sm tracking-wide uppercase ${isActive ? "text-primary" : "text-foreground/80"}`
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
