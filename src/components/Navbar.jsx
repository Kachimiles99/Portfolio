import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const YOUR_NAME = "Dikachi Agoh";
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToId("home")}
              className="group inline-flex items-center gap-2"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 grid place-items-center shadow-lg shadow-emerald-500/20">
                <span className="font-black">DA</span>
              </div>
              <span className="sr-only md:not-sr-only md:font-semibold md:text-zinc-200">
                {YOUR_NAME}
              </span>
            </button>

            {/* Desktop link */}
            <nav className="hidden md:flex items-center gap-1 text-sm ">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "skills", label: "Skills" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className="px-3 py-2 rounded-xl hover:bg-white/5 transition cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Hamburger Icon for mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur">
            <nav className="flex flex-col px-4 py-3 space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "skills", label: "Skills" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToId(item.id);
                    setMenuOpen(false);
                  }}
                  className="text-left px-3 py-2 rounded-xl hover:bg-white/5 transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
